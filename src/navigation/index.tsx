import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

import MainScreen from '@organic/screens/Main';
import DetailsScreen from '@organic/screens/Details';

import { RootStackList } from './types';

const Stack = createSharedElementStackNavigator();

export default function Navigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: ({ current: { progress } }) => ({
          cardOverlayEnabled: true,
          cardStyle: {
            opacity: progress.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 1],
            }),
          },
          overlayStyle: {
            opacity: progress.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 0.5],
              extrapolate: 'clamp',
            }),
          },
        }),
      }}>
      <Stack.Screen name={RootStackList.MAIN} component={MainScreen} />
      <Stack.Screen
        name={RootStackList.DETAILS}
        component={DetailsScreen}
        sharedElements={(route) => {
          return [`item.${route.params.item.id}.image`];
        }}
      />
    </Stack.Navigator>
  );
}
