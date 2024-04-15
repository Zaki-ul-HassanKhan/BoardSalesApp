import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppStack from './AppStack';
import { useAuthContext } from '../context/AuthContext';
import AuthStack from './AuthStack';
import { Center, HStack, Heading, NativeBaseProvider, Spinner } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator, StyleSheet, View } from 'react-native';


const AppNav = () => {
  const Auth = useAuthContext();
  const [isLoading, setIsLoading] = useState(true);
  const IsLoggedIn = async () => {
    let token = await AsyncStorage.getItem("UserToken");
    Auth.setUserToken(token);
    Auth.setIsLoading(false);
    setIsLoading(false);
  }
  useEffect(() => {
    Auth.setIsLoading(false);
    Auth.setUserToken("a");
    AsyncStorage.setItem('UserToken', "a");
    IsLoggedIn();
  }, []);

  return (
    <NavigationContainer>
      <NativeBaseProvider>
        {/* {Auth.isLoading ?
          <Center flex={1} px="3">
            <HStack space={2} justifyContent="center">
              <Spinner size={50} accessibilityLabel="Loading" />
            </HStack>
          </Center>
          :
          <> */}
            {(Auth.userToken == "" || Auth.userToken == null) ? <AuthStack /> : <AppStack />}
            {/* </> */}
        {/* // } */}
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});
export default AppNav