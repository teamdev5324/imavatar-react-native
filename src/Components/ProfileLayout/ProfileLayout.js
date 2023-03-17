import { View, Text, Image, TextInput, TouchableHighlight } from 'react-native'
import React from 'react'
import styles from "./profilelayoutstyle";


const ProfileLayout = ({ profileblack, profileorange, title, downicon, upicon, children, show, onPress }) => {

    return (

        <View style={styles.completeprofilebarbox}>
            <View style={styles.profilebarbox}>
                <View style={styles.profilebarboxdetails}>
                    <Image style={styles.profilebarprofile} source={show ? profileorange : profileblack} />
                    <Text style={[styles.profilebartext, show && styles.profilebartextorange]}>{title}</Text>
                </View>
                <TouchableHighlight underlayColor={'transparent'} onPress={onPress}>
                    {show ? <Image style={styles.profilebaricon} source={upicon} /> : <Image style={styles.profilebaricon} source={downicon} />}
                </TouchableHighlight>
            </View>

            {children}
        </View>


    )
}

export default ProfileLayout