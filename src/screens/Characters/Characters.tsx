import React, { useEffect } from 'react';
import { StyleSheet, SafeAreaView, View, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import { theme } from '~/theme';
import { Column, Constellation, PageHeader, SingleItemCard } from '~/components';
import { getCharacters } from '~/store/modules/characters/actions';
import { StarWarsConnection, Character } from '~/store/modules/characters/sagas';

import planets from '~/constants/planets-mock';

interface Props {
  getCharacters: () => void;
  characters: StarWarsConnection<Character>;
  error: string;
}

interface Item {
  item: Character;
}

const Characters: React.FC<Props> = () => {
  useEffect(() => {
    const teste = getCharacters();
    console.log(teste);
  }, []);
  return (
    <SafeAreaView style={styles.wrapper}>
      <Constellation />
      <View style={styles.content}>
        <PageHeader title='Personagens' />
        <ScrollView>
          {planets.map(({ name, rotation_period, diameter, climate, terrain }) => (
            <SingleItemCard>
              <Column>
                <Text style={styles.title}>{name}</Text>
                <View style={styles.line}>
                  <Text style={styles.item}>Período de Rotação:</Text>
                  <Text style={styles.description}>{rotation_period}</Text>
                </View>
                <View style={styles.line}>
                  <Text style={styles.item}>Diâmetro:</Text>
                  <Text style={styles.description}>{diameter}</Text>
                </View>
                <View style={styles.line}>
                  <Text style={styles.item}>Clima:</Text>
                  <Text style={styles.description}>{climate}</Text>
                </View>
                <View style={styles.line}>
                  <Text style={styles.item}>Terreno:</Text>
                  <Text style={styles.description}>{terrain}</Text>
                </View>
              </Column>
            </SingleItemCard>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Characters;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
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
  title: {
    fontFamily: 'Ubuntu-Bold',
    fontSize: 18,
    color: `${theme.colors.white}`
  },
  line: {
    flexDirection: 'row',
    marginTop: 10
  },
  item: {
    fontFamily: 'Ubuntu-Bold',
    fontSize: 12,
    marginRight: 10,
    color: `${theme.colors.white}`
  },
  description: {
    fontFamily: 'Ubuntu-Regular',
    fontSize: 12,
    color: `${theme.colors.white}`
  }
});
