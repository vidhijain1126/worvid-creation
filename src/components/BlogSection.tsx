import React from 'react';
import { BLOG_POSTS } from '../data/blogs';
import { Link } from 'react-router-dom';

const BlogSection: React.FC = () => {
  const topPosts = BLOG_POSTS.slice(0, 4);
  return (
    <section id="featured-blog" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Latest <span className="text-teal-400">Blogs</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {topPosts.map((post) => {
            return (
            <article key={post.slug} className="bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-teal-400/50 transition-all overflow-hidden">
              {post.imageUrl && (
                <div className="relative h-32 w-full overflow-hidden">
                  <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover" />
                </div>
              )}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-white mb-2">
                  <Link to={`/blog/${post.slug}`} className="hover:text-teal-400 transition-colors">{post.title}</Link>
                </h3>
                <p className="text-gray-300 mb-2 text-sm">
                  {post.metaDescription.length > 110 ? post.metaDescription.slice(0, 110) + '…' : post.metaDescription}
                </p>
                <ul className="list-disc list-inside text-gray-400 space-y-1 text-xs">
                  {post.outline.slice(0,2).map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                <div className="mt-2">
                  <Link to={`/blog/${post.slug}`} className="text-teal-400 hover:underline text-sm">Read more →</Link>
                </div>
              </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;


