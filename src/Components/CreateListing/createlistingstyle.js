import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    ordersearchbox: {
        borderColor: '#D9D9D9',
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        marginTop: 8,
        backgroundColor: '#F8F8F8',
        paddingHorizontal: 8,
    },

    searchinput: {
        width: '95%',
    },

    searchIcon: {
        width: 13,
        height: 13,
    },

    creatingtextboxhead: {
        alignItems: 'center',
        marginVertical: 15,
    },

    creatingparatext: {
        textAlign: 'center',
        marginTop: 10,
        lineHeight: 18,
        color: '#000',
    },

    creatingheadtext: {
        fontWeight: 'bold',
        color: '#000',
    },

    creatinglistbtn: {
        width: 175,
        height: 28,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#D9D9D9',
        paddingHorizontal: 10,
        backgroundColor: '#FF6658',
    },

    btntextcolor: {
        color: '#fff',
    }


});

export default styles;