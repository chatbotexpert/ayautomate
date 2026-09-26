import React from 'react';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';
import DeployAutomationSection from '@/components/DeployAutomationSection';
import { notFound } from 'next/navigation';

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  
  try {
    const res = await fetch('https://www.ayautomate.com/blog/' + slug, { 
      next: { revalidate: 3600 } 
    });
    
    if (!res.ok) {
      notFound();
    }
    
    const html = await res.text();
    
    // Extract CSS links to ensure perfect styling
    const cssMatches = [...html.matchAll(/<link[^>]*rel="stylesheet"[^>]*href="([^"]+)"/g)];
    const cssLinks = cssMatches.map(m => {
      let href = m[1];
      if (href.startsWith('/')) href = 'https://www.ayautomate.com' + href;
      return href;
    });
    
    const mainMatch = html.match(/<main[^>]*>([\s\S]*?)<\/main>/);
    if (!mainMatch) {
      notFound();
    }
    
    let content = mainMatch[1];
    
    // Fix absolute URLs for images and links so they show up correctly
    
    // 1. Next.js image optimizer URLs
    content = content.replace(/src="\/_next\/image\?url=([^&"]+)&amp;[^"]+"/g, (match, p1) => {
      let decoded = p1;
      try {
        decoded = decodeURIComponent(p1);
      } catch (e) {}
      if (decoded.startsWith('http')) return 'src="' + decoded + '"';
      return 'src="https://www.ayautomate.com' + decoded + '"';
    });
    
    // 2. Standard relative URLs for src and srcset
    content = content.replace(/src="\/(?!\/)/g, 'src="https://www.ayautomate.com/');
    content = content.replace(/srcset="\/(?!\/)/g, 'srcset="https://www.ayautomate.com/');
    // Also fix srcset items that are separated by commas
    content = content.replace(/,\s*\/(?!\/)/g, ', https://www.ayautomate.com/');

    return (
      <div className="flex flex-col min-h-screen bg-black">
        {cssLinks.map((href, i) => (
          <link key={i} rel="stylesheet" href={href} />
        ))}
        <Navbar />
        <div className="pt-20">
          <main 
            dangerouslySetInnerHTML={{ __html: content }} 
            className="min-h-screen w-full"
          />
        </div>
        <DeployAutomationSection />
        <FooterSection />
      </div>
    );
  } catch (error) {
    notFound();
  }
}
