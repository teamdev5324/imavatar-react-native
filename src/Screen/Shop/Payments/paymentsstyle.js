import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    paymentcontainer: {
        flex: 1,
        height: 1120,
    },

    paymentheader: {
        backgroundColor: '#FF6658',
        paddingHorizontal: 17,
        paddingTop: 17,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 0,
        elevation: 5,
    },

    paymentlogohead: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    paymentlogo: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    paymentlogotext: {
        color: '#fff',
        marginLeft: 8,
        fontSize: 17,

    },

    paymentheadertexthead: {
        marginTop: 11,
        width: 175,
        alignItems: 'center',
    },

    paymentheadertext: {
        fontWeight: 'bold',
        fontSize: 15,
        color: '#fff',
        marginBottom: 2,
    },

    paymentheadertextline: {
        width: 175,
        height: 4,
        backgroundColor: '#fff',
    },

    paymentbottomcontainer: {
        paddingHorizontal: 12,
        paddingTop: 16,
    },

    paymentbottomamtcontain: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },

    transactionsbtnbox: {
        alignItems: 'flex-start',
        marginBottom: 16,
    },

    transactionsbtnfixbox: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#D9D9D9',
    },

    transactionsbtn: {
        paddingLeft: 15,
        paddingRight: 18,
        paddingVertical: 5,
    },

    tbtntextcolor: {
        color: "#FF6658",
        fontWeight: 'bold',
    },

});

export default styles;