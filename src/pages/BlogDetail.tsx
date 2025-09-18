import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { BLOG_POSTS } from '../data/blogs';
import Header from '../components/Header';
import Footer from '../components/Footer';

const BlogDetail: React.FC = () => {
  const { slug } = useParams();
  const post = BLOG_POSTS.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Blog not found</h1>
          <Link to="/" className="text-teal-400 underline">Go back home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <main className="container mx-auto px-6 py-16">
        <head>
          <title>{post.title} | Worvid Creation</title>
          <meta name="description" content={post.metaDescription} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: post.title,
              description: post.metaDescription,
              mainEntityOfPage: {
                '@type': 'WebPage',
                '@id': typeof window !== 'undefined' ? window.location.href : ''
              }
            })
          }} />
        </head>
        <article className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{post.title}</h1>
          <p className="text-gray-300 mb-8">{post.metaDescription}</p>
          <div className="space-y-8">
            {post.sections.map((sec, idx) => (
              <section key={idx} className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6">
                <h2 className="text-xl text-white font-semibold mb-3">{sec.heading}</h2>
                {sec.paragraphs.map((p, i) => (
                  <p key={i} className="text-gray-300 mb-3 leading-relaxed">{p}</p>
                ))}
                {sec.bullets && (
                  <ul className="list-disc list-inside text-gray-300 space-y-2 mt-2">
                    {sec.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
          <div className="mt-8">
            <Link to="/" className="text-teal-400 underline">← Back to Home</Link>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogDetail;


