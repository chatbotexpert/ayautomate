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
  return files.filter((f: string) => f.endsWith('.json')).map((file: string) => ({
    slug: file.replace('.json', '')
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const filePath = path.join(process.cwd(), 'src/data/blog', slug + '.json');
  if (!fsModule.existsSync(filePath)) return {};
  const post = JSON.parse(fsModule.readFileSync(filePath, 'utf8'));
  return { title: post.title, description: post.description };
}

// Extract headings from article HTML to build Table of Contents
function extractHeadings(html: string) {
  const headings: { id: string; text: string; level: number }[] = [];
  const regex = /<h([23])[^>]*id="([^"]*)"[^>]*>([\s\S]*?)<\/h[23]>/gi;
  let match;
  while ((match = regex.exec(html)) !== null) {
    const text = match[3].replace(/<[^>]+>/g, '').trim();
    if (text) {
      headings.push({ level: parseInt(match[1]), id: match[2], text });
    }
  }
  // If no id-based headings, try without id
  if (headings.length === 0) {
    const r2 = /<h([23])[^>]*>([\s\S]*?)<\/h[23]>/gi;
    let m2;
    while ((m2 = r2.exec(html)) !== null) {
      const text = m2[2].replace(/<[^>]+>/g, '').trim();
      if (text && text.length < 120) {
        const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
        headings.push({ level: parseInt(m2[1]), id, text });
      }
    }
  }
  return headings;
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const filePath = path.join(process.cwd(), 'src/data/blog', slug + '.json');
  if (!fsModule.existsSync(filePath)) notFound();

  const fileData = fsModule.readFileSync(filePath, 'utf8');
  const post = JSON.parse(fileData);
  const headings = extractHeadings(post.content);

  return (
    <>
      <link rel="stylesheet" href="/blog-styles/original-0.css" />
      <link rel="stylesheet" href="/blog-styles/original-1.css" />
      <div style={{ background: '#000000', minHeight: '100vh', color: '#e5e5e5' }}>
        <Navbar />
        <div style={{ paddingTop: '72px' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px', display: 'flex', gap: '48px', alignItems: 'flex-start', paddingTop: '40px', paddingBottom: '60px' }}>

            {/* LEFT SIDEBAR */}
            <aside style={{ width: '240px', flexShrink: 0, position: 'sticky', top: '100px', alignSelf: 'flex-start' }}>
              {headings.length > 0 && (
                <div style={{ marginBottom: '32px' }}>
                  <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(229,229,229,0.4)', marginBottom: '12px' }}>
                    On This Page
                  </p>
                  <nav>
                    {headings.map((h, i) => (
                      <a
                        key={i}
                        href={'#' + h.id}
                        style={{
                          display: 'block',
                          padding: '4px 0',
                          paddingLeft: h.level === 3 ? '12px' : '0',
                          fontSize: '13px',
                          lineHeight: '1.5',
                          color: 'rgba(229,229,229,0.55)',
                          textDecoration: 'none',
                          borderLeft: h.level === 2 ? '2px solid transparent' : 'none',
                          paddingLeft: h.level === 2 ? '8px' : '20px',
                          marginBottom: '4px',
                          transition: 'color 0.2s',
                        }}
                        onMouseEnter={(e) => { (e.target as HTMLAnchorElement).style.color = '#a78bfa'; }}
                        onMouseLeave={(e) => { (e.target as HTMLAnchorElement).style.color = 'rgba(229,229,229,0.55)'; }}
                      >
                        {h.text}
                      </a>
                    ))}
                  </nav>
                </div>
              )}

              {/* EXPLORE WITH AI */}
              <div>
                <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(229,229,229,0.4)', marginBottom: '12px' }}>
                  Explore With AI
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <a
                    href={'https://chat.openai.com/?q=Summarize: https://www.ayautomate.com/blog/' + slug}
                    target="_blank"
                    rel="noopener"
                    style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 14px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', textDecoration: 'none', color: '#e5e5e5', fontSize: '13px', fontWeight: 500 }}
                  >
                    <img src="https://www.ayautomate.com/chatgpt-icon.svg" alt="ChatGPT" style={{ width: '18px', height: '18px' }} onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                    Read with ChatGPT
                  </a>
                  <a
                    href={'https://claude.ai/new?q=Summarize: https://www.ayautomate.com/blog/' + slug}
                    target="_blank"
                    rel="noopener"
                    style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 14px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', textDecoration: 'none', color: '#e5e5e5', fontSize: '13px', fontWeight: 500 }}
                  >
                    <img src="https://www.ayautomate.com/claude-icon.png" alt="Claude" style={{ width: '18px', height: '18px' }} onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                    Read with Claude
                  </a>
                  <a
                    href={'https://gemini.google.com/app?q=Summarize: https://www.ayautomate.com/blog/' + slug}
                    target="_blank"
                    rel="noopener"
                    style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 14px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', textDecoration: 'none', color: '#e5e5e5', fontSize: '13px', fontWeight: 500 }}
                  >
                    <img src="https://www.ayautomate.com/gemini-icon.svg" alt="Gemini" style={{ width: '18px', height: '18px' }} onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                    Read with Gemini
                  </a>
                </div>
              </div>
            </aside>

            {/* RIGHT: ARTICLE CONTENT */}
            <main
              style={{ flex: 1, minWidth: 0 }}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
        <DeployAutomationSection />
        <FooterSection />
      </div>
    </>
  );
}
