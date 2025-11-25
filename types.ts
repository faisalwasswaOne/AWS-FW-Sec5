export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  category: string;
}

export interface Chapter {
  id: number;
  title: string;
  part: string;
  content: {
    heading: string;
    text: string[];
  }[];
  keyPoints: string[];
}

export interface Flashcard {
  id: number;
  front: string;
  back: string;
  category: string;
}

export enum View {
  STUDY_GUIDE = 'STUDY_GUIDE',
  QUIZ = 'QUIZ',
  FLASHCARDS = 'FLASHCARDS',
  CHEAT_SHEET = 'CHEAT_SHEET',
  AI_TUTOR = 'AI_TUTOR',
}
