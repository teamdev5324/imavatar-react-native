import { View } from 'react-native';
import React from 'react';
import InputWithIcon from '../InputWithIcon/InputWithIcon';
import SaveButton from '../SaveButton/SaveButton';
import styles from './pricingstyle';

const Pricing = ({ onPSBtnPress, onCancelPress, onGOBBtnPress, show, setShow }) => {
  return (
    <View>
      <InputWithIcon star="star" title="Partner SKU ID" />
      <InputWithIcon star="star" title="Product Title" labelsidetext={true} show={show} setShow={setShow} />
      <InputWithIcon star="star" title="On hand unit cost" />
      <InputWithIcon star="star" title="Maximum Retail price" />
      <InputWithIcon star="star" title="HSN Code" />

      <View style={styles.productvitalbtnbox}>
        <SaveButton title="Save & Next" nobradius="nobradius" onPress={onPSBtnPress} />
        <SaveButton title="Save & Go Back" nobradius="nobradius" onPress={onGOBBtnPress} />
      </View>

      <SaveButton title="Cancel" nobradius="nobradius" onPress={onCancelPress} />

    </View>
  )
}

export default Pricing;