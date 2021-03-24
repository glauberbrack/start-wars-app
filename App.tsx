import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';

import { theme } from '~/theme';

import UnauthenticatedApp from './UnauthenticatedApp';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <StatusBar barStyle='light-content' backgroundColor={theme.colors.gray.n900} />
        <UnauthenticatedApp />
      </NavigationContainer>
    </ThemeProvider>
  );
}
