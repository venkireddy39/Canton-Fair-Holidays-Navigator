import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SeoHelmet from '../components/SeoHelmet';
import ContactCTA from '../components/ContactCTA';
import { blogPosts, getCategories } from '../data/blogData';
import { Calendar, Tag, ChevronRight, Clock } from 'lucide-react';

export default function BlogList() {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = getCategories();

  const filteredPosts = activeCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <>
      <SeoHelmet
        title="Canton Fair Blog, Sourcing Trends & Travel Guides | Holidays Navigator"
        description="Stay updated with the latest Canton Fair 2026 trends, machinery & electronics sourcing insights, China business visa updates, and expert travel tips."
        canonical="https://holidaysnavigator.com/blog"
        breadcrumb={[
          { name: 'Home', url: '/' },
          { name: 'Blog', url: '/blog' }
        ]}
      />

      <section className="page-hero" style={{ padding: '160px 20px 100px', textAlign: 'center', background: "linear-gradient(to bottom, rgba(15, 23, 42, 0.95), rgba(15, 23, 42, 0.85)), url('/cantonimg.png') center/cover" }}>
        <div className="page-hero-content">
          <h1 style={{ color: '#fff', fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: '800', fontFamily: 'var(--font-serif)', marginBottom: '20px' }}>
            Canton Fair Information Hub
          </h1>
          <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: 'clamp(0.84rem, 3.0vw, 1.2rem)', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
            Expert advice, import/export guides, product sourcing updates, and business travel logistics for global importers.
          </p>
        </div>
      </section>

      <section className="page-section" style={{ paddingTop: '50px', paddingBottom: '90px', background: 'var(--bg-dark)' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          {/* Categories Selector */}
          <div 
            className="category-selector-container"
            style={{ 
              display: 'flex', 
              gap: '12px', 
              overflowX: 'auto', 
              paddingBottom: '15px', 
              marginBottom: '40px',
              scrollbarWidth: 'none', // Hide standard scrollbar Firefox
              msOverflowStyle: 'none' // Hide standard scrollbar IE
            }}
          >
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                style={{
                  padding: '10px 24px',
                  borderRadius: '30px',
                  border: activeCategory === category ? '1px solid var(--accent-green)' : '1px solid var(--border-color)',
                  background: activeCategory === category ? 'var(--accent-green)' : 'var(--card-bg)',
                  color: activeCategory === category ? '#fff' : 'var(--text-light)',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  fontWeight: '600',
                  fontSize: 'clamp(0.66rem, 2.4vw, 0.95rem)',
                  boxShadow: activeCategory === category ? '0 4px 15px rgba(0, 119, 182, 0.25)' : 'none'
                }}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Sourcing Blog Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 350px), 1fr))', gap: '35px' }}>
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="glass-card"
                style={{ 
                  borderRadius: '16px', 
                  border: '1px solid var(--border-color)', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  padding: '30px',
                  boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.05)',
                  background: 'var(--card-bg)'
                }}
              >
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '15px', marginBottom: '15px', fontSize: 'clamp(0.59rem, 2.1vw, 0.85rem)', color: 'var(--text-muted)' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', color: 'var(--accent-gold)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    <Tag size={14} /> {post.category}
                  </span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                    <Calendar size={14} /> {new Date(post.datePublished).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                    <Clock size={14} /> {post.readingTime || 5} min read
                  </span>
                </div>
                
                <h2 style={{ fontSize: 'clamp(1.01rem, 3.6vw, 1.45rem)', fontWeight: '700', color: 'var(--text-light)', marginBottom: '15px', lineHeight: '1.35', fontFamily: 'var(--font-serif)' }}>
                  <Link to={`/blog/${post.slug}`} style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s ease' }} className="blog-title-link">
                    {post.title}
                  </Link>
                </h2>
                
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.65', flexGrow: 1, marginBottom: '25px', fontSize: 'clamp(0.70rem, 2.5vw, 1rem)' }}>
                  {post.excerpt}
                </p>
                
                <Link 
                  to={`/blog/${post.slug}`} 
                  style={{ 
                    color: 'var(--accent-green)', 
                    textDecoration: 'none', 
                    fontWeight: '700', 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    gap: '5px', 
                    marginTop: 'auto',
                    fontSize: 'clamp(0.70rem, 2.5vw, 1rem)',
                    transition: 'transform 0.2s ease'
                  }}
                  className="read-more-btn"
                >
                  Read Sourcing Insights <ChevronRight size={18} />
                </Link>
              </motion.article>
            ))}
          </div>

        </div>
      </section>

      <ContactCTA />
    </>
  );
}
