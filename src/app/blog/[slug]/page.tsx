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

function extractHeadings(html: string) {
  const headings: { id: string; text: string; level: number }[] = [];
  const r1 = /<h([23])[^>]*id="([^"]*)"[^>]*>([\s\S]*?)<\/h[23]>/gi;
  let m;
  while ((m = r1.exec(html)) !== null) {
    const text = m[3].replace(/<[^>]+>/g, '').trim();
    if (text) headings.push({ level: parseInt(m[1]), id: m[2], text });
  }
  if (headings.length === 0) {
    const r2 = /<h([23])[^>]*>([\s\S]*?)<\/h[23]>/gi;
    let m2;
    while ((m2 = r2.exec(html)) !== null) {
      const text = m2[2].replace(/<[^>]+>/g, '').trim();
      if (text && text.length < 120) {
        const id = 'user-content-' + text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
        headings.push({ level: parseInt(m2[1]), id, text });
      }
    }
  }
  return headings;
}

function splitContent(html: string) {
  const headerEnd = html.indexOf('</header>');
  if (headerEnd === -1) {
    return { headerHtml: '', featuredHtml: '', articleHtml: html };
  }
  const headerHtml = html.slice(0, headerEnd + 9);
  const skipRead = html.indexOf('Skip the read');
  let articleStart = skipRead > -1 ? html.lastIndexOf('<div', skipRead) : headerEnd + 9;
  const featuredHtml = html.slice(headerEnd + 9, articleStart);
  const articleHtml = html.slice(articleStart);
  return { headerHtml, featuredHtml, articleHtml };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const filePath = path.join(process.cwd(), 'src/data/blog', slug + '.json');
  if (!fsModule.existsSync(filePath)) notFound();

  const fileData = fsModule.readFileSync(filePath, 'utf8');
  const post = JSON.parse(fileData);
  const { headerHtml, featuredHtml, articleHtml } = splitContent(post.content);
  const headings = extractHeadings(articleHtml);

  return (
    <div className="blog-aya-wrapper" style={{ background: '#000000', minHeight: '100vh', color: '#fff' }}>
      {/* Scoped CSS: override our site variables ONLY within .blog-aya-wrapper
          so blog content matches original ayautomate.com but navbar is unaffected */}
      <style>{`
        .blog-aya-wrapper {
          --background: #000000;
          --foreground: #ffffff;
          --primary-purple: #8b5cf6;
          --muted-foreground: #a1a1aa;
          --border: rgba(255,255,255,0.08);
          --card: #111111;
          --muted: #18181b;
          --accent: rgba(255,255,255,0.06);
          --ring: rgba(139,92,246,0.4);
          --input: rgba(255,255,255,0.06);
          --destructive: #ef4444;
          --secondary: #111111;
          --secondary-foreground: #ffffff;
          --accent-foreground: #ffffff;
          --popover: #111111;
          --popover-foreground: #ffffff;
        }
      `}</style>

      <Navbar />

      {/* FULL-WIDTH HEADER: back link, date, title, description, author */}
      {headerHtml && (
        <div style={{ paddingTop: '72px' }}
          dangerouslySetInnerHTML={{ __html: headerHtml }}
        />
      )}

      {/* FULL-WIDTH FEATURED IMAGE */}
      {featuredHtml && (
        <div dangerouslySetInnerHTML={{ __html: featuredHtml }} />
      )}

      {/* 2-COLUMN LAYOUT */}
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '40px 32px 80px',
        display: 'flex',
        gap: '48px',
        alignItems: 'flex-start',
      }}>

        {/* LEFT SIDEBAR */}
        <aside style={{ width: '240px', flexShrink: 0, position: 'sticky', top: '100px', alignSelf: 'flex-start' }}>
          {headings.length > 0 && (
            <div style={{ marginBottom: '32px' }}>
              <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#52525b', marginBottom: '12px' }}>
                On This Page
              </p>
              <nav style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                {headings.map((h, i) => (
                  <a key={i} href={'#' + h.id} style={{
                    display: 'block',
                    padding: '4px 8px',
                    paddingLeft: h.level === 3 ? '20px' : '8px',
                    fontSize: '13px',
                    lineHeight: '1.5',
                    color: '#a1a1aa',
                    textDecoration: 'none',
                  }}>
                    {h.text}
                  </a>
                ))}
              </nav>
            </div>
          )}

          <div style={{ marginTop: headings.length > 0 ? '8px' : '0' }}>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#52525b', marginBottom: '12px' }}>
              Explore With AI
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[
                { name: 'ChatGPT', icon: '/chatgpt-icon.svg', url: 'https://chat.openai.com/?q=Summarize:%20https://www.ayautomate.com/blog/' + slug },
                { name: 'Claude', icon: '/claude-icon.png', url: 'https://claude.ai/new?q=Summarize:%20https://www.ayautomate.com/blog/' + slug },
                { name: 'Gemini', icon: '/gemini-icon.svg', url: 'https://gemini.google.com/app?q=Summarize:%20https://www.ayautomate.com/blog/' + slug },
              ].map((ai) => (
                <a key={ai.name} href={ai.url} target="_blank" rel="noopener noreferrer" style={{
                  display: 'flex', alignItems: 'center', gap: '10px',
                  padding: '10px 14px',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  color: '#ffffff',
                  fontSize: '13px',
                  fontWeight: 500,
                }}>
                  <img src={ai.icon} alt={ai.name} width={18} height={18} style={{ objectFit: 'contain', flexShrink: 0 }} />
                  Read with {ai.name}
                </a>
              ))}
            </div>
          </div>
        </aside>

        {/* RIGHT: ARTICLE BODY */}
        <main style={{ flex: 1, minWidth: 0 }}
          dangerouslySetInnerHTML={{ __html: articleHtml }}
        />
      </div>

      <DeployAutomationSection />
      <FooterSection />
    </div>
  );
}
