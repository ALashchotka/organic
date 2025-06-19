import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { APP_THEME } from '@organic/constants';
import { useRealm } from '@organic/hooks';
import Navigation from '@organic/navigation';
import { RealmContext } from '@organic/models';

export default function App(): React.JSX.Element {
  const realm = useRealm();

  return (
    <RealmContext.Provider value={realm}>
      <GestureHandlerRootView>
        <NavigationContainer theme={APP_THEME}>
          <Navigation />
        </NavigationContainer>
      </GestureHandlerRootView>
    </RealmContext.Provider>
  );
}
