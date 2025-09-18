import React from 'react';
import { Globe, Search, Palette, Target, CreditCard, TrendingUp } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Modern, responsive websites built with cutting-edge technologies for optimal performance and user experience.',
      features: ['HTML, CSS & JavaScript', 'PHP & WordPress', 'Mobile-First Design']
    },
    {
      icon: Target,
      title: 'Digital Marketing',
      description: 'Comprehensive marketing strategies that drive growth and increase your online presence across all platforms.',
      features: ['Social Media Strategy', 'Content Marketing', 'Brand Development']
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Intuitive and beautiful designs that convert visitors into customers with seamless user experiences.',
      features: ['User Research', 'Wireframing', 'Prototyping']
    },
    {
      icon: TrendingUp,
      title: 'Paid Advertising',
      description: 'Strategic ad campaigns that maximize ROI and reach your target audience across Google, Facebook, and beyond.',
      features: ['Google Ads', 'Facebook Ads', 'Campaign Optimization']
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Boost your search rankings and organic traffic with proven SEO strategies and technical optimization.',
      features: ['Keyword Research', 'Technical SEO', 'Content Optimization']
    },
    {
      icon: CreditCard,
      title: 'Business Cards',
      description: 'Professional visiting cards that make lasting impressions with creative designs and premium materials.',
      features: ['Custom Designs', 'Premium Materials', 'Quick Turnaround']
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-teal-400">Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to elevate your business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.title}
                className="bg-slate-700/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-600/50 hover:border-teal-400/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl group"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <div className="w-2 h-2 bg-teal-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;