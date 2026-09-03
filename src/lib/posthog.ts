export const posthogApiKey = process.env.EXPO_PUBLIC_POSTHOG_API_KEY!;
export const posthogHost = process.env.EXPO_PUBLIC_POSTHOG_HOST!;

if (!posthogApiKey || !posthogHost) {
  throw new Error("Add your PostHog API key and host to the .env file");
}
