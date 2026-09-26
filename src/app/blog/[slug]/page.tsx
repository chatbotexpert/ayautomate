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
  return {
    title: post.title,
    description: post.description,
  };
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

  return (
    <>
      {/* Inject original ayautomate.com CSS for pixel-perfect rendering */}
      {(post.cssLinks || []).map((href: string, i: number) => (
        // eslint-disable-next-line @next/next/no-css-tags
        <link key={i} rel="stylesheet" href={href} />
      ))}
      <div style={{ background: '#000000', minHeight: '100vh' }}>
        <Navbar />
        {/* 
          Render ONLY the scraped main content — no custom hero section.
          The original site's <main> HTML already contains the correct 
          2-column layout: left sidebar (ON THIS PAGE + EXPLORE WITH AI) 
          + right article body with inline images.
        */}
        <div style={{ paddingTop: '72px' }}>
          <main dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
        <DeployAutomationSection />
        <FooterSection />
      </div>
    </>
  );
}
