import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, X, Send, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, ACHIEVEMENTS } from '../data/portfolioData';
import { sounds } from '../utils/audio';

interface AITerminalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
}

interface LogEntry {
  id: string;
  type: 'user' | 'system' | 'ai';
  text: string;
}

export const AITerminal: React.FC<AITerminalProps> = ({ isOpen, onClose, onOpenResume }) => {
  const [input, setInput] = useState('');
  const [logs, setLogs] = useState<LogEntry[]>([
    {
      id: 'init-1',
      type: 'system',
      text: `[SYSTEM OK] Krishna Paswan AI Assistant v2.6.0 initialized.`
    },
    {
      id: 'init-2',
      type: 'system',
      text: `Type 'help' or click any quick command below to query Krishna's profile, hackathons, or projects.`
    }
  ]);

  const endOfLogsRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  useEffect(() => {
    endOfLogsRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  if (!isOpen) return null;

  const handleCommand = (cmdStr: string) => {
    const raw = cmdStr.trim();
    if (!raw) return;

    sounds.playBeep(700, 0.04, 'square');

    const newLogs: LogEntry[] = [...logs, { id: Date.now().toString(), type: 'user', text: raw }];
    const lower = raw.toLowerCase();

    if (lower === 'clear') {
      setLogs([
        { id: Date.now().toString(), type: 'system', text: 'Terminal cleared.' }
      ]);
      setInput('');
      return;
    }

    let responseText = '';

    if (lower === 'help') {
      responseText = `Available Commands:\n- 'summary': High-level profile & remote internship availability\n- 'projects': Shipped Generative AI & Analytics applications\n- 'skills': Technical stack (Gemini API, FastAPI, FAISS, SQL, Python)\n- 'hackathons': National & International hackathon achievements\n- 'contact': Direct email, phone, and social channels\n- 'resume': Open interactive resume viewer\n- 'clear': Clear terminal log buffer`;
    } else if (lower === 'summary') {
      responseText = `KRISHNA PASWAN SUMMARY:\n${PERSONAL_INFO.bio}\nLocation: ${PERSONAL_INFO.location}\nStatus: ${PERSONAL_INFO.status}`;
    } else if (lower === 'projects') {
      responseText = PROJECTS.map(
        (p) => `• ${p.title} (${p.category}): ${p.subtitle}\n  Stack: ${p.tags.join(', ')}\n  Live: ${p.liveUrl || 'N/A'}`
      ).join('\n\n');
    } else if (lower === 'skills') {
      responseText = `CORE TECHNICAL STACK:\n- Generative AI: Gemini API, LangChain, FAISS Vector Search, RAG, Prompt Engineering\n- Languages/Frameworks: Python (Pandas/NumPy), FastAPI, Next.js, SQL, MySQL, HTML/CSS\n- Data Science: Power BI, DAX, Tableau, EDA, Advanced Excel (Pivot/GETPIVOTDATA)\n- Upskilling: Open-Source AI LoRA fine-tuning, Model Context Protocol (MCP), Ethical Hacking`;
    } else if (lower === 'hackathons') {
      responseText = ACHIEVEMENTS.map(
        (a) => `🏆 ${a.title}\n  Organized by: ${a.organizer} (${a.year})\n  Rank: ${a.rank} | ${a.location}`
      ).join('\n\n');
    } else if (lower === 'contact') {
      responseText = `CONTACT DETAILS:\n- Email: ${PERSONAL_INFO.email}\n- Phone: ${PERSONAL_INFO.phone}\n- GitHub: ${PERSONAL_INFO.github}\n- LinkedIn: ${PERSONAL_INFO.linkedin}`;
    } else if (lower === 'resume') {
      onOpenResume();
      responseText = `Opening Krishna's interactive resume modal...`;
    } else if (lower.includes('hireresumeai') || lower.includes('ats')) {
      responseText = `HireResumeAI is an AI-Powered Resume Optimizer & ATS Analyzer shipped to Vercel (https://hire-resume-ai.vercel.app).\nBuilt with FastAPI backend, Gemini API via LangChain, and FAISS vector search to perform skill gap analysis and generate tailored rewrite suggestions.`;
    } else if (lower.includes('raksha') || lower.includes('safety')) {
      responseText = `Raksha AI is a Women's Emergency Command Center that earned Top 15 National Finalist position among 16,000+ competing teams at AI for Bharat Hackathon 2026.\nLive URL: https://raksha-ai-command-center.vercel.app`;
    } else if (lower.includes('hire') || lower.includes('job') || lower.includes('remote')) {
      responseText = `WHY HIRE KRISHNA PASWAN?\n1. Proven track record of shipping end-to-end Gen AI apps with Gemini API, FastAPI, FAISS, and Next.js.\n2. National Hackathon Finalist outperforming 16,000+ teams nationwide.\n3. Certified Data Scientist with strong Python, SQL, and Power BI analytics capabilities.\n4. Available immediately for 100% remote roles/internships.`;
    } else {
      // Natural language conversational fallback response
      responseText = `AI Response: Krishna is a skilled Generative AI Builder & Certified Data Scientist. He specializes in Python, FastAPI, Gemini API, LangChain, FAISS, and Next.js. Try typing 'projects', 'skills', or 'summary' to explore more!`;
    }

    newLogs.push({
      id: (Date.now() + 1).toString(),
      type: 'ai',
      text: responseText
    });

    setLogs(newLogs);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-lg">
      <div className="w-full max-w-3xl rounded-2xl bg-[#0a0f1d] border border-indigo-500/40 shadow-2xl overflow-hidden flex flex-col h-[600px] max-h-[90vh]">
        
        {/* Terminal Header */}
        <div className="bg-[#0f172a] px-4 py-3 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-rose-500"></div>
            <div className="w-3 h-3 rounded-full bg-amber-500"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
            <span className="text-xs font-mono font-bold text-slate-300 ml-2 flex items-center space-x-1.5">
              <TerminalIcon className="w-3.5 h-3.5 text-indigo-400" />
              <span>krishna-ai-terminal -- bash</span>
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <span className="text-[11px] font-mono text-emerald-400 flex items-center space-x-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Online</span>
            </span>

            <button
              onClick={() => {
                sounds.playClick();
                onClose();
              }}
              className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Command Quick Buttons */}
        <div className="bg-[#090d16] px-4 py-2 border-b border-slate-800/80 flex items-center space-x-2 overflow-x-auto text-xs font-mono">
          <span className="text-slate-500 shrink-0">Quick Queries:</span>
          {['summary', 'projects', 'skills', 'hackathons', 'contact', 'resume', 'clear'].map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleCommand(cmd)}
              onMouseEnter={() => sounds.playHover()}
              className="px-2.5 py-1 rounded bg-slate-800/80 hover:bg-indigo-950 border border-slate-700/80 hover:border-indigo-500/50 text-indigo-300 transition-colors shrink-0"
            >
              ${cmd}
            </button>
          ))}
        </div>

        {/* Logs Output Area */}
        <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-4 terminal-font text-xs sm:text-sm">
          {logs.map((log) => (
            <div key={log.id} className="space-y-1">
              {log.type === 'user' ? (
                <div className="flex items-center space-x-2 text-cyan-400 font-semibold">
                  <span>krishna@ai-portfolio:~$</span>
                  <span className="text-white">{log.text}</span>
                </div>
              ) : log.type === 'system' ? (
                <div className="text-emerald-400/90 font-mono">
                  {log.text}
                </div>
              ) : (
                <div className="p-3.5 rounded-xl bg-indigo-950/40 border border-indigo-500/30 text-slate-200 whitespace-pre-wrap leading-relaxed">
                  {log.text}
                </div>
              )}
            </div>
          ))}
          <div ref={endOfLogsRef} />
        </div>

        {/* Input Bar */}
        <div className="p-3 sm:p-4 bg-[#090d16] border-t border-slate-800 flex items-center space-x-2">
          <span className="text-cyan-400 font-mono text-xs sm:text-sm shrink-0">
            krishna@ai-portfolio:~$
          </span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type 'help', 'projects', 'skills' or ask any question..."
            className="flex-1 bg-transparent border-none outline-none text-white text-xs sm:text-sm font-mono placeholder:text-slate-600"
          />
          <button
            onClick={() => handleCommand(input)}
            className="p-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white transition-colors"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
