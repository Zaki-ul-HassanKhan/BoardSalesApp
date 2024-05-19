import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppStack from './AppStack';
import { useAuthContext } from '../context/AuthContext';
import AuthStack from './AuthStack';
import { Center, HStack, Heading, NativeBaseProvider, Spinner } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { UserResponseModel } from '../../models/user/UserResponseModel';
import useUserService from '../../shared/services/user/user.service';
import { LookupsResponse } from '../../models/user/LooksResponse';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


const AppNav = () => {
  const auth = useAuthContext();
  const userService = useUserService();
  const IsLoggedIn = async () => {
    let token = await AsyncStorage.getItem("UserToken");
    let UserId = await AsyncStorage.getItem("UserId");
    if (UserId != null && UserId != undefined) {

      if (auth.user.name == "") {
        userService.getUser(Number(UserId)).then((res: any) => {
          res = res.result;
          auth.setUser((user: UserResponseModel) => {
            return {
              ...user,
              token: res.token,
              userId: res.userId,
              getStartedCompleted: res.getStartedCompleted,
              name: res.name,
              location: res.location,
              distance: res.distance,
              boardLength: res.boardLength,
              boardType: res.boardType,
              profilePicture: res.profilePicture
            }
          });
          AsyncStorage.setItem('UserId', "");
          AsyncStorage.setItem('UserToken', "");
          auth.setIsLoading(false);
          GetLookUps();
        }).catch((error) => {
          console.log(error);
        });
      } else {

        auth.setUser((user: UserResponseModel) => {
          return {
            ...user,
            token: user.token,
            userId: Number(user.userId),
            getStartedCompleted: user.getStartedCompleted,
            name: user.name,
            location: user.location,
            distance: user.distance,
            boardType: user.boardType,
            boardLength: user.boardLength,
            profilePicture: user.profilePicture
          }
        })
        auth.setIsLoading(false);
      }
    }
    else {
      auth.setIsLoading(false);
    }
  }

  const GetLookUps = () => {
    userService.getLookups().then((res: LookupsResponse) => {
      auth.setLookups(res);
      auth.setIsLoading(false);

    }).catch((error) => {
      console.log(error);
    });
  }
  useEffect(() => {
    auth.setIsLoading(true);
    IsLoggedIn();
  }, []);

  return (
    <NavigationContainer>
      
      <NativeBaseProvider>
        
        {auth.isLoading ?
          <Center flex={1} px="3">
            <HStack space={2} justifyContent="center">
              <Spinner size={50} accessibilityLabel="Loading" />
            </HStack>
          </Center>
          :
          <>
            {(auth.user.token == "" || auth.user.token == null) ? <AuthStack /> : <AppStack />}
          </>
        }
      </NativeBaseProvider>
    </NavigationContainer>
  );
}

export default AppNav