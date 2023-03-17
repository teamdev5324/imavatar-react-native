import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    orderdetailsstate: {
        borderColor: '#D9D9D9',
        borderWidth: 1,
        marginBottom: 15,
    },

    orderdetailsstatehead: {
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingLeft: 15,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 3,
        zIndex: 2,
    },

    orderdetailsheadicon: {
        width: 15,
        height: 16,
        position: 'absolute',
        top: 6,
        right: 7,
    },

    statetext: {
        fontWeight: "bold",
        fontSize: 14,
        color: "#000",
    },

    orderdetailsstatebtop: {
        height: 42,
        backgroundColor: '#FFFFFF',
        borderBottomWidth: 1,
        borderBottomColor: '#D9D9D9',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 15,
        paddingRight: 7,
    },

    statebtext: {
        fontWeight: 'bold',
        fontSize: 12,
    },

    stateline: {
        borderBottomWidth: 1,
        borderBottomColor: '#D9D9D9',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 15,
        paddingRight: 79,
        paddingVertical: 10,
    },

    statelinetext: {
        fontSize: 12,
        fontWeight: 'normal',
        color: '#000',
    },

    productline: {
        borderBottomWidth: 1,
        borderBottomColor: '#D9D9D9',
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 10,
        paddingLeft: 15,
        paddingVertical: 10,
    },

    productlinetext1: {
        marginHorizontal: 142,
    },

    productlinetext2: {
        marginLeft: 131,
        marginRight: 142,
    },

    productlinetext3: {
        marginLeft: 112,
        marginRight: 126,
    },

    productlinevtext: {
        color: '#FF6658',
    },

    orderdetailscathead: {
        backgroundColor: '#fff',
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: '#D9D9D9',
        paddingLeft: 15,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 3,
        zIndex: 2,
    },

    orderdetailscategorybott: {
        paddingTop: 15,
        paddingLeft: 15,
    },

    statepiechartbox: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 15,
    },

    statepiechart: {
        width: 180,
        height: 180,
        backgroundColor: '#182D4A',
    },

    charttextbox: {
        justifyContent: 'space-between',
        marginLeft: 12,
    },

    catcharttext: {
        position: 'absolute',
        color: '#fff',
        top: 79,
        left: 60,
    }

});

export default styles;