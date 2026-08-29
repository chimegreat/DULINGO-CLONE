import type { Language, LanguageCode } from "@/types/learning";

export const languages: Language[] = [
  { id: "es", name: "Spanish", nativeName: "Español", flagEmoji: "🇪🇸", greeting: "Hola" },
  { id: "fr", name: "French", nativeName: "Français", flagEmoji: "🇫🇷", greeting: "Bonjour" },
  { id: "ja", name: "Japanese", nativeName: "日本語", flagEmoji: "🇯🇵", greeting: "こんにちは" },
];

export function getLanguageById(id: LanguageCode): Language | undefined {
  return languages.find((language) => language.id === id);
}
