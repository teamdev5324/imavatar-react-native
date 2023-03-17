import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './updatemodelstyle';

const UpdateModel = ({showmodel, setShowModel}) => {
  return (
      <View style={styles.updatemodelhead}>
          <View style={styles.updatemodelpopup}>
              <View style={styles.updatemodelpopupinner}>
                  <View style={styles.popupinnerone}>
                      <View style={styles.popupinneronefirst}>
                          <Text style={styles.firsttext}>Label Details</Text>
                      </View>

                      <View style={styles.popupinneronesec}>
                          <Text style={styles.sectextone}>Product Title</Text>
                          <Text>6 Inch Metal{"\n"}Ganesha idol</Text>
                      </View>

                      <View style={styles.popupinneronethird}>
                          <View style={styles.thirdone}>
                              <View style={styles.thirdonetextbox}>
                                  <Text style={styles.thirdonetext}>Order Details</Text>
                              </View>
                              <View style={styles.thirdonebox}>
                                  <View style={styles.boxitem1}>
                                      <Text style={styles.boxitem1textone}>Order Date</Text>
                                      <Text style={styles.boxitem1texttwo}>29-06-2022</Text>
                                  </View>

                                  <View style={styles.boxitem1}>
                                      <Text style={styles.boxitem1textsnd}>Order ID</Text>
                                      <Text style={styles.boxitem1texttwo}>#0001</Text>
                                  </View>

                                  <View style={styles.boxitem1}>
                                      <Text style={styles.boxitem1textthrd}>IMA SKU ID</Text>
                                      <Text style={styles.boxitem1texttwo}>Poo77890</Text>
                                  </View>

                                  <View style={styles.boxitem1}>
                                      <Text style={styles.boxitem1textfor}>Partner SKU ID</Text>
                                      <Text style={styles.boxitem1texttwo}>60015</Text>
                                  </View>

                                  <View style={styles.boxitem1}>
                                      <Text style={styles.boxitem1textfive}>Order Quantity</Text>
                                      <Text style={styles.boxitem1texttwo}>2</Text>
                                  </View>
                              </View>
                          </View>

                          <View style={styles.thirdtwo}>
                              <View style={styles.thirdonetextbox}>
                                  <Text style={styles.thirdonetext}>Buyer Details</Text>
                              </View>
                              <View style={styles.thirdonebox}>
                                  <Text style={styles.boxitem2textgray}>Prashant Thakare</Text>
                                  <Text style={styles.boxitem2textgray}>Mumbai</Text>
                                  <Text style={styles.boxitem2textgray}>Maharashtra</Text>
                              </View>
                          </View>
                      </View>
                  </View>

                  <View style={styles.popupinnerone}>
                      <View style={styles.popupinneronefirst}>
                          <Text style={styles.firsttext}>Invoice Details</Text>
                      </View>

                      <View style={styles.popupinnertwosecond}>
                          <View style={[styles.popupinnersecondamt, styles.popupinnersecondamtborder]}>
                              <Text style={styles.fontweightbold}>Invoice Amount</Text>
                          </View>

                          <View style={[styles.popupinnersecondamt, styles.popupinnersecondamtborder]}>
                              <Text style={styles.fontweightbold}>Invoice Date</Text>
                          </View>

                          <View style={styles.popupinnersecondamt}>
                              <Text style={styles.fontweightbold}>Grand Total</Text>
                          </View>
                      </View>

                      <View style={styles.popupinnertwothird}>
                          <View style={[styles.popupinnerthirdamt, styles.popupinnersecondamtborder]}>
                              <Text style={styles.boxitem1texttwo}>1200</Text>
                          </View>

                          <View style={[styles.popupinnerthirdamt, styles.popupinnersecondamtborder]}>
                              <Text style={styles.boxitem1texttwo}>28-06-2022</Text>
                          </View>

                          <View style={styles.popupinnerthirdamt}>
                              <Text style={styles.boxitem1texttwo}>GG67556</Text>
                          </View>
                      </View>
                  </View>

                  <View style={styles.popupinnerone}>
                      <View style={styles.popupinneronefirst}>
                          <Text style={styles.firsttext}>Packing Details for order</Text>
                      </View>

                      <View style={styles.popupinneronefirst}>
                          <Text style={styles.firsttext}>Packing Details</Text>
                      </View>

                      <View style={styles.unitbox}>
                          <View style={styles.unitboxitem}>
                              <View style={styles.unitboxitem1}>
                                  <Text style={styles.unitboxitem1text}>Length (cmc)</Text>
                              </View>

                              <View style={styles.unitboxitem2}>
                                  <Text style={styles.boxitem1texttwo}>15</Text>
                              </View>
                          </View>

                          <View style={styles.unitboxitem}>
                              <View style={styles.unitboxitem1}>
                                  <Text style={styles.unitboxitem1text}>Breadth (cmc)</Text>
                              </View>

                              <View style={styles.unitboxitem2}>
                                  <Text style={styles.boxitem1texttwo}>20</Text>
                              </View>
                          </View>

                          <View style={styles.unitboxitem}>
                              <View style={styles.unitboxitem1}>
                                  <Text style={styles.unitboxitem1text}>Height (cmc)</Text>
                              </View>

                              <View style={styles.unitboxitem2}>
                                  <Text style={styles.boxitem1texttwo}>25</Text>
                              </View>
                          </View>

                          <View style={styles.unitboxitem}>
                              <View style={styles.unitboxitem1}>
                                  <Text style={styles.unitboxitem1text}>Weight (cmc)</Text>
                              </View>

                              <View style={styles.unitboxitem2}>
                                  <Text style={styles.boxitem1texttwo}>0.5</Text>
                              </View>
                          </View>

                          <View style={styles.updatebtnbox}>
                              <TouchableOpacity style={styles.updatebtn}>
                                  <Text style={styles.updatebtntext}>Update</Text>
                              </TouchableOpacity>
                          </View>

                      </View>
                  </View>

                  <View style={styles.goanddownbtnbox}>
                      <TouchableOpacity style={styles.gobackbtn} onPress={() => setShowModel(!showmodel)}>
                          <Text style={styles.gobackbtntext}>Go Back</Text>
                      </TouchableOpacity>

                      <TouchableOpacity style={styles.gobackbtn}>
                          <Text style={styles.gobackbtntext}>Download & Print</Text>
                      </TouchableOpacity>
                  </View>

              </View>
          </View>
      </View>
  )
}

export default UpdateModel