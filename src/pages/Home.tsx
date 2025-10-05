import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Process from '../components/Process';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import BlogSection from '../components/BlogSection';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Mission from '../components/Mission';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <Hero />
      <Services />
      <Process />
      <About />
      <Mission />
      <Portfolio />
      <BlogSection />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;


