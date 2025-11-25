import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import StudyGuide from './components/StudyGuide';
import Quiz from './components/Quiz';
import Flashcards from './components/Flashcards';
import CheatSheet from './components/CheatSheet';
import AITutor from './components/AITutor';
import { View } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.STUDY_GUIDE);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const renderView = () => {
    switch (currentView) {
      case View.STUDY_GUIDE: return <StudyGuide />;
      case View.QUIZ: return <Quiz />;
      case View.FLASHCARDS: return <Flashcards />;
      case View.CHEAT_SHEET: return <CheatSheet />;
      case View.AI_TUTOR: return <AITutor />;
      default: return <StudyGuide />;
    }
  };

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden">
      <Sidebar 
        currentView={currentView} 
        setView={setCurrentView} 
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />
      
      <main className="flex-1 overflow-y-auto w-full relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          {renderView()}
        </div>
      </main>
    </div>
  );
};

export default App;
