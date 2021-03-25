import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';

import { Row, Constellation, PageHeader, SingleItemCard } from '~/components';

const Planets: React.FC = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <Constellation />
      <View style={styles.content}>
        <PageHeader title='Planetas' />
        <SingleItemCard />
      </View>
    </SafeAreaView>
  );
};

export default Planets;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  content: {
    paddingHorizontal: 15,
    paddingTop: 20,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  subText: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 40,
    marginBottom: 30
  }
});
