import { View, Text, TouchableOpacity } from "react-native";

export type LessonTab = "lessons" | "practice";

type LessonTabsProps = {
  activeTab: LessonTab;
  onChange: (tab: LessonTab) => void;
};

const TABS: { key: LessonTab; label: string }[] = [
  { key: "lessons", label: "Lessons" },
  { key: "practice", label: "Practice" },
];

export function LessonTabs({ activeTab, onChange }: LessonTabsProps) {
  return (
    <View className="flex-row mx-6 mt-5 border-b border-border">
      {TABS.map((tab) => {
        const isActive = tab.key === activeTab;

        return (
          <TouchableOpacity
            key={tab.key}
            onPress={() => onChange(tab.key)}
            activeOpacity={0.7}
            className={`flex-1 items-center pb-3 border-b-2 ${
              isActive ? "border-lingua-deep-purple" : "border-transparent"
            }`}
          >
            <Text
              className={`text-body-lg font-poppins-semibold ${
                isActive ? "text-lingua-deep-purple" : "text-text-secondary"
              }`}
            >
              {tab.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
