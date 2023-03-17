import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    orderdetailsorder: {
        borderColor: '#D9D9D9',
        borderWidth: 1,
        marginBottom: 15,
    },

    orderdetailshead: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: '#fff',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 3,
    },

    orderdetailsheadicon: {
        width: 15,
        height: 16,
        position: 'absolute',
        top: 6,
        right: 7,
    },

    orderid: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 14,
    },

    orderidtext: {
        fontWeight: 'bold',
        fontSize: 12,
    },

    orderidicon: {
        marginLeft: 6,
        width: 8,
        height: 16,

    },

    imagetext: {
        fontWeight: 'bold',
        fontSize: 12,
        marginRight: 14,
    },

    pickup: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    orderdetailsbottom: {
        paddingHorizontal: 7,
        paddingVertical: 12,
        flexDirection: 'row',
        alignItems: 'center',
    },

    orderdetailsbottomimg: {
        marginLeft: 49,
        marginRight: 31,
    },

    orderdetailsbottomtext: {
        fontSize: 12,
        marginRight: 36,
    },

    textsize: {
        fontSize: 12,
    },

    orderdetailsbottomtwotext: {
        fontSize: 12,
        marginLeft: 18,
        color: '#FF6658',
        fontWeight: 'bold',
    },

});

export default styles;