import React from 'react';
import { Image } from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Pressable} from 'react-native';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp, createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from '../screens/profile/Profile';
import Dashboard from '../screens/dashboard/Dashboard';
import Icon from '../../assets/images/board-sale-icon.png';
import Settings from '../screens/settings/Settings';
import OrderHistory from '../screens/order-history/OrderHistory';
import TermsOfService from '../screens/terms-of-service/TermsOfService';
import ChangePassword from '../screens/auth/change-password/ChangePassword';
import AdvancedSettings from '../screens/auth/advanced-settings/AdvancedSettings';
import GettingStartedNavigation from '../screens/getting-started/GettingStartedNavigation';
import { useAuthContext } from '../context/AuthContext';
import { PROFILEPIC_BASE_URL } from '../../config/config';
const Stack = createNativeStackNavigator();
function AppStack() {
// const[ini]
const auth = useAuthContext();
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  return (
    <>
      <Stack.Navigator initialRouteName={auth.user.getStartedCompleted ? "Dashboard" : "GettingStartedNavigation"}>
        <Stack.Screen name="Dashboard" component={Dashboard}
          options={{
            headerTitleAlign: 'center',
            headerShown:auth.headerShow,
            headerLeft: () => (
              <Pressable onPress={() => {
                navigation.navigate("Profile");
              }}>
                <Image size={50} resizeMode='cover' alt='hi' borderRadius={100} source={{uri:PROFILEPIC_BASE_URL + auth.user.profilePicture}} />
              </Pressable>),
            headerTitle: () => (
              <Image size={50} resizeMode='cover'  alt='hi1' borderRadius={100} source={Icon} />),
            headerRight: () => (
              <FontAwesome name='bell-o' size={30} color="black" />),
          }} />



        <Stack.Screen options={{headerShown:false, headerLeft: ()=> null,}} name="GettingStartedNavigation" component={GettingStartedNavigation} />


        <Stack.Screen name="Profile" component={Profile} options={{
          headerTitle: "Profile",
          headerRight: () => (
            <Pressable onPress={() => {
              navigation.navigate("Settings");
            }}>
              <Ionicons name='settings-sharp' size={30} /></Pressable>
          ), headerLeft: () => (
            <Pressable onPress={() => {
              navigation.goBack();
            }}>
              <AntDesign name='arrowleft' size={30} color="black" /></Pressable>
          ), headerTitleAlign: 'center'
        }}

        />

        <Stack.Screen name="Settings" component={Settings} options={{
          headerTitle: "Settings",
          headerRight: () => (
            <Pressable onPress={() => {
              navigation.navigate("Settings");
            }}>
              <Ionicons name='settings-sharp' size={30} /></Pressable>
          ), headerLeft: () => (
            <Pressable onPress={() => {
              navigation.goBack();
            }}>
              <AntDesign name='arrowleft' size={30} color="black" /></Pressable>
          ), headerTitleAlign: 'center'
        }}

        />
        <Stack.Screen name="OrderHistory" component={OrderHistory} options={{
          headerTitle: "My Order History",
          headerLeft: () => (
            <Pressable onPress={() => {
              navigation.goBack();
            }}>
              <AntDesign name='arrowleft' size={30} color="black" /></Pressable>
          ), headerTitleAlign: 'center'
        }}

        />
        <Stack.Screen name="TermsOfService" component={TermsOfService} options={{
          headerTitle: "Terms of Service",
          headerLeft: () => (
            <Pressable onPress={() => {
              navigation.goBack();
            }}>
              <AntDesign name='arrowleft' size={30} color="black" /></Pressable>
          ), headerTitleAlign: 'center'
        }}

        />

        <Stack.Screen name="ChangePassword" component={ChangePassword} options={{
          headerTitle: "Change your Password",
          headerLeft: () => (
            <Pressable onPress={() => {
              navigation.goBack();
            }}>
              <AntDesign name='arrowleft' size={30} color="black" /></Pressable>
          ), headerTitleAlign: 'center'
        }}

        />

        <Stack.Screen name="AdvancedSettings" component={AdvancedSettings} options={{
          headerTitle: "Advanced Settings",
          headerLeft: () => (
            <Pressable onPress={() => {
              navigation.goBack();
            }}>
              <AntDesign name='arrowleft' size={30} color="black" /></Pressable>
          ), headerTitleAlign: 'center'
        }}

        />
      </Stack.Navigator>
    </>

  )
}

export default AppStack;