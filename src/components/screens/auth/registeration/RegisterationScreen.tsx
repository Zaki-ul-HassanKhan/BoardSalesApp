import React from 'react'
import { Box, Button, Center, FormControl, Heading, Image, Input, Pressable, Text, VStack, View, WarningOutlineIcon } from 'native-base';
import boardsaleicon from '../../../../assets/images/board-sale-icon.png';
import { StyleSheet } from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import useUserService from '../../../../shared/services/user/user.service';
import { UserResponseModel } from '../../../../models/user/UserResponseModel';
import { useAuthContext } from '../../../context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
const RegisterationScreen = () => {
  const [passwordShow, setPasswordShow] = React.useState(false);
  const [confirmPasswordShow, setConfirmPasswordShow] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [passwordMisMatch, setPasswordMisMatch] = React.useState(false);
  const [saveButtonDisabled, setSaveButtonDisabled] = React.useState(true);
  const userService = useUserService();
  const auth = useAuthContext();
  return (
        <>
          <Center marginTop='50px'>
 <Image alt="Board Sale Logo" source={boardsaleicon} w='90' h='90' />
 <Heading fontWeight="800" marginTop='15px'fontSize='4xl' color="black" _dark={{
        color: "black"
      }}>
       BOARDSALES  
        </Heading>
 <Heading fontWeight="800" marginTop='15px'fontSize='sm' color="black" _dark={{
        color: "black"
      }}>
       Selling and Buying Surfboards Made Simple  
        </Heading>
          </Center>
          <Box safeArea p="2" py="8" marginLeft='10' marginRight='10' height='100%'>
            
          <VStack space={3}>
            <FormControl>
              <Text color='black' marginBottom='2' fontWeight='600'>Email Address</Text>
      <Input height='8' variant="underlined" size={5} placeholder="Enter Your Email" 
      onChangeText={(email)=>{setEmail(email);}}/>
            </FormControl>
            <FormControl>
              <Text color='black' marginBottom='2' fontWeight='600'>Password</Text>
              <Input variant="underlined"
               onChangeText={(password)=>{setPassword(password);
                if(password !== confirmPassword){
                  setPasswordMisMatch(true);
                  setSaveButtonDisabled(true);
                }else{
                  setSaveButtonDisabled(false);
                  setPasswordMisMatch(false);
                }
               }}
                type={passwordShow ? "text" : "password"} 
       InputRightElement={<Pressable onPress={() => {
        setPasswordShow(!passwordShow);
        
        }}>
    <FontAwesome5Icon name={passwordShow ? "eye" : "eye-slash"} size={15} color="black"/>
          </Pressable>
       
        } placeholder="Password" size={5} mr="2" color="muted.400" />
            </FormControl>
            <FormControl isInvalid={passwordMisMatch}>
              <Text color='black' marginBottom='2' fontWeight='600'>Confirm Password</Text>
              <Input onChangeText={(cPassword)=>{
                setConfirmPassword(password);
                if(password !== cPassword){
                  setPasswordMisMatch(true);
                  setSaveButtonDisabled(true);
                }else{
                  setSaveButtonDisabled(false);
                  setPasswordMisMatch(false);
                }
              }}  variant="underlined" type={confirmPasswordShow ? "text" : "password"} 
       InputRightElement={<Pressable onPress={() => {
        setConfirmPasswordShow(!confirmPasswordShow);
        
        }}>
    <FontAwesome5Icon name={confirmPasswordShow ? "eye" : "eye-slash"} size={15} color="black"/>
          </Pressable>
       
        } placeholder="Re-enter Password" size={5} mr="2" color="muted.400" />
           <FormControl.ErrorMessage>
          Passwords didn't matched
        </FormControl.ErrorMessage>
        </FormControl>
            <Button mt="2" isDisabled={saveButtonDisabled} backgroundColor="#9ad7f5" borderRadius='full'>
            <Text color='black' fontWeight='600' onPress={()=>{
              if(!saveButtonDisabled){
                userService.createUser({
                  UserName: email,
                  Password: password,
                  Name:"",
                  ProfilePicture:"",
                  Platform: "App"
                }).then((res:UserResponseModel)=>{
                  console.log("IF BACKKKK THEN");
                  console.log(res.token);
                  auth.setUserToken(res.token);
                AsyncStorage.setItem('UserToken',res.token);
                }).catch((error)=>{
                  console.log(error);
                });
              }
            }}>Create an Account</Text>
            </Button>
            
          </VStack>
        </Box>
        </>
  )
}

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
    alignItems:'center',
  },
  iconcontainer: {
    flex: 1,
    height:null,
    width:null

  },
  text: {
   color:'white',
   fontSize:40,
   fontWeight:'500'
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 6,
  },
  logBox: {
    padding: 20,
    margin: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#f0f0f0',
    backgroundColor: '#f9f9f9',
  }
});

export default RegisterationScreen