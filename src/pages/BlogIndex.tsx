import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Blog from '../components/Blog';

const BlogIndex: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <Blog />
      <Footer />
    </div>
  );
};

export default BlogIndex;


