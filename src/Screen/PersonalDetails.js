import React, {useEffect, useState} from 'react';
import OnboardingContainer from '../Components/OnboardingContainer/OnboardingContainer';
import OnboardingInput from '../Components/OnboardingInput/OnboardingInput';
import {useNavigation, useRoute} from '@react-navigation/native';
import axios from 'axios';

export const getAllData = async token => {
  try {
    const headers = {
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
    };

    const res = await axios.get(
      'http://18.234.206.45:8085/api/v1/partner/profile',

      {headers},
    );

    return res;
  } catch (error) {
    console.log(
      '🚀 ~ file: PersonalDetails.js:35 ~ getAllData ~ error:',
      error,
    );

    throw new Error(error);
  }
};

const PersonalDetails = props => {
  const navigation = useNavigation();
  const route = useRoute();

  const [userId] = useState(route.params.userid);
  const [firstName, setFirstName] = useState(
    route.params?.data?.data?.firstName,
  );
  const [lastName, setLastName] = useState(route.params?.data?.data?.lastName);
  const [emailId, setEmailId] = useState(route.params?.data?.data?.emailId);
  const [mobileNumber, setMobileNumber] = useState(
    route.params?.data?.data?.phoneNumber,
  );
  const [pincode, setPincode] = useState('');
  const [addressLine, setAddressLine] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [nameOfBusiness, setNameOfBusiness] = useState('');

  useEffect(async () => {
    getData();
  }, []);

  const getData = async () => {
    const res = await getAllData(route.params.token);
    const data = res.data.results;
    console.log('🚀 ~ file: PersonalDetails.js:63 ~ getData ~ data:', data);

    setPincode(data.businessInfo.pincode);
    setAddressLine(data.businessInfo.addressLine);
    setCity(data.businessInfo.city);
    setState(data.businessInfo.state);
    setCountry(data.businessInfo.country);
    setNameOfBusiness(data.businessInfo.businessName);
  };

  const getUserData = () => {
    axios
      .get(`http://35.170.79.161:8080/api/user/noAuth/getUserInfo/${userId}`)
      .then(Response => {
        console.log('Response', Response.data);
        const {firstName, lastName, emailId, phoneNumber} = Response.data.data;

        setFirstName(firstName);
        setLastName(lastName);
        setEmailId(emailId);
        setMobileNumber(phoneNumber);
      });
  };

  const onNextBtnPress = () => {
    if (firstName == '') {
      alert('Enter First Name');
    } else if (lastName == '') {
      alert('Enter Last Name');
    } else if (emailId == '') {
      alert('Enter email id');
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(emailId)) {
      alert('Enter valid email');
    } else if (mobileNumber == '') {
      alert('Enter mobile number');
    } else if (mobileNumber.length != 10) {
      alert('Enter 10 digit mobile number');
    } else if (pincode == '') {
      alert('Enter pincode');
    } else if (
      addressLine == '' ||
      city == '' ||
      state == '' ||
      country == ''
    ) {
      alert('Enter address');
    } else if (!nameOfBusiness.match(/^[\w ]*[^\W_][\w ]*$/)) {
      alert('Enter valid name of business');
    } else {
      const param = {
        active: 'true',
        email: emailId,
        firstName: firstName,
        lastName: lastName,
        phoneNumber: mobileNumber,
        user_id: userId,
      };

      console.log('param', param);

      axios
        .post('http://35.170.79.161:8080/api/user/noAuth/updateUser', param)
        .then(async Response => {
          console.log('Response', Response.data);

          getUserData();

          const _data = JSON.stringify({
            addressLine: addressLine,
            businessDisplayName: nameOfBusiness,
            city: city,
            cityCode: 'CBS',
            country: country,
            countryCode: 'IN',
            pincode: pincode,
            state: state,
            stateCode: 'GJ',
          });

          const headers = {
            Authorization: 'Bearer ' + route.params.token,
            'Content-Type': 'application/json',
          };

          const config = {
            method: 'put',
            maxBodyLength: Infinity,
            url: 'http://18.234.206.45:8085/api/v1/partner/profile/businessInfo',
            headers,
            data: _data,
          };

          const {data} = await axios(config);

          if (data.status === 'SUCCESS') {
            navigation.navigate('BankDetails', route.params);
          } else {
            alert('Detail not saved');
          }
        })
        .catch(err => {
          console.log('err', err);
          alert('Something went wrong');
        });
    }
  };

  return (
    <OnboardingContainer
      onNextBtnPress={onNextBtnPress}
      title="Personal Details"
      description="Share some information about you"
      img={require('../assets/Images/personalDetails.png')}>
      <OnboardingInput
        label="First Name"
        isCompulsory
        placeholder="e.g Prashant"
        onValueChange={data => {
          const filteredText = data.replace(/[^a-zA-Z]/g, '');
          setFirstName(filteredText);
        }}
        value={firstName}
      />
      <OnboardingInput
        label="Last Name"
        isCompulsory
        placeholder="e.g Thakare"
        onValueChange={data => {
          const filteredText = data.replace(/[^a-zA-Z]/g, '');
          setLastName(filteredText);
        }}
        value={lastName}
        containerStyle={{marginTop: 30}}
      />
      <OnboardingInput
        label="Email Id"
        isCompulsory
        placeholder="e.g name@email.com"
        // onValueChange={setEmailId}
        value={emailId}
        containerStyle={{marginTop: 30}}
        editable={false}
      />
      <OnboardingInput
        label="Mobile Number"
        isCompulsory
        placeholder="e.g 1832543461"
        // onValueChange={text => {
        //   if (text.length <= 10) setMobileNumber(text.replace(/[^0-9]/g, ''));
        // }}
        value={mobileNumber}
        containerStyle={{marginTop: 30}}
        keyboardType="numeric"
        maxLength={10}
        editable={false}
      />
      <OnboardingInput
        label="Name Of Business"
        isCompulsory
        placeholder="e.g Ambe bhandar"
        onValueChange={setNameOfBusiness}
        value={nameOfBusiness}
        containerStyle={{marginTop: 30}}
      />
      <OnboardingInput
        label="Pincode"
        isCompulsory
        placeholder="380028"
        onValueChange={text => {
          setPincode(text.replace(/[^0-9]/g, ''));
          if (text.length === 6) {
            axios
              .get(`https://api.postalpincode.in/pincode/${text}`)
              .then(res => {
                setCity(res.data[0].PostOffice[0].District);
                setState(res.data[0].PostOffice[0].State);
                setCountry(res.data[0].PostOffice[0].Country);
              })
              .catch(err => {
                console.log('err', err);
              });
          }
        }}
        value={pincode}
        containerStyle={{marginTop: 30}}
        keyboardType="numeric"
        maxLength={6}
      />
      <OnboardingInput
        label="Address line"
        isCompulsory
        placeholder="e.g H-123, ABC colony"
        onValueChange={setAddressLine}
        value={addressLine}
        containerStyle={{marginTop: 30}}
      />
      <OnboardingInput
        label="City"
        isCompulsory
        placeholder="e.g Ahmedabad"
        onValueChange={setCity}
        value={city}
        containerStyle={{marginTop: 30}}
        editable={false}
      />
      <OnboardingInput
        label="State"
        isCompulsory
        placeholder="e.g Gujarat"
        onValueChange={setState}
        value={state}
        containerStyle={{marginTop: 30}}
        editable={false}
      />
      <OnboardingInput
        label="Country"
        isCompulsory
        placeholder="e.g India"
        onValueChange={setCountry}
        value={country}
        containerStyle={{marginTop: 30}}
        editable={false}
      />
    </OnboardingContainer>
  );
};

export default PersonalDetails;
