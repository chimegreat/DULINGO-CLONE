import { useClerk, useUser } from "@clerk/expo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Text, TouchableOpacity, View } from "react-native";

import { useLanguageStore } from "@/store/language-store";

export default function ProfileScreen() {
  const { user } = useUser();
  const { signOut } = useClerk();
  const clearSelectedLanguage = useLanguageStore(
    (state) => state.clearSelectedLanguage,
  );

  const handleClearStorage = async () => {
    await AsyncStorage.removeItem("language-storage");
    clearSelectedLanguage();
  };

  return (
    <View className="flex-1 items-center justify-center bg-background px-6">
      <Text className="text-h3 font-poppins-semibold text-text-primary">
        Profile
      </Text>
      {user?.primaryEmailAddress && (
        <Text className="text-body-md font-poppins text-text-secondary mt-2">
          {user.primaryEmailAddress.emailAddress}
        </Text>
      )}

      <TouchableOpacity
        activeOpacity={0.85}
        className="bg-lingua-deep-purple px-6 py-3 rounded-full mt-8"
        onPress={() => signOut()}
      >
        <Text className="text-white text-h4 font-poppins-semibold">
          Sign Out
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.85}
        className="bg-error px-6 py-3 rounded-full mt-4"
        onPress={handleClearStorage}
      >
        <Text className="text-white text-h4 font-poppins-semibold">
          Clear Storage (Test)
        </Text>
      </TouchableOpacity>
    </View>
  );
}
