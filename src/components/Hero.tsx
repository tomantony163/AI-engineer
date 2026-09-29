import React, { useState } from 'react';
import { ArrowDown, ArrowUpRight, Terminal, Sparkles, FolderGit2, BookOpen, Play, Image as ImageIcon, Check } from 'lucide-react';
import heroVisualPath from '../assets/images/hero_ai_workspace_1790679509279.jpg';

export const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'visual' | 'code'>('visual');
  const [isExecuting, setIsExecuting] = useState(false);
  const [hasExecuted, setHasExecuted] = useState(false);

  const handleRunScript = () => {
    setIsExecuting(true);
    setTimeout(() => {
      setIsExecuting(false);
      setHasExecuted(true);
    }, 700);
  };

  return (
    <section id="home" className="pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Introductions & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status Indicator - Clean unboxed typography (no pill) */}
            <div className="flex items-center gap-2.5 text-xs text-slate-600 font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
              </span>
              <span className="font-semibold text-slate-900">Currently learning:</span>
              <span>Python</span>
              <span className="text-slate-300" aria-hidden="true">·</span>
              <span>Web Development</span>
              <span className="text-slate-300" aria-hidden="true">·</span>
              <span>Generative AI</span>
            </div>

            {/* Main Headline with text-balance to prevent orphaned words */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1] [text-wrap:balance]">
                Hi, I'm <span className="text-blue-900">Tom Antony</span>.
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-slate-700 tracking-tight leading-snug [text-wrap:balance]">
                An Aspiring AI Engineer & B.Tech Computer Science Student.
              </p>
            </div>

            {/* Short Description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
              I'm a first-semester B.Tech student exploring Python, web development, Generative AI,
              and intelligent applications. I enjoy turning ideas into practical projects and learning
              through hackathons and ideathons.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-slate-900 hover:bg-blue-950 rounded-lg shadow-xs transition-all duration-150 group"
              >
                <span>View My Projects</span>
                <ArrowDown className="w-4 h-4 text-slate-300 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300/80 rounded-lg shadow-xs transition-colors"
              >
                <span>Connect With Me</span>
                <ArrowUpRight className="w-4 h-4 text-slate-500" />
              </a>
            </div>

            {/* Quick Micro-stats (Honest student markers) */}
            <div className="pt-6 border-t border-slate-200/80 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-500 font-medium">
              <div className="flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-blue-900" />
                <span>B.Tech Semester 1</span>
              </div>
              <span className="text-slate-300" aria-hidden="true">|</span>
              <div className="flex items-center gap-1.5">
                <FolderGit2 className="w-3.5 h-3.5 text-blue-900" />
                <span>3 Beginner Projects</span>
              </div>
              <span className="text-slate-300" aria-hidden="true">|</span>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-blue-900" />
                <span>Hackathon & Ideathon Learner</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Fidelity Developer & AI visual element */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                {/* Visual Header with Tab switchers */}
                <div className="flex items-center justify-between px-4 py-2.5 border-b border-slate-200 bg-slate-50/80">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setActiveTab('visual')}
                      className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-md transition-colors ${
                        activeTab === 'visual'
                          ? 'bg-white text-slate-900 shadow-xs'
                          : 'text-slate-500 hover:text-slate-800'
                      }`}
                    >
                      <ImageIcon className="w-3.5 h-3.5 text-blue-900" />
                      <span>AI Visual</span>
                    </button>
                    <button
                      onClick={() => setActiveTab('code')}
                      className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-md transition-colors ${
                        activeTab === 'code'
                          ? 'bg-white text-slate-900 shadow-xs'
                          : 'text-slate-500 hover:text-slate-800'
                      }`}
                    >
                      <Terminal className="w-3.5 h-3.5 text-blue-900" />
                      <span>Python Terminal</span>
                    </button>
                  </div>

                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
                    <span>student_dev_env</span>
                  </div>
                </div>

                {/* Tab 1: AI Workspace Visual */}
                {activeTab === 'visual' && (
                  <div className="relative">
                    <img
                      src={heroVisualPath}
                      alt="Minimalist AI and computer science developer workspace with neural network lines"
                      referrerPolicy="no-referrer"
                      className="w-full h-64 object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent flex flex-col justify-end p-4 text-white">
                      <div className="flex items-center gap-2 text-xs font-mono text-blue-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                        <span>AI & Software Foundations</span>
                      </div>
                      <p className="text-sm font-semibold text-white mt-0.5">
                        Building practical AI & web prototypes from 1st semester.
                      </p>
                    </div>
                  </div>
                )}

                {/* Tab 2: Interactive Python Code */}
                {activeTab === 'code' && (
                  <div className="p-4 bg-slate-900 text-slate-100 font-mono text-xs leading-relaxed overflow-x-auto min-h-[16rem] flex flex-col justify-between">
                    <div className="space-y-1 text-[11px] sm:text-xs">
                      <div>
                        <span className="text-blue-400 font-semibold">class</span>{' '}
                        <span className="text-amber-300">TomAntony</span>:
                      </div>
                      <div className="pl-3">
                        <span className="text-blue-400">def</span>{' '}
                        <span className="text-amber-200">__init__</span>(self):
                      </div>
                      <div className="pl-6 text-slate-300">
                        self.role = <span className="text-emerald-400">"Aspiring AI Engineer"</span>
                      </div>
                      <div className="pl-6 text-slate-300">
                        self.education = <span className="text-emerald-400">"B.Tech 1st Semester"</span>
                      </div>
                      <div className="pl-6 text-slate-300">
                        self.focus = [<span className="text-emerald-400">"Python"</span>, <span className="text-emerald-400">"GenAI"</span>, <span className="text-emerald-400">"Web"</span>]
                      </div>
                      <div className="pl-3 pt-1">
                        <span className="text-blue-400">def</span>{' '}
                        <span className="text-amber-200">mission</span>(self):
                      </div>
                      <div className="pl-6 text-slate-300">
                        <span className="text-blue-400">return</span> <span className="text-emerald-400">"Practical, intelligent problem solving."</span>
                      </div>
                    </div>

                    {/* Execution output */}
                    <div className="mt-3 pt-2.5 border-t border-slate-800">
                      {isExecuting ? (
                        <div className="text-[11px] text-blue-300 animate-pulse">
                          &gt; python3 profile_init.py --executing...
                        </div>
                      ) : hasExecuted ? (
                        <div className="text-[11px] text-emerald-400 space-y-0.5">
                          <div>&gt; [SUCCESS] Initialized profile: Tom Antony</div>
                          <div className="text-slate-400">Status: Active learner · Semester 1</div>
                        </div>
                      ) : (
                        <div className="text-[11px] text-slate-500">
                          Click "Run Code" below to test terminal execution.
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Bottom Bar inside the card */}
                <div className="px-4 py-3 bg-white border-t border-slate-100 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 text-slate-600">
                    <span className="inline-block w-2 h-2 rounded-full bg-emerald-600" />
                    <span className="font-medium text-slate-800">status: active learner</span>
                    <span className="text-slate-300">·</span>
                    <span className="text-slate-500 font-mono text-[11px]">sem: 01 / 08</span>
                  </div>

                  {activeTab === 'code' ? (
                    <button
                      onClick={handleRunScript}
                      disabled={isExecuting}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-slate-900 hover:bg-blue-950 rounded-md transition-colors"
                    >
                      {hasExecuted ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Play className="w-3.5 h-3.5" />}
                      <span>{hasExecuted ? 'Re-run' : 'Run Code'}</span>
                    </button>
                  ) : (
                    <button
                      onClick={() => setActiveTab('code')}
                      className="text-xs font-semibold text-blue-900 hover:text-blue-950"
                    >
                      View Code →
                    </button>
                  )}
                </div>
              </div>

              {/* Subtitle caption */}
              <p className="mt-3 text-center text-xs text-slate-500">
                Clean fundamentals · Continuous curiosity · Hands-on execution
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
