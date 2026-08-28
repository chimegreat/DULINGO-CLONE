export type LanguageCode = "es" | "fr" | "ja";

export interface Language {
  id: LanguageCode;
  name: string;
  nativeName: string;
  flagEmoji: string;
}

export interface Unit {
  id: string;
  languageId: LanguageCode;
  order: number;
  title: string;
  description: string;
  color: string;
}

export type LessonType = "video" | "audio" | "chat" | "vocabulary";

export interface VocabularyItem {
  id: string;
  word: string;
  translation: string;
  pronunciation: string;
}

export interface Phrase {
  id: string;
  text: string;
  translation: string;
  context: string;
}

export type ActivityType = "multiple_choice" | "translate" | "listen";

export interface Activity {
  id: string;
  type: ActivityType;
  prompt: string;
  options?: string[];
  correctAnswer: string;
}

export interface AITeacherPrompt {
  systemPrompt: string;
  welcomeMessage: string;
  teachingPoints: string[];
}

export interface Lesson {
  id: string;
  unitId: string;
  languageId: LanguageCode;
  order: number;
  title: string;
  goal: string;
  type: LessonType;
  xpReward: number;
  vocabulary: VocabularyItem[];
  phrases: Phrase[];
  activities: Activity[];
  aiTeacher: AITeacherPrompt;
}
