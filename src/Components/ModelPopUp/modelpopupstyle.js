import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    modelhead: {
        height: "100%",
        position: 'absolute',
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },

    modelpopup: {
        height: 345,
        width: 390,
        backgroundColor: "#fff",
        justifyContent: 'center'
    },

    modelpopupinner: {
        width: "95%",
        marginHorizontal: 20,

    },

    selectboxcontainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },

    selectboxtext: {
        marginRight: 85,
    },

    dropdown1BtnStyle: {
        width: "40%",
        height: 35,
        backgroundColor: '#F8F8F8',
        borderRadius: 3,
        borderWidth: 1,
        borderColor: '#D9D9D9',
    },

    dropdown1DropdownStyle: {
        backgroundColor: '#EAE8E8',
    },

    modelinputbox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },

    modelinputlable: {
        marginRight: 75,
    },

    modelinputlablem: {
        marginRight: 15,
    },

    modelinput: {
        backgroundColor: "#F8F8F8",
        borderWidth: 1,
        borderColor: "#D9D9D9",
        width: 245,
        height: 30,
    },

    modeldesc: {
        width: "98%",
        marginTop: 3,
    },

    modelbuttoncontainer: {
        alignItems: 'center',
        flexDirection: 'row',
    }


});

export default styles;