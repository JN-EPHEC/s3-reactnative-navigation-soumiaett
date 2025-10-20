import { Link } from "expo-router";
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";

const COURSES = [
  { id: "1", title: "Intro to React Native", desc: "Learn to build mobile apps with React Native." },
  { id: "2", title: "Advanced JavaScript", desc: "Deep dive into closures, async, and prototypes." },
  { id: "3", title: "UI/UX for Developers", desc: "Design better user experiences for your apps." },
];

export default function AllCoursesScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={COURSES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Link href={`/courses/${item.id}`} asChild>
            <TouchableOpacity style={styles.card}>
              <Text style={styles.title}>{item.title}</Text>
              <Text>{item.desc}</Text>
            </TouchableOpacity>
          </Link>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  title: { fontWeight: "bold", fontSize: 16 },
});
