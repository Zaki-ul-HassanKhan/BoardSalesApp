import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Button,
  TextInput,
  StyleSheet,
  Pressable,
} from 'react-native';


import { useAuthContext } from '../../../context/AuthContext';
import useAuthService from '../../../../shared/services/auth/auth.service';
import axios from 'axios';

const LoginScreen = () => {
  const auth = useAuthContext();
  const authService = useAuthService();
  const [userName, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const APIDATA = async () =>{
    // console.log("API FATA");
    // const url = "https://jsonplaceholder.typicode.com/posts/1";
    // let res = await fetch(url).then((respo)=>{console.log(respo)}).catch((res)=>{console.log(res)});
    // // res = await res.json();
    // console.log(res);192.168.0.115
    try{
      console.log("API DATA");
      // const aa = await
      // fetch('https://jsonplaceholder.typicode.com/todos/1')
      // .then(response => { console.log("SUCCESSSSS"); console.log(response.json())})
      // .then(json => console.log(json))

     //const res = await axios.get('https://jsonplaceholder.typicode.com/posts/1').then((respo) => { console.log("SUCCESSSSS"); console.log(respo.data) }).catch((res) => { console.log(res) });
      // console.log(res);
    }
    catch(error){
      console.log(error);
    }
  }
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
      <View style={{ paddingHorizontal: 25 }}>
        <View style={{ alignItems: 'center' }}>
          <Text>Welocome to login where Token is {auth.userToken}</Text>
          <TextInput
            style={styles.input}
            onChangeText={setUserName}
            value={userName}
          />
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            onChangeText={setPassword}
            value={password}
          />
          <Pressable
            onPress={() => {
              const data= {
                userName: "zaki",
                password: "zaki"
              };
              authService.postUserCredentials({
                userName: 'username',
                password: 'password'
              }).then((res:any)=>{
                console.log("IF BACKKKK THEN");
                console.log(res);
              }).catch((error)=>{
                console.log(error);
              });
              // APIDATA();
              // axios({
              //   method: 'get',
              //   url: 'https://jsonplaceholder.typicode.com/users',
              // }).then((response) => {
              //   console.log(response.data);
              // });
              // axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
              //   // console.log(response.data);
              //   auth.setUserToken(response);
              // }).catch(function (error) {
              //    auth.setUserToken(error.message);
              //     console.log(error);
              //   });
              // axios.post('https://192.168.100.77:7055/api/Authentication', {
              //   userName: "Fred",
              //   password: "Flintstone"
              // })
             
              // .then(function (response) {
              //   console.log(response);
              // })
              // .catch(function (error) {
              //  auth.setUserToken(error.message);
              //   console.log(error);
              // });
               
            }}
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
              },
              styles.wrapperCustom,
            ]}>
              <Text style={styles.text}>{'Login'}</Text>
            </Pressable>
        </View>
      </View>

    </SafeAreaView>
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
  },
  text: {
    fontSize: 16,
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
  },
});

export default LoginScreen;