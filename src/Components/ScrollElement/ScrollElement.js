import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './scrollelementstyle';

const ScrollElement = ({ title, onPress, state, last }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.dashboardheadertexthead, last === "last" ? { marginRight: 0 } : { marginRight: 15 }]}>
                <Text style={styles.dashboardheadertext}>{title}</Text>
                <View style={state === title && styles.dashboardheadertextline}></View>
            </View>
        </TouchableOpacity>
    )
}

export default ScrollElement