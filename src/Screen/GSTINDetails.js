import React, { useEffect, useState } from 'react';
import OnboardingContainer from '../Components/OnboardingContainer/OnboardingContainer';
import OnboardingInput from '../Components/OnboardingInput/OnboardingInput';
import { useNavigation, useRoute } from '@react-navigation/native';
import axios from 'axios';
import { getAllData } from './PersonalDetails';

const GSTINDetails = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const [gstIdNumber, setGstIdNumber] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [gstinMobileNumber, setGstinMobileNumber] = useState('');
  const [gstinEmailId, setGstinEmailId] = useState('');
  const [pan, setPan] = useState('');

  const getData = async () => {
    const res = await getAllData(route.params.token);
    const data = res.data.results.gst;

    setGstIdNumber(data.gstinNumber);
    setBusinessName(data.businessName);
    setGstinMobileNumber(data.mobile);
    setGstinEmailId(data.email);
    setPan(data.panNumber);
    console.log('🚀 ~ file: GSTINDetails.js:22 ~ getData ~ data:', data);
  };

  useEffect(() => {
    getData();
  }, []);

  const onBtnPress = (isPrev = false) => {
    console.log(
      'gstid num match',
      gstIdNumber.match(
        /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/,
      ),
    );
    if (gstIdNumber == '') {
      alert('Enter gst number');
    } else if (
      !gstIdNumber.match(
        /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/,
      )
    ) {
      alert('Enter valid GSTIN Number');
    } else if (businessName === '') {
      alert('Enter business name');
    } else if (gstinMobileNumber == '') {
      alert('Enter gst mobile number');
    } else if (
      gstinMobileNumber.length != 10 &&
      gstinMobileNumber.match(/^[789]\d{9}$/)
    ) {
      alert('Enter enter valid mobile number');
    } else if (!/^[789]\d{9}$/.test(gstinMobileNumber)) {
      alert('enter valid GSTIN Mobile number');
    } else if (gstinEmailId == '') {
      alert('Enter gst email');
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(gstinEmailId)) {
      alert('Enter valid email');
    } else if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(pan)) {
      alert('Enter valid PAN');
    }
    // else if (pan == '') {
    //   alert('Enter pan number');
    // }
    // else if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(this.state.pan)) {
    //   alert('Enter valid PAN');
    // }
    else {
      const param = {
        gstin: gstIdNumber,
        gstinemail: gstinEmailId,
        gstinmobileNumber: gstinMobileNumber,
        pan,
        registeredBusinessName: businessName,
      };

      const headers = {
        Authorization: 'Bearer ' + route.params.token,
        'Content-Type': 'application/json',
      };

      const queryParams = {
        includeDeleted: true,
        sortBy: 'createdAt',
      };

      axios
        .put('http://18.234.206.45:8085/api/v1/partner/profile/gst', param, {
          params: queryParams,
          headers,
        })
        .then(Response => {
          console.log('Response', Response.data);
          if (isPrev) {
            navigation.goBack();
          } else {
            navigation.navigate('PartnerLegal', route.params);
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
      onNextBtnPress={() => onBtnPress()}
      onPrevBtnPress={() => onBtnPress(true)}
      title="GSTIN Details"
      description="Share your GSTIN information with us for tax compliance"
      img={require('../assets/Images/gstInDetails.png')}>
      <OnboardingInput
        label="GST Identification Number"
        isCompulsory
        placeholder="e.g 22AAAAAOOOOA1Z5"
        onValueChange={setGstIdNumber}
        value={gstIdNumber}
        maxLength={15}
      />
      <OnboardingInput
        label="Registered Business Name"
        isCompulsory
        placeholder="e.g ABC Store"
        onValueChange={setBusinessName}
        value={businessName}
        containerStyle={{ marginTop: 30 }}
      />
      <OnboardingInput
        label="GSTIN Mobile Number"
        isCompulsory
        placeholder="e.g 1832543461"
        onValueChange={text => {
          if (text.length <= 10)
            setGstinMobileNumber(text.replace(/[^0-9]/g, ''));
        }}
        value={gstinMobileNumber}
        containerStyle={{ marginTop: 30 }}
        keyboardType="number-pad"
        maxLength={10}
      />
      <OnboardingInput
        label="GSTIN Email ID"
        isCompulsory
        placeholder="e.g name@email.com"
        onValueChange={setGstinEmailId}
        value={gstinEmailId}
        containerStyle={{ marginTop: 30 }}
      />
      <OnboardingInput
        label="PAN"
        isCompulsory
        placeholder="e.g AVHPI7820T"
        onValueChange={setPan}
        value={pan}
        containerStyle={{ marginTop: 30 }}
      />
    </OnboardingContainer>
  );
};

export default GSTINDetails;
