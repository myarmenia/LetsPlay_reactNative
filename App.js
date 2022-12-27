import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { AuthProvider } from '@/context';
import MyApp from '@/index';

// test1

const App = () => {

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AuthProvider>
        <NavigationContainer>
          <MyApp />
        </NavigationContainer>
      </AuthProvider>
    </GestureHandlerRootView>
  )
};

export default App;
