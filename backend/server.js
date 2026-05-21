import express from "express";
import mysql from "mysql2/promise";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

console.log("--- ENV VARS DEBUG ---");
console.log("DB_HOST:", process.env.DB_HOST);
console.log("DB_USER:", process.env.DB_USER);
console.log("DB_NAME:", process.env.DB_NAME);
console.log("EMAIL_USER:", process.env.EMAIL_USER);
console.log("----------------------");

const app = express();
app.use(cors());
app.use(express.json());

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.get("/", (req, res) => {
  res.send("Backend Running");
});

app.post("/api/leads", async (req, res) => {
  const { name, phone } = req.body;

  if (!name || !phone) {
    return res.status(400).json({ error: "Name and Phone Number are required." });
  }

  try {
    const [result] = await pool.execute(
      "INSERT INTO leads (name, phone) VALUES (?, ?)",
      [name, phone]
    );

    await transporter.sendMail({
      from: `"Holidays Navigator Website" <${process.env.EMAIL_USER}>`,
      to: "cantonfairleads@gmail.com",
      subject: "Canfair Website New Lead",
      text: `Hello Holidays Navigator Team ,

You have received a new lead from the Canton Fair website.

Lead Details:

 leads  Name: ${name}
Phone Number: ${phone}

Please contact the lead as soon as possible.

Regards,
Holidays Navigator Website Lead System`,
    });

    res.status(200).json({
      message: "Lead submitted successfully",
      id: result.insertId,
    });
  } catch (error) {
    console.error("Full Backend Error:", error);
    res.status(500).json({ error: "Internal server error while processing lead.", details: error.message });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});