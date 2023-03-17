import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    ordercompbox: {
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
        marginVertical: 15,
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
        paddingHorizontal: 9,
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
        justifyContent: 'space-between',
    },

    ordercustheaditemone: {
        width: "34%",
        borderRightWidth: 2,
        borderRightColor: '#D9D9D9',
    },

    ordercustheaditembnone: {
        width: "34%",
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

    ordercustheaditembnonetwo: {
        width: "27%",
    },

    ordercustheaditemthree: {
        width: "37%",
        paddingLeft: 9,
    },

    ordercustheaditemthreenone: {
        width: "47%",
        paddingLeft: 9,
    },

    orderquantorg: {
        color: '#FF6658',
        fontWeight: 'bold',
    }


});

export default styles;