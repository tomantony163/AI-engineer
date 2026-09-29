import React, { useState } from 'react';
import { X, Play, Terminal, CheckCircle2, AlertCircle, FileCode, Sparkles } from 'lucide-react';

export interface ProjectData {
  id: string;
  number: string;
  title: string;
  category: string;
  technology: string;
  description: string;
  detailedOverview: string;
  keyConcepts: string[];
  pythonCode: string;
  demoType: 'voter' | 'atm' | 'grade';
}

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  // Active view tab in modal: "code" | "demo" | "overview"
  const [activeTab, setActiveTab] = useState<'demo' | 'code' | 'overview'>('demo');

  // Voter simulation state
  const [voterAge, setVoterAge] = useState<string>('18');
  const [voterResult, setVoterResult] = useState<string | null>(null);

  // ATM simulation state
  const [atmBalance, setAtmBalance] = useState<number>(5000);
  const [atmAmount, setAtmAmount] = useState<string>('500');
  const [atmPin, setAtmPin] = useState<string>('1234');
  const [atmMessage, setAtmMessage] = useState<string | null>(null);
  const [atmError, setAtmError] = useState<boolean>(false);

  // Grade calculator state
  const [m1, setM1] = useState<string>('85');
  const [m2, setM2] = useState<string>('90');
  const [m3, setM3] = useState<string>('78');
  const [gradeResult, setGradeResult] = useState<{
    avg: number;
    grade: string;
    status: string;
  } | null>(null);

  // Handlers
  const handleCheckVoter = (e: React.FormEvent) => {
    e.preventDefault();
    const age = parseInt(voterAge, 10);
    if (isNaN(age) || age < 0) {
      setVoterResult('Please enter a valid non-negative age.');
      return;
    }
    if (age >= 18) {
      setVoterResult(`Eligible to vote! (Age: ${age} >= 18). You satisfy legal voting requirements.`);
    } else {
      const wait = 18 - age;
      setVoterResult(`Not eligible yet. (Age: ${age} < 18). You can register to vote in ${wait} year${wait > 1 ? 's' : ''}.`);
    }
  };

  const handleAtmAction = (type: 'check' | 'deposit' | 'withdraw') => {
    if (atmPin !== '1234') {
      setAtmError(true);
      setAtmMessage('Invalid PIN. (Default demo PIN is 1234)');
      return;
    }
    setAtmError(false);
    if (type === 'check') {
      setAtmMessage(`Your current account balance is ₹${atmBalance.toLocaleString()}.`);
      return;
    }
    const val = parseFloat(atmAmount);
    if (isNaN(val) || val <= 0) {
      setAtmError(true);
      setAtmMessage('Please enter a valid positive amount.');
      return;
    }
    if (type === 'deposit') {
      const newBal = atmBalance + val;
      setAtmBalance(newBal);
      setAtmMessage(`Successfully deposited ₹${val.toLocaleString()}. New balance: ₹${newBal.toLocaleString()}.`);
    } else if (type === 'withdraw') {
      if (val > atmBalance) {
        setAtmError(true);
        setAtmMessage(`Insufficient funds! Requested ₹${val.toLocaleString()}, but available balance is ₹${atmBalance.toLocaleString()}.`);
      } else {
        const newBal = atmBalance - val;
        setAtmBalance(newBal);
        setAtmMessage(`Successfully withdrawn ₹${val.toLocaleString()}. Remaining balance: ₹${newBal.toLocaleString()}.`);
      }
    }
  };

  const handleComputeGrade = (e: React.FormEvent) => {
    e.preventDefault();
    const num1 = parseFloat(m1);
    const num2 = parseFloat(m2);
    const num3 = parseFloat(m3);
    if (isNaN(num1) || isNaN(num2) || isNaN(num3) || num1 < 0 || num2 < 0 || num3 < 0 || num1 > 100 || num2 > 100 || num3 > 100) {
      alert('Please enter valid marks between 0 and 100 for all subjects.');
      return;
    }
    const avg = (num1 + num2 + num3) / 3;
    let grade = 'F';
    let status = 'Needs Improvement';
    if (avg >= 90) {
      grade = 'A+';
      status = 'Outstanding Distinction';
    } else if (avg >= 80) {
      grade = 'A';
      status = 'Excellent';
    } else if (avg >= 70) {
      grade = 'B';
      status = 'Good';
    } else if (avg >= 60) {
      grade = 'C';
      status = 'Satisfactory';
    } else if (avg >= 50) {
      grade = 'D';
      status = 'Pass';
    } else {
      grade = 'F';
      status = 'Fail';
    }
    setGradeResult({ avg: Math.round(avg * 10) / 10, grade, status });
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-xs overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-1">
              <span>PROJECT {project.number}</span>
              <span aria-hidden="true">·</span>
              <span className="text-blue-900">{project.category}</span>
              <span aria-hidden="true">·</span>
              <span>{project.technology}</span>
            </div>
            <h3 className="text-2xl font-bold tracking-tight text-slate-900">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors focus:outline-none"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center px-6 pt-3 border-b border-slate-100 bg-slate-50 gap-2">
          <button
            onClick={() => setActiveTab('demo')}
            className={`flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold border-b-2 transition-colors ${
              activeTab === 'demo'
                ? 'border-blue-900 text-blue-900 bg-white'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <Play className="w-3.5 h-3.5" />
            <span>Interactive Simulator</span>
          </button>
          <button
            onClick={() => setActiveTab('code')}
            className={`flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold border-b-2 transition-colors ${
              activeTab === 'code'
                ? 'border-blue-900 text-blue-900 bg-white'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <FileCode className="w-3.5 h-3.5" />
            <span>Python Source Code</span>
          </button>
          <button
            onClick={() => setActiveTab('overview')}
            className={`flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold border-b-2 transition-colors ${
              activeTab === 'overview'
                ? 'border-blue-900 text-blue-900 bg-white'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>Concepts & Architecture</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[68vh] overflow-y-auto">
          {/* TAB 1: INTERACTIVE SIMULATOR */}
          {activeTab === 'demo' && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-100 text-xs text-blue-950 flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-blue-900 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold">Interactive Browser Sandbox:</span> Test the exact Python
                  conditional algorithms live in your browser to verify edge cases and output handling.
                </div>
              </div>

              {/* Voter Simulator */}
              {project.demoType === 'voter' && (
                <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 space-y-4">
                  <h4 className="text-sm font-bold text-slate-900">Voter Eligibility Simulation</h4>
                  <form onSubmit={handleCheckVoter} className="space-y-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Enter Citizen Age (Years):
                      </label>
                      <input
                        type="number"
                        min="0"
                        max="120"
                        value={voterAge}
                        onChange={(e) => setVoterAge(e.target.value)}
                        className="w-full sm:w-48 px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:outline-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-blue-950 rounded-lg transition-colors"
                    >
                      Evaluate Eligibility
                    </button>
                  </form>

                  {voterResult && (
                    <div className="mt-4 p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div className="text-xs font-mono text-slate-800">{voterResult}</div>
                    </div>
                  )}
                </div>
              )}

              {/* ATM Simulator */}
              {project.demoType === 'atm' && (
                <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">ATM Console Simulation</h4>
                      <p className="text-xs text-slate-500">Security PIN: 1234 (Demo default)</p>
                    </div>
                    <div className="text-right">
                      <span className="text-[11px] text-slate-500 uppercase tracking-wide">Balance</span>
                      <p className="text-base font-bold font-mono text-slate-900">
                        ₹{atmBalance.toLocaleString()}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        ATM PIN:
                      </label>
                      <input
                        type="password"
                        maxLength={4}
                        value={atmPin}
                        onChange={(e) => setAtmPin(e.target.value)}
                        className="w-full px-3 py-2 text-sm font-mono bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:outline-none"
                        placeholder="1234"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Amount (₹):
                      </label>
                      <input
                        type="number"
                        min="100"
                        step="100"
                        value={atmAmount}
                        onChange={(e) => setAtmAmount(e.target.value)}
                        className="w-full px-3 py-2 text-sm font-mono bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-1">
                    <button
                      onClick={() => handleAtmAction('check')}
                      className="px-3.5 py-2 text-xs font-semibold text-slate-800 bg-white border border-slate-300 rounded-lg hover:bg-slate-100 transition-colors"
                    >
                      Check Balance
                    </button>
                    <button
                      onClick={() => handleAtmAction('deposit')}
                      className="px-3.5 py-2 text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-lg hover:bg-emerald-100 transition-colors"
                    >
                      Deposit Cash
                    </button>
                    <button
                      onClick={() => handleAtmAction('withdraw')}
                      className="px-3.5 py-2 text-xs font-semibold text-blue-900 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 transition-colors"
                    >
                      Withdraw Cash
                    </button>
                  </div>

                  {atmMessage && (
                    <div
                      className={`p-3.5 rounded-xl border flex items-start gap-2.5 text-xs font-mono ${
                        atmError
                          ? 'bg-rose-50 border-rose-200 text-rose-800'
                          : 'bg-emerald-50 border-emerald-200 text-emerald-800'
                      }`}
                    >
                      {atmError ? (
                        <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                      ) : (
                        <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                      )}
                      <span>{atmMessage}</span>
                    </div>
                  )}
                </div>
              )}

              {/* Grade Simulator */}
              {project.demoType === 'grade' && (
                <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 space-y-4">
                  <h4 className="text-sm font-bold text-slate-900">Student Grade Evaluation</h4>
                  <form onSubmit={handleComputeGrade} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1">
                          Subject 1 Marks:
                        </label>
                        <input
                          type="number"
                          min="0"
                          max="100"
                          value={m1}
                          onChange={(e) => setM1(e.target.value)}
                          className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1">
                          Subject 2 Marks:
                        </label>
                        <input
                          type="number"
                          min="0"
                          max="100"
                          value={m2}
                          onChange={(e) => setM2(e.target.value)}
                          className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1">
                          Subject 3 Marks:
                        </label>
                        <input
                          type="number"
                          min="0"
                          max="100"
                          value={m3}
                          onChange={(e) => setM3(e.target.value)}
                          className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:outline-none"
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-blue-950 rounded-lg transition-colors"
                    >
                      Calculate Grade Breakdown
                    </button>
                  </form>

                  {gradeResult && (
                    <div className="mt-4 p-4 rounded-xl bg-white border border-slate-200">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-xs text-slate-500">Average Score</span>
                          <p className="text-lg font-bold font-mono text-slate-900">
                            {gradeResult.avg} / 100
                          </p>
                        </div>
                        <div className="text-right">
                          <span className="text-xs text-slate-500">Letter Grade</span>
                          <p className="text-lg font-bold text-blue-900 font-mono">
                            Grade {gradeResult.grade}
                          </p>
                        </div>
                      </div>
                      <div className="mt-2 pt-2 border-t border-slate-100 text-xs font-medium text-slate-600">
                        Academic Remark: <span className="text-slate-900 font-semibold">{gradeResult.status}</span>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* TAB 2: PYTHON SOURCE CODE */}
          {activeTab === 'code' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span className="font-mono">main.py (Python 3)</span>
                <span>Plain text / executable</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-900 text-slate-100 font-mono text-xs leading-relaxed overflow-x-auto">
                <pre>{project.pythonCode}</pre>
              </div>
            </div>
          )}

          {/* TAB 3: CONCEPTS & ARCHITECTURE */}
          {activeTab === 'overview' && (
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-bold text-slate-900">Project Overview</h4>
                <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
                  {project.detailedOverview}
                </p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-slate-900">Core Concepts Mastered</h4>
                <ul className="mt-2 space-y-1.5">
                  {project.keyConcepts.map((concept, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-900 shrink-0" />
                      <span>{concept}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer with specified status */}
        <div className="flex items-center justify-between p-4 px-6 bg-slate-50 border-t border-slate-200">
          <div className="text-xs text-slate-500 font-medium">
            Status:{' '}
            <span className="text-slate-800 font-semibold">
              Project link coming soon
            </span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-100 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
