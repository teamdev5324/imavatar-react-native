import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    orderselectcontainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 25,
    },

    ordertext: {
        color: '#000',
        fontWeight: 'bold',
        marginRight: 20,
    },

    dropdown1BtnStyle: {
        width: "50%",
        height: 38,
        backgroundColor: '#FFF',
        borderRadius: 3,
        borderWidth: 1,
        borderColor: '#D9D9D9',

    },

    dropdown1BtnTxtStyle: {
        color: '#000',
        fontSize: 14,
        textAlign: 'center',
        fontWeight: 'bold',
    },

    dropdown1DropdownStyle: {
        backgroundColor: '#EAE8E8',
    },

    dropdown1BtnStyletwo: {
        width: "45%",
        height: 40,
        backgroundColor: '#FFF',
        borderRadius: 3,
        borderWidth: 1,
        borderColor: '#D9D9D9',
    },

    filterselectcontainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 12,
        marginBottom: 40,
    },

    filtercompdatetime: {
        width: '34%',
        height: 40,
        borderColor: '#D9D9D9',
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        backgroundColor: '#FFF',
        paddingVertical: 10,
        paddingHorizontal: 8,
        marginLeft: 25,
    },

    filterdatetimetext: {
        color: '#000',
        fontWeight: 'bold',
    },

    btncontainerhead: {
        flexDirection: 'row',
    }

});

export default styles;