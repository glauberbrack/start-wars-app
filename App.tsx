import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { store } from '~/redux/store';
import { theme } from '~/theme';

import UnauthenticatedApp from './UnauthenticatedApp';

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <StatusBar barStyle='light-content' backgroundColor={theme.colors.gray.n900} />
        <NavigationContainer>
          <UnauthenticatedApp />
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  );
}
