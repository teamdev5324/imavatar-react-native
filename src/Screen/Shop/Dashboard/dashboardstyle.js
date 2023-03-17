import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    dashboardcontainer: {
        flex: 1,
    },

    dashboardheader: {
        backgroundColor: '#FF6658',
        paddingHorizontal: 17,
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

    dashboardheadertexthead: {
        width: 75,
        alignItems: 'center',
    },

    dashboardheadertext: {
        marginTop: 11,
        color: '#fff',
        marginBottom: 2,

    },

    dashboardheadertextline: {
        width: 75,
        height: 4,
        backgroundColor: '#fff',
    },

    dashboardlist: {
        paddingHorizontal: 16,
        marginTop: 15,
    },

    dashboardlistitem: {
        backgroundColor: "#fff",
        paddingHorizontal: 12,
        paddingVertical: 12,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 6,
    },

    listitemfiltericon: {
        width: 15,
        height: 16,
        position: 'absolute',
        top: 4,
        right: 8,
    },

    listitemtextbox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 3,

    },

    listitemtext: {
        fontWeight: 'bold',
        fontSize: 12,
    },

    listitemicon: {
        marginLeft: 9,
    },

    listitempertextheadbox: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },

    listitempertextbox: {
        flexDirection: "row",
        alignItems: 'center',
    },

    listitempericon: {
        height: 11,
        width: 9,
        marginRight: 3,

    },

    listitempertext: {
        fontSize: 12,
        color: '#04D800',
    },

    listitemperbotttext: {
        fontSize: 12,
        marginLeft: 14,
        color: '#000000',
        fontWeight: 'normal',
    },

    salesanalyticshead: {
        flexDirection: 'row',
        paddingLeft: 16,
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    salesanalyticstext: {
        fontWeight: 'bold',
        fontSize: 12,
    },

    salesanalyticsbtnbox: {
        flexDirection: 'row',
        borderColor: '#D9D9D9',
        borderWidth: 1,
    },

    bezierchart: {
        backgroundColor: '#182D4A',
        marginVertical: 10,
        paddingTop: 10,
    },

    beziertexthead: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 12,

    },

    beziertext: {
        color: "#fff",
    },

    beziercirclehead: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    beziercirclebox: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    beziercircle: {
        width: 10,
        height: 10,
        borderRadius: 50,
        marginRight: 6,
    },

    orderhead: {
        borderColor: '#D9D9D9',
        borderWidth: 1,
        flexDirection: 'row',
        marginBottom: 10,
    },

    orderheadbtn: {
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRightColor: '#D9D9D9',
        borderRightWidth: 1,
    },

    orderheadbtntext: {
        fontWeight: 'bold',
        color: '#FF6658',
    },

});

export default styles;