import React from 'react';
import { Terminal, Globe, Sparkles, Brain } from 'lucide-react';

export const CurrentlyExploring: React.FC = () => {
  const cards = [
    {
      title: 'Python Development',
      description: 'Strengthening programming fundamentals and problem-solving skills.',
      icon: <Terminal className="w-5 h-5 text-blue-900" />,
      detail: 'Iterating on syntax precision, loops, algorithmic thinking, and clean modular code structures.',
    },
    {
      title: 'Web Development',
      description: 'Learning how to build responsive and interactive websites.',
      icon: <Globe className="w-5 h-5 text-blue-900" />,
      detail: 'Practicing responsive grid architectures, clean CSS styling rules, DOM events, and semantic HTML.',
    },
    {
      title: 'Generative AI',
      description: 'Understanding AI tools, prompting, LLM concepts, and AI-powered applications.',
      icon: <Sparkles className="w-5 h-5 text-blue-900" />,
      detail: 'Exploring how foundation models reason, system instructions, token economics, and structured outputs.',
    },
    {
      title: 'Artificial Intelligence',
      description: 'Building foundational knowledge for my future journey as an AI Engineer.',
      icon: <Brain className="w-5 h-5 text-blue-900" />,
      detail: 'Studying core linear algebra, discrete math concepts, and model lifecycle principles from the ground up.',
    },
  ];

  return (
    <section className="py-20 bg-[#fafaf9] border-t border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8">
          <div>
            <div className="text-xs font-semibold text-slate-500 tracking-wide">
              Learning in public • Building • Experimenting
            </div>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Currently Exploring
            </h2>
          </div>
          <p className="text-sm text-slate-600 max-w-md">
            Active domains where I dedicate deliberate practice hours alongside my B.Tech coursework.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between shadow-xs hover:border-slate-300 hover:shadow-md transition-all duration-150"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center mb-4">
                  {card.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  {card.title}
                </h3>
                <p className="mt-2 text-xs font-medium text-slate-700 leading-relaxed">
                  {card.description}
                </p>
                <p className="mt-2 text-[11px] text-slate-500 leading-normal">
                  {card.detail}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-blue-900 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                <span>Active Study</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
