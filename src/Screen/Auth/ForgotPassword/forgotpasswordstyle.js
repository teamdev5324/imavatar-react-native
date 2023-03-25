import {StyleSheet} from 'react-native';

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
    shadowOffset: {width: 0, height: 4},
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
    marginHorizontal: 15,
    width: '94%',
    alignItems: 'center',
  },

  logo: {
    alignItems: 'center',
    marginBottom: 45,
  },

  logotext: {
    marginTop: 5,
    fontSize: 18,
  },

  forgotpasstext: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 80,
  },

  fotgotgraytext: {
    fontSize: 14,
    color: '#707070',
  },

  otpinputbox: {
    marginVertical: 26,
    flexDirection: 'row',
    justifyContent: 'center',
  },

  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#FF6658',
    borderRadius: 4,
    padding: 10,
    color: '#000000',
  },

  inputmarginright: {
    marginRight: 16,
  },

  otprequest: {
    color: '#525252',
    fontSize: 12,
    marginTop: 17,
    borderBottomWidth: 1,
    borderBottomColor: '#525252',
    paddingBottom: 3,
  },

  signupbutton: {
    marginTop: 21,
    width: '40%',
    borderRadius: 4,
    alignItems: 'center',
    backgroundColor: '#FF6557',
    color: '#ffffff',
    padding: 12,
  },

  signupbuttontext: {
    fontWeight: 'bold',
    fontSize: 12,
    color: '#FFFFFF',
  },
});

export default styles;
