import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    amountbox: {
        borderColor: '#D9D9D9',
        borderWidth: 2,
        width: "47%",
        marginBottom: 16,
    },

    amountboxtop: {
        backgroundColor: '#FF6658',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 8,
    },

    amountboxtoptext: {
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginRight: 4,
    },

    amountboxtopicon: {
        width: 14,
        height: 14,
    },

    amountboxbottom: {
        paddingBottom: 10,
        paddingTop: 6,
        alignItems: 'center',
    },

    amountboxbottomtext: {
        color: '#FF6658',
        fontWeight: 'bold',
    },

});

export default styles;