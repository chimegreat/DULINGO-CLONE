import { Text, View, TouchableOpacity } from "react-native";
import { Redirect } from "expo-router";
import { useAuth, useUser, useClerk } from "@clerk/expo";

export default function Index() {
  const { isLoaded, isSignedIn } = useAuth();
  const { user } = useUser();
  const { signOut } = useClerk();

  if (!isLoaded) return null;
  if (!isSignedIn) return <Redirect href="/onboarding" />;

  return (
    <View className="flex-1 justify-center items-center px-6">
      <Text className="text-h2 font-poppins color-lingua-purple">
        Welcome{user?.primaryEmailAddress ? `, ${user.primaryEmailAddress.emailAddress}` : ""}
      </Text>
      <Text> WE OFFER PREMIUM BUGS TO YOUR SYSTEM </Text>
      <TouchableOpacity
        activeOpacity={0.85}
        className="bg-lingua-deep-purple px-6 py-3 rounded-full mt-6"
        onPress={() => signOut()}
      >
        <Text className="text-white text-h4 font-poppins-semibold">Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}

