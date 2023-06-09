import {View, Text, Image} from 'react-native';

import BarBox from '../Components/BarBox/BarBox';
import styles from '../Screen/Shop/PartnerMenu/partnermenustyle';
import {useNavigation} from '@react-navigation/native';

import React, {Component} from 'react';
import {connect} from 'react-redux';

export class Dashboard extends Component {
  componentDidMount() {
    console.log('====================================');
    console.log('this', this.props.login_tokenn);
    console.log('this', this.props.user_idd);
    console.log('====================================');
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={require('../assets/Icons/menu-icon.png')} />
          <View style={styles.logo}>
            <Image source={require('../assets/Icons/logo-white.png')} />
            <Text style={styles.logotext}>imavatar</Text>
          </View>
        </View>

        <View style={styles.userdetails}>
          <View style={styles.userdetailsprofile}>
            <Text style={styles.userdetailsprofiletext}>SP</Text>
          </View>
          <Text style={styles.userdetailsname}>User</Text>
        </View>

        <BarBox
          title="Notification"
          Imagesource={require('../assets/Icons/notification.png')}
        />

        <BarBox
          //HandlePress={() => navigation.navigate('Dashboard')}
          title="Dashboard"
          Imagesource={require('../assets/Icons/dashboard.png')}
        />

        <BarBox
          HandlePress={() =>
            this.props.navigation.navigate('ProfileEditScreen')
          }
          title="Profile"
          Imagesource={require('../assets/Icons/profile.png')}
        />

        <BarBox
          //HandlePress={() => navigation.navigate('Orders')}
          title="Orders"
          Imagesource={require('../assets/Icons/order.png')}
        />

        <BarBox
          //HandlePress={() => navigation.navigate('Return/RTO')}
          title="Return/RTO"
          Imagesource={require('../assets/Icons/return-rto.png')}
        />

        <BarBox
          //HandlePress={() => navigation.navigate('Inventory')}
          title="Inventory"
          Imagesource={require('../assets/Icons/inventory.png')}
        />

        <BarBox
          //HandlePress={() => navigation.navigate('Payments')}
          title="Payments"
          Imagesource={require('../assets/Icons/payment.png')}
        />

        <BarBox
          HandlePress={() => this.props.navigation.navigate('CatalogUpload')}
          title="Catalog Upload"
          Imagesource={require('../assets/Icons/catalog.png')}
        />

        <BarBox
          //HandlePress={() => navigation.navigate('Reports')}
          title="Reports"
          Imagesource={require('../assets/Icons/report.png')}
        />
      </View>
    );
  }
}
const mapStateToProps = state => ({
  login_tokenn: state.userDetails.login_token,
  user_idd: state.userDetails.user_id,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
