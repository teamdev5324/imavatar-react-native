import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import styles from './refundedtranspopupstyle';
import TransOrderBox from '../TransOrderBox/TransOrderBox';
import TransInvoiceBox from '../TransInvoiceBox/TransInvoiceBox';
import TransListComp from '../TransListComp/TransListComp';

const RefundedTransPopup = ({ onPress }) => {
    return (
        <View style={styles.orderdetailshead}>
            <View style={styles.orderdetailspopup}>
                <View style={styles.orderdetailspopupinner}>

                    <Text style={styles.firsttext}>Order Details</Text>

                    <Text style={styles.secondtext}>Idol &gt; Ganeshji</Text>

                    <TransOrderBox label1="" label2="" label3="" label4="" label5="" detail1="0001" detail2="8 Inch Ganeshji idol" detail3="1" detail4="1200" detail5="28-08-2022 17:04 PM" />

                    <View style={styles.returnboxhead}>
                        <View style={styles.returnboxfirst}>
                            <View style={[styles.returnfirstbox, styles.returnfirstboxborder]}>
                                <Text style={styles.fontweightbold}>Return ID</Text>
                            </View>

                            <View style={[styles.returnfirstbox, styles.returnfirstboxborder]}>
                                <Text style={styles.fontweightbold}>Type of return</Text>
                            </View>

                            <View style={styles.returnfirstbox}>
                                <Text style={styles.fontweightbold}>Reason for retuen</Text>
                            </View>

                        </View>

                        <View style={styles.returnboxsec}>
                            <View style={[styles.returnboxsecbox, styles.returnfirstboxborder]}>
                                <Text style={styles.fontcolorgray}>RE10013</Text>
                            </View>

                            <View style={[styles.returnboxsecbox, styles.returnfirstboxborder]}>
                                <Text style={styles.fontcolorgray}>Customer return</Text>
                            </View>

                            <View style={styles.returnboxsecbox}>
                                <Text style={styles.fontcolorgray}>Wrong product received</Text>
                            </View>

                        </View>
                    </View>

                    <Text style={styles.firsttext}>Invoice Details</Text>

                    <TransInvoiceBox detail1="CG/08/22/0001" detail2="28-08-2022 17:04 PM" detail3="Aditya Singh" detail4="Banglore" detail5="1260" />

                    <View style={styles.returnboxhead}>
                        <View style={styles.returnboxfirst}>
                            <View style={[styles.returnfirstbox, styles.returnfirstboxborder]}>
                                <Text style={styles.fontweightbold}>Credit Note #</Text>
                            </View>

                            <View style={[styles.returnfirstbox, styles.returnfirstboxborder]}>
                                <Text style={styles.fontweightbold}>Invoiced on</Text>
                            </View>

                            <View style={[styles.returnfirstbox, styles.returnfirstboxborder]}>
                                <Text style={styles.fontweightbold}>Order{"\n"}Amount (Rs.)</Text>
                            </View>

                            <View style={styles.returnfirstbox}>
                                <Text style={styles.fontweightbold}>Refund Amount</Text>
                            </View>
                        </View>

                        <View style={styles.creditboxsec}>
                            <View style={[styles.returnboxsecbox, styles.returnfirstboxborder]}>
                                <Text style={styles.fontcolorgray}>CN/09/22/00001</Text>
                            </View>

                            <View style={[styles.returnboxsecbox, styles.returnfirstboxborder]}>
                                <Text style={styles.fontcolorgray}>04-09-2022 11:00 AM</Text>
                            </View>

                            <View style={[styles.returnboxsecbox, styles.returnfirstboxborder]}>
                                <Text style={styles.fontcolorgray}>1200</Text>
                            </View>

                            <View style={styles.returnboxsecbox}>
                                <Text style={styles.fontcolorgray}>1005</Text>
                            </View>
                        </View>
                    </View>

                    <TransListComp />

                    <TouchableOpacity style={styles.closebtn} onPress={onPress}>
                        <Text style={styles.closebtntext}>Close</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    )
}

export default RefundedTransPopup;