import {View, Text} from 'react-native';
import React from 'react';
import styles from './overviewboxstyle';

const OverviewBox = ({label, number}) => {
  return (
    <View style={styles.overviewbox}>
      <View style={[styles.overviewboxitem, {backgroundColor: '#FF6658'}]}>
        <Text style={styles.overviewitemtext1}>{label}</Text>
      </View>
      <View style={styles.overviewboxitem}>
        <Text style={styles.overviewitemtext2}>{number}</Text>
      </View>
    </View>
  );
};

export default OverviewBox;
