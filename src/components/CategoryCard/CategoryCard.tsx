import React from 'react';

import { StyleSheet, Text } from 'react-native';

import { Column } from '../Column';

import Planets from '~/assets/icons/planets.svg';
import Asteroids from '~/assets/icons/asteroids.svg';
import Stars from '~/assets/icons/stars.svg';
import Galaxies from '~/assets/icons/galaxies.svg';

interface Props {
  icon: string;
  name: string;
  color: string;
}

const CategoryCard: React.FC<Props> = ({ name, icon, color }) => {
  const getIcon = (icon: string) => {
    switch (icon) {
      case 'planets':
        return <Planets width={30} height={30} />;
      case 'people':
        return <Asteroids width={30} height={30} />;
      case 'starships':
        return <Stars width={30} height={30} />;
      case 'films':
        return <Galaxies width={30} height={30} />;

      default:
        return <Planets width={30} height={30} />;
    }
  };

  return (
    <Column style={styles.categoryContainer} backgroundColor={color}>
      {getIcon(icon)}
      <Text style={styles.categoryText}>{name}</Text>
    </Column>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  categoryContainer: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: 75,
    height: 75,
    borderRadius: 8
  },
  categoryText: {
    fontFamily: 'Ubuntu-Regular',
    fontSize: 14,
    textAlign: 'center',
    color: '#FFFFFF'
  }
});
