import React, { useEffect, useState, Dispatch } from 'react';
import axios from 'axios';
import { ActivityIndicator, StyleSheet, SafeAreaView, View, ScrollView, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { theme } from '~/theme';
import { Column, Constellation, PageHeader, SingleItemCard } from '~/components';
import { AppState } from '~/store/reducers/rootReducer';
import { charactersAction } from '~/store/actions/charactersAction';

const Characters: React.FC = () => {
  const { characters } = useSelector((state: AppState) => state.characters);
  const charactersDispatch = useDispatch<Dispatch<charactersAction>>();

  const [loading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadResources = async () => {
      setIsLoading(true);
      const response = await axios.get('https://swapi.dev/api/people/');
      charactersDispatch({
        type: 'FETCH_CHARACTERS',
        payload: response.data.results
      });
      setIsLoading(false);
    };

    loadResources();
  }, []);

  if (loading) {
    return <ActivityIndicator size='large' color={theme.colors.blue.default} />;
  }
  return (
    <SafeAreaView style={styles.wrapper}>
      <Constellation />
      <View style={styles.content}>
        <PageHeader title='Personagens' />
        <ScrollView>
          {characters.map(({ name }) => (
            <SingleItemCard>
              <Column>
                <Text style={styles.title}>{name}</Text>
                {/* <View style={styles.line}>
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
                </View> */}
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
