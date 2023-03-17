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

    inventoryheadertexthead: {
        width: 85,
        alignItems: 'center',
    },

    inventoryheadertextline: {
        width: 85,
        height: 4,
        backgroundColor: '#fff',
    },

    dashboardheadertexthead: {
        width: 156,
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
        width: 156,
        height: 4,
        backgroundColor: '#fff',
    },

    ordercomcontainer: {
        paddingHorizontal: 12,
        paddingTop: 10,
    },


});

export default styles;