import React, {Component} from 'react';
import {View, Text, Button, Image, StatusBar, Keyboard} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import Icon from 'react-native-vector-icons/Ionicons';
import {platform} from 'react-native';

import {connect} from 'react-redux';

import Home from '../screens/Home';
import axios from 'axios';
import qs from 'qs';
import BookedService from '../screens/BookedService';
import Notification from '../screens/Notification';

var home_icon = require('../img/home1.png');
var s_booked_service = require('../img/mybook1.png');
var notification = require('../img/notification.png');

// var select_home_icon = require('../assets/image/select_home_icon.png');
// var select_search_icon = require('../assets/image/select_search_icon.png');
// var select_tag_icon = require('../assets/image/select_tag_icon.png');
// var select_cart_icon = require('../assets/image/select_cart_icon.png');
// var select_profile_icon = require('../assets/image/select_profile_icon.png');

const Tab = createBottomTabNavigator();
// const Stack = createStackNavigator();
// const mapStateTothis.props = state => ({
//   myItems: state.cartItems.items,
// });

// const mapDispatchTothis.props = {
//   addToCart,
// };
class TopTabNavigator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color_code: '#00A0A7',

      furn_status: 0,
    };
  }

  componentDidMount() {
    const prrr = {
      user_id: this.props.user_id,
    };

    axios
      .post(
        'https://binarygeckos.com/dipa/cleaning/api/get_user_app_color_code',
        qs.stringify(prrr),
      )
      .then(Response => {
        //alert(Response.data.result);
        console.log('this is test', Response.data.result.status);

        this.setState({
          female_st: Response.data.result.status,
          female_status: Response.data.result.status,
        });

        Response.data.result.status == 1
          ? this.setState({
              color_code: '#6C2669',
            })
          : this.setState({
              color_code: '#00A0A7',
            });
      });

    this.focusListener = this.props.navigation.addListener('focus', () => {
      const prrr = {
        user_id: this.props.user_id,
      };

      axios
        .post(
          'https://binarygeckos.com/dipa/cleaning/api/get_user_app_color_code',
          qs.stringify(prrr),
        )
        .then(Response => {
          //alert(Response.data.result);
          console.log('this is test', Response.data.result.status);

          this.setState({
            female_st: Response.data.result.status,
            female_status: Response.data.result.status,
          });

          Response.data.result.status == 1
            ? this.setState({
                color_code: '#6C2669',
              })
            : this.setState({
                color_code: '#00A0A7',
              });
        });
    });
  }
  render() {
    return (
      <Tab.Navigator
        initialRouteName="Home"
        // {Home
        //   // this.props.inq_tab == 1 ? 'Inquiries' : this.props.inq_tab == 2 ? 'Job' : 'Home'
        // }
        tabBarOptions={{
          keyboardHidesTabBar: true,
          activeTintColor: '#ffffff',

          // labelStyle: {fontFamily: 'Montserrat-Bold'},
          showLabel: false,
          style: {
            position: 'absolute',
            height: 70,
            borderColor: '#E6E6E8',
            borderLeftColor: '#E6E6E8',
            borderRightColor: '#E6E6E8',

            backgroundColor: this.state.color_code,
          },
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',

            tabBarIcon: ({focused, color, size}) => (
              <View>
                <View>
                  <Image
                    source={home_icon}
                    style={{
                      width: 20,
                      height: 20,
                      tintColor: focused == true ? '#fff' : '#AEAEAE',

                      alignSelf: 'center',
                    }}></Image>

                  <Text
                    style={{
                      fontSize: 10,
                      marginTop: 5,
                      fontFamily: 'Raleway_Regular',
                      color: focused == true ? '#fff' : '#AEAEAE',
                    }}>
                    {console.log('this.props.lang ', this.props.lang)}
                    Home
                  </Text>
                </View>
              </View>
              // <Image
              //   source={focused ? select_home_icon : home_icon}
              //   style={{
              //     width: 20,
              //     height: 20,
              //   }}
              // />
            ),
          }}
        />

        <Tab.Screen
          name="BookedService"
          component={BookedService}
          options={{
            tabBarLabel: 'Feed',
            //   tabBarBadge: this.props.myItems.length == 0 ? null : this.props.myItems.length,
            //   tabBarBadgeStyle: {
            //     backgroundColor: '#BE984A',
            //     marginTop: 10,
            //     fontFamily:'Montserrat-Bold',
            //     fontSize: 15,
            //   },
            tabBarIcon: ({focused, color, size}) => (
              <View>
                <View>
                  <Image
                    source={s_booked_service}
                    style={{
                      width: 20,
                      height: 20,
                      tintColor: focused == true ? '#fff' : '#AEAEAE',
                      alignSelf: 'center',
                    }}></Image>
                  <Text
                    style={{
                      fontSize: 10,
                      marginTop: 5,
                      fontFamily: 'Raleway_Regular',
                      color: focused == true ? '#fff' : '#AEAEAE',
                    }}>
                    My Booking
                  </Text>
                </View>
              </View>
            ),
          }}
        />

        <Tab.Screen
          name="Notification"
          component={Notification}
          options={{
            tabBarLabel: 'Feed',
            //   tabBarBadge: this.props.myItems.length == 0 ? null : this.props.myItems.length,
            //   tabBarBadgeStyle: {
            //     backgroundColor: '#BE984A',
            //     marginTop: 10,
            //     fontFamily:'Montserrat-Bold',
            //     fontSize: 15,
            //   },
            tabBarIcon: ({focused, color, size}) => (
              <View>
                <View>
                  <Image
                    source={notification}
                    style={{
                      resizeMode: 'contain',
                      width: 24,
                      height: 24,
                      tintColor: focused == true ? '#fff' : '#AEAEAE',
                      alignSelf: 'center',
                    }}></Image>
                  <Text
                    style={{
                      fontSize: 10,
                      marginTop: 5,
                      fontFamily: 'Raleway_Regular',
                      color: focused == true ? '#fff' : '#d6dade',
                    }}>
                    Notification
                  </Text>
                </View>
              </View>
            ),
          }}
        />

        {/* <Tab.Screen
        name="Red"
        component={Reels}
        options={{
          tabBarLabel: 'Red',
          tabBarVisible: false,
          tabBarIcon: ({focused, color, size}) => (
            <View>
              <Image
                source={red_icon}
                style={{
                  width: 47,
                  height: 47,
                }}></Image>
            </View>
          ),
        }}
      /> */}

        {/* <Tab.Screen
          name="Utility"
          component={Utility}
          options={{
            tabBarLabel: 'Job',
            tabBarIcon: ({focused, color, size}) => (
              <View>
                {focused ? (
                  <View>
                    <Text
                      style={{
                        fontSize: 15,
                        fontFamily: 'Montserrat-Bold',
                        color: '#cb6ce6',
                        fontWeight: 'bold',
                      }}>
                      {this.props.lang == '1' || this.props.lang == ''
                        ? eng.utility
                        : guj.utility}
                    </Text>
                  </View>
                ) : (
                  <Image
                    source={require('../assets/welcome_new.png')}
                    style={{
                      width: 24,
                      height: 24,
                    }}></Image>
                )}
              </View>
            ),
          }}
        /> */}
      </Tab.Navigator>
    );
  }
}

const mapStateToprops = state => ({
  //inq_tab: state.dateDetails.inq_tab,
  user_id: state.userDetails.user_id,
});

const mapDispatchToprops = {};

export default connect(mapStateToprops, mapDispatchToprops)(TopTabNavigator);
