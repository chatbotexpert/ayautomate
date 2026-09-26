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

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Navbar />
      <div className="pt-20">
        <main 
          dangerouslySetInnerHTML={{ __html: post.content }} 
          className="min-h-screen"
        />
      </div>
      <DeployAutomationSection />
      <FooterSection />
    </div>
  );
}
