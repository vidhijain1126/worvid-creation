import React from 'react';
import { Award, Users, Clock, CheckCircle } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, value: '10+', label: 'Happy Clients' },
    { icon: CheckCircle, value: '100+', label: 'Projects Completed' },
    { icon: Clock, value: '2+', label: 'Years Experience' },
    { icon: Award, value: '98%', label: 'Client Satisfaction' }
  ];

  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About <span className="text-teal-400">Worvid Creation</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              We are a forward-thinking digital agency specializing in creating innovative 
              solutions that drive business growth. Our team combines technical expertise 
              with creative vision to deliver exceptional results.
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              From custom web applications to comprehensive marketing strategies, we help 
              businesses establish a strong digital presence and achieve their goals through 
              data-driven approaches and cutting-edge technology.
            </p>
            <div className="flex flex-wrap gap-4">
              {['WordPress', 'JavaScript', 'Figma', 'HTML', 'CSS', 'PHP'].map((skill) => (
                <span
                  key={skill}
                  className="bg-teal-500/20 text-teal-400 px-4 py-2 rounded-full border border-teal-500/30 text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 text-center hover:border-teal-400/50 transition-all duration-300 transform hover:scale-105"
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <IconComponent size={24} className="text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;