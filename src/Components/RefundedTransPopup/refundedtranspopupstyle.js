import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    orderdetailshead: {
        height: "100%",
        position: 'absolute',
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        alignItems: 'center',
    },

    orderdetailspopup: {
        width: '100%',
        backgroundColor: "#fff",
        marginTop: 66,
    },

    orderdetailspopupinner: {
        width: "98%",
        marginHorizontal: 5,
        marginVertical: 10,
    },

    firsttext: {
        fontWeight: 'bold',
        fontSize: 14,
        marginLeft: 8,
    },

    secondtext: {
        fontWeight: 'normal',
        fontSize: 12,
        marginLeft: 8,
    },

    closebtn: {
        backgroundColor: '#FF6658',
        width: 100,
        height: 37,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 24,
        marginLeft: 8,
    },

    closebtntext: {
        fontWeight: 'bold',
        color: '#fff',
    },

    returnboxhead: {
        borderColor: '#000',
        borderWidth: 1,
        marginBottom: 24,
    },

    returnboxfirst: {
        flexDirection: 'row',
        borderBottomColor: '#000',
        borderBottomWidth: 1,
        height: 45,
    },

    returnfirstbox: {
        flex: 1,
        paddingLeft: 9,
       justifyContent: 'center',
    },

   returnfirstboxborder: {
        borderRightColor: '#000',
        borderRightWidth: 1,
    },

    fontweightbold: {
        fontWeight: 'bold',
    },

    returnboxsec: {
        flexDirection: 'row',
        height: 45,
    },

    returnboxsecbox: {
        flex: 1,
        paddingHorizontal: 4,
        justifyContent: 'center',
        paddingLeft: 9,
    },

    fontcolorgray: {
        color: '#6D6D6D',
    },

    creditboxsec: {
        flexDirection: 'row',
        height: 55,
    },



});

export default styles;