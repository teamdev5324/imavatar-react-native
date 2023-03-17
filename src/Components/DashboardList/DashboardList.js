import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './dashboardliststyle';

const DashboardList = ({ImageSource, text1, text2, text3, text4, type}) => {
  return (
    <View style={styles.dashboardlistitem}>
      <Image
        style={styles.listitemfiltericon}
        source={require('../../assets/Icons/filteredit.png')}
      />

      <View style={styles.listitemtextbox}>
        <Text style={styles.listitemtext}>{text1}</Text>
        <Image
          style={styles.listitemicon}
          source={require('../../assets/Icons/info.png')}
        />
      </View>

      <Text style={styles.listitemtext}>{text2}</Text>

      <View style={styles.listitempertextheadbox}>
        <View style={styles.listitempertextbox}>
          <Image style={styles.listitempericon} source={ImageSource} />
          <Text
            style={[styles.listitempertext, type === 'dec' && {color: 'red'}]}>
            {text3}
          </Text>
        </View>

        <Text style={styles.listitemperbotttext}>{text4}</Text>
      </View>
    </View>
  );
};

export default DashboardList;
