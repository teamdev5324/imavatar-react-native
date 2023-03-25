import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 33,
    backgroundColor: '#fff',
  },

  imagebackground: {
    position: 'absolute',
    bottom: 0,
    left: 0,
  },

  verificationbox: {
    marginHorizontal: 20,
    width: '90%',
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

  verificationtext: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 16,
  },

  verificationtextbox: {
    marginTop: 18,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  veritext: {
    fontSize: 14,
  },

  veritextinnner: {
    fontSize: 14,
    color: '#FF6557',
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
  },

  inputmarginright: {
    marginRight: 16,
    textAlign: 'center',
  },

  otprequest: {
    fontWeight: 'bold',
    fontSize: 12,
    marginTop: 17,
  },

  signupbutton: {
    marginTop: 21,
    width: '100%',
    borderRadius: 4,
    alignItems: 'center',
    backgroundColor: '#FF6557',
    color: '#ffffff',
    padding: 9,
  },

  signupbuttontext: {
    fontWeight: 'bold',
    fontSize: 12,
    color: '#FFFFFF',
  },
});

export default styles;
