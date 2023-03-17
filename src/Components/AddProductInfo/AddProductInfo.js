import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import styles from './addproductinfostyle';
import ProductVitalInfo from '../ProductVitalInfo/ProductVitalInfo';
import Pricing from '../Pricing/Pricing';
import Description from '../Description/Description';
import ImagesVideos from '../ImagesVideos/ImagesVideos';
import Variations from '../Variations/Variations';

const AddProductInfo = ({ setClickBtn, onCancelPress, show, setShow, variationshow, setVariationShow }) => {

    const [btnclick, setBtnClick] = useState("Product Vital Info");

    const onBtnPress = () => setBtnClick("Pricing");

    const onPSBtnPress = () => setBtnClick("Description");

    const onDSBtnPress = () => setBtnClick("ImagesVideos");

    const onGOBBtnPress = () => setBtnClick("Product Vital Info");

    const onISBtnPress = () => setBtnClick("Variations");

    const renderProductInfoComp = (type, setClickBtn, onBtnPress, onCancelPress, onPSBtnPress, onGOBBtnPress, onISBtnPress, show, setShow, variationshow, setVariationShow) => {

        if (type === 'Product Vital Info') {
            return <ProductVitalInfo onBtnPress={onBtnPress} onCancelPress={onCancelPress} />;
        }

        if (type === 'Pricing') {
            return <Pricing onPSBtnPress={onPSBtnPress} onCancelPress={onCancelPress} onGOBBtnPress={onGOBBtnPress} show={show} setShow={setShow} />;
        }

        if (type === 'Description') {
            return <Description onDSBtnPress={onDSBtnPress} onCancelPress={onCancelPress} onDGOBBtnPress={onBtnPress} />;
        }

        if (type === 'ImagesVideos') {
            return <ImagesVideos onISBtnPress={onISBtnPress} onCancelPress={onCancelPress} onIGOBBtnPress={onPSBtnPress} />;
        }

        if (type === 'Variations') {
            return <Variations setClickBtn={setClickBtn} onVSFBtnPress={onISBtnPress} onCancelPress={onCancelPress} onVGOBBtnPress={onDSBtnPress} vshow={variationshow} setVShow={setVariationShow} />;
    }
    };
    return (
        <View>
            <Text style={styles.productinfotext}>Rudraksha &gt; 11 Mukhi Rudraksha</Text>

            <View style={styles.productinfobtnbox}>

                <TouchableOpacity onPress={() => setBtnClick("Product Vital Info")} style={styles.productinfobtn}>
                    <Text style={btnclick === "Product Vital Info" ? styles.pinfobtntextcolor : styles.btntext}>Product{"\n"}Vital Info</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setBtnClick("Pricing")} style={[styles.productinfobtn, { borderLeftWidth: 1, borderLeftColor: "#D9D9D9" }]}>
                    <Text style={btnclick === "Pricing" ? styles.pinfobtntextcolor : styles.btntext}>Pricing</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setBtnClick("Description")} style={[styles.productinfobtn, { borderLeftWidth: 1, borderLeftColor: "#D9D9D9" }]}>
                    <Text style={btnclick === "Description" ? styles.pinfobtntextcolor : styles.btntext}>Description</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setBtnClick("ImagesVideos")} style={[styles.productinfobtn, { borderLeftWidth: 1, borderLeftColor: "#D9D9D9" }]}>
                    <Text style={btnclick === "ImagesVideos" ? styles.pinfobtntextcolor : styles.btntext}>Images/Videos</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setBtnClick("Variations")} style={[styles.productinfobtn, { borderLeftWidth: 1, borderLeftColor: "#D9D9D9" }]}>
                    <Text style={btnclick === "Variations" ? styles.pinfobtntextcolor : styles.btntext}>Variations</Text>
                </TouchableOpacity>
            </View>

            {renderProductInfoComp(btnclick, setClickBtn, onBtnPress, onCancelPress, onPSBtnPress, onGOBBtnPress, onISBtnPress, show, setShow, variationshow, setVariationShow)}

        </View>
    )

    };

export default AddProductInfo;