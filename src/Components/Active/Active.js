import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import styles from './activestyle';
import AllStock from '../AllStock/AllStock';
import OutofStock from '../OutofStock/OutofStock';
import LowStock from '../LowStock/LowStock';

const Active = () => {

    const [btntextcolor, setBtnTextColor] = useState("All Stock");

    const renderStockComp = (type) => {

        if (type === 'All Stock') {
            return <AllStock />;
        }

        if (type === 'Out of stock') {
            return <OutofStock />;
        }

        if (type === 'Low Stock') {
            return <LowStock />;
        }

    }; 

    return (
        <View>
            <View style={styles.returningbtnbox}>
                <View style={styles.returningbtnfixbox}>
                    <TouchableOpacity onPress={() => setBtnTextColor("All Stock")} style={styles.returningtodaybtn}>
                        <Text style={btntextcolor === "All Stock" && styles.rbtntextcolor}>All Stock (0)</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => setBtnTextColor("Out of stock")} style={[styles.returningtodaybtn, { borderLeftWidth: 1, borderLeftColor: "#D9D9D9" }]}>
                        <Text style={btntextcolor === "Out of stock" && styles.rbtntextcolor}>Out of stock (0)</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => setBtnTextColor("Low Stock")} style={[styles.returningtodaybtn, { borderLeftWidth: 1, borderLeftColor: "#D9D9D9" }]}>
                        <Text style={btntextcolor === "Low Stock" && styles.rbtntextcolor}>Low Stock (0)</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {renderStockComp(btntextcolor)}
            
        </View>
    )
}

export default Active;