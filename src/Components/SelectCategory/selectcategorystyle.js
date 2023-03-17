import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    paymentcontainer: {
        flex: 1,
        paddingBottom: 25,
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
        width: 124,
        alignItems: 'center',
    },

    paymentheadertext: {
        fontWeight: 'bold',
        fontSize: 15,
        color: '#fff',
        marginBottom: 2,
    },

    paymentheadertextline: {
        width: 124,
        height: 4,
        backgroundColor: '#fff',
    },

    catalogbottomhead: {
        paddingHorizontal: 16,
        paddingVertical: 15,
    },

    catalogbottomtext: {
        fontWeight: 'bold',
        fontSize: 14,
        marginBottom: 10
    },

    catalogsearchbox: {
        borderColor: '#D9D9D9',
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        marginBottom: 15,
        backgroundColor: '#F8F8F8',
        paddingHorizontal: 8,
    },

    catalogsearchinput: {
        width: '95%',
    },

    searchIcon: {
        width: 13,
        height: 13,
    },

    selectboxhead: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 46,
    },

    singlecatbtnbox: {
        alignItems: 'center',
    },

    singlecatbtn: {
        width: 250,
        height: 36,
        backgroundColor: '#FF6658',
        justifyContent: 'center',
        alignItems: 'center',
    },

    singlecatbtntext: {
        color: '#fff',
        fontWeight: 'bold',
    },

    imageboxcontainerhead: {
        marginVertical: 10,
    },

});

export default styles;