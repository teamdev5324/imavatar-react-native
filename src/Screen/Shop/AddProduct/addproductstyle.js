import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    ordercontainer: {
        flex: 1,
    },

    dashboardheader: {
        backgroundColor: '#FF6658',
        paddingTop: 17,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 0,
        elevation: 5,
    },

    dashboardlogohead: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 17,
    },

    dashboardlogo: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    dashboardlogotext: {
        color: '#fff',
        marginLeft: 8,
        fontSize: 17,

    },

    dashboardheadertextcontainer: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        marginTop: 11,
    },

    dashboardheadertexthead: {
        width: 115,
        alignItems: 'center',
    },

    dashboardheadertextheadprod: {
        width: 120,
        alignItems: 'center',
    },

    dashboardheadertext: {
        color: '#fff',
        marginBottom: 2,
    },

    dashboardheadertextbold: {
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 2,
    },

    dashboardheadertextline: {
        width: 115,
        height: 4,
        backgroundColor: '#fff',
    },

    dashboardheadertextlineprod: {
        width: 120,
        height: 4,
        backgroundColor: '#fff',
    },

    ordercomcontainer: {
        paddingHorizontal: 12,
        paddingTop: 10,
        marginBottom: 105,
    },

    pricemodelhead: {
        height: "100%",
        position: 'absolute',
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        alignItems: 'center',
    },

    fontweight: {
        fontWeight: 'bold',
    },

    pricemodelpopup: {
        height: 340,
        width: 390,
        backgroundColor: "#fff",
        marginTop: 168,
    },

    pricemodelpopupinner: {
        width: "85%",
        marginHorizontal: 30,
        marginTop: 40,
        marginBottom: 23,
    },

    popupicon: {
        position: 'absolute',
        top: 10,
        right: 10,
    },

    table: {
        borderColor: '#000',
        borderWidth: 1,
    },

    tablerowone: {
        alignItems: 'flex-end',
        paddingHorizontal: 12,
        paddingVertical: 5,
    },

    tablerowtwo: {
        height: 40,
        borderTopColor: '#000',
        borderTopWidth: 1,
        flexDirection: 'row',
    },

    tablerowitemone: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 12,
        borderRightColor: "#000",
        borderRightWidth: 1,
    },

    tablerowitemtwo: {
        flex: 1,
        justifyContent: 'center',
        paddingRight: 12,
        alignItems: 'flex-end',
    },

    tablerowlast: {
        height: 35,
        borderTopColor: '#000',
        borderTopWidth: 1,
        flexDirection: 'row',
    },

    variationsmodelpopup: {
        height: 120,
        width: 390,
        backgroundColor: "#fff",
        marginTop: 168,
    },

    variationsmodeltextbox: {
        flex: 1,
        justifyContent: 'center',
    },

    variationsmodeltext: {
        textAlign: 'center',
        fontSize: 16,
    }


});

export default styles;