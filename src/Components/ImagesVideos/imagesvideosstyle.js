import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    Imageboxhead: { 
        marginTop: 12,
    },

    Imageboxone: {
        flexDirection: 'row',
      justifyContent: 'space-between',  
    },

    Imageboxtwo: {
        flexDirection: 'row',
    },

    Imageboxitem: {
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 6,
        width: 100,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 23,
    },

    Imageboxitemimg: {
        width: 42,
        height: 42,
        marginBottom: 5,
    },

    Imageboxitemtext: {
        fontWeight: 'bold',
        textAlign: 'center',
    },

    productvitalbtnbox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 39,
        marginTop: 10,
        marginBottom: 20,
    },




});

export default styles;