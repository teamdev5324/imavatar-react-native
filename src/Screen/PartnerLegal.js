import React, {useEffect, useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import {useNavigation, useRoute} from '@react-navigation/native';
import CheckBox from '@react-native-community/checkbox';
import axios from 'axios';
import OnboardingContainer from '../Components/OnboardingContainer/OnboardingContainer';

const PartnerLegal = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [isAgreementAccepted, setIsAgreementAccepted] = useState(false);
  const [isNextBtnDisabled, setIsNextBtnDisabled] = useState(true);

  const onNextBtnPress = async () => {
    try {
      const config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'http://18.234.206.45:8085/api/v1/partner/profile',
        headers: {
          Authorization: 'Bearer ' + route.params.token,
        },
      };

      let {data} = await axios(config);

      data = data.results.aggreements;

      const terms_ = [];

      data.forEach((item, index) => {
        terms_[index] = {termId: item.term.id, isAccepted: true};
      });

      const config_ = {
        method: 'put',
        maxBodyLength: Infinity,
        url: 'http://18.234.206.45:8085/api/v1/partner/profile/aggreement',
        headers: {
          Authorization: 'Bearer ' + route.params.token,
          'Content-Type': 'application/json',
        },
        data: JSON.stringify(terms_),
      };

      axios(config_)
        .then(function (res) {
          res = res.data;
          if (res.status === 'SUCCESS') {
            const data__ = '{\r\n    ""\r\n}';

            const config__ = {
              method: 'get',
              maxBodyLength: Infinity,
              url: 'http://18.234.206.45:8085/api/v1/partner/profile/submitProfile',
              headers: {
                Authorization: 'Bearer ' + route.params.token,
                'Content-Type': 'application/json',
              },
              data: data__,
            };

            axios(config__)
              .then(function (res) {
                res = res.data;
                console.log(res);
                alert('Profile submitted successfully');
                navigation.navigate('Congratulations');
              })
              .catch(function (error) {
                alert(
                  'Fill ' +
                    error.response.data.errors[0].field +
                    'Fields before submitting',
                );
              });
          }
        })
        .catch(err => {
          console.log('err', err);
        });
    } catch (error) {
      console.log(
        '🚀 ~ file: PartnerLegal.js:28 ~ onNextBtnPress ~ error:',
        error,
      );
      alert('Something went wrong');
    }
  };

  return (
    <OnboardingContainer
      onNextBtnPress={onNextBtnPress}
      onPrevBtnPress={() => navigation.goBack()}
      isNextBtnDisabled={isNextBtnDisabled}
      nextBtnTitle="Submit"
      title="Legal Terms and Policies"
      description="Please go through the policy documents. You can download it for future reference."
      img={
        isAgreementAccepted
          ? require('../assets/Images/partnerLegalSuccess.png')
          : require('../assets/Images/partnerLegal.png')
      }>
      <View>
        <View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text>1. Privacy Policy</Text>
            <Text style={{color: '#FF0000'}}>Download</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 30,
            }}>
            <Text>2. Terms and conditions</Text>
            <Text style={{color: '#FF0000'}}>Download</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 30,
            }}>
            <Text>3. Partner Deactivation Policy</Text>
            <Text style={{color: '#FF0000'}}>Download</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 30,
            }}>
            <Text>4. Prohibited and Restricted Product List</Text>
            <Text style={{color: '#FF0000'}}>Download</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 30,
            }}>
            <Text>5. Delivery & Return Policy</Text>
            <Text style={{color: '#FF0000'}}>Download</Text>
          </View>
        </View>

        <View style={{marginVertical: 30}}>
          <Text
            style={{
              color: '#999999',
              fontSize: 14,
              lineHeight: 21,
              fontWeight: '400',
            }}>
            Please accept the partner agreement by verifying the OTP sent on
            your registered mobile number. Once your account is verified, your
            products will be visible on the ImAvatar portal.
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text>Partner Agreement</Text>
          <TouchableOpacity
            onPress={() => setIsModalVisible(true)}
            disabled={isAgreementAccepted}>
            <Text style={{color: isAgreementAccepted ? '#1ED760' : '#FF0000'}}>
              {isAgreementAccepted ? 'Accepted' : 'Accept'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <Modal
        isVisible={isModalVisible}
        transparent
        style={{margin: 0, padding: 0}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 20,
          }}>
          <View
            style={{
              backgroundColor: '#fff',
              borderRadius: 12,
              padding: 16,
            }}>
            <Text style={{color: '#000000', fontSize: 14, fontWeight: '600'}}>
              Partner Agreement
            </Text>
            <View>
              <Text style={{marginTop: 12, color: '#333'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
              </Text>
              <Text style={{marginTop: 12, color: '#333'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
              </Text>
              <Text style={{marginTop: 12, color: '#333'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
              </Text>
              <Text style={{marginTop: 12, color: '#333'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 20,
              }}>
              <CheckBox
                value={toggleCheckBox}
                onValueChange={() => {
                  setToggleCheckBox(!toggleCheckBox);
                  setIsNextBtnDisabled(false);
                  setIsModalVisible(false);
                  setIsAgreementAccepted(true);
                }}
                tintColor="#999999"
                onCheckColor="#fff"
              />
              <Text style={{color: '#999999'}}>
                I accept the Partner Agreement
              </Text>
            </View>
          </View>
        </View>
      </Modal>
    </OnboardingContainer>
  );
};

export default PartnerLegal;
