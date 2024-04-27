import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from '../screens/auth/login/LoginScreen';
import RegisterationScreen from '../screens/auth/registeration/RegisterationScreen';
import GettingStartedNavigation from '../screens/getting-started/GettingStartedNavigation';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Login'>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Registeration" component={RegisterationScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;