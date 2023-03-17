import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './singleuploadstyle';

const SingleUploads = () => {
  return (
    <View style={styles.returnboxhead}>
      <View style={styles.returnboxfirst}>
        <View style={[styles.returnfirstbox, styles.returnfirstboxborder]}>
          <Text style={styles.fontweightbold}>Sr. No.</Text>
        </View>

        <View style={[styles.returnfirstbox, styles.returnfirstboxborder]}>
          <Text style={styles.fontweightbold}>Image</Text>
        </View>

        <View style={[styles.returnfirstbox, styles.returnfirstboxborder]}>
          <Text style={styles.fontweightbold}>Category</Text>
        </View>

        <View style={styles.returnfirstbox}>
          <Text style={styles.fontweightbold}>File ID</Text>
        </View>
      </View>

      <View style={styles.creditboxsec}>
        <View style={[styles.returnfirstbox, styles.returnfirstboxborder]}>
          <Text style={styles.fontcolorgray}>1</Text>
        </View>

        <View style={[styles.returnfirstbox, styles.returnfirstboxborder]}>
          <Image source={require('../../assets/Images/rudraksha.png')} />
        </View>

        <View style={[styles.returnfirstbox, styles.returnfirstboxborder]}>
          <Text style={styles.fontcolorgray}>Rudraksha</Text>
        </View>

        <View style={styles.returnfirstbox}>
          <Text style={styles.fontcolorgray}>1234</Text>
        </View>
      </View>

      <View style={styles.returnboxfirst}>
        <View style={[styles.returnfirstbox, styles.returnfirstboxborder]}>
          <Text style={styles.fontweightbold}>Created Date{'\n'}& Time</Text>
        </View>

        <View style={[styles.returnfirstbox, styles.returnfirstboxborder]}>
          <Text style={styles.fontweightbold}>Products</Text>
        </View>

        <View style={[styles.returnfirstbox, styles.returnfirstboxborder]}>
          <Text style={styles.fontweightbold}>QC Status</Text>
        </View>

        <View style={styles.returnfirstbox}>
          <Text style={styles.fontweightbold}>Action</Text>
        </View>
      </View>

      <View style={styles.creditboxsec}>
        <View style={[styles.returnfirstbox, styles.returnfirstboxborder]}>
          <Text style={styles.fontcolorgray}>31 July 2022 | 4.30 PM</Text>
        </View>

        <View style={[styles.returnfirstbox, styles.returnfirstboxborder]}>
          <Text style={styles.fontcolorgray}>1</Text>
        </View>

        <View style={[styles.returnfirstbox, styles.returnfirstboxborder]}>
          <Text style={styles.fontcolorgray}>In Progress</Text>
        </View>

        <View style={styles.returnfirstbox}>
          <Text style={styles.fontcolororg}>Edit</Text>
        </View>
      </View>
    </View>
  );
};

export default SingleUploads;
