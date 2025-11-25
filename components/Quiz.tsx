import React, { useState, useMemo } from 'react';
import { questions } from '../data/questions';
import { CheckCircle, XCircle, RefreshCw, Trophy, ArrowRight } from 'lucide-react';

const Quiz: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const currentQuestion = questions[currentIndex];

  const handleOptionSelect = (option: string) => {
    if (!isSubmitted) {
      setSelectedOption(option);
    }
  };

  const getOptionLetter = (opt: string) => opt.split('.')[0].trim();

  const handleSubmit = () => {
    setIsSubmitted(true);
    const selectedLetter = getOptionLetter(selectedOption || '');
    // Handle multiple correct answers logic simply for this demo by checking generic inclusion
    // In a real app, strict parsing would be better.
    // The data correctAnswer is like "B" or "A, C".
    
    // Simple check: if the selected option letter corresponds to the answer
    // For single choice questions which dominate this set, straightforward equality.
    // For multiple choice, we'd need a multi-select UI. For now, assuming single choice interaction
    // based on the simplified UI flow, even for multi-select questions in this demo.
    
    if (currentQuestion.correctAnswer.includes(selectedLetter)) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedOption(null);
      setIsSubmitted(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const restartQuiz = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsSubmitted(false);
    setScore(0);
    setQuizCompleted(false);
  };

  const progress = ((currentIndex + 1) / questions.length) * 100;

  if (quizCompleted) {
    return (
      <div className="flex flex-col items-center justify-center h-full py-12 text-center">
        <div className="bg-white p-12 rounded-2xl shadow-xl border border-slate-200 max-w-md w-full">
          <Trophy className="w-20 h-20 text-yellow-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-slate-800 mb-2">Quiz Completed!</h2>
          <p className="text-slate-500 mb-8">You've reached the end of the practice questions.</p>
          
          <div className="text-6xl font-black text-slate-900 mb-4">
            {Math.round((score / questions.length) * 100)}%
          </div>
          <p className="text-slate-600 mb-8 font-medium">
            {score} out of {questions.length} correct
          </p>
          
          <button 
            onClick={restartQuiz}
            className="w-full flex items-center justify-center space-x-2 bg-orange-600 hover:bg-orange-700 text-white py-4 px-6 rounded-xl font-bold transition-transform active:scale-95"
          >
            <RefreshCw size={20} />
            <span>Try Again</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto pb-12 h-full flex flex-col">
      {/* Header & Progress */}
      <div className="mb-8 bg-white p-6 rounded-xl shadow-sm border border-slate-100">
        <div className="flex justify-between items-center mb-4">
          <div>
            <span className="text-xs font-bold text-orange-600 uppercase tracking-wide">
              Question {currentIndex + 1} of {questions.length}
            </span>
            <h2 className="text-sm text-slate-400 mt-1">{currentQuestion.category}</h2>
          </div>
          <div className="text-right">
             <span className="text-xl font-bold text-slate-800">{score}</span>
             <span className="text-sm text-slate-400"> points</span>
          </div>
        </div>
        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
          <div 
            className="bg-orange-500 h-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question Card */}
      <div className="flex-1">
        <h3 className="text-xl font-medium text-slate-800 mb-6 leading-relaxed">
          {currentQuestion.question}
        </h3>

        <div className="space-y-3 mb-8">
          {currentQuestion.options.map((option) => {
            const letter = getOptionLetter(option);
            const isSelected = selectedOption === option;
            const isCorrect = currentQuestion.correctAnswer.includes(letter);
            
            let cardClass = "border-slate-200 hover:border-slate-300 hover:bg-slate-50";
            if (isSelected) cardClass = "border-orange-500 bg-orange-50 text-orange-900";
            
            // Show validation after submission
            if (isSubmitted) {
              if (isCorrect) cardClass = "border-green-500 bg-green-50 text-green-900";
              else if (isSelected && !isCorrect) cardClass = "border-red-300 bg-red-50 text-red-900";
              else cardClass = "border-slate-100 opacity-60";
            }

            return (
              <button
                key={option}
                onClick={() => handleOptionSelect(option)}
                disabled={isSubmitted}
                className={`w-full p-5 text-left rounded-xl border-2 transition-all duration-200 flex items-center justify-between group ${cardClass}`}
              >
                <span className="font-medium text-base">{option}</span>
                {isSubmitted && isCorrect && <CheckCircle className="text-green-600" size={20} />}
                {isSubmitted && isSelected && !isCorrect && <XCircle className="text-red-500" size={20} />}
              </button>
            );
          })}
        </div>

        {/* Feedback Section */}
        {isSubmitted && (
          <div className="bg-slate-900 text-slate-100 p-6 rounded-xl mb-6 border border-slate-700 animate-fade-in">
            <h4 className="font-bold text-orange-400 mb-2 flex items-center">
              Explanation
            </h4>
            <p className="text-slate-300 leading-relaxed text-sm">
              {currentQuestion.explanation}
            </p>
          </div>
        )}
      </div>

      {/* Action Bar */}
      <div className="mt-auto pt-6 flex justify-end">
        {!isSubmitted ? (
          <button
            onClick={handleSubmit}
            disabled={!selectedOption}
            className={`
              py-3 px-8 rounded-lg font-bold text-white transition-all
              ${selectedOption 
                ? 'bg-slate-900 hover:bg-black shadow-lg shadow-slate-900/20' 
                : 'bg-slate-300 cursor-not-allowed'}
            `}
          >
            Check Answer
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="flex items-center space-x-2 bg-orange-600 hover:bg-orange-700 text-white py-3 px-8 rounded-lg font-bold shadow-lg shadow-orange-600/30 transition-transform active:scale-95"
          >
            <span>Next Question</span>
            <ArrowRight size={18} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Quiz;
