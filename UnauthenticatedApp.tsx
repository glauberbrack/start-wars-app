import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Planets } from '~/screens/Planets';

// import { theme } from 'src/theme';

const Stack = createStackNavigator();

const UnauthenticatedApp: React.FC = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name='Planets' component={Planets} />
  </Stack.Navigator>
);

export default UnauthenticatedApp;
