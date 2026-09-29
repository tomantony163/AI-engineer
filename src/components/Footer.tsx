import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-10 bg-slate-900 text-slate-400 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Main Footer Text */}
          <div className="text-xs sm:text-sm text-slate-400 text-center sm:text-left">
            <span>© 2026 Tom Antony. Built with curiosity, code, and continuous learning.</span>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-6 text-xs font-medium">
            <a
              href="https://www.linkedin.com/in/tom-antony-417033431"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <span className="text-slate-700" aria-hidden="true">|</span>
            <a
              href="https://github.com/tomantony163"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-white transition-colors"
            >
              GitHub
            </a>
            <span className="text-slate-700" aria-hidden="true">|</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
