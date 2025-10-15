import { Tabs } from "expo-router";

export default function CoursesTabs() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "All Courses" }} />
      <Tabs.Screen name="wishlist" options={{ title: "My Wishlist" }} />
    </Tabs>
  );
}
