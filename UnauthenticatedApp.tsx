import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { Characters } from '~/screens/Characters';
import { Home } from '~/screens/Home';
import { Planets } from '~/screens/Planets';

// import { theme } from 'src/theme';

const Stack = createStackNavigator();

const UnauthenticatedApp: React.FC = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name='Home' component={Home} />
    <Stack.Screen name='Planets' component={Planets} />
    <Stack.Screen name='Characters' component={Characters} />
  </Stack.Navigator>
);

export default UnauthenticatedApp;
