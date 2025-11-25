import React from 'react';
import { View } from '../types';
import { BookOpen, HelpCircle, Layers, FileText, BrainCircuit, Menu, X } from 'lucide-react';

interface SidebarProps {
  currentView: View;
  setView: (view: View) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, setView, isOpen, setIsOpen }) => {
  const navItems = [
    { view: View.STUDY_GUIDE, label: "Study Guide", icon: <BookOpen size={20} /> },
    { view: View.FLASHCARDS, label: "Flashcards", icon: <Layers size={20} /> },
    { view: View.QUIZ, label: "Practice Quiz", icon: <HelpCircle size={20} /> },
    { view: View.CHEAT_SHEET, label: "Cheat Sheet", icon: <FileText size={20} /> },
    { view: View.AI_TUTOR, label: "AI Tutor", icon: <BrainCircuit size={20} /> },
  ];

  const handleNav = (view: View) => {
    setView(view);
    setIsOpen(false); // Close mobile menu on select
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button 
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-slate-800 text-white rounded-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar Container */}
      <div className={`
        fixed inset-y-0 left-0 z-40 w-64 bg-slate-900 text-slate-100 transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0 md:static md:inset-0
      `}>
        <div className="p-6 border-b border-slate-700">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
            SageMaster
          </h1>
          <p className="text-xs text-slate-400 mt-1">AWS ML Engineer Associate</p>
        </div>

        <nav className="p-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.view}
              onClick={() => handleNav(item.view)}
              className={`
                w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors
                ${currentView === item.view 
                  ? 'bg-orange-600 text-white shadow-lg shadow-orange-900/50' 
                  : 'text-slate-400 hover:bg-slate-800 hover:text-white'}
              `}
            >
              {item.icon}
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>
        
        <div className="absolute bottom-0 w-full p-4 border-t border-slate-700">
          <div className="text-xs text-slate-500 text-center">
            Based on Official Study Guide
          </div>
        </div>
      </div>
      
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
