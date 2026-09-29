import React, { useState } from 'react';
import { Code2, Globe, Cpu, Wrench } from 'lucide-react';

interface SkillItem {
  name: string;
  stage?: string;
  description: string;
}

interface SkillCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  skills: SkillItem[];
}

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const categories: SkillCategory[] = [
    {
      id: 'programming',
      name: 'Programming',
      icon: <Code2 className="w-4 h-4 text-blue-900" />,
      description: 'Core logic, data structures, and algorithmic foundations',
      skills: [
        {
          name: 'Python',
          stage: 'Developing',
          description: 'Core syntax, conditionals, loops, functions, lists, and problem solving',
        },
      ],
    },
    {
      id: 'web',
      name: 'Web Development',
      icon: <Globe className="w-4 h-4 text-blue-900" />,
      description: 'Constructing semantic, responsive, and accessible web experiences',
      skills: [
        {
          name: 'HTML',
          description: 'Semantic markup, accessibility basics, and page structure',
        },
        {
          name: 'CSS',
          description: 'Styling, layout models (Flexbox, Grid), and typography',
        },
        {
          name: 'JavaScript',
          stage: 'Learning',
          description: 'DOM manipulation, basic event handling, and logic scripting',
        },
        {
          name: 'Responsive Web Design',
          description: 'Mobile-first adaptation, viewport flexibility, and fluid layout',
        },
      ],
    },
    {
      id: 'ai',
      name: 'AI & Emerging Technology',
      icon: <Cpu className="w-4 h-4 text-blue-900" />,
      description: 'Foundational concepts in artificial intelligence & modern model interactions',
      skills: [
        {
          name: 'Generative AI',
          stage: 'Beginner',
          description: 'Understanding LLM capabilities, tokens, and multimodal generation',
        },
        {
          name: 'AI Concepts',
          description: 'Core principles of machine learning, neural networks, and inference',
        },
        {
          name: 'Prompt Engineering',
          description: 'Zero-shot, few-shot prompting, and structured context framing',
        },
        {
          name: 'AI-powered Applications',
          description: 'Exploring how API integrations transform manual workflows into smart tools',
        },
      ],
    },
    {
      id: 'tools',
      name: 'Tools & Workflow',
      icon: <Wrench className="w-4 h-4 text-blue-900" />,
      description: 'Development environment, version control, and collaboration tools',
      skills: [
        {
          name: 'Git',
          description: 'Local repository management, commits, branching, and version history',
        },
        {
          name: 'GitHub',
          description: 'Remote repository hosting, issue tracking, and open source collaboration',
        },
        {
          name: 'VS Code',
          description: 'Primary code editor, extensions, terminal integration, and debugging',
        },
      ],
    },
  ];

  const filteredCategories =
    activeTab === 'all'
      ? categories
      : categories.filter((cat) => cat.id === activeTab);

  return (
    <section id="skills" className="py-20 bg-[#fafaf9]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-slate-200/80">
          <div>
            <span className="text-xs font-semibold tracking-wider uppercase text-blue-900">
              Technical Foundations
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Tech Stack & Skills
            </h2>
            <p className="mt-3 text-base text-slate-600 max-w-xl">
              An honest overview of technologies I am actively studying, practicing, and building with
              as a first-year student.
            </p>
          </div>

          {/* Interactive filter tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-200/60 rounded-xl">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                activeTab === 'all'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Skills
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                  activeTab === cat.id
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-slate-100">
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900">
                        {category.name}
                      </h3>
                      <p className="text-xs text-slate-500">{category.description}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-5 space-y-3.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-100/90 hover:bg-slate-50 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-slate-900">
                          {skill.name}
                        </span>
                        {skill.stage && (
                          <span className="text-xs font-medium text-blue-900">
                            {skill.stage}
                          </span>
                        )}
                      </div>
                      <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
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
