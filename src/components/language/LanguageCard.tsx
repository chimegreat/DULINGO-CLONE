import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { colors } from "@/constants/theme";
import type { Language } from "@/types/learning";

type LanguageCardProps = {
  language: Language;
  selected: boolean;
  onPress: () => void;
};

export function LanguageCard({ language, selected, onPress }: LanguageCardProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      className={`flex-row items-center rounded-2xl border px-4 py-3 mb-3 ${
        selected ? "border-lingua-deep-purple bg-lingua-purple/10" : "border-border"
      }`}
    >
      <View className="w-12 h-12 rounded-full bg-surface items-center justify-center">
        <Text className="text-2xl">{language.flagEmoji}</Text>
      </View>

      <View className="flex-1 ml-3">
        <Text className="text-h4 font-poppins-semibold text-text-primary">{language.name}</Text>
        <Text className="text-body-sm text-text-secondary font-poppins">{language.nativeName}</Text>
      </View>

      {selected ? (
        <View className="w-7 h-7 rounded-full bg-lingua-deep-purple items-center justify-center">
          <Ionicons name="checkmark" size={16} color="#FFFFFF" />
        </View>
      ) : (
        <Ionicons name="chevron-forward" size={20} color={colors.textSecondary} />
      )}
    </TouchableOpacity>
  );
}
