import { View, Text } from 'react-native';
import React from 'react';
import styles from './listitemstyle';

const ListItem = ({ text }) => {
  return (
      <View style={styles.libox}>
          <Text style={styles.liboxicon}>{'\u2022'}</Text>
          <Text style={styles.liboxtext}>{text}</Text>
      </View>
  )
}

export default ListItem