import express from "express";
import mysql from "mysql2/promise";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// CORS
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:3000",
      process.env.FRONTEND_URL,
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);

app.use(express.json());

// MySQL Pool
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Test Route
app.get("/", (req, res) => {
  res.send("Backend Running ✅");
});

// Submit Lead
app.post("/api/leads", async (req, res) => {
  const { name, phone } = req.body;

  if (!name || !phone) {
    return res.status(400).json({
      error: "Name and Phone Number are required.",
    });
  }

  try {
    // Save to DB
    const [result] = await pool.execute(
      "INSERT INTO leads (name, phone) VALUES (?, ?)",
      [name.trim(), phone.trim()]
    );

    // Send response immediately
    res.status(200).json({
      success: true,
      message: "Lead submitted successfully",
      id: result.insertId,
    });

    // Send Email in background
    transporter
      .sendMail({
        from: `"Holidays Navigator Website" <${process.env.EMAIL_USER}>`,
        to: "cantonfairleads@gmail.com",
        subject: "Canton Fair Website New Lead",
        text: `
Hello Holidays Navigator Team,

You have received a new lead.

Lead Details:

Name: ${name}
Phone: ${phone}

Please contact this lead.

Regards,
Holidays Navigator Website
        `,
      })
      .then(() => {
        console.log("Email sent successfully");
      })
      .catch((err) => {
        console.error("Email Error:", err);
      });

  } catch (error) {
    console.error("Backend Error:", error);

    res.status(500).json({
      success: false,
      error: "Internal server error",
      details: error.message,
    });
  }
});

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});