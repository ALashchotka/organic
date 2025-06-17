import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from '@organic/screens/Main';
import DetailsScreen from '@organic/screens/Details';

import { RootStackList } from './types';

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={RootStackList.MAIN} component={MainScreen} />
      <Stack.Screen name={RootStackList.DETAILS} component={DetailsScreen} />
    </Stack.Navigator>
  );
}
