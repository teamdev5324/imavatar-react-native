import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './popularproductsstyle';

const PopularProducts = () => {
  return (
    <View style={styles.popularproduct}>
      <View style={styles.popularproducthead}>
        <Image
          style={styles.popularproductheadicon}
          source={require('../../assets/Icons/filteredit.png')}
        />

        <Text style={styles.imagetext}>Image</Text>

        <Text style={styles.imagetext}>Product title</Text>

        <View style={styles.category}>
          <Text style={styles.orderidtext}>Category</Text>
          <Image
            style={styles.orderidicon}
            source={require('../../assets/Icons/arrow-down.png')}
          />
        </View>

        <View style={styles.selling}>
          <Text style={styles.sellingtext}>Your Selling Stock Status</Text>
          <Image
            style={styles.sellingicon}
            source={require('../../assets/Icons/arrow-down.png')}
          />
        </View>
      </View>

      <View style={styles.orderdetailsbottom}>
        <Image
          style={styles.sellingbottomimg}
          source={require('../../assets/Images/orderdetailsbottomone.png')}
        />
        <Text style={styles.sellingbottomtext}>Agarbati</Text>
        <Text style={styles.sellingbottomtext}>Pooja_Samagri</Text>
        <Text style={styles.sellingbottomtext}>In stock</Text>

        <Text style={styles.seemoretext}>See more</Text>
      </View>
    </View>
  );
};

export default PopularProducts;
