import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { RouteProp, useNavigation, DrawerActions } from '@react-navigation/native';
import { RootStackParamList } from '../Navigation/StackNavigator';

type Props = {
  route: RouteProp<RootStackParamList, 'CourseDetail'>;
};

export default function CourseDetailScreen({ route }: Props) {
  const { courseId, title, description } = route.params;
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Button title="☰" onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text>ID: {courseId}</Text>
      <Text>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
});
