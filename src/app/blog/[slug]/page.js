import Link from 'next/link';
import { getPostData, getAllPostIds } from '@/lib/blog';
import './blog.css'; // Add some basic styling for markdown content

export async function generateStaticParams() {
  const paths = getAllPostIds();
  return paths.map((path) => ({
    slug: path.params.slug,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const postData = await getPostData(resolvedParams.slug);
  return {
    title: `${postData.title} | Blog | Taslim Ahmed Tamim`,
    description: postData.excerpt,
  };
}

export default async function BlogPost({ params }) {
  const resolvedParams = await params;
  const postData = await getPostData(resolvedParams.slug);

  return (
    <div className="container" style={{ paddingTop: '100px', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <header className="site-header" style={{ position: 'fixed', top: 0, width: '100%', zIndex: 100 }}>
        <div className="header-inner">
          <Link href="/" className="logo">TAT</Link>
          <nav className="site-nav">
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/blog" className="active">Blog</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main style={{ maxWidth: '800px', width: '100%', padding: '2rem 1rem' }}>
        <article className="card card-gloss" style={{ padding: '3rem 2rem' }}>
          <h1 className="section-title" style={{ textAlign: 'left', marginBottom: '0.5rem', color: 'var(--accent)' }}>
            {postData.title}
          </h1>
          <div style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontStyle: 'italic' }}>
            Published on {postData.date}
          </div>
          
          {/* Render HTML parsed from Markdown */}
          <div 
            className="blog-content" 
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }} 
          />
        </article>
      </main>
    </div>
  );
}
