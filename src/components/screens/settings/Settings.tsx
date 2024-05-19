import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Button, Center, HStack, Heading } from 'native-base'
import Share from 'react-native-share';
import { useAuthContext } from '../../context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { UserResponseModel } from '../../../models/user/UserResponseModel';
const Settings = () => {

    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const Auth = useAuthContext();
    const options = { message: "I am sharing my app link" }
    const InviteOthers = () => {
        Share.open(options).then((res) => {
        })
            .catch((err) => {
                err && console.log(err);
            });
    }
    const Logout = () => {
        Auth.setUser((user: UserResponseModel) => {
            return { 
              ...user, 
              token: ""
            }
          })
        AsyncStorage.setItem('UserToken', "");
        AsyncStorage.setItem('UserId', "");
    }
    return (<>
        <HStack marginTop={18} marginLeft={15}>
            <Text >General</Text></HStack>
        <Center>

            <Button style={styles.btn} onPress={InviteOthers}>Invite Friends</Button>
            <Button style={styles.btn} onPress={() => {
                navigation.navigate("OrderHistory");
            }}>My Order history</Button>
            <Button style={styles.btn} onPress={() => {
                navigation.navigate("TermsOfService");
            }}>Terms of Service</Button>
        </Center>

        <HStack marginLeft={15}>
            <Text >Account</Text></HStack>
        <Center>

            <Button style={styles.btn} onPress={() => {
                navigation.navigate("ChangePassword");
            }}>Change Password</Button>
            <Button style={styles.btn} onPress={() => {
                navigation.navigate("AdvancedSettings");
            }}>Advanced Settings</Button>
            <Button style={styles.btn} onPress={Logout}>Logout</Button>
        </Center></>
    )
}
const styles = StyleSheet.create({
    btn: {
        marginTop: 20,
        width: "90%"
    }
})

export default Settings