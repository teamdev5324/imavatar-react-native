import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 33,
    backgroundColor: '#fff',
    alignItems: 'center',
  },

  imagebackground: {
    position: 'absolute',
    top: '20%',
  },

  logo: {
    alignItems: 'center',
    marginBottom: 45,
  },

  logotext: {
    fontSize: 18,
    marginTop: 5,
  },

  verifiedmobilebox: {
    width: 280,
    borderRadius: 5,
    marginTop: 34,
    alignItems: 'center',
    paddingTop: 13,
    paddingBottom: 24,
  },

  verifiediconbox: {
    width: 46,
    height: 46,
    borderRadius: 50,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  verifiediconborder: {
    borderColor: '#04D800',
    borderWidth: 2,
    width: 40,
    height: 40,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  verifiedboxtext: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
    marginVertical: 10,
  },

  verifiedboxpara: {
    width: '82%',
    textAlign: 'center',
    color: '#fff',
    lineHeight: 20,
    marginBottom: 15,
  },

  verifiedboxbtn: {
    width: '75%',
    height: 32,
    backgroundColor: '#fff',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  verifiedboxbtntext: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#F8A73A',
  },
});

export default styles;
