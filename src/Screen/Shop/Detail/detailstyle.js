import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    deatilcontainer: {
        flex: 1,
    },

   deatilheader: {
        backgroundColor: '#FF6658',
        paddingHorizontal: 17,
        paddingTop: 17,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 0,
        elevation: 5,
    },

    deatillogohead: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    deatillogo: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    deatillogotext: {
        color: '#fff',
        marginLeft: 8,
        fontSize: 17,

    },

    deatilheadertexthead: {
        marginTop: 11,
        width: 130,
        alignItems: 'center',
    },

    deatilheadertext: {
        fontWeight: 'bold',
        fontSize: 15,
        color: '#fff',
        marginBottom: 2,
    },

    deatilheadertextline: {
        width: 130,
        height: 4,
        backgroundColor: '#fff',
    },

    detailcompcontainerhead: {
        paddingHorizontal: 12,
        paddingTop: 10,
        marginBottom: 105,
    },

    detailinfobtnbox: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#D9D9D9',
        marginVertical: 12,
    },

    detailinfobtn: {
        flex: 1,
        paddingVertical: 4,
        paddingLeft: 8,
    },

    btntext: {
        fontSize: 12,
    },

    detailinfobtntextcolor: {
        color: "#FF6658",
        fontWeight: 'bold',
        fontSize: 12,
    },

    
});

export default styles;