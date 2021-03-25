import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { theme } from '~/theme';

interface Props {
  name: string;
  image: Object;
}

const CharacterCard: React.FC<Props> = ({ name, image }) => {
  return (
    <TouchableOpacity style={styles.planetCard} onPress={() => console.log('oi')}>
      <Image source={image} style={styles.characterImage} />

      <View style={styles.button}>
        <Text style={styles.planetName}>{name}</Text>

        <Icon name='arrow-right' size={20} color={theme.colors.yellow.n600} />
      </View>
    </TouchableOpacity>
  );
};

export default CharacterCard;

const styles = StyleSheet.create({
  planetCard: {
    width: 140,
    height: 190,
    backgroundColor: `${theme.colors.gray.n900}`,
    borderRadius: 8,
    marginRight: 15,
    paddingTop: 10,
    alignItems: 'center'
  },
  planetName: {
    fontFamily: 'Ubuntu-Bold',
    fontSize: 12,
    fontWeight: 'bold',
    marginRight: 15,
    color: `${theme.colors.white}`
  },
  button: {
    width: 120,
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 30
  },
  characterImage: {
    borderRadius: 50,
    width: 100,
    height: 100
  }
});
