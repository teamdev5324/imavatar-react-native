import { View } from 'react-native';
import React from 'react';
import InputWithIcon from '../InputWithIcon/InputWithIcon';
import SaveButton from '../SaveButton/SaveButton';
import styles from './detailpricingcompstyle';

const DetailPricingComp = ({ onDPSBtnPress, onDPCancelPress }) => {
  return (
    <View>
      <InputWithIcon star="star" title="Partner SKU ID" />
      <InputWithIcon star="star" title="Your Selling price" />
      <InputWithIcon star="star" title="On hand unit cost" />
      <InputWithIcon star="star" title="Maximum Retail price" />
      <InputWithIcon star="star" title="HSN Code" />

      <View style={styles.productvitalbtnbox}>
        <SaveButton title="Submit" nobradius="nobradius" onPress={onDPSBtnPress} />
        <SaveButton title="Cancel" nobradius="nobradius" onPress={onDPCancelPress} />
      </View>

      

    </View>
  )
}

export default DetailPricingComp;