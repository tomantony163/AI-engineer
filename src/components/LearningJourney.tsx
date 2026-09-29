import React from 'react';
import { CheckCircle2, Target } from 'lucide-react';

export const LearningJourney: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Starting with Programming',
      description:
        'Building fundamentals in Python, programming logic, conditions, loops, functions, and problem solving.',
      status: 'In Progress',
    },
    {
      num: '02',
      title: 'Exploring Web Development',
      description:
        'Learning how websites are structured and how HTML, CSS, and JavaScript work together.',
      status: 'Active',
    },
    {
      num: '03',
      title: 'Discovering Generative AI',
      description:
        'Exploring the fundamentals of Generative AI and learning how AI can be integrated into useful applications.',
      status: 'Active',
    },
    {
      num: '04',
      title: 'Building Through Projects',
      description:
        'Applying classroom concepts by creating small practical projects.',
      status: 'Ongoing',
    },
    {
      num: '05',
      title: 'Exploring Hackathons & Ideathons',
      description:
        'Learning to transform ideas into prototypes and technology-based solutions.',
      status: 'Participating',
    },
    {
      num: '06',
      title: 'Future Goal',
      description:
        'Develop stronger foundations in Artificial Intelligence and eventually build intelligent, useful applications.',
      status: 'Milestone Ahead',
      isGoal: true,
    },
  ];

  return (
    <section id="journey" className="py-20 bg-white border-t border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold tracking-wider uppercase text-blue-900">
            Roadmap
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            My Learning Journey
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            A step-by-step reflection of my path as a first-semester computer science student—from first
            lines of Python code to long-term artificial intelligence aspirations.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className={`p-6 rounded-2xl border transition-all duration-200 flex flex-col justify-between ${
                step.isGoal
                  ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                  : 'bg-white border-slate-200 hover:border-slate-300 shadow-xs'
              }`}
            >
              <div>
                {/* Clean unboxed header with editorial number */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-100/20">
                  <span
                    className={`font-mono font-bold text-sm ${
                      step.isGoal ? 'text-blue-300' : 'text-blue-900'
                    }`}
                  >
                    STEP {step.num}
                  </span>
                  <span
                    className={`text-xs ${
                      step.isGoal ? 'text-slate-300' : 'text-slate-500'
                    }`}
                  >
                    {step.status}
                  </span>
                </div>

                <h3
                  className={`mt-4 text-lg font-bold tracking-tight ${
                    step.isGoal ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  {step.title}
                </h3>

                <p
                  className={`mt-2 text-sm leading-relaxed ${
                    step.isGoal ? 'text-slate-300' : 'text-slate-600'
                  }`}
                >
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-3 flex items-center gap-1.5 text-xs">
                {step.isGoal ? (
                  <div className="flex items-center gap-1.5 text-blue-300 font-medium">
                    <Target className="w-3.5 h-3.5" />
                    <span>Long-Term Horizon</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-1.5 text-slate-500">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Currently progressing</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
