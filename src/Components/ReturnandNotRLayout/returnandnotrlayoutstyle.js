import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    ordersearchbox: {
        borderColor: '#D9D9D9',
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        backgroundColor: '#F8F8F8',
        paddingHorizontal: 8,
    },

    searchIcon: {
        width: 13,
        height: 13,
    },

    datetimebox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 23,
        marginBottom: 23,
    },

    ordercompdatetime: {
        width: '48%',
        borderColor: '#D9D9D9',
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        backgroundColor: '#F8F8F8',
        paddingVertical: 8,
        paddingHorizontal: 10,
    },

    datetimetext: {
        color: '#6D6D6D',
        fontSize: 12,
    },

    typereturncompbox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        marginBottom: 23,
    },

    typereturninput: {
        width: '37%',
        borderColor: '#D9D9D9',
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        backgroundColor: '#F8F8F8',
        paddingVertical: 8,
        paddingHorizontal: 10,
    },

    typereturninputicon: {
        width: 12,
        height: 12,
    },

    typereturnapplybtn: {
        width: 105,
        height: 37,
        backgroundColor: '#FF6658',
        justifyContent: 'center',
        alignItems: 'center',
    },

    typereturnapplybtntext: {
        color: '#fff',
        fontWeight: 'bold',
    },

});

export default styles;