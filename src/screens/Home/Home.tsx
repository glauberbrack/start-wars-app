import React, { useState } from 'react';
// import Constants from 'expo-constants';
// import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Text, ScrollView, TextInput } from 'react-native';

// import PlanetCardSmall from '../../components/PlanetCardSmall';
import { Constellation, Row, Column, CategoryCard } from '~/components';

import categories from '~/constants/categories';
// import { usePlanet } from '../../hooks/planet';

const Home = () => {
  const navigation = useNavigation();
  // const { planets } = usePlanet();
  const [value, onChangeText] = useState('');

  return (
    <Row>
      <Constellation />
      <View style={styles.content}>
        <View style={styles.head}>
          <Text style={styles.username}>Olá, Glauber</Text>
          {/* <Feather name='settings' size={24} color='#FFFFFF' /> */}
        </View>

        <Text style={styles.subText}>O que você deseja explorar?</Text>

        <View>
          <Text style={styles.sectionTitle}>Categorias</Text>

          <Row mt={10} mb={30} justifyContent='space-between'>
            {categories.map(({ name, icon, color }) => (
              <CategoryCard key={name} name={name} icon={icon} color={color} />
            ))}
          </Row>

          <Text style={styles.sectionTitle}>Planetas</Text>

          {/* <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {planets.map(({ name, icon }) => (
              <PlanetCardSmall key={name} name={name} icon={icon} />
            ))}
          </ScrollView> */}
        </View>
      </View>
    </Row>
  );
};

export default Home;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 8,
    marginTop: 40,
    backgroundColor: '#151515'
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
  username: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  subText: {
    fontSize: 16,
    color: '#FFFFFF'
  },
  sectionTitle: {
    fontSize: 16,
    color: '#FFFFFF',
    marginTop: 30,
    marginBottom: 20
  }
});
