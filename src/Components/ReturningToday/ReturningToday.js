import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import styles from './returningtodaystyle';
import OrderCompBox from '../OrderCompBox/OrderCompBox';
import ReturnandNotRLayout from '../ReturnandNotRLayout/ReturnandNotRLayout';

const ReturningToday = () => {

    const [btntextcolor, setBtnTextColor] = useState("Returning Today");

    return (
        <View>

            <Text style={styles.orderinputtext}>Returning Today (0)</Text>

            <View style={styles.returningbtnbox}>
                <View style={styles.returningbtnfixbox}>
                    <TouchableOpacity onPress={() => setBtnTextColor("Returning Today")} style={styles.returningtodaybtn}>
                        <Text style={btntextcolor === "Returning Today" && styles.rbtntextcolor}>Returning Today</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => setBtnTextColor("Not Received")} style={[styles.returningtodaybtn, { borderLeftWidth: 1, borderLeftColor: "#D9D9D9" }]}>
                        <Text style={btntextcolor === "Not Received" && styles.rbtntextcolor}>Not Received</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {btntextcolor === 'Returning Today' ?
                
                <ReturnandNotRLayout>
                <OrderCompBox Orderid="Order ID #0001" Sukid="IMA SKU ID" metaltext="6 Inch Metal Ganesha idol" number="Poo77890" date="28-06-2022" orderqty="2" orderamt="1200.00" deliverydate="03-07-2022" Pskuid="60015" Customertext1="Customer Details" Customertextlabel1="Prashant Thakare, Mumbai, MH" Customertext2="Order Status" Customertextlabel2="Handed over" Customertext3="Pick-up Date | Time" Customertextlabel3="29-06-2022 18:00 PM"/>
                <OrderCompBox Orderid="Order ID #0001" Sukid="IMA SKU ID" metaltext="6 Inch Metal Ganesha idol" number="Poo77890" date="28-06-2022" orderqty="2" orderamt="1200.00" deliverydate="03-07-2022" Pskuid="60015" Customertext1="Customer Details" Customertextlabel1="Prashant Thakare, Mumbai, MH" Customertext2="Order Status" Customertextlabel2="Handed over" Customertext3="Pick-up Date | Time" Customertextlabel3="29-06-2022 18:00 PM" color="gray" />
                </ReturnandNotRLayout>
                :
                <ReturnandNotRLayout>
                    <OrderCompBox Orderid="Order ID #0001" Sukid="IMA SKU ID" metaltext="6 Inch Metal Ganesha idol" number="Poo77890" date="28-06-2022" orderqty="2" orderamt="1200.00" deliverydate="03-07-2022" Pskuid="60015" Customertext1="Customer Details" Customertextlabel1="Prashant Thakare, Mumbai, MH" Customertext2="Order Status" Customertextlabel2="Handed over" Customertext3="Pick-up Date | Time" Customertextlabel3="29-06-2022 18:00 PM" color="gray" />

                    <OrderCompBox Orderid="Order ID #0001" Sukid="IMA SKU ID" metaltext="6 Inch Metal Ganesha idol" number="Poo77890" date="28-06-2022" orderqty="2" orderamt="1200.00" deliverydate="03-07-2022" Pskuid="60015" Customertext1="Customer Details" Customertextlabel1="Prashant Thakare, Mumbai, MH" Customertext2="Order Status" Customertextlabel2="Handed over" Customertext3="Pick-up Date | Time" Customertextlabel3="29-06-2022 18:00 PM" color="gray" />
                </ReturnandNotRLayout>
            }
        </View>
    )
}

export default ReturningToday;