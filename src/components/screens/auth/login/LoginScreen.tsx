import React, { useEffect } from 'react';
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
} from 'react-native';


import { useAuthContext } from '../../../context/AuthContext';
import useAuthService from '../../../../shared/services/auth/auth.service';
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin';
import { GOOGLE_WEB_CLIENT_ID } from '../../../../config/config';

import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import backgroundImage from '../../../../assets/images/home-screen-img.jpg';
import boardsalelogo from '../../../../assets/images/board-sale-logo.png';
import orsigninwith from '../../../../assets/images/or-sign-in-with.png';
import { Box, Button, Center, FormControl, HStack, Heading, Image, Input, Link, Pressable, ScrollView, Text, VStack, useToast } from 'native-base';
import { AccessToken, LoginButton, Profile } from 'react-native-fbsdk-next';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserResponseModel } from '../../../../models/user/UserResponseModel';
import { GoogleLoginResponseModel } from '../../../../models/google/GoogleLoginResponseModel';
import useUserService from '../../../../shared/services/user/user.service';
import { LookupsResponse } from '../../../../models/user/LooksResponse';
const LoginScreen = () => {
  const toast = useToast();
  const ConfigureGoogleSignIn = () => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId: GOOGLE_WEB_CLIENT_ID, // client ID of type WEB for your server. Required to get the idToken on the user object, and for offline access.
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      hostedDomain: '', // specifies a hosted domain restriction
      forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
      accountName: '', // [Android] specifies an account name on the device that should be used
      googleServicePlistPath: '', // [iOS] if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
      openIdRealm: '', // [iOS] The OpenID2 realm of the home web server. This allows Google to include the user's OpenID Identifier in the OpenID Connect ID token.
      profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
    });
  }
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();


  const handleLoginFinished = (error: any, result: any) => {
    console.log(result);
    if (error) {
      console.log("login has error: " + result.error);
    } else if (result.isCancelled) {
      console.log("login is cancelled.");
    } else {
      currentProfile;
    }
  };

  const currentProfile = Profile.getCurrentProfile().then(
    function(currentProfile) {
      if (currentProfile) {
        console.log("The current logged user is: " +
          currentProfile.name
          + ". His profile id is: " +
          currentProfile.userID
        );

        console.log(currentProfile);
      }
    }
  );
  useEffect(() => {
    console.log(GoogleSignin.getCurrentUser());
    ConfigureGoogleSignIn();
  }, []);
  const auth = useAuthContext();
  const authService = useAuthService();
  const [userName, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordShow, setPasswordShow] = React.useState(false);
  const userService = useUserService();
  console.log("IS RENDERED");
  const RegisterSocialUser = (UserName: string, Name: string, ProfilePicture: string, platform: string) => {
    userService.createUser({
      UserName: UserName,
      Password: "",
      Name: Name,
      ProfilePicture: ProfilePicture,
      Platform: platform
    }).then((res: UserResponseModel) => {
      console.log("IF BACKKKK THEN");
      console.log(res.token);
      auth.setUser((user: UserResponseModel) => {
        return { 
          ...user, 
          token: res.token,
          UserId : Number(res.userId)
        }
      })
      AsyncStorage.setItem('UserId',res.userId.toString());
      AsyncStorage.setItem('UserToken', res.token);
    }).catch((error) => {
      console.log(error);
    });
  }
  const signIn = async () => {
    try {
      console.log("SIGNINGGGOL");
      await GoogleSignin.hasPlayServices();
      var userInfo: GoogleLoginResponseModel = await GoogleSignin.signIn();
      RegisterSocialUser(userInfo.user.email, userInfo.user.name, userInfo.user.photo, "Google");
      console.log(userInfo);
    } catch (error: any) {
      console.log(error);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  const GetLookUps = () => {
    userService.getLookups().then((res: LookupsResponse) => {
      console.log(auth.user);
      auth.setLookups(res);
      auth.setIsLoading(false);
      
    }).catch((error) => {
      console.log(error);
    });
  }
  
  return (
    <ScrollView style={styles.box}>
    <ImageBackground source={backgroundImage} style={styles.container}>
      <Box safeArea p="2" py="8" height='100%' w="90%" maxW="290">
        <Center>
          <Image alt="Board Sale Logo" source={boardsalelogo} />
          <Heading fontWeight="800" marginTop='15px' width='110%' fontSize='sm' color="black" _dark={{
            color: "black"
          }}>
            Selling and Buying Surfboards Made Simple
          </Heading>
        </Center>

        <VStack space={3} marginTop='25px'>
          <FormControl>
            <Text color='black' marginBottom='2' fontWeight='600'>Email Address</Text>
            <Input height='8' backgroundColor='#9ae9f5' size="xs" placeholder="Enter Your Email"
              onChangeText={(name) => {

                setUserName(name);
              }} />
          </FormControl>
          <FormControl>
            <Text color='black' marginBottom='2' fontWeight='600'>Password</Text>
            <Input height='8' backgroundColor='#9ae9f5' size="xs"
              onChangeText={(p) => {
                setPassword(p);
              }}
              type={passwordShow ? "text" : "password"}
              InputRightElement={<Pressable onPress={() => {
                setPasswordShow(!passwordShow);

              }}>
                <FontAwesome5Icon name={passwordShow ? "eye" : "eye-slash"} size={15} color="black" />
              </Pressable>

              } placeholder="Password" mr="2" color="muted.400" />
          </FormControl>
          <Button isDisabled={(userName == null|| userName == "") 
          || (password == null || password == "")} mt="2" backgroundColor="#9ad7f5" borderRadius='full'
          onPress={pressed => {
            // auth.setIsLoading(true);
            authService.postUserCredentials({
              UserName: userName,
              Password: password
            }).then((res: any) => {
             GetLookUps();
              console.log("IF BACKKKK THEN");
              if (res.result.code === "400") {
                toast.show({
                  description: res.result.message,
                })
                return;
              }
              console.log(res.result);
              auth.setUser((user: UserResponseModel) => {
                return { 
                  ...user, 
                  token: res.result.token,
                  userId : Number(res.result.userId),
                  getStartedCompleted : res.result.getStartedCompleted,
                  name:res.result.name,
                  location: res.result.location,
                  distance: res.result.distance,
                  boardType: res.result.boardType,
                  boardLength: res.result.boardLength,
                  profilePicture: res.result.profilePicture
                }
              })
            AsyncStorage.setItem('UserId', String(res.result.userId));
            AsyncStorage.setItem('UserToken', res.result.token);
            AsyncStorage.setItem('GettingStarted', res.result.getStartedCompleted ? "1" : "0");
            }).catch((error) => {
              console.log(error);
            });

          }}>
            <Text color='black' fontWeight='600'>Log In</Text>
          </Button>


          <Center>
            <Text color='black' fontWeight='600'>Forgotten your password?</Text>

            <Image alt="Or sign in with" marginTop='10px' source={orsigninwith} />
          </Center>
          <Center>
            <GoogleSigninButton
              size={GoogleSigninButton.Size.Icon}
              color={GoogleSigninButton.Color.Dark}
              onPress={signIn}
            />
            <LoginButton

              onLoginFinished={(error, result) => handleLoginFinished(error, result)}
              onLogoutFinished={() => console.log("logout.")}
            />
            <Text color='black' fontWeight='400'>Don't have an account ?</Text>
            <Text color='black' marginTop='14px' fontWeight='600' onPress={pressed => {
              navigation.navigate('Registeration');
            }}>Create an Account</Text>
          </Center>
        </VStack>
      </Box>
    </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: Dimensions.get('screen').height
  },
  box : {
    height: Dimensions.get('screen').height
  }
});

export default LoginScreen;