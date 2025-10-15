import { Drawer } from "expo-router/drawer";

export default function DrawerLayout() {
  return (
    <Drawer>
      <Drawer.Screen name="courses" options={{ title: "Courses" }} />
      <Drawer.Screen name="profile" options={{ title: "My Profile" }} />
    </Drawer>
  );
}
