import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackNavigator from './StackNavigator';
import WishlistScreen from '../screens/WishlistScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="All Courses" component={StackNavigator} />
      <Tab.Screen name="My Wishlist" component={WishlistScreen} />
    </Tab.Navigator>
  );
}


