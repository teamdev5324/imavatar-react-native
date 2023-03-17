import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    filterselectcontainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 12,
        marginBottom: 200,
        justifyContent: 'space-between',
    },

    ordertext: {
        color: '#000',
        fontWeight: 'bold',
    },

    dropdown1BtnStyle: {
        width: "50%",
        height: 38,
        backgroundColor: '#FFF',
        borderRadius: 3,
        borderWidth: 1,
        borderColor: '#D9D9D9',

    },

    dropdown1BtnTxtStyle: {
        color: '#000',
        fontSize: 14,
        textAlign: 'center',
        fontWeight: 'bold',
    },

    dropdown1DropdownStyle: {
        backgroundColor: '#EAE8E8',
    },

    resetbutton: {
        width: 80,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FF6658',
        color: '#ffffff',
        textTransform: 'lowercase',
    },

    resetbuttontext: {
        fontWeight: 'bold',
        fontSize: 15,
        color: '#FFFFFF',
    },

    downloadbtnhead: {
        alignItems: 'flex-end',
    },

    productinfobtnbox: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#D9D9D9',
        marginVertical: 15,
        height: 40,
    },

    productinfobtn: {
        flex: 1,
        paddingLeft: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },

    infoicon: {
        width: 13,
        height: 13,  
    },

    btntext: {
        fontSize: 14,
        marginRight: 5,
    },

    pinfobtntextcolor: {
        color: "#FF6658",
        fontWeight: 'bold',
        fontSize: 14,
        marginRight: 5,
    },
});

export default styles;