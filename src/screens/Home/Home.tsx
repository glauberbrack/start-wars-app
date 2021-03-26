import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

import { Constellation, Row, CategoryCard, CharacterCard, Loader } from '~/components';
import categories from '~/constants/categories';
import characters from '~/constants/characters';

const Home: React.FC = () => {
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <Row>
      <Constellation />
      <View style={styles.content}>
        <View style={styles.head}>
          <Text style={styles.username}>Olá!</Text>
        </View>

        <Text style={styles.subText}>O que você deseja explorar?</Text>

        <View>
          <Text style={styles.sectionTitle}>Categorias</Text>

          <View style={styles.categoryContainer}>
            {categories.map(({ name, icon, color, screen }) => (
              <CategoryCard key={name} name={name} icon={icon} color={color} screen={screen} />
            ))}
          </View>

          <Text style={styles.sectionTitle}>Personagens</Text>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {characters.map(({ name, image }) => (
              <CharacterCard key={name} name={name} image={image} />
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
