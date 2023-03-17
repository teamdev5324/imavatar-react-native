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
});

export default styles;
