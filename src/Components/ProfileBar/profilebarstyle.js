import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  completeprofilebarbox: {
    marginBottom: 10,
  },

  profilebarbox: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 31,
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.8,
    shadowRadius: 0,
    elevation: 3,
  },

  profilebarboxdetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  profilebarprofile: {
    width: 20,
    height: 20,
    marginRight: 16,
  },

  profilebartext: {
    color: '#000000',
    fontSize: 15,
  },

  profilebartextorange: {
    color: '#FF6557',
    fontWeight: 'bold',
  },

  profilebaricon: {
    width: 15,
    height: 15,
  },

  personaldetailsfull: {
    backgroundColor: '#fff',
  },

  personaldetail: {
    width: '90%',
    marginHorizontal: 20,
    marginVertical: 11,
  },

  personaldetailtextbox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  personaldetailtext: {
    fontWeight: 'bold',
    fontSize: 12,
  },

  personaldetailinput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 19,
  },

  inputlable: {
    fontSize: 12,
  },

  input: {
    width: 188,
    height: 25,
    backgroundColor: '#F8F8F8',
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 7,
  },
});

export default styles;
