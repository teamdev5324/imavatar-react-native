import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 33,
        backgroundColor: '#fff',
    },

    crossiconbox: {
        width: 20,
        height: 20,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.8,
        shadowRadius: 0,
        elevation: 13,
        position: 'absolute',
        top: 25,
        right: 15,
    },

    crossicon: {
        width: 10,
        height: 10,
    },

    imagebackground: {
        position: 'absolute',
        bottom: 0,
        left: 0,
    },

    verificationbox: {
        marginHorizontal: 20,
        width: "90%",
    },

    logo: {
        alignItems: 'center',
        marginBottom: 45
    },

    logotext: {
        marginTop: 5
    },

    resetpasstext: {
        fontSize: 15,
        fontWeight: "bold",
        marginBottom: 80,
        textAlign: 'center',
    },

    input: {
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#D9D9D9',
        padding: 10,
    },

    inputmargin: {
        marginBottom: 45,
    },

    confirmbutton: {
        marginTop: 63,
        width: "40%",
        borderRadius: 4,
        alignItems: 'center',
        backgroundColor: '#FF6557',
        color: '#ffffff',
        padding: 12,
        alignSelf: 'center',
    },

    confirmbuttontext: {
        fontWeight: 'bold',
        fontSize: 12,
        color: '#FFFFFF',
    },



});

export default styles;