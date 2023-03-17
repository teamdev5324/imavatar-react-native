import {View, Text, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import BarBox from '../../../Components/BarBox/BarBox';
import styles from './partnermenustyle';
import {useNavigation} from '@react-navigation/native';
import {getToken} from '../../../Store/Services/AsyncStorageService';
import {useGetUserInfoQuery} from '../../../Store/Services/userAuthApi';
import {setUserData} from '../../../Store/Features/userdataSlice';
import {useDispatch, useSelector} from 'react-redux';

const PartnerMenu = () => {
  const user = useSelector(state => state.userdata.loggedinuserdata);

  if (user !== null) {
    var fullName = `${user.firstName} ${user.lastName}`;
  }

  const navigation = useNavigation();

  const dispatch = useDispatch();

  const [userLToken, setUserLToken] = useState();

  useEffect(() => {
    (async () => {
      const token = await getToken(); // Getting Token from Storage
      setUserLToken(token); // Store Token in Local State
    })();
  });

  const {data, isSuccess} = useGetUserInfoQuery(userLToken);

  useEffect(() => {
    if (isSuccess) {
      dispatch(
        setUserData({
          loggedinuserdata: data.data,
          isLoading: false,
          isError: false,
        }),
      );
    }
  }, [isSuccess]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../../assets/Icons/menu-icon.png')} />
        <View style={styles.logo}>
          <Image source={require('../../assets/Icons/logo-white.png')} />
          <Text style={styles.logotext}>imavatar</Text>
        </View>
      </View>

      <View style={styles.userdetails}>
        <View style={styles.userdetailsprofile}>
          <Text style={styles.userdetailsprofiletext}>SP</Text>
        </View>
        <Text style={styles.userdetailsname}>{fullName}</Text>
      </View>

      <BarBox
        title="Notification"
        Imagesource={require('../../assets/Icons/notification.png')}
      />

      <BarBox
        HandlePress={() => navigation.navigate('Dashboard')}
        title="Dashboard"
        Imagesource={require('../../assets/Icons/dashboard.png')}
      />

      <BarBox
        HandlePress={() => navigation.navigate('Profile')}
        title="Profile"
        Imagesource={require('../../assets/Icons/profile.png')}
      />

      <BarBox
        HandlePress={() => navigation.navigate('Orders')}
        title="Orders"
        Imagesource={require('../../assets/Icons/order.png')}
      />

      <BarBox
        HandlePress={() => navigation.navigate('Return/RTO')}
        title="Return/RTO"
        Imagesource={require('../../assets/Icons/return-rto.png')}
      />

      <BarBox
        HandlePress={() => navigation.navigate('Inventory')}
        title="Inventory"
        Imagesource={require('../../assets/Icons/inventory.png')}
      />

      <BarBox
        HandlePress={() => navigation.navigate('Payments')}
        title="Payments"
        Imagesource={require('../../assets/Icons/payment.png')}
      />

      <BarBox
        HandlePress={() => navigation.navigate('Catalog Upload')}
        title="Catalog Upload"
        Imagesource={require('../../assets/Icons/catalog.png')}
      />

      <BarBox
        HandlePress={() => navigation.navigate('Reports')}
        title="Reports"
        Imagesource={require('../../assets/Icons/report.png')}
      />
    </View>
  );
};

export default PartnerMenu;
