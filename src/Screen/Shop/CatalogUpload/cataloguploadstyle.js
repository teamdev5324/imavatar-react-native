import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  paymentcontainer: {
    flex: 1,
    paddingBottom: 25,
  },

  paymentheader: {
    backgroundColor: '#FF6658',
    paddingHorizontal: 17,
    paddingTop: 17,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 5,
  },

  paymentlogohead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  paymentlogo: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  paymentlogotext: {
    color: '#fff',
    marginLeft: 8,
    fontSize: 17,
  },

  paymentheadertexthead: {
    marginTop: 11,
    width: 135,
    alignItems: 'center',
  },

  paymentheadertext: {
    fontWeight: '700',
    fontSize: 15,
    color: '#fff',
    marginBottom: 2,
  },

  paymentheadertextline: {
    width: 124,
    height: 4,
    backgroundColor: '#fff',
  },

  catalogbottomhead: {
    paddingHorizontal: 16,
    paddingVertical: 15,
    backgroundColor: '#fff',
  },

  catalogbottomtext: {
    fontWeight: '700',
    fontSize: 14,
    marginBottom: 10,
  },

  catalogsearchbox: {
    borderColor: '#D9D9D9',
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    backgroundColor: '#F8F8F8',
    paddingHorizontal: 8,
  },

  catalogsearchinput: {
    color: '#000',
    width: '95%',
  },

  searchIcon: {
    width: 13,
    height: 13,
  },

  catalogboxhead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },

  overviewboxhead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },

  catalogbtnbox: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#D9D9D9',
  },

  catalogbtn: {
    paddingHorizontal: 9,
    paddingVertical: 10,
  },

  cbtntextclickcolor: {
    color: '#FF6658',
    fontWeight: 'bold',
    fontSize: 12,
  },

  cbtntextcolor: {
    fontSize: 12,
  },
  singlecatbtnbox: {
    alignItems: 'center',
    marginTop: 20,
  },

  singlecatbtn: {
    width: 250,
    height: 36,
    backgroundColor: '#FF6658',
    justifyContent: 'center',
    alignItems: 'center',
  },

  singlecatbtntext: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default styles;
