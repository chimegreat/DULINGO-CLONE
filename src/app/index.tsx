import { Text, View, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-h2 font-poppins color-lingua-purple"> WELOCME TO GREAT BLOG </Text>
      <Text> WE OFFER PREMIUM BUGS TO YOUR SYSTEM </Text>
      <Link href="/onboarding" asChild>
        <TouchableOpacity
          activeOpacity={0.85}
          className="bg-lingua-deep-purple px-6 py-3 rounded-full mt-6"
        >
          <Text className="text-white text-h4 font-poppins-semibold">View Onboarding</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

