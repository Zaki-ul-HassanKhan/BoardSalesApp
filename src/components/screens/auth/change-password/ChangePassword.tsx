import { View, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Button, Center, FormControl, Input, Pressable, Text, useToast } from 'native-base';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import useUserService from '../../../../shared/services/user/user.service';
import { UserResponseModel } from '../../../../models/user/UserResponseModel';
import { useAuthContext } from '../../../context/AuthContext';
import { UpdatePasswordReponse } from '../../../../models/user/UpdatePasswordResponse';

const ChangePassword = () => {
    const [passwordShow, setPasswordShow] = useState(false);
    const [confirmPasswordShow, setConfirmPasswordShow] = useState(false);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordMisMatch, setPasswordMisMatch] = useState(false);
    const [saveButtonDisabled, setSaveButtonDisabled] = useState(true);
    const userService = useUserService();
    const auth = useAuthContext();
    const toast = useToast();
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Your new password</Text>
            <FormControl>
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
       
        } placeholder="Enter new Password" size={5} mr="2" color="muted.400" />
            </FormControl>
            <FormControl isInvalid={passwordMisMatch}>
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
       
        } placeholder="Confirm Password" size={5} mr="2" color="muted.400" />
           <FormControl.ErrorMessage>
          Passwords didn't matched
        </FormControl.ErrorMessage>
        </FormControl>
        <Button marginTop={10} isDisabled={saveButtonDisabled} backgroundColor="#9ad7f5" borderRadius='full'>
            <Text color='black' fontWeight='600' onPress={()=>{
              if(!saveButtonDisabled){
                userService.updatePassword({
                    Password: password,
                    UserId: auth.user.userId
                }).then((res:UpdatePasswordReponse)=>{
                    toast.show({
                      description: res.message,
                    })
                }).catch((error)=>{
                  console.log(error);
                });
              }
            }}>Update your new Password</Text>
            </Button>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        marginTop: 60,
        margin: 40
    },
    text: {
        fontWeight: "bold",
        color: "black"
    }
})
export default ChangePassword