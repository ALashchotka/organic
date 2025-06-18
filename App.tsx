import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { APP_THEME } from '@organic/constants';
import Navigation from '@organic/navigation';

export default function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView>
      <NavigationContainer theme={APP_THEME}>
        <Navigation />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
