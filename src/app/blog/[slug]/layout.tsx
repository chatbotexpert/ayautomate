// This layout wraps all /blog/[slug] pages and imports the original
// ayautomate.com CSS so the scraped blog post HTML renders pixel-perfectly.
import '@/styles/blog-original-0.css';
import '@/styles/blog-original-1.css';

export default function BlogPostLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
