import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './activecompboxstyle';
import {Switch} from 'react-native-paper';

const ActiveCompBox = () => {
  const [switchOn, setSwitchOn] = useState(false);

  return (
    <View style={styles.ordercompbox}>
      <View style={styles.categoryimagehead}>
        <View style={styles.catimgbox}>
          <Image
            style={styles.catimg}
            source={require('../../assets/Images/categoryimg.png')}
          />
          <View>
            <Text style={styles.fontweighttext}>Category</Text>
            <Text style={styles.fontcolorlight}>Pooja Samagri</Text>
          </View>
        </View>

        <View>
          <Text style={styles.fontweighttext}>IMA SKU ID</Text>
          <Text style={styles.fontcolorlight}>Poo77890</Text>
        </View>
      </View>

      <View style={styles.producttextbox}>
        <View>
          <Text style={styles.fontweighttext}>Product Name</Text>
          <Text style={styles.fontcolorlight}>Agarbatti</Text>
        </View>

        <View>
          <Text style={styles.fontweighttext}>Partner SKU ID</Text>
          <Text style={styles.fontcolorlight}>ABC123</Text>
        </View>
      </View>

      <View style={styles.catquanthead}>
        <View style={[styles.catquantheaditem, styles.catquantheadone]}>
          <Text style={styles.fontweighttext}>On-hand quantity</Text>

          <View style={styles.catquanticonbox}>
            <AntDesign name={'minuscircle'} color={'#4F4F4F'} size={14} />
            <Text style={styles.catquanticontext}>102</Text>
            <AntDesign name={'pluscircle'} color={'#4F4F4F'} size={14} />
          </View>
        </View>

        <View style={[styles.catquantheaditem, styles.catquantheadtwo]}>
          <Text style={styles.fontweighttext}>Restock{'\n'}Level</Text>

          <View style={styles.catquanticonbox}>
            <AntDesign name={'minuscircle'} color={'#4F4F4F'} size={14} />
            <Text style={styles.catquanticontext}>40</Text>
            <AntDesign name={'pluscircle'} color={'#4F4F4F'} size={14} />
          </View>
        </View>

        <View style={[styles.catquantheaditem, styles.catquantheadthree]}>
          <Text style={styles.fontweighttext}>In transit{'\n'}quantity</Text>
          <Text style={styles.fontcolorlight}>16</Text>
        </View>

        <View style={[styles.catquantheaditem, styles.catquantheadfour]}>
          <Text style={styles.fontweighttext}>Your Selling{'\n'}Price</Text>
          <Text style={styles.fontcolorlight}>150</Text>
        </View>
      </View>

      <View style={styles.hsncodehead}>
        <View style={[styles.catquantheaditem, styles.catquantheadone]}>
          <Text style={styles.fontweighttext}>HSN Code</Text>
          <Text style={styles.fontcolorlight}>667546</Text>
        </View>

        <View style={[styles.catquantheaditem, styles.catquantheadthree]}>
          <Text style={styles.fontweighttext}>On-hand{'\n'}Unit cost</Text>
          <Text style={styles.fontcolorlight}>200</Text>
        </View>

        <View style={styles.hsncodeheaditemthree}>
          <Text style={styles.fontweighttext}>Action</Text>
          <Text style={styles.hsncodeitemedit}>Edit</Text>
        </View>

        <View style={styles.hsncodeheaditemfour}>
          <Text style={styles.fontweighttext}>Status</Text>
          <Switch
            style={{marginLeft: -10}}
            thumbColor={'#D9D9D9'}
            trackColor={{true: '#FF6658', false: 'grey'}}
            value={switchOn}
            onValueChange={() => {
              setSwitchOn(!switchOn);
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default ActiveCompBox;
