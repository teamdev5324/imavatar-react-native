import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    backgroundColor: '#FF6557',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    paddingHorizontal: 20,
  },

  logo: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  logotext: {
    color: '#ffffff',
    marginLeft: 8,
  },

  userdetails: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    paddingHorizontal: 20,
    backgroundColor: '#FFF',
    marginBottom: 5,
  },

  userdetailsprofile: {
    height: 29,
    width: 29,
    borderRadius: 50,
    backgroundColor: '#D9D9D9',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  userdetailsprofiletext: {
    fontWeight: 'bold',
    fontSize: 15,
  },

  userdetailsname: {
    fontWeight: 'bold',
    fontSize: 15,
  },

  barbox: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 31,
    backgroundColor: '#FFF',
    marginBottom: 10,
    paddingHorizontal: 20,
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
