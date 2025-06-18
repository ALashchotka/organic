import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { RealmProvider } from '@realm/react';

import { APP_THEME } from '@organic/constants';
import { Product } from '@organic/models/Product';
import Navigation from '@organic/navigation';

export default function App(): React.JSX.Element {
  return (
    <RealmProvider schema={[Product]} schemaVersion={2}>
      <GestureHandlerRootView>
        <NavigationContainer theme={APP_THEME}>
          <Navigation />
        </NavigationContainer>
      </GestureHandlerRootView>
    </RealmProvider>
  );
}
