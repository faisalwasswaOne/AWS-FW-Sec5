import React, { useState, useRef, useEffect } from 'react';
import { askTutor } from '../services/gemini';
import { Send, Bot, User, Loader2 } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  text: string;
}

const AITutor: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', text: "Hello! I'm your AWS SageMaker Tutor. Ask me anything about built-in algorithms, input formats, or exam tips." }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: Message = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    const response = await askTutor(userMsg.text);
    
    setMessages(prev => [...prev, { role: 'assistant', text: response }]);
    setLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="max-w-3xl mx-auto h-[calc(100vh-140px)] flex flex-col bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="p-4 border-b border-slate-100 bg-slate-50 flex items-center space-x-2">
        <Bot className="text-orange-600" />
        <h3 className="font-bold text-slate-800">SageMaker AI Tutor</h3>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4" ref={scrollRef}>
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`
              max-w-[80%] rounded-2xl p-4 text-sm leading-relaxed
              ${msg.role === 'user' 
                ? 'bg-slate-900 text-white rounded-tr-none' 
                : 'bg-slate-100 text-slate-800 rounded-tl-none'}
            `}>
              {msg.text.split('\n').map((line, i) => (
                <p key={i} className="mb-1 last:mb-0">{line}</p>
              ))}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-slate-100 rounded-2xl p-4 rounded-tl-none flex items-center space-x-2">
              <Loader2 className="animate-spin text-slate-400" size={16} />
              <span className="text-slate-400 text-sm">Thinking...</span>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 border-t border-slate-100">
        <div className="relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Ask about XGBoost hyperparameters..."
            className="w-full pl-4 pr-12 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
          />
          <button
            onClick={handleSend}
            disabled={loading || !input.trim()}
            className="absolute right-2 top-2 p-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AITutor;
