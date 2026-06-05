const fs = require('fs');

let css = fs.readFileSync('d:/Holidays Navigator/Canton Fair/src/App.css', 'utf8');

// Use clamp for App.css text elements
css = css.replace(/\.hero h1 {\s*font-size:\s*56px;/g, '.hero h1 {\n  font-size: clamp(28px, 6vw, 56px);');
css = css.replace(/\.hero p {\s*font-size:\s*21px;/g, '.hero p {\n  font-size: clamp(16px, 2.5vw, 21px);');
css = css.replace(/\.hero \.cta-button {\s*padding: 16px 36px;\s*font-size: 18px;/g, '.hero .cta-button {\n  padding: 16px 36px;\n  font-size: clamp(16px, 2vw, 18px);');

css = css.replace(/\.price-value {\s*font-size: 48px;/g, '.price-value {\n  font-size: clamp(32px, 5vw, 48px);');
css = css.replace(/\.overview-details h3 {\s*font-size: 36px;/g, '.overview-details h3 {\n  font-size: clamp(24px, 4vw, 36px);');
css = css.replace(/\.section-header h2 {\s*font-size: 40px;/g, '.section-header h2 {\n  font-size: clamp(28px, 5vw, 40px);');
css = css.replace(/\.service-card h3 {\s*font-size: 24px;/g, '.service-card h3 {\n  font-size: clamp(20px, 3vw, 24px);');

css = css.replace(/\.page-hero h1 {\s*font-size: 2\.5rem;/g, '.page-hero h1 {\n  font-size: clamp(2rem, 5vw, 2.5rem);');
css = css.replace(/\.page-hero p {\s*font-size: 1\.3rem;/g, '.page-hero p {\n  font-size: clamp(1rem, 2.5vw, 1.3rem);');
css = css.replace(/\.page-section h2 {\s*font-size: 2\.5rem;/g, '.page-section h2 {\n  font-size: clamp(2rem, 5vw, 2.5rem);');

// Clean up redundant responsive rules
css = css.replace(/\.hero h1 \{ font-size: 48px; \}/g, '/* .hero h1 clamp handles this */');
css = css.replace(/\.overview-details h3 \{ font-size: 30px; \}/g, '/* h3 clamp */');
css = css.replace(/\.section-header h2 \{ font-size: 34px; \}/g, '/* h2 clamp */');
css = css.replace(/\.price-value \{ font-size: 40px; \}/g, '/* price clamp */');

css = css.replace(/\.hero h1 \{ font-size: 38px; word-wrap: break-word; \}/g, '.hero h1 { word-wrap: break-word; }');
css = css.replace(/\.hero p \{ font-size: 19px; \}/g, '/* hero p clamp */');

css = css.replace(/\.hero h1 \{ font-size: 32px; \}/g, '/* hero h1 clamp */');
css = css.replace(/\.price-value \{ font-size: 34px; \}/g, '/* price clamp */');
css = css.replace(/\.section-header h2 \{ font-size: 28px; \}/g, '/* header h2 clamp */');
css = css.replace(/\.overview-details h3 \{ font-size: 26px; \}/g, '/* overview h3 clamp */');

css = css.replace(/\.whatsapp-btn \{ width: 100%; justify-content: center; font-size: 16px; \}/g, '.whatsapp-btn { width: 100%; justify-content: center; }');

fs.writeFileSync('d:/Holidays Navigator/Canton Fair/src/App.css', css);
console.log('App.css updated with clamp typography.');
