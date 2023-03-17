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

    categoryimagehead: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    catimgbox: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    catimg: {
        marginRight: 11,
    },

    fontweighttext: {
        fontWeight: 'bold',
        marginBottom: 4,
    },

    fontcolorlight: {
        color: '#6D6D6D',
    },

    producttextbox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
    },

    catquanthead: {
        flexDirection: 'row',
        height: 65,
        marginBottom: 15,
    },

    catquantheaditem: {
        justifyContent: 'space-between',
    },

    catquantheadone: {
        width: "22%",
        borderRightWidth: 2,
        borderRightColor: '#D9D9D9',
    },

    catquanticonbox: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    catquanticontext: {
        color: '#6d6d6d',
        marginHorizontal: 6,
    },

    catquantheadtwo: {
        width: "24%",
        alignItems: 'center',
        borderRightWidth: 2,
        borderRightColor: '#D9D9D9',
    },

    catquantheadthree: {
        paddingHorizontal: 15,
        borderRightWidth: 2,
        borderRightColor: '#D9D9D9',
    },

    catquantheadfour: {
        paddingHorizontal: 15,
    },

    hsncodehead: {
        flexDirection: 'row',
        height: 65,
    },

    hsncodeheaditemthree: {
        paddingHorizontal: 20,
        borderRightWidth: 2,
        borderRightColor: '#D9D9D9',
    },

    hsncodeitemedit: {
        color: '#FF6658',
        marginTop: 6,
    },

    hsncodeheaditemfour: {
        paddingLeft: 15,
    },

});

export default styles;