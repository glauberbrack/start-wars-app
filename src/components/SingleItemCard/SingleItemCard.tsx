import React, { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';

import { theme } from '~/theme';

interface ISingleItemCardProps {
  children: ReactNode;
}

const SingleItemCard: React.FC<ISingleItemCardProps> = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export default SingleItemCard;

const styles = StyleSheet.create({
  container: {
    height: 170,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: `${theme.colors.gray.n900}`,
    borderRadius: 8,
    marginBottom: 15,
    padding: 15
  }
});
