import fs from 'fs';
import path from 'path';

const pagesDir = path.join(process.cwd(), 'src', 'pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.jsx') && f !== 'HomePage.jsx');

for (const file of files) {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace Hero Section
  content = content.replace(
    /<section className="hero-section[^>]*style={{[^}]*}}>/g,
    '<section className="page-hero">\n        <div className="page-hero-content">'
  );
  
  // Close the hero section div
  // The structure is usually <section> <h1>...</h1> <p>...</p> </section>
  // We need to insert </div> before the first </section>
  // A regex replacement with limit 1 is tricky in js without capturing groups, let's do a simple replace
  let sectionIndex = content.indexOf('</section>');
  if (sectionIndex !== -1 && content.includes('page-hero')) {
    content = content.substring(0, sectionIndex) + '</div>\n      </section>' + content.substring(sectionIndex + 10);
  }

  // Clean up h1 and p in hero
  content = content.replace(
    /<h1 className="[^"]*" style={{[^}]*}}>/g,
    '<h1>'
  );
  content = content.replace(
    /<p className="text-xl text-light max-w-2xl mx-auto" style={{[^}]*}}>/g,
    '<p>'
  );
  content = content.replace(
    /<p className="text-xl text-light max-w-2xl mx-auto">/g,
    '<p>'
  );

  // Replace page sections
  content = content.replace(
    /<section className="py-12 bg-dark text-center" style={{[^}]*}}>/g,
    '<section className="page-section">'
  );
  content = content.replace(
    /<section className="py-12 bg-dark" style={{ padding: '40px 20px' }}>/g,
    '<section className="page-section">'
  );
  content = content.replace(
    /<section className="py-12 bg-dark" style={{[^}]*background:[^}]*}}>/g,
    '<section className="page-section page-section-light">'
  );

  // Replace grids and cards
  content = content.replace(
    /<div className="container" style={{ display: 'grid'[^}]*}}>/g,
    '<div className="premium-grid">'
  );
  // Also handle Phase1/2/3 grid
  content = content.replace(
    /<div className="grid md:grid-cols-2 gap-8" style={{[^}]*}}>/g,
    '<div className="premium-grid">'
  );
  
  content = content.replace(
    /<div className="glass-card p-6 border border-border rounded-lg" style={{[^}]*}}>/g,
    '<div className="premium-card">'
  );
  
  // Replace buttons
  content = content.replace(
    /<a href="[^"]*" className="btn-primary inline-block" style={{[^}]*}}>/g,
    (match) => match.replace(/className="[^"]*"/, 'className="premium-btn"').replace(/style={{[^}]*}}/, '')
  );
  content = content.replace(
    /<button onClick={onBookNow} className="btn-primary inline-block" style={{[^}]*}}>/g,
    '<button onClick={onBookNow} className="premium-btn">'
  );

  // Replace related pages grid
  content = content.replace(
    /<div className="grid md:grid-cols-3 gap-6" style={{[^}]*}}>/g,
    '<div className="related-grid">'
  );
  
  content = content.replace(
    /className="card-link"/g,
    'className="related-card"'
  );
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated ${file}`);
}
