import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './catalogboxstyle';

const CatalogBox = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
    <View style={styles.catalogbox}>
          <Text>{ title }</Text>
          <Ionicons name={'information-circle'} color={'#220A07'} size={16} />
      </View>
    </TouchableOpacity>
  )
}

export default CatalogBox