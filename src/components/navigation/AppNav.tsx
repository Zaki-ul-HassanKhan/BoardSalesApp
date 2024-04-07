import { View, Text } from 'react-native'
import React from 'react';
import BoardScreen from '../screens/boards/BoardScreen';
import GearScreen from '../screens/gear/GearScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AppStack from './AppStack';
import { useAuthContext } from '../context/AuthContext';
import AuthStack from './AuthStack';


const AppNav = () => {
    const Auth = useAuthContext();
    return (
        <NavigationContainer>
          {Auth.userToken != "" ? <AuthStack /> : <AppStack />}
        </NavigationContainer>
    );
}

export default AppNav