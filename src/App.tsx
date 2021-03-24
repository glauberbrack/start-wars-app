import React from 'react';
import { StatusBar, SafeAreaView, View, Text } from 'react-native';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar barStyle='light-content' />
      <View>
        <Text style={{ fontFamily: 'Ubuntu-Bold' }}>Glauber Init</Text>
      </View>
    </SafeAreaView>
  );
}
