import React, { useState } from 'react';
import { chapters } from '../data/studyContent';
import { ChevronLeft, ChevronRight, RotateCw } from 'lucide-react';

interface CardData {
  id: number;
  category: string;
  front: string;
  back: string;
}

const Flashcards: React.FC = () => {
  // Generate cards from chapter key points and content summaries
  const cards: CardData[] = chapters.flatMap((chapter, cIdx) => [
    {
      id: cIdx * 100 + 1,
      category: chapter.title,
      front: `What are the key use cases for ${chapter.title}?`,
      back: chapter.content[0].text.join(' ')
    },
    ...chapter.keyPoints.map((point, pIdx) => ({
      id: cIdx * 100 + 2 + pIdx,
      category: chapter.title,
      front: `Key Takeaway for ${chapter.title} (Point ${pIdx + 1})`,
      back: point
    }))
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleNext = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % cards.length);
    }, 200);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
    }, 200);
  };

  const currentCard = cards[currentIndex];

  return (
    <div className="max-w-2xl mx-auto flex flex-col items-center justify-center h-[80vh]">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold text-slate-800">Flashcards</h2>
        <p className="text-slate-500 text-sm mt-1">
          Card {currentIndex + 1} of {cards.length}
        </p>
      </div>

      <div 
        className="relative w-full aspect-[3/2] cursor-pointer group perspective-1000"
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div className={`
          relative w-full h-full duration-500 preserve-3d transition-transform shadow-xl rounded-2xl
          ${isFlipped ? 'rotate-y-180' : ''}
        `}>
          {/* Front */}
          <div className="absolute w-full h-full backface-hidden bg-white border-2 border-slate-100 rounded-2xl p-8 flex flex-col items-center justify-center text-center">
             <span className="absolute top-6 left-6 text-xs font-bold text-orange-600 bg-orange-50 px-3 py-1 rounded-full">
               {currentCard.category}
             </span>
             <h3 className="text-2xl font-medium text-slate-800 leading-tight">
               {currentCard.front}
             </h3>
             <p className="absolute bottom-6 text-slate-400 text-xs flex items-center">
               <RotateCw size={12} className="mr-1" /> Click to flip
             </p>
          </div>

          {/* Back */}
          <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-slate-900 rounded-2xl p-8 flex flex-col items-center justify-center text-center">
            <p className="text-lg text-slate-200 leading-relaxed font-light">
              {currentCard.back}
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-8 mt-12">
        <button 
          onClick={handlePrev}
          className="p-4 rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-orange-600 hover:border-orange-200 transition-all shadow-sm"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={handleNext}
          className="p-4 rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-orange-600 hover:border-orange-200 transition-all shadow-sm"
        >
          <ChevronRight size={24} />
        </button>
      </div>
      
      {/* CSS Helper for Flip Card */}
      <style>{`
        .perspective-1000 { perspective: 1000px; }
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
      `}</style>
    </div>
  );
};

export default Flashcards;
