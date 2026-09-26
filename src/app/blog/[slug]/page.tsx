import React from 'react';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';
import DeployAutomationSection from '@/components/DeployAutomationSection';
import { notFound } from 'next/navigation';
import fsModule from 'fs';
import path from 'path';

export async function generateStaticParams() {
  const dataDir = path.join(process.cwd(), 'src/data/blog');
  if (!fsModule.existsSync(dataDir)) return [];
  const files = fsModule.readdirSync(dataDir);
  return files.map(file => ({
    slug: file.replace('.json', '')
  }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const filePath = path.join(process.cwd(), 'src/data/blog', slug + '.json');

  if (!fsModule.existsSync(filePath)) {
    notFound();
  }

  const fileData = fsModule.readFileSync(filePath, 'utf8');
  const post = JSON.parse(fileData);

  // Format date
  let formattedDate = '';
  if (post.datePublished) {
    try {
      formattedDate = new Date(post.datePublished).toLocaleDateString('en-US', {
        year: 'numeric', month: 'long', day: 'numeric'
      });
    } catch (e) {}
  }

  return (
    <div className="flex flex-col min-h-screen" style={{ background: '#0a0a0a', color: '#e5e5e5' }}>
      <Navbar />
      <div style={{ paddingTop: '80px' }}>
        {/* Hero Banner */}
        <div style={{
          background: 'linear-gradient(to bottom, #0f0f1a, #0a0a0a)',
          borderBottom: '1px solid rgba(139,92,246,0.15)',
          padding: '60px 24px 40px'
        }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            {formattedDate && (
              <div style={{ 
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '4px 12px', borderRadius: '999px',
                border: '1px solid rgba(139,92,246,0.3)',
                background: 'rgba(139,92,246,0.08)',
                color: '#a78bfa', fontSize: '12px', fontWeight: 500,
                textTransform: 'uppercase', letterSpacing: '0.08em',
                marginBottom: '20px'
              }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#a78bfa', display: 'inline-block' }}></span>
                {formattedDate}
              </div>
            )}
            <h1 style={{
              fontSize: 'clamp(28px, 4vw, 48px)',
              fontWeight: 600,
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
              color: '#ffffff',
              maxWidth: '800px',
              marginBottom: '20px'
            }}>
              {post.title}
            </h1>
            {post.description && (
              <p style={{ 
                fontSize: '17px', lineHeight: 1.7, 
                color: 'rgba(229,229,229,0.6)',
                maxWidth: '700px'
              }}>
                {post.description}
              </p>
            )}
            {post.featuredImage && (
              <div style={{ marginTop: '40px', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)' }}>
                <img 
                  src={post.featuredImage} 
                  alt={post.title}
                  style={{ width: '100%', display: 'block', maxHeight: '450px', objectFit: 'cover' }}
                />
              </div>
            )}
          </div>
        </div>

        {/* Article body - inject original HTML with styles */}
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '48px 24px' }}>
          <div 
            dangerouslySetInnerHTML={{ __html: post.content }}
            style={{
              '--background': '#0a0a0a',
              '--foreground': '#e5e5e5',
              '--muted-foreground': 'rgba(229,229,229,0.6)',
              '--border': 'rgba(255,255,255,0.1)',
              '--primary-purple': '#8b5cf6',
              '--card': '#111111',
            } as React.CSSProperties}
            className="blog-content"
          />
        </div>
      </div>
      <DeployAutomationSection />
      <FooterSection />
    </div>
  );
}
