import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    orderinputtext: {
        fontWeight: 'bold',
        fontSize: 15,
    },

    ordersearchbox: {
        borderColor: '#D9D9D9',
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        marginTop: 8,
        backgroundColor: '#F8F8F8',
        paddingHorizontal: 8,
    },

    searchIcon: {
        width: 13,
        height: 13,
    },

    ordercompdatetime: {
        width: '42%',
        borderColor: '#D9D9D9',
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        marginTop: 23,
        marginBottom: 15,
        backgroundColor: '#F8F8F8',
        paddingVertical: 8,
        paddingHorizontal: 10,
    },

    datetimetext: {
        color: '#6D6D6D',
    },

    ordercompbox: {
        backgroundColor: '#F5F5F5',
        borderRadius: 10,
        padding: 10,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 0,
        elevation: 6,
    },

    orderidbox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    orderidtext: {
        fontSize: 14,
        fontWeight: 'bold',
    },

    textcolor: {
        color: '#FF6658',
    },

    skuidtext: {
        color: '#000',
        fontSize: 14,
        fontWeight: 'bold',
    },

    metaltextbox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 9,
        marginVertical: 5,
    },

    metalnumtext: {
        color: '#6D6D6D',
    },

    orderdatetext: {
        fontWeight: 'bold',
    },

    orderdate: {
        color: '#6D6D6D',
        fontWeight: 'normal',
    },

    orderquanthead: {
        flexDirection: 'row',
        height: 65,
        marginVertical: 10,
    },

    orderquantheaditem: {
        justifyContent: 'space-between',

    },

    orderquantheadone: {
        paddingRight: 10,
        borderRightWidth: 2,
        borderRightColor: '#D9D9D9',
    },

    orderquantheadtwo: {
        width: "22%",
        alignItems: 'center',
        borderRightWidth: 2,
        borderRightColor: '#D9D9D9',
    },

    orderquantheadthree: {
        width: "29%",
        paddingHorizontal: 9,
        borderRightWidth: 2,
        borderRightColor: '#D9D9D9',
    },

    orderquantheadfour: {
        width: "29%",
        paddingHorizontal: 9,
    },

    orderquantblack: {
        fontWeight: 'bold',
    },

    orderquantgray: {
        color: '#6D6D6D',
    },

    ordercustthead: {
        flexDirection: 'row',

    },

    ordercustheaditemone: {
        width: "34%",
        borderRightWidth: 2,
        borderRightColor: '#D9D9D9',
    },

    ordercusttextmar: {
        marginBottom: 5,
    },

    ordercustheaditemtwo: {
        width: "31%",
        borderRightWidth: 2,
        borderRightColor: '#D9D9D9',
        paddingLeft: 9,
    },

    ordercustheaditemthree: {
        width: "31%",
        paddingLeft: 9,
    },

    orderquantorg: {
        color: '#FF6658',
        fontWeight: 'bold',
    },


});

export default styles;