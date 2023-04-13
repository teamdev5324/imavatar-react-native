import React, {Component} from 'react';
import {
  Pressable,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Picker,
  Platform,
  NativeModules,
  Alert,
} from 'react-native';
import CryptoJS from 'crypto-js';

import ImgToBase64 from 'react-native-image-base64';

import styles from '../Screen/Shop/Profile/profilestyle';
import {AutocompleteDropdown} from 'react-native-autocomplete-dropdown';
import SearchableDropdown from 'react-native-searchable-dropdown';
import ProfileLayout from '../Components/ProfileLayout/ProfileLayout';
import InputUI from '../Components/InputUI/InputUI';
import PickerModal from 'react-native-picker-modal-view';
import SaveButton from '../Components/SaveButton/SaveButton';
import ManageUserTextBox from '../Components/ManageUserTextBox/ManageUserTextBox';
import InputWithEye from '../Components/InputWithEye/InputWithEye';
import ListItem from '../Components/ListItem/ListItem';
import DocumentPicker from 'react-native-document-picker';
import LegalTermTextBox from '../Components/LegalTermTextBox/LegalTermTextBox';
import CheckBox from '../Components/CheckBox/CheckBox';
import ModelPopUp from '../Components/ModelPopUp/ModelPopUp';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import {connect} from 'react-redux';
import RNFetchBlob from 'rn-fetch-blob';
import {partnerBaseUrl, userBaseUrl} from '../apiService';
// import {MaterialCommunityIcons} from '@expo/vector-icons';
const passwordPattern =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

let items = [
  {
    id: 1,
    name: 'JavaScript',
  },
  {
    id: 2,
    name: 'Java',
  },
  {
    id: 3,
    name: 'Ruby',
  },
  {
    id: 4,
    name: 'React Native',
  },
  {
    id: 5,
    name: 'PHP',
  },
  {
    id: 6,
    name: 'Python',
  },
  {
    id: 7,
    name: 'Go',
  },
  {
    id: 8,
    name: 'Swift',
  },
];

