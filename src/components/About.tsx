import React from 'react';
import { GraduationCap, Code, Cpu, Lightbulb, Compass, Wrench } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white border-y border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold tracking-wider uppercase text-blue-900">
            Background & Purpose
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            About Me
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            I'm currently pursuing my B.Tech and building my foundation in computer science,
            programming, web technologies, and artificial intelligence. As a first-semester student,
            my focus is on learning by building projects, participating in hackathons and ideathons,
            and exploring how AI can solve practical problems.
          </p>
        </div>

        {/* Highlighted Mentions Grid */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs sm:text-sm text-slate-700">
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 flex items-center gap-2.5">
            <GraduationCap className="w-4 h-4 text-blue-900 shrink-0" />
            <span className="font-medium">B.Tech 1st Semester</span>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 flex items-center gap-2.5">
            <Cpu className="w-4 h-4 text-blue-900 shrink-0" />
            <span className="font-medium">Aspiring AI Engineer</span>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 flex items-center gap-2.5">
            <Code className="w-4 h-4 text-blue-900 shrink-0" />
            <span className="font-medium">Python & Web Learner</span>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 flex items-center gap-2.5">
            <Lightbulb className="w-4 h-4 text-blue-900 shrink-0" />
            <span className="font-medium">Hackathon Participant</span>
          </div>
        </div>

        {/* 3 Information Cards as specified */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Learning */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-slate-300 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-blue-900 mb-4">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Learning</h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed font-medium">
              Python • Web Development • Generative AI
            </p>
            <p className="mt-3 text-xs text-slate-500 leading-normal">
              Focusing on core syntax, algorithms, data structures, and web fundamentals to construct solid engineering intuition.
            </p>
          </div>

          {/* Card 2: Building */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-slate-300 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-blue-900 mb-4">
              <Wrench className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Building</h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed font-medium">
              Beginner-level practical projects
            </p>
            <p className="mt-3 text-xs text-slate-500 leading-normal">
              Writing terminal logic programs, calculators, and interactive web tools to validate theoretical knowledge with working code.
            </p>
          </div>

          {/* Card 3: Exploring */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-slate-300 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-blue-900 mb-4">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Exploring</h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed font-medium">
              AI-powered applications & emerging technologies
            </p>
            <p className="mt-3 text-xs text-slate-500 leading-normal">
              Investigating Large Language Model concepts, prompt craft, intelligent system integration, and collaborative hackathon prototypes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
