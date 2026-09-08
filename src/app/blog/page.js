import Link from 'next/link';
import { getSortedPostsData } from '@/lib/blog';

export const metadata = {
  title: 'Blog | Taslim Ahmed Tamim',
  description: 'Cybersecurity, competitive programming, and web development insights.',
};

export default function BlogList() {
  const allPostsData = getSortedPostsData();

  return (
    <div className="container" style={{ paddingTop: '100px', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <header className="site-header" style={{ position: 'fixed', top: 0, width: '100%' }}>
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
        <h1 className="section-title">Latest Transmissions</h1>
        <div style={{ display: 'grid', gap: '2rem', marginTop: '2rem' }}>
          {allPostsData.map(({ id, date, title, excerpt }) => (
            <article key={id} className="card card-gloss" style={{ padding: '2rem', transition: 'transform 0.3s ease' }}>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--accent)' }}>
                <Link href={`/blog/${id}`}>{title}</Link>
              </h2>
              <small style={{ color: 'var(--text-muted)', display: 'block', marginBottom: '1rem' }}>{date}</small>
              <p style={{ color: 'var(--text-light)', lineHeight: '1.6' }}>{excerpt}</p>
              <Link href={`/blog/${id}`} className="cta-button primary" style={{ marginTop: '1rem', display: 'inline-block', padding: '0.5rem 1rem' }}>
                Read More
              </Link>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
