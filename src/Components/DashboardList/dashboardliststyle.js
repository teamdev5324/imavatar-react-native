import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    dashboardlistitem: {
        backgroundColor: "#fff",
        paddingHorizontal: 12,
        paddingVertical: 12,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 6,
        marginBottom: 15,
    },

    listitemfiltericon: {
        width: 15,
        height: 16,
        position: 'absolute',
        top: 4,
        right: 8,
    },

    listitemtextbox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 3,

    },

    listitemtext: {
        fontWeight: 'bold',
        fontSize: 12,
    },

    listitemicon: {
        marginLeft: 9,
    },

    listitempertextheadbox: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },

    listitempertextbox: {
        flexDirection: "row",
        alignItems: 'center',
    },

    listitempericon: {
        height: 11,
        width: 9,
        marginRight: 3,

    },

    listitempertext: {
        fontSize: 12,
        color: '#04D800',
    },

    listitemperbotttext: {
        fontSize: 12,
        marginLeft: 14,
        color: '#000000',
        fontWeight: 'normal',
    }



});

export default styles;