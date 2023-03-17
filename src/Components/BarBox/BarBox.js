import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from "./barboxstyle";


const BarBox = ({ Imagesource, title, HandlePress }) => {

    return (
    <TouchableOpacity onPress={HandlePress}>
        <View style={styles.barbox}>
            <View style={styles.barboxiconbox}>
                <Image style={styles.iconboxicon} source={Imagesource} />
            </View>
            <Text style={styles.barboxtext}>{title}</Text>
            </View>
    </TouchableOpacity>
    )
}

export default BarBox