export class ProfileEditScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: this.props.user_idd,

      personalshow: false,
      bankshow: false,
      gstinshow: false,
      manageusersshow: false,
      changepasswordshow: false,
      legaltermsshow: false,
      whatsappnotificationshow: false,
      profileEdit: false,
      editBus: false,
      editBank: false,
      editGst: false,
      editUser: false,
      first_name: '',
      last_name: '',
      email_id: '',
      mobile_number: '',
      businessname: '',
      address_line: '',
      pincode: '',
      pincode_index: '',
      pincode_pickerOptions: [],

      county: '',
      county_pickerOptions: [],

      city: '',
      city_index: '',
      city_pickerOptions: [],

      state: '',
      state_index: '',
      state_pickerOptions: [],
      state_code: '',

      country: '',
      account_holder_name: '',
      account_number: '',
      account_number_confirm: '',
      documentId: '',
      bank_name: '',
      ifsc_code: '',
      can_cheq_pic: '',
      gstin: '',
      gstinemail: '',
      gstinmobileNumber: '',
      pan: '',
      registeredBusinessName: 'String',
      whatsappNumber: '',
      password: '',
      c_password: '',
      c_r_password: '',
      branch_name: '',
      termsData: [],
      _terms: {data: []},
    };
  }

  requestPermissions = async () => {
    const galleryPermissionStatus = await Permissions.check('photo');

    if (galleryPermissionStatus !== 'granted') {
      const status = await Permissions.requestMultiple(['photo']);
      if (status['photo'] === 'granted') {
        console.log('Both permissions granted');
      } else {
        console.log('One or both permissions denied');
      }
    } else {
      console.log('Both permissions already granted');
    }
  };

  _getFile = async () => {
    try {
      const results = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.images],

        //There can me more options as well find above
      });

      console.log('results', results);

      this.setState({
        can_cheq_pic: results.uri,
      });
      ImgToBase64.getBase64String(results.uri)
        .then(base64String => {
          console.log('====================================');
          console.log('base64String', base64String);
          console.log('====================================');
          // this.setState({
          //   documentId: base64String,
          // });
        })
        .catch(err => {
          console.log('err', err);
        });
      // setMultipleFile(results);
    } catch (err) {
      //Handling any exception (If any)
      if (DocumentPicker.isCancel(err)) {
        //If user canceled the document selection
        Alert.alert('', 'Canceled from multiple doc picker');
      } else {
        //For Unknown Error
        Alert.alert('', 'Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };

  async downloadFile() {
    try {
      const config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `${partnerBaseUrl}/files/download/` + this.state.documentId,
        headers: {
          Authorization: 'Bearer ' + this.props.login_tokenn,
        },
      };

      const res = await axios.request(config);
      console.log('res', res);

      await RNFetchBlob.config({
        fileCache: true,
        addAndroidDownloads: {
          useDownloadManager: true,
          notification: true,
          path:
            RNFetchBlob.fs.dirs.DownloadDir + '/' + res.data.results.filename,
          description: 'Downloading file...',
        },
      }).fetch('GET', res.data.results.url);

      Alert.alert('', 'File downloaded successfully.');
    } catch (error) {
      Alert.alert('', 'File not downloaded.');
      console.log(
        '🚀 ~ file: ProfileEditScreen.js:196 ~ downloadFile ~ error:',
        error,
      );
    }
  }

  _getUserData() {
    axios
      .get(`${userBaseUrl}/user/noAuth/getUserInfo/${this.state.user_id}`)
      .then(Response => {
        console.log('Response', Response.data);
        this.setState({
          first_name: Response.data.data.firstName,
          last_name: Response.data.data.lastName,
          email_id: Response.data.data.emailId,
          mobile_number: Response.data.data.phoneNumber,
        });
      })
      .catch(err => console.log('Error => ', err));
  }

  componentDidMount() {
    this._getUserData();
    // alert(this.props.route.params.userid);
    this._getOtherdata();
    this._getCountry();
    this.requestPermissions();
  }

  _getCountry() {
    const headers = {
      Authorization: 'Bearer ' + this.props.login_tokenn,
      'Content-Type': 'application/json',
    };
    this.state.pincode_pickerOptions = [];
    axios
      .get(`${partnerBaseUrl}/city`, {headers})
      .then(Response => {
        console.log('Response-data', Response.data.results);
        for (let i = 0; i < Response.data.results.length; i++) {
          this.state.pincode_pickerOptions.push({
            Id: i,
            Name: Response.data.results[i].pincode,
            State: Response.data.results[i].stateName,
            Country: Response.data.results[i].countryName,
            City: Response.data.results[i].cityName,
          });
        }
      })
      .catch(err => console.log('Error => ', err));
  }

  _getState(name) {
    const headers = {
      Authorization: 'Bearer ' + this.props.login_tokenn,
      'Content-Type': 'application/json',
    };

    axios
      .get(`${partnerBaseUrl}/city/list/${name}`, {headers})
      .then(Response => {
        console.log('Response-data', Response.data.results);
        for (let i = 0; i < Response.data.results.length; i++) {
          this.state.state_pickerOptions.push({
            Id: i,
            Name: Response.data.results[i],
          });
        }
      })
      .catch(err => console.log('Error => ', err));
  }

  _getCity(name) {
    const headers = {
      Authorization: 'Bearer ' + this.props.login_tokenn,
      'Content-Type': 'application/json',
    };
    this.state.city_pickerOptions = [];
    axios
      .get(
        `${partnerBaseUrl}/city/list/${this.state.country}/${this.state.state}`,
        {headers},
      )
      .then(Response => {
        console.log('Response-data', Response.data.results);
        for (let i = 0; i < Response.data.results.length; i++) {
          if (Response.data.results[i].stateName == name)
            this.state.city_pickerOptions.push({
              Id: i,
              Name: Response.data.results[i].cityName,
            });
          console.log('====================================');
          console.log('sdsd', Response.data.results[i].cityName);
          console.log('====================================');
        }

        console.log('city_pickerOptions', this.state.city_pickerOptions);
      })
      .catch(err => console.log('Error => ', err));
  }

  _getpincode(name) {
    const headers = {
      Authorization: 'Bearer ' + this.props.login_tokenn,
      'Content-Type': 'application/json',
    };
    this.state.pincode_pickerOptions = [];
    axios
      .get(`${partnerBaseUrl}/city`, {headers})
      .then(Response => {
        console.log('Response-data', Response.data.results);
        for (let i = 0; i < Response.data.results.length; i++) {
          if (Response.data.results[i].cityName == name)
            this.state.pincode_pickerOptions.push({
              Id: i,
              Name: Response.data.results[i].pincode,
            });
          console.log('====================================');
          console.log('sdsd', Response.data.results[i].cityName);
          console.log('====================================');
        }

        console.log('city_pickerOptions', this.state.pincode_pickerOptions);
      })
      .catch(err => console.log('Error => ', err));
  }

  handleTextChange = newText => {
    this.setState({
      pan: newText.toUpperCase(),
    });
  };

  _getOtherdata() {
    const {termsData, _terms} = this.state;
    const headers = {
      Authorization: 'Bearer ' + this.props.login_tokenn,
      'Content-Type': 'application/json',
    };

    axios
      .get(
        `${partnerBaseUrl}/partner/profile`,

        {headers},
      )
      .then(Response => {
        console.log('Response => ', Response.data);
        const data = Response.data.results.aggreements;
        let newData = [];
        const temData = data.map(item => ({
          term: item.term.termName,
          termId: item.term.id,
          isAccepted: item.accepted,
        }));

        // const config = {
        //   method: 'get',
        //   maxBodyLength: Infinity,
        //   url:
        //     `${partnerBaseUrl}/files/download/` +
        //     Response.data.results.bank.documentId,
        //   headers: {
        //     Authorization: 'Bearer ' + this.props.login_tokenn,
        //   },
        // };

        // axios
        //   .request(config)
        //   .then(res => {
        //     console.log(
        //       '🚀 ~ file: ProfileEditScreen.js:398 ~ _getOtherdata ~ res:',
        //       res,
        //     );
        //     this.setState({
        //       can_cheq_pic: res.data.results.url,
        //     });
        //   })
        //   .catch(err => {
        //     console.log(
        //       '🚀 ~ file: ProfileEditScreen.js:398 ~ axios.request ~ err:',
        //       err,
        //     );
        //   });

        // data.forEach((item, index) => {
        //   _terms.data[index] = {termId: item.term.id, isAccepted: true};
        //   this.setState({
        //     termsData: terms => ({
        //       ...terms,
        //       ..._terms,
        //     }),
        //   });
        // });
        this.setState({
          account_holder_name: Response.data.results.bank.accountHolderName,
          account_number: Response.data.results.bank.accountNumber,
          account_number_confirm: Response.data.results.bank.accountNumber,
          documentId: Response.data.results.bank.documentId,
          bank_name: Response.data.results.bank.bankName,
          ifsc_code: Response.data.results.bank.ifscCode,
          branch_name: Response.data.results.bank.branchName,
          gstin: Response.data.results.gst.gstinNumber,
          gstinemail: Response.data.results.gst.email,
          gstinmobileNumber: Response.data.results.gst.mobile,
          pan: Response.data.results.gst.panNumber,
          whatsappNumber: Response.data.results.whatsappInfo.whatsappNumber,
          pincode: Response.data.results.businessInfo.pincode,
          businessname: Response.data.results.businessInfo.businessName,
          city: Response.data.results.businessInfo.city,
          state: Response.data.results.businessInfo.state,
          country: Response.data.results.businessInfo.country,
          state_code: Response.data.results.businessInfo.stateCode,
          address_line: Response.data.results.businessInfo.addressLine,
          termsData: temData,
        });
      })
      .catch(err => console.log('Error => ', err));
  }

  onDownlaodClick(id) {
    const headers = {
      Authorization: 'Bearer ' + this.props.login_tokenn,
      'Content-Type': 'application/json',
    };
    axios
      .get(`${partnerBaseUrl}/files/download/DDMS0024`, {
        headers,
      })
      .then(res => {
        console.log('imf res was.......', res.data.results);
        const data = res.data.results;

        let options = null;
        if (Platform.OS == 'ios') {
          options = {
            fileCache: true,
            path: `${RNFetchBlob.fs.dirs.DownloadDir}/avatarImg/${data.filename}`,
          };
        } else {
          options = {
            fileCache: true,

            addAndroidDownloads: {
              useDownloadManager: true,
              notification: false,
              path: `${RNFetchBlob.fs.dirs.DownloadDir}/avatarImg/${data.filename}`,
            },
          };
        }
        RNFetchBlob.config(options)
          .fetch('GET', `${partnerBaseUrl}/files/download/DDMS0024`, {
            Authorization: 'Bearer ' + this.props.login_tokenn,
          })
          .then(res => {
            console.log('res posen wa///////////', res);
            Alert.alert('', 'Download Complete');
          })
          .catch(err => {
            console.log('download File error was,,,,,,,,,,,,,,', err);
          });
      })
      .catch(err => console.log('api error wasz.......', err));
  }

  render() {
    const {profileEdit, editBus, editBank, editGst, editUser, termsData} =
      this.state;
    return (
      <>
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.header}>
              <Image source={require('../assets/Icons/menu-icon.png')} />
              <View style={styles.deleteIconcircle}>
                <Image
                  style={styles.deleteIcon}
                  source={require('../assets/Icons/delete.png')}
                />
              </View>
            </View>

            <ProfileLayout
              onPress={() => {
                this.state.personalshow == true
                  ? this.setState({
                      personalshow: false,
                    })
                  : this.setState({
                      personalshow: true,
                      bankshow: false,
                      gstinshow: false,
                      legaltermsshow: false,

                      manageusersshow: false,
                      changepasswordshow: false,
                      whatsappnotificationshow: false,
                    });
              }}
              show={this.state.personalshow}
              title="Personal Details"
              profileblack={require('../assets/Icons/personaldetailblack.png')}
              profileorange={require('../assets/Icons/personaldetailorange.png')}
              downicon={require('../assets/Icons/arrow-down.png')}
              upicon={require('../assets/Icons/arrow-up.png')}>
              {this.state.personalshow && (
                <View style={styles.personaldetailsfull}>
                  <View style={styles.personaldetail}>
                    <View style={styles.personaldetailtextbox}>
                      <Text style={styles.personaldetailtext}>
                        Personal Details
                      </Text>
                      <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => {
                          this.setState({profileEdit: true});
                        }}>
                        <Image
                          source={require('../assets/Icons/edit.png')}
                          style={styles.editIcon}
                        />
                      </TouchableOpacity>
                      {/* 
                      {editpersonaldetails ? (
                        <TouchableOpacity
                        // onPress={() =>
                        //   //setEditPersonalDetails(!editpersonaldetails)
                        // }>
                        >
                          <Image
                            style={styles.editIcon}
                            source={require('../assets/Icons/editorange.png')}
                          />
                        </TouchableOpacity>
                      ) : (
                        <TouchableOpacity
                        // onPress={() =>
                        //   setEditPersonalDetails(!editpersonaldetails)
                        // }
                        >
                          <Image
                            style={styles.editIcon}
                            source={require('../assets/Icons/edit.png')}
                          />
                        </TouchableOpacity>
                      ) */}
                    </View>

                    <InputUI
                      label="First Name"
                      placeholder="Eg. Prashant"
                      value={this.state.first_name}
                      onChangeName={data => {
                        const filteredText = data.replace(/[^a-zA-Z]/g, '');
                        this.setState({
                          first_name: filteredText,
                        });
                      }}
                      editable={profileEdit}
                      // //onChangeName={setFirstName}
                    />

                    <InputUI
                      label="Last Name"
                      placeholder="Eg. Thakare"
                      editable={profileEdit}
                      value={this.state.last_name}
                      onChangeName={data => {
                        const filteredText = data.replace(/[^a-zA-Z]/g, '');
                        this.setState({
                          last_name: filteredText,
                        });
                      }}

                      // //onChangeName={setLastName}
                    />

                    <InputUI
                      label="Email ID"
                      placeholder="Eg. pt@gmail.com"
                      editable={false}
                      value={this.state.email_id}
                      onChangeName={data => {
                        this.setState({
                          email_id: data,
                        });
                      }}
                      //onChangeName={setEmail}
                    />

                    <InputUI
                      label="Mobile Number"
                      placeholder="Eg. 787510003"
                      value={this.state.mobile_number}
                      editable={false}
                      onChangeName={data => {
                        this.setState({
                          mobile_number: data,
                        });
                      }}
                      //onChangeName={setMobileNumber}
                    />

                    {/* <InputUI
                      label="Name of Business"
                      placeholder="Eg. Ambe bhandar"
                      onChangeName={data => {
                        this.setState({
                          businessname: data,
                        });
                      }}
                      value={this.state.businessname}
                      //onChangeName={setBusinessName}
                    /> */}
                  </View>

                  {/* <TouchableOpacity
                    onPress={() => {
                      if (this.state.first_name == '') {
                        Alert.alert('','Enter firstname');
                      } else if (this.state.last_name == '') {
                        Alert.alert('','Enter lastname');
                      } else if (this.state.email_id == '') {
                        Alert.alert('','Enter email id');
                      } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                          this.state.email_id,
                        )
                      ) {
                        Alert.alert('','Enter valid email');
                      } else if (this.state.mobile_number == '') {
                        Alert.alert('','Enter mobile number');
                      } else if (this.state.mobile_number.length != 10) {
                        Alert.alert('','Enter 10 digit mobile number');
                      } else if (
                        this.state.mobile_number.match(/^[789]\d{9}$/) === null
                      ) {
                        Alert.alert('','Enter valid mobile number');
                      } else {
                        const param = {
                          active: 'true',
                          email: this.state.email_id,
                          firstName: this.state.first_name,
                          lastName: this.state.last_name,
                          phoneNumber: this.state.mobile_number,
                          user_id: this.state.user_id,
                        };

                        console.log('param', param);

                        axios
                       
                          .then(Response => {
                            console.log('====================================');
                            console.log('Respo', Response.data);
                            console.log('====================================');
                            this.setState({
                              editProfile: false,
                            });
                            Alert.alert('','SUCCESS');

                            this._getUserData();
                          })
                          .catch(err => console.log('Error => ', err));
                      }
                    }}
                    style={{
                      width: '85%',
                      height: 32,
                      backgroundColor: '#FF6658',
                      borderRadius: 8,
                      justifyContent: 'center',
                      alignItems: 'center',
                      alignSelf: 'center',
                      marginTop: 5,
                    }}>
                    <Text style={styles.verifiedboxbtntext}>
                      Save & Continue
                    </Text>
                  </TouchableOpacity> */}

                  <View style={styles.personaldetail}>
                    <View style={styles.personaldetailtextbox}>
                      <Text style={styles.personaldetailtext}>
                        Business Address
                      </Text>
                      <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => this.setState({editBus: true})}>
                        <Image
                          source={require('../assets/Icons/edit.png')}
                          style={styles.editIcon}
                        />
                      </TouchableOpacity>
                    </View>
                    <InputUI
                      label="Name of Business"
                      placeholder="Eg. Ambe bhandar"
                      onChangeName={data => {
                        //const filteredText = data.replace(/\s/g, '');
                        const string = data.replace(/[^\w\s\][^,]/gi, '');
                        this.setState({
                          businessname: string,
                        });
                      }}
                      editable={editBus}
                      value={this.state.businessname}
                      //onChangeName={setBusinessName}
                    />

                    <InputUI
                      label="Address Line"
                      placeholder="Eg. 23-B, Vidyapith colony"
                      value={this.state.address_line}
                      onChangeName={data => {
                        const string = data.replace(/[^\w\s\][^,]/gi, '');
                        this.setState({
                          address_line: string,
                        });
                      }}
                      editable={editBus}
                      //value={address}
                      //onChangeName={setAddress}
                    />

                    <InputUI
                      label="Pincode"
                      keyboard={'number-pad'}
                      placeholder="Eg. 360006"
                      value={this.state.pincode}
                      onChangeName={data => {
                        this.setState({
                          pincode: data,
                        });

                        if (data.length == 6) {
                          axios
                            .get(`https://api.postalpincode.in/pincode/${data}`)
                            .then(Response => {
                              console.log(
                                'PostOffice',
                                Response.data[0].PostOffice[0].Region,
                              );

                              this.setState({
                                city: Response.data[0].PostOffice[0].Region,
                              });
                            })
                            .catch(error => {
                              Alert.alert('', 'Enter correct pincode');
                            });

                          axios
                            .get(`https://api.zippopotam.us/IN/${data}`)
                            .then(Response => {
                              console.log('PostOffice', Response.data.country);

                              console.log(
                                'PostOffice1232',
                                Response.data.places[0]['state abbreviation'],
                              );

                              this.setState({
                                state: Response.data.places[0].state,
                                country: Response.data.country,
                                state_code:
                                  Response.data.places[0]['state abbreviation'],
                              });
                            })
                            .catch(err => console.log('Error => ', err));
                        }
                      }}
                      max={6}
                      editable={editBus}
                      //value={address}
                      //onChangeName={setAddress}
                    />

                    <InputUI
                      label="City"
                      placeholder="Eg. Mumbai"
                      value={this.state.city}
                      onChangeName={data => {
                        this.setState({
                          city: data,
                        });
                      }}
                      editable={editBus}
                      //value={address}
                      //onChangeName={setAddress}
                    />

                    <InputUI
                      label="State"
                      placeholder="Eg. Maharastra"
                      value={this.state.state}
                      onChangeName={data => {
                        this.setState({
                          state: data,
                        });
                      }}
                      editable={editBus}
                      //value={address}
                      //onChangeName={setAddress}
                    />

                    <InputUI
                      label="Country"
                      placeholder="Eg. India"
                      value={this.state.country}
                      onChangeName={data => {
                        this.setState({
                          address_line: data,
                        });
                      }}
                      editable={editBus}
                      //value={address}
                      //onChangeName={setAddress}
                    />

                    <TouchableOpacity
                      onPress={() => {
                        if (this.state.first_name == '') {
                          Alert.alert('', 'Enter firstname');
                        } else if (this.state.last_name == '') {
                          Alert.alert('', 'Enter lastname');
                        } else if (this.state.email_id == '') {
                          Alert.alert('', 'Enter email id');
                        } else if (
                          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                            this.state.email_id,
                          )
                        ) {
                          Alert.alert('', 'Enter valid email');
                        } else if (this.state.mobile_number == '') {
                          Alert.alert('', 'Enter mobile number');
                        } else if (this.state.mobile_number.length != 10) {
                          Alert.alert('', 'Enter 10 digit mobile number');
                        } else if (
                          this.state.mobile_number.match(/^[789]\d{9}$/) ===
                          null
                        ) {
                          Alert.alert('', 'Enter valid mobile number');
                        } else if (this.state.businessname == '') {
                          Alert.alert('', 'Enter business name');
                        } else if (this.state.address_line == '') {
                          Alert.alert('', 'Enter address line');
                        } else if (this.state.country == '') {
                          Alert.alert('', 'Select country');
                        } else if (this.state.state == '') {
                          Alert.alert('', 'Select state');
                        } else if (this.state.city == '') {
                          Alert.alert('', 'Select City');
                        } else if (this.state.pincode == '') {
                          Alert.alert('', 'Select pincode');
                        } else {
                          const param = {
                            active: 'true',
                            email: this.state.email_id,
                            firstName: this.state.first_name,
                            lastName: this.state.last_name,
                            phoneNumber: this.state.mobile_number,
                            user_id: this.state.user_id,
                          };

                          const param2 = {
                            addressLine: this.state.address_line,
                            city: this.state.city,
                            cityCode: this.state.city,
                            country: this.state.country,
                            countryCode: 'IN',
                            pincode: this.state.pincode,
                            state: this.state.state,
                            stateCode: this.state.state_code,
                            user_id: this.state.user_id,
                            businessDisplayName: this.state.businessname,
                          };

                          const headers = {
                            Authorization: 'Bearer ' + this.props.login_tokenn,
                            'Content-Type': 'application/json',
                          };

                          const queryParams = {
                            includeDeleted: true,
                            sortBy: 'createdAt',
                          };

                          axios
                            .post(
                              `${userBaseUrl}/user/noAuth/updateUser`,
                              param,
                            )
                            .then(Response => {
                              console.log('Personal info response ', Response);
                              axios
                                .put(
                                  `${partnerBaseUrl}/partner/profile/businessInfo`,
                                  param2,
                                  {params: queryParams, headers},
                                )
                                .then(Response => {
                                  console.log(
                                    'Business details response',
                                    Response,
                                  );

                                  Alert.alert('', 'SUCCESS');

                                  this.setState({
                                    personalshow: false,
                                    bankshow: true,
                                    editBus: false,
                                    editProfile: false,
                                  });

                                  this._getUserData();
                                })
                                .catch(err => console.log('Error => ', err));
                            })
                            .catch(err => console.log('Error => ', err));
                        }
                      }}
                      style={{
                        width: '95%',
                        height: 32,
                        backgroundColor: '#FF6658',
                        borderRadius: 8,
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignSelf: 'center',
                        marginTop: 10,
                      }}>
                      <Text style={styles.verifiedboxbtntext}>
                        Save & Continue
                      </Text>
                    </TouchableOpacity>

                    {/* <InputUI
                      label="Country"
                      placeholder="India"
                      //value={country}
                      //onChangeName={setCountry}
                    /> */}
                  </View>
                </View>
              )}
            </ProfileLayout>

            <ProfileLayout
              onPress={() => {
                this.state.bankshow == true
                  ? this.setState({
                      bankshow: false,
                    })
                  : this.setState({
                      bankshow: true,

                      personalshow: false,
                      gstinshow: false,
                      legaltermsshow: false,

                      manageusersshow: false,
                      changepasswordshow: false,
                      whatsappnotificationshow: false,
                    });
              }}
              show={this.state.bankshow}
              title="Bank Details"
              profileblack={require('../assets/Icons/bankdetailblack.png')}
              profileorange={require('../assets/Icons/bankdetailorange.png')}
              downicon={require('../assets/Icons/arrow-down.png')}
              upicon={require('../assets/Icons/arrow-up.png')}
              Personaltitle="Bank Details">
              {this.state.bankshow && (
                <View style={styles.personaldetailsfull}>
                  <View style={styles.personaldetail}>
                    <View style={styles.personaldetailtextbox}>
                      <Text style={styles.personaldetailtext}>
                        Bank Details
                      </Text>
                      <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => this.setState({editBank: true})}>
                        <Image
                          style={styles.editIcon}
                          source={require('../assets/Icons/edit.png')}
                        />
                      </TouchableOpacity>
                    </View>

                    <InputUI
                      label="Account Holder Name"
                      placeholder="Eg. Prashant"
                      value={this.state.account_holder_name}
                      onChangeName={data => {
                        const filteredText = data.replace(/^[a-zA-Z ]*$/);
                        this.setState({
                          account_holder_name: filteredText,
                        });
                      }}
                      editable={editBank}
                    />

                    <InputUI
                      label="Account Number"
                      placeholder="Eg. 9127012453241"
                      value={this.state.account_number}
                      keyboard={'number-pad'}
                      onChangeName={data => {
                        const filteredText = data.replace(/[^0-9]/g, '');
                        this.setState({
                          account_number: filteredText,
                        });
                      }}
                      max={18}
                      editable={editBank}
                    />

                    <InputUI
                      label="Confirm Account Number"
                      max={18}
                      placeholder="Eg. ******************"
                      value={this.state.account_number_confirm}
                      keyboard={'number-pad'}
                      secureTextEntry={true}
                      onChangeName={data => {
                        const filteredText = data.replace(/[^0-9]/g, '');
                        this.setState({
                          account_number_confirm: filteredText,
                        });
                      }}
                      editable={editBank}
                    />

                    <InputUI
                      max={11}
                      label="IFSC Code"
                      placeholder="Eg. UTIB0000123"
                      value={this.state.ifsc_code}
                      onChangeName={data => {
                        this.setState({
                          ifsc_code: data,
                        });
                        if (data.length == 11) {
                          console.log('====================================');
                          console.log(
                            'https://ifsc.razorpay.com/${this.state.ifsc_code}',
                            `https://ifsc.razorpay.com/${data}`,
                          );
                          console.log('====================================');
                          axios
                            .get(`https://ifsc.razorpay.com/${data}`)
                            .then(Response => {
                              console.log('Resonse', Response.data);
                              this.setState({
                                bank_name: Response.data.BANK,
                                branch_name: Response.data.BRANCH,
                              });
                            })
                            .catch(error => {
                              Alert.alert('', 'Enter correct IFSC code');
                            });
                        }
                      }}
                      editable={editBank}
                    />

                    <InputUI
                      label="Bank Name"
                      placeholder="Eg. Axix Bank"
                      value={this.state.bank_name}
                      onChangeName={data => {
                        this.setState({
                          bank_name: data,
                        });
                      }}
                      editable={editBank}
                    />

                    <InputUI
                      label="Branch Name"
                      placeholder="Eg. Ring road Branch"
                      value={this.state.branch_name}
                      onChangeName={data => {
                        this.setState({
                          branch_name: data,
                        });
                      }}
                      editable={editBank}
                    />

                    <TouchableOpacity
                      disabled={!editBank}
                      onPress={() => {
                        this.downloadFile();
                      }}>
                      <View style={styles.cancelchequebox}>
                        <Text style={styles.cancelchequetext}>
                          Cancelled cheque/passbook
                        </Text>

                        <Image
                          style={styles.cancelchequeicon}
                          source={require('../assets/Icons/cancelcheckpassbook.png')}
                        />
                      </View>
                    </TouchableOpacity>
                    <Text>{this.state.documentId}</Text>
                    {/* {this.state.can_cheq_pic == '' ? null : (
                      <Image
                        style={{height: 100, width: 250}}
                        resizeMode={'contain'}
                        source={{uri: this.state.can_cheq_pic}}
                      />
                    )} */}

                    <TouchableOpacity
                      style={{
                        width: '85%',
                        height: 32,
                        backgroundColor: '#FF6658',
                        borderRadius: 8,
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignSelf: 'center',
                        marginTop: 5,
                      }}
                      onPress={() => {
                        if (this.state.account_holder_name == '') {
                          Alert.alert('', 'Enter account holder name');
                        } else if (this.state.account_number == '') {
                          Alert.alert('', 'Enter account number');
                        } else if (
                          this.state.account_number < 9 ||
                          this.state.account_number < 15
                        ) {
                          Alert.alert('', 'Enter valid bank account number');
                        } else if (this.state.account_number_confirm == '') {
                          Alert.alert('', 'Enter confirm account number');
                        } else if (
                          this.state.account_number !=
                          this.state.account_number_confirm
                        ) {
                          alert(
                            'Account number and confirm account number do not match',
                          );
                        } else if (this.state.bank_name == '') {
                          Alert.alert('', 'Enter bank name');
                        } else if (this.state.ifsc_code == '') {
                          Alert.alert('', 'Enter ifsc code');
                        } else {
                          const param = {
                            accountHolderName: this.state.account_holder_name,
                            accountNumber: this.state.account_number,
                            bankName: this.state.bank_name,
                            branchName: this.state.branch_name,
                            documentId: this.state.documentId,
                            ifscCode: this.state.ifsc_code,
                          };

                          const headers = {
                            Authorization: 'Bearer ' + this.props.login_tokenn,
                            'Content-Type': 'application/json',
                          };

                          axios
                            .put(
                              `${partnerBaseUrl}/partner/profile/bank`,
                              param,
                              {headers},
                            )
                            .then(Response => {
                              console.log('Response', Response.data);
                              alert(Response.data.status);

                              this.setState({
                                gstinshow: true,
                                bankshow: false,
                              });
                            })
                            .catch(err => console.log('Error => ', err));
                        }
                      }}>
                      <Text style={styles.verifiedboxbtntext}>
                        Save & Continue
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            </ProfileLayout>

            <ProfileLayout
              // onPress={GstinPress}
              onPress={() => {
                this.state.gstinshow == true
                  ? this.setState({
                      gstinshow: false,
                    })
                  : this.setState({
                      bankshow: false,

                      personalshow: false,
                      gstinshow: true,
                      legaltermsshow: false,

                      manageusersshow: false,
                      changepasswordshow: false,
                      whatsappnotificationshow: false,
                    });
              }}
              show={this.state.gstinshow}
              title="GSTIN Details"
              profileblack={require('../assets/Icons/gstindetailsblack.png')}
              profileorange={require('../assets/Icons/gstindetailsorange.png')}
              downicon={require('../assets/Icons/arrow-down.png')}
              upicon={require('../assets/Icons/arrow-up.png')}
              Personaltitle="Bank Details">
              {this.state.gstinshow && (
                <View style={styles.personaldetailsfull}>
                  <View style={styles.personaldetail}>
                    <View style={styles.personaldetailtextbox}>
                      <Text style={styles.personaldetailtext}>
                        GSTN Details
                      </Text>
                      <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => this.setState({editGst: true})}>
                        <Image
                          style={styles.editIcon}
                          source={require('../assets/Icons/edit.png')}
                        />
                      </TouchableOpacity>
                    </View>

                    <InputUI
                      label="GSTIN Number"
                      placeholder="Eg. 27ABCDE1234F5GH"
                      value={this.state.gstin}
                      onChangeName={data => {
                        this.setState({
                          gstin: data,
                        });
                      }}
                      editable={editGst}
                    />

                    <InputUI
                      label="GSTIN Mobile Number"
                      placeholder="Eg. 91 - 8789011111"
                      value={this.state.gstinmobileNumber}
                      keyboard={'number-pad'}
                      max={10}
                      onChangeName={data => {
                        this.setState({
                          gstinmobileNumber: data,
                        });
                      }}
                      editable={editGst}
                      //value={gstinmobileNumber}
                      //onChangeName={setGSTINMobileNumber}
                    />

                    <InputUI
                      label="GSTIN Email"
                      placeholder="Eg. prashantnthakare@gmail.com"
                      value={this.state.gstinemail}
                      onChangeName={data => {
                        this.setState({
                          gstinemail: data,
                        });
                      }}
                      editable={editGst}
                      //value={gstinemail}
                      //onChangeName={setGSTINEmail}
                    />

                    <InputUI
                      label="Permanent Account Number (PAN)"
                      placeholder="Eg. AVHPI7820T"
                      auto={'characters'}
                      value={this.state.pan}
                      onChangeName={data => {
                        this.setState({
                          pan: data,
                        });
                        // this.setState({
                        //   pan: data,
                        // });
                      }}
                      editable={editGst}
                    />

                    <TouchableOpacity
                      style={{
                        width: '85%',
                        height: 32,
                        backgroundColor: '#FF6658',
                        borderRadius: 8,
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignSelf: 'center',
                        marginTop: 5,
                      }}
                      onPress={() => {
                        if (this.state.gstin == '') {
                          Alert.alert('', 'Enter gst number');
                        } else if (
                          !/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/.test(
                            this.state.gstin,
                          )
                        ) {
                          Alert.alert('', 'Enter valid GSTIN Number');
                        } else if (this.state.gstinmobileNumber == '') {
                          Alert.alert('', 'Enter gst mobile number');
                        } else if (this.state.gstinmobileNumber.length != 10) {
                          Alert.alert('', 'Enter enter valid mobile number');
                        } else if (
                          !/^[789]\d{9}$/.test(this.state.gstinmobileNumber)
                        ) {
                          Alert.alert('', 'enter valid GSTIN Mobile number');
                        } else if (this.state.gstinemail == '') {
                          Alert.alert('', 'Enter gst email');
                        } else if (
                          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                            this.state.gstinemail,
                          )
                        ) {
                          Alert.alert('', 'Enter valid email');
                        } else if (this.state.pan == '') {
                          Alert.alert('', 'Enter pan number');
                        } else if (
                          !/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(this.state.pan)
                        ) {
                          Alert.alert('', 'Enter valid PAN');
                        } else {
                          const param = {
                            gstin: this.state.gstin,
                            gstinemail: this.state.gstinemail,
                            gstinmobileNumber: this.state.gstinmobileNumber,
                            pan: this.state.pan,
                            registeredBusinessName: 'String',
                          };

                          const headers = {
                            Authorization: 'Bearer ' + this.props.login_tokenn,
                            'Content-Type': 'application/json',
                          };

                          const queryParams = {
                            includeDeleted: true,
                            sortBy: 'createdAt',
                          };

                          axios
                            .put(
                              `${partnerBaseUrl}/partner/profile/gst`,
                              param,
                              {params: queryParams, headers},
                            )
                            .then(Response => {
                              console.log('Response', Response.data);
                              alert(Response.data.status);

                              this.setState({
                                gstinshow: false,
                                legaltermsshow: true,
                                editGst: false,
                              });
                            })
                            .catch(err => console.log('Error => ', err));
                        }
                      }}>
                      <Text style={styles.verifiedboxbtntext}>
                        Save & Continue
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            </ProfileLayout>

            <ProfileLayout
              // onPress={ManageUsersPress}
              onPress={() => {
                this.state.manageusersshow == true
                  ? this.setState({
                      manageusersshow: false,
                    })
                  : this.setState({
                      manageusersshow: true,

                      personalshow: false,
                      bankshow: false,
                      gstinshow: false,
                      changepasswordshow: false,
                      legaltermsshow: false,
                      whatsappnotificationshow: false,
                    });
              }}
              show={this.state.manageusersshow}
              title="Manage Users"
              profileblack={require('../assets/Icons/manage-userblack.png')}
              profileorange={require('../assets/Icons/manage-userorange.png')}
              downicon={require('../assets/Icons/arrow-down.png')}
              upicon={require('../assets/Icons/arrow-up.png')}
              Personaltitle="Bank Details">
              {this.state.manageusersshow && (
                <View style={styles.personaldetailsfull}>
                  <View style={styles.personaldetail}>
                    <View style={styles.personaldetailtextbox}>
                      <Text style={styles.personaldetailtext}>
                        Manage Users
                      </Text>
                      <TouchableOpacity
                        style={styles.addnewuserbutton}
                        // onPress={() =>
                        // // setModelShow(!modelshow)
                        // }>
                      >
                        <Text style={styles.addnewusertext}>Add New User</Text>
                      </TouchableOpacity>
                    </View>

                    <View style={styles.manageuserbox}>
                      <View style={styles.manageusericonbox}>
                        <TouchableOpacity
                          onPress={() => this.setState({editUser: true})}>
                          <Image
                            style={styles.manageusereditIcon}
                            source={require('../assets/Icons/edit.png')}
                          />
                        </TouchableOpacity>
                        <TouchableOpacity
                        // onPress={() => setDeleteModelShow(!deletemodelshow)}
                        >
                          <Image
                            style={styles.manageuserdeleteIcon}
                            source={require('../assets/Icons/deleteblack.png')}
                          />
                        </TouchableOpacity>
                      </View>

                      <ManageUserTextBox
                        textblack="Role"
                        textgray="Catalog Manager"
                      />

                      <ManageUserTextBox
                        textblack="Name"
                        textgray="Suraj Acharya"
                      />

                      <ManageUserTextBox
                        textblack="Email ID"
                        textgray="suraj.acharya@gmail.com"
                      />

                      <ManageUserTextBox
                        textblack="Mobile Number"
                        textgray="8790345278"
                      />
                    </View>
                  </View>
                </View>
              )}
            </ProfileLayout>

            <ProfileLayout
              // onPress={ChangePasswordPress}
              onPress={() => {
                this.state.changepasswordshow == true
                  ? this.setState({
                      changepasswordshow: false,
                    })
                  : this.setState({
                      changepasswordshow: true,
                      personalshow: false,
                      bankshow: false,
                      gstinshow: false,
                      manageusersshow: false,
                      legaltermsshow: false,
                      whatsappnotificationshow: false,
                    });
              }}
              show={this.state.changepasswordshow}
              // setShow={setChangePasswordShow}
              title="Change Password"
              profileblack={require('../assets/Icons/change-passwordblack.png')}
              profileorange={require('../assets/Icons/change-passwordorange.png')}
              downicon={require('../assets/Icons/arrow-down.png')}
              upicon={require('../assets/Icons/arrow-up.png')}>
              {this.state.changepasswordshow && (
                <View style={styles.personaldetailsfull}>
                  <View style={styles.personaldetail}>
                    <View style={styles.personaldetailtextbox}>
                      <Text style={styles.personaldetailtext}>
                        Change Password
                      </Text>
                    </View>

                    <InputWithEye
                      label="Current Password"
                      placeholder="Enter your current password"
                      value={this.state.password}
                      onChangeName={data => {
                        this.setState({
                          password: data,
                        });
                      }}
                    />

                    <InputWithEye
                      label="New Password"
                      placeholder="Enter your new password"
                      value={this.state.c_password}
                      onChangeName={data => {
                        this.setState({
                          c_password: data,
                        });
                      }}
                      //value={newpass}
                      //onChangeName={onChangeNewPass}
                    />

                    <Text style={styles.strongtext}>
                      Make your password Strong by adding
                    </Text>

                    <Text style={styles.chartext}>Between 8-16 characters</Text>

                    <View style={styles.ulbox}>
                      <ListItem text="1  Capital letter (A-Z)" />
                      <ListItem text="1  Special Character (@#$%!^&*)" />
                      <ListItem text="1  Number" />
                    </View>

                    <InputWithEye
                      label="Re-type New Password"
                      placeholder="Enter your new password"
                      value={this.state.c_r_password}
                      onChangeName={data => {
                        this.setState({
                          c_r_password: data,
                        });
                      }}

                      //value={renewpass}
                      //onChangeName={onChangeReNewPass}
                    />

                    <TouchableOpacity
                      style={{
                        width: '85%',
                        height: 32,
                        backgroundColor: '#FF6658',
                        borderRadius: 8,
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignSelf: 'center',
                        marginTop: 5,
                      }}
                      onPress={() => {
                        if (this.state.password == '') {
                          Alert.alert('', 'Enter current password');
                        } else if (!passwordPattern.test(this.state.password)) {
                          alert(
                            `Your password must have :\n\n -Between 8-16 characters,\n-1 Uppercase characters,\n-1 Lowercase characters,\n-1 Special characters,\n-1 Number(0-9)`,
                          );
                        } else if (this.state.c_password == '') {
                          Alert.alert('', 'Enter new password');
                        } else if (
                          !passwordPattern.test(this.state.c_password)
                        ) {
                          alert(
                            `Your password must have :\n\n -Between 8-16 characters,\n-1 Uppercase characters,\n-1 Lowercase characters,\n-1 Special characters,\n-1 Number(0-9)`,
                          );
                        } else if (this.state.c_r_password == '') {
                          Alert.alert('', 'Enter confirm new password');
                        } else if (
                          !passwordPattern.test(this.state.c_r_password)
                        ) {
                          alert(
                            `-One lowercase letter,\n-One uppercase letter,\n-One digit,\n-One special character,\n-Must be at least 8 characters and long!`,
                          );
                        } else if (
                          this.state.c_password != this.state.c_r_password
                        ) {
                          alert(
                            'New password and confirm password dose not match',
                          );
                        } else {
                          let key = 'imavatar';
                          let iv = 'mHGFxENnZLbienLyANoi.e';

                          key = CryptoJS.enc.Base64.parse(key);

                          iv = CryptoJS.enc.Base64.parse(iv);

                          let local_pass = CryptoJS.AES.encrypt(
                            this.state.password,
                            key,
                            {
                              iv: iv,
                            },
                          ).toString();

                          let new_pass = CryptoJS.AES.encrypt(
                            this.state.c_password,
                            key,
                            {
                              iv: iv,
                            },
                          ).toString();

                          let data = JSON.stringify({
                            newPassword: this.state.c_password,
                            oldPassword: this.state.password,
                            userId: this.state.user_id,
                          });

                          console.log(data, 'data');
                          let config = {
                            method: 'post',
                            maxBodyLength: Infinity,
                            url: `${userBaseUrl}/user/MP/noAuth/userPwdChange`,
                            headers: {
                              Authorization: 'Bearer' + this.props.login_tokenn,
                              'Content-Type': 'application/json',
                            },
                            data: data,
                          };

                          axios
                            .request(config)
                            .then(response => {
                              console.log(response);
                              alert(response.data.status);
                            })
                            .catch(error => {
                              console.log(error);
                              Alert.alert('', 'Something went wrong');
                            });

                          // const param = {
                          //   newPassword: new_pass,
                          //   oldPassword: local_pass,
                          //   userId: this.state.user_id,
                          // };

                          // axios
                          //   .post(

                          //     param,
                          //   )
                          //   .then(Response => {
                          //     console.log('Response', Response.data);
                          //     alert(Response.data.status);
                          //   });
                        }
                      }}>
                      <Text style={styles.verifiedboxbtntext}>
                        Change Password
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            </ProfileLayout>

            <ProfileLayout
              // onPress={LegalTermsPress}
              show={this.state.legaltermsshow}
              onPress={() => {
                this.state.legaltermsshow == true
                  ? this.setState({
                      legaltermsshow: false,
                    })
                  : this.setState({
                      bankshow: false,

                      personalshow: false,
                      gstinshow: false,
                      legaltermsshow: true,

                      manageusersshow: false,
                      changepasswordshow: false,
                      whatsappnotificationshow: false,
                    });
              }}
              // setShow={setLegalTermsShow}
              title="Legal terms & Policies"
              profileblack={require('../assets/Icons/legal-termblack.png')}
              profileorange={require('../assets/Icons/legal-termorange.png')}
              downicon={require('../assets/Icons/arrow-down.png')}
              upicon={require('../assets/Icons/arrow-up.png')}>
              {this.state.legaltermsshow && (
                <View style={styles.personaldetailsfull}>
                  <View style={styles.personaldetail}>
                    <View style={styles.personaldetailtextbox}>
                      <Text style={styles.personaldetailtext}>
                        Legal terms & Policies
                      </Text>
                    </View>

                    {termsData?.map(
                      item => {
                        return (
                          <LegalTermTextBox
                            maintext={item.term}
                            onDownloadPress={() =>
                              this.onDownlaodClick(item.termId)
                            }
                          />
                        );
                      },
                      // <LegalTermTextBox maintext={item.term} />
                    )}
                    {/* <LegalTermTextBox maintext="Partner Agreement" />
                    <LegalTermTextBox maintext="Privacy Policy" />
                    <LegalTermTextBox maintext="Terms and Condition" />
                    <LegalTermTextBox maintext="Partner Deactivation Policy" />
                    <LegalTermTextBox maintext="Prohibited and Restricted Product List" />
                    <LegalTermTextBox maintext="Delivery & Return Policy" /> */}
                  </View>
                </View>
              )}
            </ProfileLayout>

            <ProfileLayout
              // onPress={WhatsAppNotificationPress}
              show={this.state.whatsappnotificationshow}
              onPress={() => {
                this.state.whatsappnotificationshow == true
                  ? this.setState({
                      whatsappnotificationshow: false,
                    })
                  : this.setState({
                      whatsappnotificationshow: true,

                      changepasswordshow: false,
                      personalshow: false,
                      bankshow: false,
                      gstinshow: false,
                      manageusersshow: false,
                      legaltermsshow: false,
                    });
              }}
              //setShow={setWhatsAppNotificationShow}
              title="WhatsApp Notification"
              profileblack={require('../assets/Icons/whatsapp-notificationblack.png')}
              profileorange={require('../assets/Icons/whatsapp-notificationorange.png')}
              downicon={require('../assets/Icons/arrow-down.png')}
              upicon={require('../assets/Icons/arrow-up.png')}>
              {this.state.whatsappnotificationshow && (
                <View style={styles.personaldetailsfull}>
                  <View style={styles.personaldetail}>
                    <View style={styles.personaldetailtextbox}>
                      <Text style={styles.personaldetailtext}>
                        WhatsApp Notification
                      </Text>
                    </View>

                    {/* <CheckBox
                      // onPress={() => setActivateNumber(!activateNumber)}
                      isChecked={activateNumber}
                      title="Receive notifications on WhatsApp"
                    />

                    <CheckBox
                      // onPress={() => setNotifyOnWhatsapp(!notifyOnWhatsapp)}
                      isChecked={notifyOnWhatsapp}
                      title="WhatsApp No. same as registered number"
                    /> */}

                    <TextInput
                      value={this.state.whatsappNumber}
                      onChangeText={data => {
                        this.setState({
                          whatsappNumber: data,
                        });
                      }}
                      maxLength={10}
                      keyboardType={'number-pad'}
                      style={styles.inputphone}
                      placeholder="91-9801001010"
                    />

                    <TouchableOpacity
                      style={{
                        width: '85%',
                        height: 32,
                        backgroundColor: '#FF6658',
                        borderRadius: 8,
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignSelf: 'center',
                        marginTop: 5,
                      }}
                      onPress={() => {
                        if (this.state.whatsappNumber == '') {
                          Alert.alert('', 'Enter whatsapp number');
                        } else if (this.state.whatsappNumber.length != 10) {
                          Alert.alert('', 'Enter enter valid whatsapp number');
                        } else {
                          let data = JSON.stringify({
                            activateNumber: true,
                            notifyOnWhatsapp: true,
                            whatsappNumber: this.state.whatsappNumber,
                          });

                          let config = {
                            method: 'put',
                            maxBodyLength: Infinity,
                            url: `${partnerBaseUrl}/partner/profile/whatsappInfo`,
                            headers: {
                              Authorization:
                                'Bearer ' + this.props.login_tokenn,
                              'Content-Type': 'application/json',
                            },
                            data: data,
                          };

                          axios
                            .request(config)
                            .then(function (res) {
                              console.log(res, 'res');
                              if (res.data.status === 'SUCCESS') {
                                Alert.alert('', 'Subscribed successfully');
                              } else {
                                Alert.alert('', 'Something went wrong');
                              }
                            })
                            .catch(function (error) {
                              console.log(error, 'error');
                              Alert.alert('', 'Something went wrong');
                            });
                          // const param = {
                          //   activateNumber: true,
                          //   notifyOnWhatsapp: true,
                          //   whatsappNumber: this.state.whatsappNumber,
                          // };

                          // const headers = {
                          //   Authorization:
                          //     'Bearer ' + this.props.route.params.token,
                          //   'Content-Type': 'application/json',
                          // };

                          // const queryParams = {
                          //   includeDeleted: true,
                          //   sortBy: 'createdAt',
                          // };

                          // axios
                          //   .put(
                          //     param,
                          //     {params: queryParams, headers},
                          //   )
                          //   .then(Response => {
                          //     console.log('Response', Response.data);
                          //     alert(Response.data.status);
                          //   });
                        }
                      }}>
                      <Text style={styles.verifiedboxbtntext}>Continue</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            </ProfileLayout>
          </View>
        </ScrollView>

        {/* {modelshow && (
          <ModelPopUp
          // onPress={() => setModelShow(!modelshow)}
          />
        )} */}

        {/* {deletemodelshow && (
          <View style={styles.deletemodelhead}>
            <View style={styles.deletemodelpopup}>
              <View style={styles.deletemodelpopupinner}>
                <TouchableOpacity
                //onPress={() => setDeleteModelShow(!deletemodelshow)}
                >
                  <Text style={styles.deletemodelIcon}>X</Text>
                </TouchableOpacity>
                <View style={styles.deletemodelbox}>
                  <Text style={styles.deletemodeltext}>
                    Are you sure you went to permentely delete the user ?
                  </Text>
                  <View style={styles.delbtnbox}>
                    <TouchableOpacity
                      style={styles.yesbutton}
                      // onPress={() =>
                      //   setLegalTermModelShow(!legaltermmodelshow)
                      // }
                    >
                      <Text style={styles.yesbuttontext}>Yes</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={{
                        ...styles?.yesbutton,
                        marginLeft: 20,
                      }}>
                      <Text style={styles.yesbuttontext}>No</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
        )} */}

        {/* {legaltermmodelshow && (
          <View style={styles.deletemodelhead}>
            <View style={styles.legalmodelpopup}>
              <View style={styles.legalmodelpopupinner}>
                <TextInput
                  //value={legal}
                  onChangeText={onChangeLegal}
                  style={styles.inputlegalterm}
                  placeholder="Legal terms for deleting account"
                />

                <View style={styles.selectlegaltermbox}>
                  <Text style={styles.selectlegaltermtext}>
                    Reason for deleting account
                  </Text>
                  <SelectDropdown
                    buttonStyle={styles.dropdown1BtnStyle}
                    data={selectdata}
                    defaultButtonText={'Select'}
                    renderDropdownIcon={isOpened => {
                      return (
                        <FontAwesome
                          name={isOpened ? 'chevron-up' : 'chevron-down'}
                          color={'#444'}
                          size={8}
                        />
                      );
                    }}
                    buttonTextStyle={styles.dropdown1BtnTxtStyle}
                    dropdownIconPosition={'right'}
                    dropdownStyle={styles.dropdown1DropdownStyle}
                  />
                </View>

                <View style={styles.legalcheckbox}>
                  <Pressable
                    // onPress={() =>
                    //   // setLegalCheckOne(!legalcheckone)
                    // }
                    isChecked={legalcheckone}>
                    {/* <MaterialCommunityIcons
                        name={iconName}
                        size={24}
                        color="#000000"
                      /> 
                  </Pressable>
                  <Text style={styles.legalcheckboxtitle}>
                    Are you sure you want delete the account ?
                  </Text>
                </View>

                <View style={styles.legalcheckbox}>
                  <Pressable
                    // onPress={() =>
                    //    setLegalCheckTwo(!legalchecktwo)
                    // }
                    isChecked={legalchecktwo}>
                    {/* <MaterialCommunityIcons
                        name={iconNameTwo}
                        size={24}
                        color="#000000"
                      /> 
                  </Pressable>
                  <Text style={styles.legalcheckboxtitle}>
                    Are you sure you want delete the account ?
                  </Text>
                </View>

                <View style={styles.legalbtnbox}>
                  <TouchableOpacity style={styles.sendbtn}>
                    <Text style={styles.sendbuttontext}>Send Request</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={{
                      ...styles?.sendbtn,
                      marginLeft: 20,
                    }}
                    // onPress={() => setLegalTermModelShow(!legaltermmodelshow)}
                  >
                    <Text style={styles.sendbuttontext}>Not Now</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        )} */}
      </>
    );
  }
}

const mapStateToProps = state => ({
  login_tokenn: state.userDetails.login_token,
  user_idd: state.userDetails.user_id,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileEditScreen);
