import React, { useLayoutEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { DrawerActions } from '@react-navigation/native';
import { RootStackParamList } from '../Navigation/StackNavigator';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'CourseList'>;
};

export default function CourseListScreen({ navigation }: Props) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Button title="☰" onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />
      ),
    });
  }, [navigation]);

  const courses = [
    { id: '1', title: 'Intro to React Native', description: 'Learn the basics of React Native.' },
    { id: '2', title: 'Advanced JavaScript', description: 'Deep dive into JS.' },
    { id: '3', title: 'UI/UX for Developers', description: 'Design principles for devs.' },
  ];

  return (
    <View style={styles.container}>
      {courses.map(course => (
        <View key={course.id} style={styles.card}>
          <Text style={styles.title}>{course.title}</Text>
          <Button
            title="View Details"
            onPress={() =>
              navigation.navigate('CourseDetail', {
                courseId: course.id,
                title: course.title,
                description: course.description,
              })
            }
          />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  card: { marginBottom: 20 },
  title: { fontSize: 18, fontWeight: 'bold' },
});
