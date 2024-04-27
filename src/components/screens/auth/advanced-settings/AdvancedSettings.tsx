import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Button, Center, HStack, useToast } from 'native-base'
import useUserService from '../../../../shared/services/user/user.service';
import { useAuthContext } from '../../../context/AuthContext';
import { DeleteAccountReponse } from '../../../../models/user/DeleteAccountResponse';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserResponseModel } from '../../../../models/user/UserResponseModel';

const AdvancedSettings = () => {
  const userService = useUserService();
  const Auth = useAuthContext();
  const toast = useToast();
  const DeleteAccount = () => {
    userService.deleteAccount({
      UserId: Auth.user.userId
    }).then((res: DeleteAccountReponse) => {
      toast.show({
        description: res.message,
      })
      if (res.code == "200") {
        Auth.setUser((user: UserResponseModel) => {
          return {
            ...user,
            token: "",
          }
        })
        AsyncStorage.setItem('UserToken', "");
        AsyncStorage.setItem('UserId', "");
      }
    }).catch((error) => {
      console.log(error);
    });
  }
  return (<>
    <HStack marginTop={18} marginLeft={15}>
      <Text >General</Text></HStack>
    <Center>
      <Button style={styles.btn} onPress={DeleteAccount}>Delete Account</Button>
    </Center>
  </>
  )
}

const styles = StyleSheet.create({
  btn: {
    marginTop: 20,
    width: "90%"
  }
})
export default AdvancedSettings