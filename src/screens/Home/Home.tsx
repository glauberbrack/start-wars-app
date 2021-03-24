import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

import { Constellation, Row, CategoryCard, CharacterCard } from '~/components';

import categories from '~/constants/categories';
import characters from '~/constants/characters';

const Home = () => {
  const navigation = useNavigation();

  return (
    <Row>
      <Constellation />
      <View style={styles.content}>
        <View style={styles.head}>
          <Text style={styles.username}>Olá, Glauber</Text>
        </View>

        <Text style={styles.subText}>O que você deseja explorar?</Text>

        <View>
          <Text style={styles.sectionTitle}>Categorias</Text>

          <View style={styles.categoryContainer}>
            {categories.map(({ name, icon, color }) => (
              <CategoryCard key={name} name={name} icon={icon} color={color} />
            ))}
          </View>

          <Text style={styles.sectionTitle}>Personagens</Text>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {characters.map(({ name }) => (
              <CharacterCard key={name} name={name} />
            ))}
          </ScrollView>
        </View>
      </View>
    </Row>
  );
};

export default Home;

const styles = StyleSheet.create({
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
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  username: {
    fontSize: 32,
    fontFamily: 'Ubuntu-Regular',
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  subText: {
    fontSize: 16,
    fontFamily: 'Ubuntu-Regular',
    color: '#FFFFFF'
  },
  sectionTitle: {
    fontSize: 16,
    fontFamily: 'Ubuntu-Regular',
    color: '#FFFFFF',
    marginTop: 30,
    marginBottom: 20
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 30
  }
});
