import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    popularproduct: {
        borderColor: '#D9D9D9',
        borderWidth: 1,
        marginBottom: 15,
    },

   popularproducthead: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#fff',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 3,
    },
   
    popularproductheadicon: {
        width: 15,
        height: 16,
        position: 'absolute',
        top: 6,
        right: 7,
    },

    imagetext: {
        fontWeight: 'bold',
        fontSize: 12,
        marginRight: 15,
    },

    category: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 35,
    },

    orderidtext: {
        fontWeight: 'bold',
        fontSize: 12,
    },

    orderidicon: {
        marginLeft: 6,
        width: 8,
        height: 16,

    },

    selling: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        width: 120,
    },

    sellingtext: {
        width: '68%',
        fontWeight: 'bold',
        fontSize: 12,
        lineHeight: 18,
    },

    sellingicon: {
        marginLeft: -6,
        width: 8,
        height: 16,
    },

     orderdetailsbottom: {
        paddingHorizontal: 7,
        paddingVertical: 12,
         flexDirection: 'row',
         justifyContent: 'space-between',
        alignItems: 'center',
    },

    sellingbottomtext: {
        color: '#000000',
        
    },

    seemoretext: {
        color: '#FF6658',
        fontWeight: 'bold',
        
    }


});

export default styles;