import { brandColors } from "@/constants/theme";
import type { LanguageCode, Unit } from "@/types/learning";

export const units: Unit[] = [
  // Spanish
  {
    id: "es-u1",
    languageId: "es",
    order: 1,
    title: "Basics",
    description: "Greetings, numbers, and family",
    color: brandColors.linguaGreen,
  },
  {
    id: "es-u2",
    languageId: "es",
    order: 2,
    title: "Everyday Phrases",
    description: "Food, directions, and shopping",
    color: brandColors.linguaBlue,
  },

  // French
  {
    id: "fr-u1",
    languageId: "fr",
    order: 1,
    title: "Basics",
    description: "Greetings, numbers, and family",
    color: brandColors.linguaGreen,
  },
  {
    id: "fr-u2",
    languageId: "fr",
    order: 2,
    title: "Everyday Phrases",
    description: "Food, directions, and shopping",
    color: brandColors.linguaBlue,
  },

  // Japanese
  {
    id: "ja-u1",
    languageId: "ja",
    order: 1,
    title: "Basics",
    description: "Greetings, numbers, and family",
    color: brandColors.linguaGreen,
  },
  {
    id: "ja-u2",
    languageId: "ja",
    order: 2,
    title: "Everyday Phrases",
    description: "Food, directions, and shopping",
    color: brandColors.linguaBlue,
  },
];

export function getUnitsByLanguage(languageId: LanguageCode): Unit[] {
  return units
    .filter((unit) => unit.languageId === languageId)
    .sort((a, b) => a.order - b.order);
}

export function getUnitById(id: string): Unit | undefined {
  return units.find((unit) => unit.id === id);
}
