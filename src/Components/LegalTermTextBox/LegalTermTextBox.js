import { View, Text } from 'react-native';
import React from 'react';
import styles from './legaltermtextboxstyle';

const LegalTermTextBox = ({maintext}) => {
  return (
      <View style={styles.legaltermstextbox}>
          <Text style={styles.legaltermstext}>{maintext}</Text>
          <Text style={[styles.legaltermstext, { color: "#FF6658" }]}>Download</Text>
      </View>
  )
}

export default LegalTermTextBox