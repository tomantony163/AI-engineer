import React from 'react';
import { Lightbulb, Code2, Users, Compass } from 'lucide-react';

export const Hackathons: React.FC = () => {
  const experiences = [
    {
      title: 'AI & Technology Exploration',
      description: 'Exploring AI-powered solutions and practical applications.',
      detail:
        'Focusing on how language models and programmatic logic can automate repetitive student workflows and streamline data interpretation.',
      icon: <Compass className="w-5 h-5 text-blue-900" />,
      focusArea: 'Technology Focus',
    },
    {
      title: 'Hackathon Experience',
      description: 'Participating in technology-focused hackathons and developing prototype ideas.',
      detail:
        'Engaging in fast-paced collaborative development sessions, learning rapid brainstorming, Git teamwork, and transforming concepts into working minimum viable prototypes.',
      icon: <Code2 className="w-5 h-5 text-blue-900" />,
      focusArea: 'Hands-on Building',
    },
    {
      title: 'Ideathon Experience',
      description: 'Working on innovative concepts focused on solving real-world and social problems.',
      detail:
        'Structuring problem statements, analyzing user pain points, pitching tech-enabled solutions, and evaluating feasibility for community and academic impact.',
      icon: <Users className="w-5 h-5 text-blue-900" />,
      focusArea: 'Problem Solving & Ideation',
    },
  ];

  return (
    <section id="experience" className="py-20 bg-[#fafaf9] border-t border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold tracking-wider uppercase text-blue-900">
            Collaborative Innovation
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Hackathons & Ideathons
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            I enjoy exploring ideas beyond the classroom through hackathons and ideathons, where I can
            experiment with technology, collaborate with others, and think about practical solutions to
            real-world problems.
          </p>
        </div>

        {/* Timeline-style cards */}
        <div className="mt-12 relative">
          {/* Vertical subtle indicator line for desktop */}
          <div
            className="hidden md:block absolute left-8 top-4 bottom-4 w-px bg-slate-200"
            aria-hidden="true"
          />

          <div className="space-y-8">
            {experiences.map((item, index) => (
              <div
                key={item.title}
                className="relative flex flex-col md:flex-row items-start gap-6 group"
              >
                {/* Timeline node icon */}
                <div className="z-10 w-16 h-16 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-center justify-center shrink-0 group-hover:border-slate-300 transition-colors">
                  {item.icon}
                </div>

                {/* Content Card */}
                <div className="flex-1 w-full bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:shadow-md transition-shadow">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-3 border-b border-slate-100">
                    <span className="text-xs font-semibold text-blue-900">
                      {item.focusArea}
                    </span>
                    <span className="text-xs text-slate-400">
                      College Exploration Phase
                    </span>
                  </div>

                  <h3 className="mt-3 text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm font-medium text-slate-700 leading-relaxed">
                    {item.description}
                  </p>

                  <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
