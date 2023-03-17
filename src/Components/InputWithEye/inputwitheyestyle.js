import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  changepassinputfull: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  changepassinputlabel: {
    color: '#000000',
    fontStyle: 'normal',

    fontSize: 10,
  },

  changepassinputbox: {
    width: 228,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#D9D9D9',
    backgroundColor: '#F8F8F8',
    paddingHorizontal: 10,
  },

  changepassinput: {
    width: '85%',
  },

  eyeIcon: {
    width: 14,
    height: 14,
  },
});

export default styles;
