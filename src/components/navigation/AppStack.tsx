import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BoardScreen from '../screens/boards/dashboard/BoardScreen';
import GearScreen from '../screens/gear/GearScreen';
import { Badge, Center, HStack, Image } from 'native-base';
import logo from '../../assets/images/board-sale-logo.png';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Button, Pressable, TouchableOpacity, View } from 'react-native';
import PostBoard from '../screens/boards/post/PostBoard';
import MyListings from '../screens/my-listings/MyListings';
import ChatScreen from '../screens/chat/ChatScreen';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp, createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from '../screens/profile/Profile';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from '../screens/dashboard/Dashboard';
import Logo from '../../assets/images/board-sale-logo.png';
import Icon from '../../assets/images/board-sale-icon.png';
const Stack = createNativeStackNavigator();
function AppStack() {

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  function alert(arg0: string): void {
    throw new Error('Function not implemented.');
  }

  return (
    <>
      <Stack.Navigator initialRouteName='Profile'>
        <Stack.Screen name="Dashboard" component={Dashboard}
          options={{
            headerTitleAlign: 'center',
            headerLeft: () => (
              <Pressable onPress={() => {
                navigation.navigate("Profile");
              }}><Image size={50} resizeMode='cover' borderRadius={100} source={Logo} />
              </Pressable>),
            headerTitle: () => (
              <Image size={50} resizeMode='cover' borderRadius={100} source={Icon} />),
            headerRight: () => (
              <FontAwesome name='bell-o' size={30} color="black" />),
          }} />





        <Stack.Screen name="Profile" component={Profile} options={{
          headerTitle: "Profile",
          headerRight: () => (
           <Ionicons name='settings-sharp' size={30} />
          ), headerLeft: () => (
            <AntDesign name='arrowleft' size={30} color="black"/>
          ), headerTitleAlign: 'center'
        }}

        />
      </Stack.Navigator>

    </>

  )
}

export default AppStack;