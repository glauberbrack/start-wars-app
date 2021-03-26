import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

import sadStormtrooper from '~/assets/characters/sad-stormtrooper.png';
import { Row, Column, Constellation, PageHeader } from '~/components';
import { theme } from '~/theme';

const Starships: React.FC = () => {
  return (
    <Row>
      <Constellation />
      <View style={styles.content}>
        <PageHeader title='Naves' />
        <Column mt={100} alignItems='center' justifyContent='center'>
          <Image source={sadStormtrooper} style={styles.image} />
          <Text style={styles.title}>Essa página ainda está em construção.</Text>
        </Column>
      </View>
    </Row>
  );
};

export default Starships;

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 15,
    paddingTop: 20,
    paddingLeft: 15,
    paddingRight: 15,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 30
  },
  title: {
    fontFamily: 'Ubuntu-Bold',
    fontSize: 18,
    marginTop: 20,
    color: `${theme.colors.white}`
  }
});
