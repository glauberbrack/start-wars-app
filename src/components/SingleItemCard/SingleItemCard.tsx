import React from 'react';
import Icon from 'react-native-vector-icons';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const SingleItemCard: React.FC = () => {
  return (
    <View style={styles.planetCard}>
      <Text style={styles.description}>
        Netuno é o oitavo planeta do Sistema Solar, o último a partir do Sol desde a
        reclassificação...
      </Text>
    </View>
  );
};

export default SingleItemCard;

const styles = StyleSheet.create({
  planetCard: {
    height: 170,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#151515',
    borderRadius: 8,
    marginBottom: 15
  },
  rightColumn: {
    flexShrink: 1,
    marginTop: 10,
    paddingLeft: 10
  },
  description: {
    fontSize: 14,
    color: '#FFFFFF',
    opacity: 0.65
  },
  button: {
    width: 150,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10
  },
  continuosText: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 14,
    color: '#FFFFFF',
    marginRight: 10
  }
});
