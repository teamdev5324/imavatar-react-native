import { View, Text } from 'react-native';
import React from 'react';
import styles from './manageusertextboxstyle';

const ManageUserTextBox = ({ textblack, textgray }) => {
  return (
      <View style={styles.manageusertextbox}>
          <Text style={styles.manageusertextblack}>{textblack}</Text>
          <Text style={styles.manageusertextgray}>{textgray}</Text>
      </View>
  )
}

export default ManageUserTextBox