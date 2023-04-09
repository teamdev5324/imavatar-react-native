import * as React from 'react';
import {View, Text, Button, Image, StatusBar, Keyboard} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {platform} from 'react-native';

import {
  CardStyleInterpolators,
  createStackNavigator,
  HeaderTitle,
} from '@react-navigation/stack';

import LoginScreen from '../Screen/LoginScreen';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PartnerMenu from '../Screen/Shop/PartnerMenu/PartnerMenu';
import Profile from '../Screen/Profile';
import Dashboard from '../Screen/Dashboard';
import ReturnRTO from '../Screen/Shop/ReturnRTO/ReturnRTO';
import Inventory from '../Screen/Shop/Inventory/Inventory';
import CatalogUpload from '../Screen/CatalogUpload';
import BundledKits from '../Screen/Shop/BundledKits/BundledKits';
import SingleCatalog from '../Screen/Shop/SingleCatalog/SingleCatalog';
import AddProduct from '../Screen/Shop/AddProduct/AddProduct';
import Detail from '../Screen/Shop/Detail/Detail';
import Reports from '../Screen/Shop/Reports/Reports';
import Support from '../Screen/Shop/Support/Support';

import Payments from '../Screen/Shop/Payments/Payments';
import Orders from '../Screen/Shop/Orders/Orders';
import SignupScreen from '../Screen/SignupScreen';
import MobileOTPVerificationScreen from '../Screen/MobileOTPVerificationScreen';
import MobileOTPVerifiedScreen from '../Screen/MobileOTPVerifiedScreen';
import EmailOTPVerificationScreen from '../Screen/EmailOTPVerificationScreen';

import ForgotPassword from '../Screen/ForgotPassword';
import ResetPassword from '../Screen/Auth/ResetPassword/ResetPassword';
import {store} from './App/Store/Store';
import {Provider} from 'react-redux';
import LoginWithOTPScreen from '../Screen/Auth/LoginWithOTPScreen/LoginWithOTPScreen';
import MobileLoginOTPVerificationScreen from '../Screen/MobileLoginOTPVerificationScreen';

import EmailLoginOTPVerificationScreen from '../Screen/EmailLoginOTPVerificationScreen';
import EmailLoginOTPVerifiedScreen from '../Screen/Auth/EmailLoginOTPVerifiedScreen/EmailLoginOTPVerifiedScreen';
import Bookingdate from '../Screen/Bookingdate';
import EmailOTPVerifiedScreen from '../Screen/EmailOTPVerifiedScreen';
import LoginWithMobile from '../Screen/LoginWithMobile';
import ForgotPasswordMobileNumber from '../Screen/ForgotPasswordMobileNumber';
import ForgotPasswordOtpScreen from '../Screen/ForgotPasswordOtpScreen';
import ResetPasswordNew from '../Screen/ResetPasswordNew';
import Splashscreen from '../Screen/Splashscreen';
import ProfileEditScreen from '../Screen/ProfileEditScreen';
import {Payment} from '@material-ui/icons';
import AsyncStorage from '@react-native-community/async-storage';
import PersonalDetails from '../Screen/PersonalDetails';
import BankDetails from '../Screen/BankDetails';
import GSTINDetails from '../Screen/GSTINDetails';
import PartnerLegal from '../Screen/PartnerLegal';
import Congratulations from '../Screen/Congratulations';
import CreateListing from '../Screen/createListing';
import AddSingleCatalog from '../Screen/AddSingleCatalog';
import CatalogAddProductInfo from '../Screen/AddProductInfo';
import PricingInfo from '../Screen/Pricing';
import DescriptionInfo from '../Screen/Description.js';
import VariationsInfo from '../Screen/Variations';
import CatalogImages from '../Screen/CatalogImages';
import AddBulkCatalog from '../Screen/AddBulkCatalog';
import AddBulkProductInfo from '../Screen/AddBulkProductInfo';
import SelectCategory from '../Components/SelectCategory/SelectCategory';
import ViewQcStauts from '../Screen/ViewQcStatus';
import ViewSuccessfulListing from '../Screen/ViewSuccessfulListing';
import CorrectError from '../Screen/CorrectError';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default function TabNavigation() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor={'white'} />

      <Stack.Navigator
        initialRouteName="Splashscreen"
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>
        <Stack.Screen
          name="Splashscreen"
          component={Splashscreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CatalogUpload"
          component={CatalogUpload}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ProfileEditScreen"
          component={ProfileEditScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Orders"
          component={Orders}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Return/RTO"
          component={ReturnRTO}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Inventory"
          component={Inventory}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Payments"
          component={Payments}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Reports"
          component={Reports}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PersonalDetails"
          component={PersonalDetails}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BankDetails"
          component={BankDetails}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="GSTINDetails"
          component={GSTINDetails}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PartnerLegal"
          component={PartnerLegal}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Congratulations"
          component={Congratulations}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LoginWithMobile"
          component={LoginWithMobile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="EmailOTPVerificationScreen"
          component={EmailOTPVerificationScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MobileOTPVerificationScreen"
          component={MobileOTPVerificationScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="EmailOTPVerifiedScreen"
          component={EmailOTPVerifiedScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="EmailLoginOTPVerificationScreen"
          component={EmailLoginOTPVerificationScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MobileOTPVerifiedScreen"
          component={MobileOTPVerifiedScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MobileLoginOTPVerificationScreen"
          component={MobileLoginOTPVerificationScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ResetPasswordNew"
          component={ResetPasswordNew}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ForgotPasswordOtpScreen"
          component={ForgotPasswordOtpScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ForgotPasswordMobileNumber"
          component={ForgotPasswordMobileNumber}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CreateListing"
          component={CreateListing}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddSingleCatalog"
          component={AddSingleCatalog}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CatalogAddProductInfo"
          component={CatalogAddProductInfo}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PricingInfo"
          component={PricingInfo}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DescriptionInfo"
          component={DescriptionInfo}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="VariationsInfo"
          component={VariationsInfo}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CatalogImages"
          component={CatalogImages}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddBulkCatalog"
          component={AddBulkCatalog}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddBulkProductInfo"
          component={AddBulkProductInfo}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SelectCategory"
          component={SelectCategory}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ViewQcStauts"
          component={ViewQcStauts}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ViewSuccessfulListing"
          component={ViewSuccessfulListing}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CorrectError"
          component={CorrectError}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
