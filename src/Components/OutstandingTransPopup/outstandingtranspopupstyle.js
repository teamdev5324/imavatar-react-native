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

    popupinnerone: {
        borderColor: '#000',
        borderWidth: 1,
        marginTop: 9,
        marginBottom: 16,
    },

    popupinneronefirst: {
        flexDirection: 'row',
        borderBottomColor: '#000',
        borderBottomWidth: 1,
        height: 45,
    },

    popupinnerfirstbox: {
        flex: 1,
        paddingLeft: 6,
        paddingTop: 2,
    },

    popupinnerfirstboxborder: {
        borderRightColor: '#000',
        borderRightWidth: 1,
    },

    fontweightbold: {
        fontWeight: 'bold',
    },

    popupinneronesec: {
        flexDirection: 'row',
        height: 60,
    },

    popupinnertwosec: {
        flexDirection: 'row',
        height: 55,
    },

    popupinnersecbox: {
        flex: 1,
        paddingHorizontal: 4,
        paddingTop: 3,
    },

    fontcolorgray: {
        color: '#6D6D6D',
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


});

export default styles;