import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

interface IHeaderProps {
  title: string;
}

const PageHeader: React.FC<IHeaderProps> = ({ title }) => {
  const { goBack } = useNavigation();

  return (
    <View>
      <View style={styles.head}>
        <TouchableOpacity onPress={goBack}>
          <Icon name='arrow-left' size={24} color='#FFFFFF' />
        </TouchableOpacity>

        <Icon name='settings' size={24} color='#FFFFFF' />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.subText}>{title}</Text>
      </ScrollView>
    </View>
  );
};

export default PageHeader;

const styles = StyleSheet.create({
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  subText: {
    fontFamily: 'Ubuntu-Regular',
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 40,
    marginBottom: 30
  }
});
