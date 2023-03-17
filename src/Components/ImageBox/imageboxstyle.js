import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    imageboxcontainer: {
        flexDirection: 'row',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        backgroundColor: '#fff',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.8,
        shadowRadius: 0,
        elevation: 10,
        paddingHorizontal: 15,
        paddingVertical: 8,
        marginBottom: 15,
    },

    imageboxone: {
        flex: 1,
        marginRight: 10,
    },

    imageboxtwo: {
        flex: 3,
        justifyContent: 'space-between',
    },


    imageboxtwotext: {
        fontSize: 16,
    },

    imageboxtwobtn: {
        backgroundColor: '#FF6658',
        width: 81,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        alignSelf: 'flex-end',
    },

    imageboxtwobtntext: {
        color: '#fff',
        fontWeight: 'bold',
    }

});

export default styles;