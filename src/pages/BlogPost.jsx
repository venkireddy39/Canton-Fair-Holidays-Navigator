import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import SeoHelmet from '../components/SeoHelmet';
import ContactCTA from '../components/ContactCTA';
import { blogPosts, getRelatedPosts } from '../data/blogData';
import { Calendar, User, Tag, ArrowLeft, Clock } from 'lucide-react';

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Get related posts based on matching category or general fallback
  const relatedPosts = getRelatedPosts(post.id, post.category, 3);

  return (
    <>
      <SeoHelmet
        title={`${post.title} | Holidays Navigator`}
        description={post.excerpt}
        canonical={`https://holidaysnavigator.com/blog/${post.slug}`}
        breadcrumb={[
          { name: 'Home', url: '/' },
          { name: 'Blog', url: '/blog' },
          { name: post.title, url: `/blog/${post.slug}` }
        ]}
        article={true}
        datePublished={post.datePublished}
        dateModified={post.dateModified || post.datePublished}
      />

      <article style={{ padding: '140px 20px 60px', background: 'var(--bg-dark)', minHeight: '80vh' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          
          <Link 
            to="/blog" 
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '8px', 
              color: 'var(--accent-green)', 
              textDecoration: 'none', 
              marginBottom: '30px', 
              fontWeight: '600',
              fontSize: 'clamp(0.70rem, 2.5vw, 1rem)',
              transition: 'color 0.2s ease'
            }}
            className="back-to-blog-link"
          >
            <ArrowLeft size={16} /> Back to Blog
          </Link>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '20px', marginBottom: '25px', fontSize: 'clamp(0.66rem, 2.4vw, 0.95rem)', color: 'var(--text-muted)' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--accent-gold)', fontWeight: '600' }}>
              <Tag size={16} /> {post.category}
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <Calendar size={16} /> {new Date(post.datePublished).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <User size={16} /> {post.author}
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <Clock size={16} /> {post.readingTime || 5} min read
            </span>
          </div>

          <h1 style={{ 
            fontSize: 'clamp(2rem, 5vw, 3rem)', 
            fontWeight: '800', 
            color: 'var(--text-light)', 
            marginBottom: '30px', 
            lineHeight: '1.25',
            fontFamily: 'var(--font-serif)'
          }}>
            {post.title}
          </h1>

          <div 
            className="blog-content"
            style={{ 
              color: 'var(--text-muted)', 
              fontSize: 'clamp(0.79rem, 2.8vw, 1.125rem)', 
              lineHeight: '1.85',
              fontFamily: 'var(--font-sans)'
            }}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Internal Linking Clusters injected after post */}
          <div style={{ 
            marginTop: '60px', 
            padding: '35px', 
            background: 'var(--card-highlight-bg)', 
            borderRadius: '16px', 
            border: '1px solid var(--border-color)',
            boxShadow: '0 4px 20px rgba(0, 119, 182, 0.05)'
          }}>
            <h3 style={{ fontSize: 'clamp(1.05rem, 3.8vw, 1.5rem)', color: 'var(--text-light)', marginBottom: '15px', fontFamily: 'var(--font-serif)' }}>
              Plan Your Canton Fair 2026 Sourcing Trip
            </h3>
            <p style={{ marginBottom: '20px', color: 'var(--text-muted)', fontSize: 'clamp(0.73rem, 2.6vw, 1.05rem)' }}>
              Planning your trade visit requires seamless logistics to let you focus on business. Holidays Navigator handles everything:
            </p>
            <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '15px 25px', listStyle: 'none', padding: 0 }}>
              <li><Link to="/canton-fair-2026-guide" style={{ color: 'var(--accent-green)', fontWeight: '700', textDecoration: 'underline' }}>Complete Guide</Link></li>
              <li><Link to="/guangzhou-business-visa-guide" style={{ color: 'var(--accent-green)', fontWeight: '700', textDecoration: 'underline' }}>China M-Visa Processing</Link></li>
              <li><Link to="/best-hotels-near-canton-fair" style={{ color: 'var(--accent-green)', fontWeight: '700', textDecoration: 'underline' }}>Premium Pazhou Hotels</Link></li>
              <li><Link to="/how-to-register-for-canton-fair" style={{ color: 'var(--accent-green)', fontWeight: '700', textDecoration: 'underline' }}>Buyer Badge Guide</Link></li>
            </ul>
          </div>
        </div>
      </article>

      {relatedPosts.length > 0 && (
        <section className="page-section" style={{ background: 'rgba(255, 255, 255, 0.4)', borderTop: '1px solid var(--border-color)', paddingTop: '60px', paddingBottom: '80px' }}>
          <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(1.54rem, 5.5vw, 2.2rem)', fontWeight: '800', color: 'var(--text-light)', marginBottom: '40px', textAlign: 'left', fontFamily: 'var(--font-serif)' }}>
              Related Sourcing Insights
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))', gap: '30px' }}>
              {relatedPosts.map(rp => (
                <Link key={rp.id} to={`/blog/${rp.slug}`} style={{ textDecoration: 'none' }}>
                  <div className="glass-card" style={{ padding: '30px', borderRadius: '16px', border: '1px solid var(--border-color)', height: '100%', transition: 'all 0.3s ease', display: 'flex', flexDirection: 'column' }} onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.borderColor = 'var(--accent-green)'; }} onMouseOut={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'var(--border-color)'; }}>
                    <div style={{ color: 'var(--accent-gold)', fontSize: 'clamp(0.59rem, 2.1vw, 0.85rem)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '12px' }}>{rp.category}</div>
                    <h3 style={{ fontSize: 'clamp(0.94rem, 3.4vw, 1.35rem)', color: 'var(--text-light)', marginBottom: '12px', lineHeight: '1.4', fontFamily: 'var(--font-serif)' }}>{rp.title}</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: 'clamp(0.66rem, 2.4vw, 0.95rem)', lineHeight: '1.6', flexGrow: 1 }}>{rp.excerpt.substring(0, 120)}...</p>
                    <span style={{ color: 'var(--accent-green)', fontWeight: '700', fontSize: 'clamp(0.66rem, 2.4vw, 0.95rem)', display: 'inline-flex', alignItems: 'center', gap: '5px', marginTop: '20px' }}>Read More →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <ContactCTA />
    </>
  );
}
