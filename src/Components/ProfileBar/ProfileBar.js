import { View, Text, Image, TextInput, TouchableHighlight } from 'react-native'
import React, { useState } from 'react'
import styles from "./profilebarstyle";
import InputUI from '../InputUI/InputUI';

const ProfileBarBox = ({ profilewhite, profileorange, title, downicon, upicon }) => {

    const [firstname, onChangeFirstName] = useState("");
    const [lastname, onChangeLastName] = useState("");
    const [email, onChangeEmail] = useState("");
    const [mobilenumber, onChangeMobileNumber] = useState("");
    const [businessname, onChangeBusinessName] = useState("");
    const [address, onChangeAddress] = useState("");
    const [pincode, onChangePinCode] = useState("");
    const [city, onChangeCity] = useState("");
    const [statename, onChangeStateName] = useState("");
    const [country, onChangeCountry] = useState("");
    const [show, setShow] = useState(false);

    return (

        <View style={styles.completeprofilebarbox}>
            <View style={styles.profilebarbox}>
                <View style={styles.profilebarboxdetails}>
                    <Image style={styles.profilebarprofile} source={show ? profileorange  : profilewhite} />
                    <Text style={[styles.profilebartext, show && styles.profilebartextorange]}>{title}</Text>
                </View>
                <TouchableHighlight underlayColor={'transparent'}  onPress={() => setShow(!show)}>
                    {show ? <Image style={styles.profilebaricon} source={upicon} /> : <Image style={styles.profilebaricon} source={downicon} />}
                </TouchableHighlight>
            </View>


            {show && <View style={styles.personaldetailsfull} >
                <View style={styles.personaldetail}>
                    <View style={styles.personaldetailtextbox}>
                        <Text style={styles.personaldetailtext}>Personal Details</Text>
                        <Image style={styles.editIcon} 
                        
                        source={require('../../assets/Icons/edit.png')} />
                    </View>

                    <InputUI label="First Name" placeholder="Prashant" value={firstname} onChangeName={onChangeFirstName} />

                    <InputUI label="Last Name" placeholder="Thakare" value={lastname} onChangeName={onChangeLastName} />

                    <InputUI label="Email ID" placeholder="pt@gmail.com" value={email} onChangeName={onChangeEmail} />

                    <InputUI label="Mobile Number" placeholder="787510003" value={mobilenumber} onChangeName={onChangeMobileNumber} />

                    <InputUI label="Name of Business" placeholder="Ambe bhandar" value={businessname} onChangeName={onChangeBusinessName} />

                </View>

                <View style={styles.personaldetail}>
                    <Text style={styles.personaldetailtext}>Business Address</Text>

                    <InputUI label="Address Line" placeholder="23-B, Vidyapith colony" value={address} onChangeName={onChangeAddress} />

                    <InputUI label="Pin Code" placeholder="444606" value={pincode} onChangeName={onChangePinCode} />

                    <InputUI label="City" placeholder="Amravati" value={city} onChangeName={onChangeCity} />

                    <InputUI label="State" placeholder="Maharashtra" value={statename} onChangeName={onChangeStateName} />

                    <InputUI label="Country" placeholder="India" value={country} onChangeName={onChangeCountry} />

                </View>

            </View>}
        </View>


    )
}

export default ProfileBarBox