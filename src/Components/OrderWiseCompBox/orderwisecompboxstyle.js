import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    orderwisecompbox: {
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

    orderwiseheadone: {
        flexDirection: 'row',
        height: 65,
        marginBottom: 15,
    },

    orderwiseheaditem: {
        flex: 1,
        justifyContent: 'space-between',
    },

    orderwiseheaditemborder: {
        borderRightWidth: 2,
        borderRightColor: '#D9D9D9',
    },
    
    orderwiseheaditemother: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    orderwiseblack: {
        fontWeight: 'bold',
    },

    orderwisegray: {
        color: '#6D6D6D',
    },

    orderwiseorange: {
        color: '#FF6658',
    },

    orderwiseheadtwo: {
        flexDirection: 'row',
        height: 55,
    },

    orderwiseheaditemsec: {
        width: "28%",
        justifyContent: 'space-between',
    },

    orderwiseheaditemsecother: {
        flex: 1, 
        justifyContent: 'space-between',
        paddingLeft: 10,
    },

    orderwiseratingbox: {
        flexDirection: 'row',  
        alignItems: 'center',
    },

    orderwiseimgbox: {
        flexDirection: 'row',
        width: "29%",
        marginRight: 8,
        justifyContent: 'space-between',
    },

});

export default styles;