import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  barbox: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 31,
    backgroundColor: '#FFF',
    marginBottom: 10,
    paddingHorizontal: 20,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.8,
    shadowRadius: 0,
    elevation: 3,
  },

  barboxiconbox: {
    height: 19,
    width: 19,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    marginRight: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },

  iconboxicon: {
    height: 13,
    width: 13,
  },

  barboxtext: {
    fontSize: 15,
    color: '#000000',
  },
});

export default styles;
