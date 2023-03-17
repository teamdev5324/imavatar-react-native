import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 33,
    paddingBottom: 66,
    backgroundColor: '#fff',
  },

  signupbox: {
    alignItems: 'center',
  },

  logo: {
    alignItems: 'center',
    marginBottom: 15,
  },

  logotext: {
    marginTop: 5,
  },

  signupinputbox: {
    width: '90%',
  },

  signuptext: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 33,
  },

  input: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#D9D9D9',
    padding: 10,
  },

  inputmargin: {
    marginBottom: 30,
  },

  signupbutton: {
    marginTop: 43,
    borderRadius: 4,
    alignItems: 'center',
    backgroundColor: '#FF6557',
    color: '#ffffff',
    padding: 8,
  },

  signupbuttontext: {
    fontWeight: 'bold',
    fontSize: 12,
    color: '#FFFFFF',
    textTransform: 'uppercase',
  },

  ortext: {
    fontSize: 12,
    textAlign: 'center',
    color: '#707070',
    marginTop: 18,
  },

  accounttextbox: {
    marginTop: 18,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  accounttext: {
    fontSize: 12,
    color: '#707070',
  },

  accounttextinnner: {
    fontSize: 12,
    color: '#FF6557',
  },
});

export default styles;
