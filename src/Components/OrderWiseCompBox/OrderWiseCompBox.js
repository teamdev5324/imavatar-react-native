import { View, Text, Image } from 'react-native';
import React from 'react';
import styles from './orderwisecompboxstyle';

const OrderWiseCompBox = ({ headone, headtwo, headthree, headfour, headfive, headsix, serialnotext, orderdatetext, orderidtext, categorytext, producttitletext, Imageyellow, Imagewhite, ratingtext, orange, noratingimg, counttext }) => {

  return (
      <View style={styles.orderwisecompbox}>

          <View style={styles.orderwiseheadone}>
              <View style={[styles.orderwiseheaditem, styles.orderwiseheaditemborder]}>
                  <Text style={styles.orderwiseblack}>{headone}</Text>
                  <Text style={styles.orderwisegray}>{serialnotext}</Text>
              </View>

              <View style={[styles.orderwiseheaditemother, styles.orderwiseheaditemborder]}>
                  <Text style={styles.orderwiseblack}>{headtwo}</Text>
                  <Text style={styles.orderwisegray}>{orderdatetext}</Text>
              </View>

              <View style={[styles.orderwiseheaditemother, styles.orderwiseheaditemborder]}>
                  <Text style={styles.orderwiseblack}>{headthree}</Text>
                  <Text style={styles.orderwisegray}>{orderidtext}</Text>
              </View>

              <View style={styles.orderwiseheaditemother}>
                  <Text style={styles.orderwiseblack}>{headfour}</Text>
                  <Text style={styles.orderwisegray}>{categorytext}</Text>
              </View>
          </View>

          <View style={styles.orderwiseheadtwo}>
              <View style={[styles.orderwiseheaditemsec, styles.orderwiseheaditemborder]}>
                  <Text style={styles.orderwiseblack}>{headfive}</Text>
                  <Text style={[orange === "orange" ? styles.orderwiseorange : styles.orderwisegray]}>{producttitletext}</Text>
              </View>

              <View style={styles.orderwiseheaditemsecother}>
                  <Text style={styles.orderwiseblack}>{headsix}</Text>
                  {noratingimg === "no rating" ? <Text style={styles.orderwisegray}>{counttext}</Text> :
                    <View style={styles.orderwiseratingbox}>
                      <View style={styles.orderwiseimgbox}>
                          <Image source={Imageyellow} />
                          <Image source={Imageyellow} />
                          <Image source={Imageyellow} />
                          <Image source={Imagewhite ? Imagewhite : Imageyellow} />
                          <Image source={Imagewhite ? Imagewhite : Imageyellow} />
                      </View>
                      <Text style={styles.orderwisegray}>{ratingtext}</Text>
                  </View>}
              </View>

          </View>
      </View>
  )
}

export default OrderWiseCompBox;