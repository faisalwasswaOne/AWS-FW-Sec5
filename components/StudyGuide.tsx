import React, { useState } from 'react';
import { chapters } from '../data/studyContent';
import { ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';

const StudyGuide: React.FC = () => {
  const [expandedChapter, setExpandedChapter] = useState<number | null>(1);

  const toggleChapter = (id: number) => {
    setExpandedChapter(expandedChapter === id ? null : id);
  };

  return (
    <div className="max-w-4xl mx-auto pb-12">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900">Study Guide</h2>
        <p className="text-slate-500 mt-2">Comprehensive notes on SageMaker Built-in Algorithms.</p>
      </div>

      <div className="space-y-4">
        {chapters.map((chapter) => (
          <div 
            key={chapter.id} 
            className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden transition-all duration-200"
          >
            <button
              onClick={() => toggleChapter(chapter.id)}
              className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-slate-50 transition-colors"
            >
              <div>
                <span className="text-xs font-semibold text-orange-600 uppercase tracking-wider">
                  {chapter.part}
                </span>
                <h3 className="text-lg font-bold text-slate-800 mt-1">{chapter.title}</h3>
              </div>
              {expandedChapter === chapter.id ? 
                <ChevronUp className="text-slate-400" /> : 
                <ChevronDown className="text-slate-400" />
              }
            </button>

            {expandedChapter === chapter.id && (
              <div className="p-5 pt-0 border-t border-slate-100">
                <div className="mt-4 space-y-6">
                  {chapter.content.map((section, idx) => (
                    <div key={idx}>
                      <h4 className="text-md font-bold text-slate-900 mb-2 border-l-4 border-orange-500 pl-3">
                        {section.heading}
                      </h4>
                      <ul className="space-y-2">
                        {section.text.map((point, pIdx) => (
                          <li key={pIdx} className="text-slate-600 leading-relaxed text-sm flex items-start">
                            <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-slate-400 rounded-full flex-shrink-0"></span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="mt-6 bg-blue-50 rounded-lg p-4 border border-blue-100">
                  <h4 className="flex items-center text-blue-800 font-bold mb-2">
                    <CheckCircle2 size={18} className="mr-2" />
                    Key Exam Points
                  </h4>
                  <ul className="space-y-1">
                    {chapter.keyPoints.map((point, kIdx) => (
                      <li key={kIdx} className="text-blue-700 text-sm">
                        • {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudyGuide;
