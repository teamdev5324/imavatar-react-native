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
        width: 105,
        alignItems: 'center',
    },

    dashboardheadertextheadprog: {
        width: 130,
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
        width: 105,
        height: 4,
        backgroundColor: '#fff',
    },

    dashboardheadertextlineprog: {
        width: 130,
        height: 4,
        backgroundColor: '#fff',
    },

    ordercomcontainer: {
        paddingHorizontal: 12,
        paddingTop: 10,
    },


});

export default styles;