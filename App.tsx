import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import UnauthenticatedApp from './UnauthenticatedApp';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle='light-content' backgroundColor='#5e48' />
      <UnauthenticatedApp />
    </NavigationContainer>
  );
}
