import { View, Text, TextInput } from 'react-native';
import React from 'react';
import styles from './descriptionstyle';
import InputWithIcon from '../InputWithIcon/InputWithIcon';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SaveButton from '../SaveButton/SaveButton';

const Description = ({ onDSBtnPress, onDGOBBtnPress, onCancelPress, }) => {
  return (
      <View>
          <InputWithIcon star="star" title="Brief Desccription" />
          <InputWithIcon star="star" title="Highlights" />
          <InputWithIcon star="star" title="Keywords" />
          <InputWithIcon star="star" title="Related faiths" />
          <InputWithIcon star="star" title="Related Festival" />
          <InputWithIcon star="star" title="Related Deities" />
          <InputWithIcon star="star" title="Other Information" />
          <InputWithIcon star="star" title="Form of product" select="select" />
          <InputWithIcon star="star" title="Perishable/Expirable" select="select" />
          <InputWithIcon star="star" title="Shelf Life" />
          <InputWithIcon star="star" title="Fragile" select="select" />
          <InputWithIcon star="star" title="Return Available" select="select" />
          <InputWithIcon star="star" title="Exchange Available" select="select" />


          <View style={styles.inputwithiconbox}>
              <View style={styles.inputwithiconlabel}>
                  <AntDesign name='questioncircle' color={'#000'} size={12} />
                  <Text style={styles.inputwithicontext}>Dimensions of product <Text style={styles.inputstar}>*</Text></Text>
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

          <InputWithIcon star="star" title="Unit of Measurement (UOM)" select="select" />
          
           
          <View style={styles.productvitalbtnbox}>
              <SaveButton title="Save & Next" nobradius="nobradius" onPress={onDSBtnPress} />
              <SaveButton title="Save & Go Back" nobradius="nobradius" onPress={onDGOBBtnPress} />
          </View>

          <SaveButton title="Cancel" nobradius="nobradius" onPress={onCancelPress} />
          
          
    </View>
  )
}

export default Description;