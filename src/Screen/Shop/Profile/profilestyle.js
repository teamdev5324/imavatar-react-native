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
    marginBottom: 6,
  },

  deleteIconcircle: {
    height: 26,
    width: 26,
    borderRadius: 50,
    borderColor: '#FFFFFF',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  deleteIcon: {
    height: 16,
    width: 16,
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
    alignItems: 'center',
  },

  personaldetailtext: {
    fontWeight: 'bold',
    fontSize: 12,
  },

  cancelchequebox: {
    flexDirection: 'row',
    marginTop: 25,
    width: '65%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  cancelchequetext: {
    fontWeight: 'bold',
    fontSize: 14,
  },

  cancelchequeicon: {
    height: 22,
    width: 22,
  },

  addnewuserbutton: {
    width: 160,
    height: 35,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF6658',
    color: '#ffffff',
    textTransform: 'lowercase',
    alignSelf: 'center',
  },

  addnewusertext: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#FFFFFF',
  },

  manageuserbox: {
    shadowColor: '#000000',
    shadowOffset: {width: 25, height: 25},
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 3,
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 10,
    marginTop: 23,
  },

  manageusericonbox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  manageusereditIcon: {
    width: 16,
    height: 16,
    marginRight: 13,
  },

  manageuserdeleteIcon: {
    width: 16,
    height: 16,
  },

  manageusertextblack: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 12,
    marginBottom: 3,
  },

  manageusertextgray: {
    color: '#939393',
    fontWeight: 'normal',
    fontSize: 12,
  },

  changepassinputfull: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  changepassinputlabel: {
    color: '#000000',
    fontStyle: 'normal',

    fontSize: 12,
  },

  changepassinputbox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#D9D9D9',
    backgroundColor: '#F8F8F8',
    paddingHorizontal: 10,
  },

  changepassinput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  eyeIcon: {
    width: 14,
    height: 14,
    marginLeft: 35,
  },

  strongtext: {
    marginTop: 21,
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: 14,
  },

  chartext: {
    color: '#939393',
  },

  ulbox: {
    marginBottom: 10,
  },

  libox: {
    marginTop: 10,
    flexDirection: 'row',
  },

  liboxicon: {
    color: '#939393',
  },

  liboxtext: {
    flex: 1,
    paddingLeft: 5,
    color: '#939393',
  },

  changepassbutton: {
    width: 160,
    height: 35,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF6658',
    color: '#ffffff',
    textTransform: 'lowercase',
    alignSelf: 'center',
    marginTop: 30,
  },

  changepasstext: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#FFFFFF',
  },

  legaltermstextbox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
  },

  legaltermstext: {
    fontWeight: 'normal',
    fontSize: 12,
    color: '#000000',
  },

  inputphone: {
    width: '100%',
    backgroundColor: '#F8F8F8',
    borderColor: '#D9D9D9',
    borderWidth: 1,
    paddingLeft: 9,
    marginTop: 25,
  },

  subbutton: {
    width: 160,
    height: 35,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF6658',
    color: '#ffffff',
    textTransform: 'lowercase',
    alignSelf: 'center',
    marginTop: 25,
  },

  deletemodelhead: {
    height: '100%',
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    alignItems: 'center',
  },

  deletemodelpopup: {
    height: 135,
    width: 390,
    backgroundColor: '#fff',
    marginTop: 168,
  },

  deletemodelpopupinner: {
    width: '95%',
    marginHorizontal: 8,
    marginVertical: 8,
  },

  deletemodelIcon: {
    fontSize: 16,
    alignSelf: 'flex-end',
  },

  deletemodelbox: {
    marginLeft: 20,
  },

  deletemodeltext: {
    color: '#000000',
  },

  delbtnbox: {
    flexDirection: 'row',
    marginTop: 17,
  },

  yesbutton: {
    backgroundColor: '#FF6658',
    borderRadius: 10,
    width: 90,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },

  yesbuttontext: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#fff',
  },

  legalmodelpopup: {
    height: 248,
    width: 390,
    backgroundColor: '#fff',
    marginTop: 168,
  },

  legalmodelpopupinner: {
    width: '95%',
    marginHorizontal: 20,
    marginVertical: 20,
  },

  inputlegalterm: {
    width: 250,
    height: 28,
    borderColor: '#6D6D6D',
    borderWidth: 1,
    paddingHorizontal: 7,
    paddingVertical: 5,
    marginBottom: 12,
  },

  selectlegaltermbox: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  selectlegaltermtext: {
    marginRight: 14,
    fontSize: 15,
  },

  dropdown1BtnStyle: {
    width: '36%',
    height: 35,
    backgroundColor: '#F8F8F8',
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#D9D9D9',
  },

  dropdown1DropdownStyle: {
    backgroundColor: '#EAE8E8',
  },

  dropdown1BtnTxtStyle: {
    textAlign: 'left',
  },

  legalcheckbox: {
    flexDirection: 'row',
    marginTop: 15,
    alignItems: 'center',
  },

  legalcheckboxtitle: {
    color: '#000',

    marginLeft: 10,
  },

  legalbtnbox: {
    flexDirection: 'row',
    marginTop: 17,
  },

  sendbtn: {
    backgroundColor: '#FF6658',
    borderRadius: 2,
    width: 130,
    height: 38,
    justifyContent: 'center',
    alignItems: 'center',
  },

  sendbuttontext: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#fff',
  },
});

export default styles;
