import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './savebuttonstyle';

const SaveButton = ({ title, maright, onPress, nobradius }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[nobradius === "nobradius" ? styles.savebuttonnobradius  : styles.savebutton, maright ? { marginLeft: 14 } : { marginLeft: 0 }]}>
      <Text style={styles.savebuttontext}>{title}</Text>
      </TouchableOpacity>
  )
}

export default SaveButton