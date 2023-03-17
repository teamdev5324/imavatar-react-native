import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './amountboxstyle';

const AmountBox = ({label, amount}) => {
  return (
    <View style={styles.amountbox}>
      <View style={styles.amountboxtop}>
        <Text style={styles.amountboxtoptext}>{label}</Text>
        <Image
          style={styles.amountboxtopicon}
          source={require('../../assets/Icons/info-white.png')}
        />
      </View>

      <View style={styles.amountboxbottom}>
        <Text style={styles.amountboxbottomtext}>{amount}</Text>
      </View>
    </View>
  );
};

export default AmountBox;
