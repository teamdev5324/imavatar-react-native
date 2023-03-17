import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    savebutton: {
        width: 160,
        height: 35,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FF6658',
        color: '#ffffff',
        textTransform: 'lowercase',
        alignSelf: 'center',
        marginTop: 28,
    },

    savebuttonnobradius: {
        width: 128,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FF6658',
        color: '#ffffff',
        textTransform: 'lowercase',
        alignSelf: 'center',
    },

    savebuttontext: {
        fontWeight: 'bold',
        fontSize: 15,
        color: '#FFFFFF',
    }

});

export default styles;