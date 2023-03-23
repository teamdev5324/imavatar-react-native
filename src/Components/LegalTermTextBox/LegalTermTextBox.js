import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './legaltermtextboxstyle';

const LegalTermTextBox = ({maintext, onDownloadPress}) => {
  return (
    <View style={styles.legaltermstextbox}>
      <Text style={styles.legaltermstext}>{maintext}</Text>
      <TouchableOpacity activeOpacity={0.7} onPress={() => onDownloadPress()}>
        <Text style={[styles.legaltermstext, {color: '#FF6658'}]}>
          Download
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LegalTermTextBox;
