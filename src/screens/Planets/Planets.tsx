import React, { useEffect, useState, Dispatch } from 'react';
import { StyleSheet, SafeAreaView, View, Text, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { Column, Constellation, PageHeader, SingleItemCard, Loader } from '~/components';
import { planetsActions } from '~/redux/actions/planetsActions';
import { AppState } from '~/redux/reducers/rootReducer';
import { theme } from '~/theme';
import axios from 'axios';

const Planets: React.FC = () => {
  const { planets } = useSelector((state: AppState) => state.planets);
  const planetsDispatch = useDispatch<Dispatch<planetsActions>>();

  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadResources = async () => {
      try {
        const response = await axios.get('https://swapi.dev/api/planets/');
        planetsDispatch({ type: 'FETCH_PLANETS', payload: response.data.results });
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('PLANETS LOAD ERROR: ', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadResources();
  }, [planetsDispatch]);

  if (loading) {
    return <Loader />;
  }

  return (
    <SafeAreaView style={styles.wrapper}>
      <Constellation />
      <View style={styles.content}>
        <PageHeader title='Planetas' />
        <ScrollView>
          {planets.map(({ name, rotation_period, diameter, climate, terrain }) => (
            <SingleItemCard key={name}>
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

export default Planets;

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
