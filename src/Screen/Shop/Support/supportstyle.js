import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    paymentcontainer: {
        flex: 1,
    },

    paymentheader: {
        backgroundColor: "#FF6658",
        paddingHorizontal: 17,
        paddingTop: 17,
        shadowColor: "#000000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 0,
        elevation: 5,
    },

    paymentlogohead: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    paymentlogo: {
        flexDirection: "row",
        alignItems: "center",
    },

    paymentlogotext: {
        color: "#fff",
        marginLeft: 8,
        fontSize: 17,
    },

    paymentheadertexthead: {
        marginTop: 11,
        width: 75,
        alignItems: "center",
    },

    paymentheadertext: {
        fontWeight: "bold",
        fontSize: 15,
        color: "#fff",
        marginBottom: 2,
    },

    paymentheadertextline: {
        width: 75,
        height: 4,
        backgroundColor: "#fff",
    },

    supportbottomhead: {
        paddingHorizontal: 16,
        paddingVertical: 24,
    },

    supportfirstboxhead: {
        borderColor: "#D9D9D9",
        borderWidth: 1,
        marginBottom: 21,
    },

    helpbox: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderBottomColor: "#D9D9D9",
        borderBottomWidth: 1,
    },

    helpiconbox: {
        width: 20,
        height: 20,
        borderRadius: 50,
        borderColor: "#FF6658",
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    supportselectbox: {
        paddingHorizontal: 10,
        paddingVertical: 10,
    },

    selectbox: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 124,
    },

    fontbold: {
        fontWeight: "bold",
    },

    dropdown1BtnStyle: {
        width: "50%",
        height: 40,
        backgroundColor: "#FFF",
        borderRadius: 3,
        borderWidth: 1,
        borderColor: "#D9D9D9",
    },

    dropdown1BtnTxtStyle: {
        color: "#000",
        fontSize: 14,
        textAlign: "center",
    },

    dropdown1DropdownStyle: {
        backgroundColor: "#EAE8E8",
    },

    textareaboxhead: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 15,
    },

    textareabox: {
        borderWidth: 1,
        borderColor: "#D9D9D9",
        width: "50%",
        paddingHorizontal: 10,
    },

    uploadbox: {
        width: 70,
        height: 80,
        borderWidth: 1,
        borderColor: "#D9D9D9",
        justifyContent: "center",
        alignItems: "center",
    },

    btnhead: {
        alignItems: "center",
    },

    btn: {
        width: 150,
        height: 36,
        backgroundColor: "#FF6658",
        justifyContent: "center",
        alignItems: "center",
    },

    btntext: {
        color: "#fff",
        fontWeight: "bold",
    },

    supportsecondboxhead: {
        borderColor: "#D9D9D9",
        borderWidth: 1,
        marginBottom: 27,
    },

    faqbox: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderBottomColor: "#D9D9D9",
        borderBottomWidth: 1,
    },

    faqtextbox: {
        padding: 10,
    },

    videobox: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderColor: "#D9D9D9",
        borderWidth: 1,
        marginBottom: 10,
    },

    videosliderbox: {
        marginBottom: 20,
    },

    videoslideritem: {
        width: 146,
        height: 120,
        marginRight: 10,
    },


    video: {
        height: 90,
        marginBottom: 5,
    },


    supportthirdboxhead: {
        borderColor: "#D9D9D9",
        borderWidth: 1,
        position: "relative",
    },

    addresshead: {
        flexDirection: "row",
    },

    addressheadmiddle: {
        flexDirection: "row",
        marginVertical: 10,
    },

    addresstextone: {
        fontWeight: "bold",
        marginRight: 60,
    },

    addresstexttwo: {
        fontWeight: "bold",
        marginRight: 46,
    },

    addresstextthree: {
        fontWeight: "bold",
        marginRight: 30,
    },

    msgiconbox: {
        width: 25,
        height: 25,
        borderRadius: 50,
        borderColor: "#FF6658",
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        right: 15,
        bottom: 15,
    },
});

export default styles;
