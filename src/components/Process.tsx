import React from 'react';
import { Lightbulb, Route, Hammer, Rocket } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Discovery',
    subtitle: 'Understanding your needs and goals',
    icon: Lightbulb
  },
  {
    number: '02',
    title: 'Strategy',
    subtitle: 'Planning the perfect solution',
    icon: Route
  },
  {
    number: '03',
    title: 'Creation',
    subtitle: 'Bringing ideas to life',
    icon: Hammer
  },
  {
    number: '04',
    title: 'Delivery',
    subtitle: 'Launch and ongoing support',
    icon: Rocket
  }
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-16 bg-slate-900 relative overflow-hidden">
      {/* decorative gradient blobs */}
      <div className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full bg-teal-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">My Process</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A systematic approach to deliver exceptional results
          </p>
        </div>

        {/* mobile vertical connector */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:[grid-template-columns:1fr_56px_1fr_56px_1fr_56px_1fr] gap-10 lg:gap-6 justify-items-center items-stretch relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-8 bottom-8 w-px bg-gradient-to-b from-teal-500/20 to-blue-500/20 sm:hidden" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <>
              <div
                key={`card-${step.number}`}
                className="relative z-10 flex flex-col items-center text-center p-4 rounded-lg bg-slate-800/40 border border-slate-700/50 hover:border-teal-500/40 transition-all duration-300 group max-w-[260px] sm:max-w-[280px] w-full"
                style={{ animationDelay: `${index * 0.06}s` }}
              >
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-blue-500 flex items-center justify-center shadow-lg transform group-hover:scale-105 transition-transform duration-300">
                    <Icon className="text-white" size={24} />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-7 h-7 rounded-md bg-slate-900/80 border border-slate-700 flex items-center justify-center text-xs text-teal-300 font-bold">
                    {step.number}
                  </div>
                </div>

                <h3 className="mt-3 text-white text-lg font-semibold group-hover:text-teal-300 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="mt-1 text-gray-400 max-w-xs text-sm">
                  {step.subtitle}
                </p>

                <div className="mt-3 h-[3px] w-10 rounded-full bg-gradient-to-r from-teal-500 to-blue-500 opacity-70 group-hover:opacity-100 transition-opacity" />

                {/* mobile arrow connector below card */}
                {index !== steps.length - 1 && (
                  <div className="pointer-events-none lg:hidden mt-4 w-8 h-12 flex items-center justify-center z-0">
                    <svg width="100%" height="100%" viewBox="0 0 24 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 0 V34" stroke="url(#gradV)" strokeWidth="3" strokeLinecap="round" opacity="0.7"/>
                      <path d="M4 34 L12 48 L20 34" fill="none" stroke="url(#gradV)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      <defs>
                        <linearGradient id="gradV" x1="0" y1="0" x2="0" y2="48" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#14b8a6"/>
                          <stop offset="1" stopColor="#3b82f6"/>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                )}
              </div>

              {/* dedicated grid-column for horizontal arrow between blocks on desktop */}
              {index !== steps.length - 1 && (
                <div key={`arrow-${step.number}`} className="hidden lg:flex items-center justify-center w-full">
                  <svg width="100%" height="40" viewBox="0 0 72 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 20 H48" stroke="url(#gradH)" strokeWidth="8" strokeLinecap="round" opacity="0.9"/>
                    <path d="M48 6 L72 20 L48 34 Z" fill="url(#gradH)"/>
                    <defs>
                      <linearGradient id="gradH" x1="0" y1="0" x2="72" y2="0" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#14b8a6"/>
                        <stop offset="1" stopColor="#3b82f6"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              )}
              </>
            );
          })}
        </div>

        {/* CTA removed as requested */}
      </div>
    </section>
  );
};

export default Process;


