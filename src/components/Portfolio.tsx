import React, { useState } from 'react';
import { ExternalLink, Eye } from 'lucide-react';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects = [
    {
      id: 2,
      title: 'Ashok Trust',
      category: 'web-development',
      image: '/ashokTrust.jpg',
      description: 'Trust organization website with donation features',
      technologies: ['WordPress', 'PHP', 'CSS'],
      url: 'https://ashoktrust.com/',
      type: 'Web Development'
    },
    {
      id: 3,
      title: 'Vidhi Sukhlecha Portfolio',
      category: 'web-development',
      image: '/VidhiProtfolio.jpg',
      description: 'Personal portfolio website with elegant design',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      url: 'https://vidhisukhlecha.wuaze.com',
      type: 'Web Development'
    },
    {
      id: 4,
      title: 'AMK Global Staffing',
      category: 'web-development',
      image: '/staffing.jpg',
      description: 'Staffing agency website with pricing plans',
      technologies: ['WordPress', 'PHP', 'CSS'],
      url: 'https://amkglobalstaffing.com/pricing_plan/',
      type: 'Web Development'
    },
    {
      id: 5,
      title: 'AMK Global Recruitment',
      category: 'web-development',
      image: '/recruit.jpg',
      description: 'Recruitment platform with advanced features',
      technologies: ['WordPress', 'PHP', 'JavaScript'],
      url: 'https://recruit.amkglobalgroup.com/',
      type: 'Web Development'
     },
     {
       id: 6,
       title: 'RuVi CraftNest Design',
      category: 'design',
      image: '/ruviCraftNest.jpg',
      description: 'Craft marketplace UI/UX design with modern aesthetics',
      technologies: ['Figma', 'UI Design', 'Prototyping'],
      url: 'https://www.figma.com/design/aqY7sG4uWNqNl5jforXRqM/RuVi-CraftNest?m=auto&t=NnVYOWoQxTGPtVvg-6',
      type: 'UI/UX Design'
    },
    {
      id: 7,
      title: 'Dr Web App Design',
      category: 'design',
      image: '/DrWebApp.jpg',
      description: 'Medical web application interface design',
      technologies: ['Figma', 'UX Research', 'Wireframing'],
      url: 'https://www.figma.com/design/F4q4knv3TpjcdXwU3bX7Vu/Dr-Web-app?m=auto&t=NnVYOWoQxTGPtVvg-6',
      type: 'UI/UX Design'
     },
     {
       id: 8,
       title: 'Sports Academy Site Design',
       category: 'design',
       image: '/SportsAcademy.jpg',
       description: 'Sports academy website design with dynamic layouts',
       technologies: ['Figma', 'UI Design', 'User Experience'],
       url: 'https://www.figma.com/design/2pdzj6Lwu9v0kCF6HAZz0C/Sports-academy-site?m=auto&t=NnVYOWoQxTGPtVvg-6',
       type: 'UI/UX Design'
     },
     {
       id: 9,
       title: 'Creative Instagram Reels',
      category: 'marketing',
      image: '/instaReels.jpg',
      description: 'Engaging Instagram reels and creative content for brand promotion',
      technologies: ['Instagram Marketing', 'Content Creation', 'Brand Strategy'],
      url: 'https://www.instagram.com/worvidcreation/reel/DN8WyhrD5IW/',
      type: 'Social Media Marketing'
     },
     {
       id: 10,
       title: 'Brand Invitation Designs',
       category: 'marketing',
       image: '/digitalinvitation.jpg',
       description: 'Custom invitation designs and promotional content for events',
       technologies: ['Graphic Design', 'Social Media', 'Brand Identity'],
       url: 'https://www.instagram.com/worvidcreation/reel/DMS2YQfvwVa/',
       type: 'Social Media Marketing'
     }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web-development', label: 'Web Development' },
    { id: 'design', label: 'Design' },
    { id: 'marketing', label: 'Marketing' }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-teal-400">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Showcasing our latest work and successful project deliveries
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-teal-500 text-white shadow-lg'
                    : 'bg-slate-700/50 text-gray-400 hover:bg-slate-700 hover:text-white'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="bg-slate-700/50 rounded-2xl overflow-hidden border border-slate-600/50 hover:border-teal-400/50 transition-all duration-500 transform hover:scale-105 group"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-4">
                    <button className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-colors duration-200">
                      <Eye size={20} className="text-white" />
                    </button>
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-colors duration-200"
                      >
                        <ExternalLink size={20} className="text-white" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="text-sm text-teal-400 mb-2">{project.type}</div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-slate-600/50 text-gray-300 text-xs px-3 py-1 rounded-full border border-slate-500/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;