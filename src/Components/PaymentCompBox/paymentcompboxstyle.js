import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    paymentcompbox: {
        backgroundColor: '#F5F5F5',
        borderRadius: 10,
        padding: 10,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 0,
        elevation: 6,
        marginBottom: 15,
    },

    invoicedonhead: {
        flexDirection: 'row',
        height: 65,
        marginBottom: 15,
    },

    orderquantheaditem: {
        justifyContent: 'space-between',
    },

    invoicedonheadone: {
        paddingRight: 7,
        borderRightWidth: 2,
        borderRightColor: '#D9D9D9',
    },

    invoicedonheadtwo: {
        width: "19%",
        paddingLeft: 7,
        borderRightWidth: 2,
        borderRightColor: '#D9D9D9',
    },

    invoicedonheadthree: {
        width: "29%",
        paddingLeft: 7,
        borderRightWidth: 2,
        borderRightColor: '#D9D9D9',
    },

    invoicedonheadfour: {
        paddingHorizontal: 7,
    },

    orderquantblack: {
        fontWeight: 'bold',
    },

    orderquantgray: {
        color: '#6D6D6D',
    },

    orderquantorg: {
        color: '#FF6658',
        fontWeight: 'bold',
    },

    actionboxhead: {
        flexDirection: 'row',
        height: 65,
    },


    actionboxheadtwo: {
        width: "22%",
        paddingLeft: 9,
        borderRightWidth: 2,
        borderRightColor: '#D9D9D9',
    },

    actionboxheadthree: {
        width: "32%",
        paddingLeft: 9,
        borderRightWidth: 2,
        borderRightColor: '#D9D9D9',
    },

    actionboxheadfour: {
        paddingHorizontal: 9,
    }
});

export default styles;