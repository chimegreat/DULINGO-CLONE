import { useMemo, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack, router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import { colors } from "@/constants/theme";
import { images } from "@/constants/images";
import { languages } from "@/data/languages";
import type { LanguageCode } from "@/types/learning";
import { LanguageCard } from "@/components/language/LanguageCard";
import { useLanguageStore } from "@/store/language-store";

export default function LanguageSelection() {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState<LanguageCode>(languages[0].id);
  const setSelectedLanguage = useLanguageStore((state) => state.setSelectedLanguage);

  const filteredLanguages = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return languages;

    return languages.filter(
      (language) =>
        language.name.toLowerCase().includes(normalizedQuery) ||
        language.nativeName.toLowerCase().includes(normalizedQuery)
    );
  }, [query]);

  const handleContinue = () => {
    setSelectedLanguage(selectedId);
    router.replace("/");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Stack.Screen options={{ headerShown: false }} />

      <View className="flex-row items-center px-6 pt-2">
        <TouchableOpacity onPress={() => router.back()} hitSlop={8} style={styles.headerSideSlot}>
          <Ionicons name="chevron-back" size={28} color={colors.textPrimary} />
        </TouchableOpacity>
        <Text className="flex-1 text-center text-h3 font-poppins-semibold text-text-primary">
          Choose a language
        </Text>
        <View style={styles.headerSideSlot} />
      </View>

      <View className="flex-row items-center bg-surface rounded-full px-4 py-3 mt-4 mx-6">
        <Ionicons name="search" size={18} color={colors.textSecondary} />
        <TextInput
          placeholder="Search languages"
          placeholderTextColor={colors.textSecondary}
          value={query}
          onChangeText={setQuery}
          autoCapitalize="none"
          className="flex-1 ml-2 text-body-lg text-text-primary font-poppins"
        />
      </View>

      <ScrollView className="flex-1" contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View className="px-6">
          <Text className="text-body-sm font-poppins-semibold text-text-secondary mt-6 mb-3">Popular</Text>

          {filteredLanguages.map((language) => (
            <LanguageCard
              key={language.id}
              language={language}
              selected={language.id === selectedId}
              onPress={() => setSelectedId(language.id)}
            />
          ))}
          <TouchableOpacity
            activeOpacity={0.85}
            className="bg-lingua-deep-purple rounded-full py-4 items-center justify-center mt-4"
            onPress={handleContinue}
          >
            <Text className="text-white text-h4 font-poppins-semibold">Continue</Text>
          </TouchableOpacity>
        </View>

        <Image source={images.earth} style={styles.earthImage} resizeMode="cover" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  headerSideSlot: {
    width: 28,
  },
  scrollContent: {
    paddingBottom: 16,
  },
  earthImage: {
    width: "100%",
    height: 190,
    marginTop: 16,
  },
});
