import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      {/* Le drawer principal */}
      <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
    </Stack>
  );
}
