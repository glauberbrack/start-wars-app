import React, { useEffect, useState, Dispatch } from 'react';
import { StyleSheet, SafeAreaView, View, ScrollView, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { Column, Constellation, PageHeader, SingleItemCard, Loader } from '~/components';
import { charactersActions } from '~/redux/actions/charactersActions';
import { AppState } from '~/redux/reducers/rootReducer';
import { theme } from '~/theme';
import axios from 'axios';

const Characters: React.FC = () => {
  const { characters } = useSelector((state: AppState) => state.characters);
  const charactersDispatch = useDispatch<Dispatch<charactersActions>>();

  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadResources = async () => {
      try {
        const response = await axios.get('https://swapi.dev/api/people/');
        charactersDispatch({
          type: 'FETCH_CHARACTERS',
          payload: response.data.results
        });
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('PLANETS LOAD ERROR: ', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadResources();
  }, [charactersDispatch]);

  if (loading) {
    return <Loader />;
  }

  return (
    <SafeAreaView style={styles.wrapper}>
      <Constellation />
      <View style={styles.content}>
        <PageHeader title='Personagens' />
        <ScrollView>
          {characters.map(({ name, height, mass, gender, homeworld }) => (
            <SingleItemCard key={name}>
              <Column>
                <Text style={styles.title}>{name}</Text>
                <View style={styles.line}>
                  <Text style={styles.item}>Terra Natal:</Text>
                  <Text style={styles.description}>{homeworld}</Text>
                </View>
                <View style={styles.line}>
                  <Text style={styles.item}>Sexo:</Text>
                  <Text style={styles.description}>{gender}</Text>
                </View>
                <View style={styles.line}>
                  <Text style={styles.item}>Altura:</Text>
                  <Text style={styles.description}>{height}</Text>
                </View>
                <View style={styles.line}>
                  <Text style={styles.item}>Peso:</Text>
                  <Text style={styles.description}>{mass}</Text>
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
