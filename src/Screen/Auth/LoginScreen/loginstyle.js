import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

  loginbox: {
    marginTop: 32,
    alignItems: 'center',
  },

  logo: {
    alignItems: 'center',
    marginBottom: 45,
  },

  logotext: {
    marginTop: 5,
  },

  logininputbox: {
    width: '90%',
    marginHorizontal: 20,
  },

  logintext: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 102,
  },

  input: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#D9D9D9',
    padding: 10,
  },

  inputmargin: {
    marginBottom: 45,
  },

  Passwordtext: {
    alignSelf: 'flex-end',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 6,
    marginBottom: 28,
  },

  loginbutton: {
    borderRadius: 4,
    alignItems: 'center',
    backgroundColor: '#FF6557',
    color: '#ffffff',
    padding: 8,
    textTransform: 'lowercase',
  },

  loginbuttontext: {
    fontWeight: 'bold',
    fontSize: 12,
    color: '#FFFFFF',
  },

  ortext: {
    fontSize: 12,
    textAlign: 'center',
    color: '#707070',
    marginTop: 18,
  },

  otptext: {
    fontSize: 12,
    textAlign: 'center',
    color: '#000000',
    marginTop: 12,
    fontWeight: 'bold',
  },

  accounttext: {
    fontSize: 12,
    textAlign: 'center',
    color: '#707070',
    marginTop: 21,
  },

  accounttextinnner: {
    color: '#FF6557',
  },
});

export default styles;
