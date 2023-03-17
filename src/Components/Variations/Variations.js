import { View } from 'react-native';
import React from 'react';
import InputWithIcon from '../InputWithIcon/InputWithIcon';
import SaveButton from '../SaveButton/SaveButton';
import styles from './variationsstyle';

const Variations = ({ setClickBtn, onVGOBBtnPress, vshow, setVShow }) => {
  return (
    <View>
      <InputWithIcon title="Size" />
      <InputWithIcon title="Material Type" labelsidetext={true} show={vshow} setShow={setVShow} />
      <InputWithIcon star="star" title="On hand unit cost" />
      <InputWithIcon star="star" title="Maximum Retail price" />
      <InputWithIcon star="star" title="HSN Code" />

      <View style={styles.productvitalbtnbox}>
        <SaveButton title="Save & Finish" nobradius="nobradius" onPress={() => setClickBtn("Select Category")} />
        <SaveButton title="Save & Go Back" nobradius="nobradius" onPress={onVGOBBtnPress} />
      </View>

    </View>
  )
}

export default Variations;