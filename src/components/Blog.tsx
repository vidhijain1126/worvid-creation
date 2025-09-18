import React from 'react';
import { BLOG_POSTS } from '../data/blogs';
import { Link } from 'react-router-dom';

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-teal-400">Blogs</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Insights and guides to help small businesses grow with digital
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {BLOG_POSTS.map((post) => (
            <article key={post.slug} className="bg-slate-700/50 rounded-2xl border border-slate-600/50 hover:border-teal-400/50 transition-all overflow-hidden">
              {post.imageUrl && (
                <div className="relative h-40 w-full overflow-hidden">
                  <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover" />
                </div>
              )}
              <div className="p-6">
              <h3 className="text-2xl font-semibold text-white mb-3">
                <Link to={`/blog/${post.slug}`} className="hover:text-teal-400 transition-colors">{post.title}</Link>
              </h3>
              <p className="text-gray-300 mb-3 text-sm">
                {post.metaDescription.length > 140 ? post.metaDescription.slice(0, 140) + '…' : post.metaDescription}
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-1 text-xs">
                {post.outline.slice(0,3).map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <div className="mt-4">
                <Link to={`/blog/${post.slug}`} className="text-teal-400 hover:underline">Read more →</Link>
              </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;


