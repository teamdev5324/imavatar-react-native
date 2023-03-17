import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    inputwithiconbox: {
        marginBottom: 10,
    },

    inputwithiconlabelbox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    inputwithiconlabel: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 6,
    },

    inputwithicontext: {
        marginLeft: 5,
    },

    labelsidefont: {
        color: '#FF6658',
        fontSize: 14,
    },

    inputstar: {
        color: 'red',
    },

    inputwithiconinput: {
        borderColor: '#D9D9D9',
        borderWidth: 1,
        backgroundColor: '#F8F8F8',
    },

    dropdown1BtnStyle: {
        width: "100%",
        height: 32,
        backgroundColor: '#F8F8F8',
        borderRadius: 3,
        borderWidth: 1,
        borderColor: '#D9D9D9',
    },

    dropdown1BtnTxtStyle: {
        color: '#6D6D6D',
        fontSize: 14,
        textAlign: 'left',
    },

    dropdown1DropdownStyle: {
        backgroundColor: '#EAE8E8',
    },

    dropdown1RowStyle: {
        height: 40,
    }

});

export default styles;