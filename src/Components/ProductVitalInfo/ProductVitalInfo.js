import {View, Text, TextInput} from 'react-native';
import React from 'react';
import styles from './productvitalinfostyle';
import InputWithIcon from '../InputWithIcon/InputWithIcon';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SaveButton from '../SaveButton/SaveButton';

const ProductVitalInfo = ({onBtnPress, onCancelPress}) => {
  return (
    <View>
      <InputWithIcon star="star" title="Product Name" />
      <InputWithIcon star="star" title="Product Title" />
      <InputWithIcon title="Product ID" />
      <InputWithIcon star="star" title="Product ID Type" select="select" />
      <InputWithIcon title="Brand Name" />
      <InputWithIcon star="star" title="Product Type" />
      <InputWithIcon star="star" title="Stock status" select="select" />
      <InputWithIcon star="star" title="Weight of Product" select="select" />
      <InputWithIcon
        star="star"
        title="Unit of Measurement (UOM)"
        select="select"
      />

      <View style={styles.inputwithiconbox}>
        <View style={styles.inputwithiconlabel}>
          <AntDesign name="questioncircle" color={'#000'} size={12} />
          <Text style={styles.inputwithicontext}>
            Dimensions of product <Text style={styles.inputstar}>*</Text>
          </Text>
        </View>

        <View style={styles.dimensionsinputbox}>
          <View style={styles.dimensionsinputitem}>
            <Text>Width</Text>
            <TextInput style={styles.dimensionsinput} />
          </View>

          <View style={styles.dimensionsinputitem}>
            <Text>Length/Height</Text>
            <TextInput style={styles.dimensionsinput} />
          </View>

          <View style={styles.dimensionsinputitem}>
            <Text>Depth</Text>
            <TextInput style={styles.dimensionsinput} />
          </View>
        </View>
      </View>

      <InputWithIcon
        star="star"
        title="Unit of Measurement (UOM)"
        select="select"
      />
      <InputWithIcon star="star" title="Country of Origin" select="select" />
      <InputWithIcon title="Included Items" />
      <InputWithIcon star="star" title="Certificate" />
      <InputWithIcon star="star" title="On hand Quantity" />
      <InputWithIcon star="star" title="Restock level" />
      <InputWithIcon title="Tax class" select="select" />
      <InputWithIcon star="star" title="Colour" select="select" />
      <InputWithIcon star="star" title="Shape" select="select" />
      <InputWithIcon star="star" title="Material type" select="select" />

      <View style={styles.productvitalbtnbox}>
        <SaveButton
          title="Save & Next"
          nobradius="nobradius"
          onPress={onBtnPress}
        />
        <SaveButton
          title="Cancel"
          nobradius="nobradius"
          onPress={onCancelPress}
        />
      </View>
    </View>
  );
};

export default ProductVitalInfo;
