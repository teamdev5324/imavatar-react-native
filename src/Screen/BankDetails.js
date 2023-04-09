import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import axios from 'axios';
import DocumentPicker from 'react-native-document-picker';
import RNFetchBlob from 'rn-fetch-blob';

import OnboardingContainer from '../Components/OnboardingContainer/OnboardingContainer';
import OnboardingInput from '../Components/OnboardingInput/OnboardingInput';
import {getAllData} from './PersonalDetails';

const BankDetails = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const [accountHolderName, setAccountHolderName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [confirmAccNumber, setConfirmAccNumber] = useState('');
  const [IFSCCode, setIFSCCode] = useState('');
  const [bankName, setBankName] = useState('');
  const [bankBranch, setBankBranch] = useState('');
  const [fileName, setFileName] = useState('');
  const [fileData, setFileData] = useState('');

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getData();
    });

    return unsubscribe;
  }, []);

  const getData = async () => {
    const res = await getAllData(route.params.token);
    const data = res.data.results.bank;
    console.log('🚀 ~ file: BankDetails.js:31 ~ getData ~ data:', data);

    const config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'http://18.234.206.45:8085/api/v1/files/download/' + data.documentId,
      headers: {
        Authorization: 'Bearer ' + route.params.token,
      },
    };

    axios
      .request(config)
      .then(res => {
        res = res.data.results;
        console.log('res', res);
        setFileData(res.fileContent);
        setFileName(res.filename);
      })
      .catch(error => {
        console.log('error', error);
      });

    setAccountHolderName(data.accountHolderName);
    setAccountNumber(data.accountNumber);
    setConfirmAccNumber(data.accountNumber);
    setIFSCCode(data.ifscCode);
    setBankName(data.bankName);
    setBankBranch(data.branchName);
  };

  const getFile = async () => {
    try {
      const results = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.images, DocumentPicker.types.pdf],
        copyTo: 'cachesDirectory',
      });
      console.log('🚀 ~ file: BankDetails.js:46 ~ getFile ~ results:', results);
      const getFileData = await RNFetchBlob.fs.readFile(
        results.type === DocumentPicker.types.pdf
          ? results.uri
          : results.fileCopyUri,
        'base64',
      );
      setFileData(getFileData);
      setFileName(results.name);
    } catch (error) {
      alert('Something went wrong while uploading file');
      console.log('🚀 ~ file: BankDetails.js:47 ~ getFile ~ error:', error);
    }
  };

  const onBtnPress = (isPrev = false) => {
    if (accountHolderName == '') {
      alert('Enter account holder name');
    } else if (accountNumber == '') {
      alert('Enter account number');
    } else if (confirmAccNumber == '') {
      alert('Enter confirm account number');
    } else if (accountNumber.match(/^[a-zA-Z ]*$/)) {
      alert('Enter account number');
    } else if (confirmAccNumber.match(/^[a-zA-Z ]*$/)) {
      alert('Enter confirm account number');
    } else if (accountNumber != confirmAccNumber) {
      alert('Account number and confirm account number do not match');
    } else if (IFSCCode === '') {
      alert('Enter ifsc code');
    } else if (IFSCCode.split('').length !== 11) {
      alert('Enter valid ifsc code');
    } else {
      const fileParams = {
        fileContent: fileData,
        fileName: fileName,
        usecaseName: 'userBankDetail',
      };
      console.log(
        '🚀 ~ file: BankDetails.js:87 ~ onBtnPress ~ fileParams:',
        fileParams,
      );

      const config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://18.234.206.45:8085/api/v1/files/upload',
        headers: {
          Authorization: 'Bearer ' + route.params.token,
          'Content-Type': 'application/json',
        },
        data: fileParams,
      };

      axios(config)
        .then(function (res) {
          console.log('File upload res:', res);
          if (res.data.status !== 'SUCCESS') {
            alert('Something went wrong');
          } else {
            const param = {
              accountHolderName: accountHolderName,
              accountNumber: accountNumber,
              bankName: bankName,
              branchName: bankBranch,
              documentId: res.data.results.documentId,
              ifscCode: IFSCCode,
            };

            const config2 = {
              method: 'put',
              maxBodyLength: Infinity,
              url: 'http://18.234.206.45:8085/api/v1/partner/profile/bank',
              headers: {
                Authorization: 'Bearer ' + route.params.token,
                'Content-Type': 'application/json',
              },
              data: JSON.stringify(param),
            };

            axios(config2)
              .then(async function (res) {
                console.log('Bank details res:', res);
                if (res.data.status === 'SUCCESS') {
                  if (isPrev) {
                    navigation.goBack();
                  } else {
                    navigation.navigate('GSTINDetails', route.params);
                  }
                } else {
                  console.log('Not getting proper response');
                  alert('Something went wrong');
                }
              })
              .catch(function (error) {
                alert('Something went wrong');
                console.log('error', error);
              });
          }
        })
        .catch(function (error) {
          alert('Something went wrong');
          console.log('error', error);
        });
    }
  };

  return (
    <OnboardingContainer
      onNextBtnPress={() => onBtnPress()}
      onPrevBtnPress={() => onBtnPress(true)}
      title="Bank Details"
      description="Share your personal bank account information with us"
      img={require('../assets/Images/bankDetails.png')}>
      <OnboardingInput
        label="Bank Account Holder Name"
        isCompulsory
        placeholder="e.g Prashant Thakare"
        onValueChange={text => {
          const filteredText = text.replace(/[^a-zA-Z ]/g, '');
          setAccountHolderName(filteredText);
        }}
        value={accountHolderName}
      />
      <OnboardingInput
        label="Account Number"
        isCompulsory
        placeholder="e.g 1832543461"
        onValueChange={text => {
          const filteredText = text.replace(/[^0-9]/g, '');
          setAccountNumber(filteredText);
        }}
        value={accountNumber}
        containerStyle={{marginTop: 30}}
        keyboardType="numeric"
        maxLength={14}
      />
      <OnboardingInput
        label="Confirm Account Number"
        isCompulsory
        placeholder="e.g 1832543461"
        onValueChange={text => {
          const filteredText = text.replace(/[^0-9]/g, '');
          setConfirmAccNumber(filteredText);
        }}
        value={confirmAccNumber}
        containerStyle={{marginTop: 30}}
        keyboardType="numeric"
        maxLength={14}
      />
      <OnboardingInput
        label="IFSC Code"
        isCompulsory
        placeholder="e.g SBIN0000547"
        onValueChange={text => {
          console.log(
            '🚀 ~ file: BankDetails.js:124 ~ BankDetails ~ text.length:',
            text.length,
          );
          if (text.length === 11) {
            axios
              .get(`https://ifsc.razorpay.com/${text}`)
              .then(Response => {
                console.log('IFSC response', Response.data);
                setBankName(Response.data.BANK);
                setBankBranch(Response.data.BRANCH);
              })
              .catch(error => {
                console.log(
                  '🚀 ~ file: BankDetails.js:73 ~ BankDetails ~ error:',
                  error,
                );
                alert('Enter correct IFSC code');
              });
          }
          setIFSCCode(text);
        }}
        value={IFSCCode}
        containerStyle={{marginTop: 30}}
        maxLength={11}
      />
      <OnboardingInput
        label="Branch Name"
        isCompulsory
        placeholder="e.g 1832543461"
        value={bankBranch}
        containerStyle={{marginTop: 30}}
        editable={false}
      />
      <OnboardingInput
        label="Bank Name"
        isCompulsory
        placeholder="e.g 1832543461"
        value={bankName}
        containerStyle={{marginTop: 30}}
        editable={false}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 30,
        }}>
        <TouchableOpacity onPress={getFile}>
          <Text style={{}}>Upload file</Text>
        </TouchableOpacity>
        <Text>
          {fileName.length >= 15 ? fileName.substring(0, 15) + '...' : fileName}
        </Text>
      </View>
    </OnboardingContainer>
  );
};

export default BankDetails;
