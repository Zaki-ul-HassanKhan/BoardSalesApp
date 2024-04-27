import React, { useEffect, useState } from 'react';
import { View, Image, Text, TouchableOpacity, TextInput, Button } from 'react-native';
import { useAuthContext } from '../../context/AuthContext';
import useUserService from '../../../shared/services/user/user.service';
import { UserResponseModel } from '../../../models/user/UserResponseModel';
import { UpdateUserResponse } from '../../../models/user/UpdateUserResponse';
import { useToast } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface YourFullNameProps {
  individualOrShaper: number | null;
}

const YourFullName: React.FC<YourFullNameProps> = ({ individualOrShaper }) => {
  const auth = useAuthContext();
  const userService = useUserService();
  const toast = useToast();
  const [name, setName] = useState(auth.user.name);
  const Selection = async () =>{
    let selection = await AsyncStorage.getItem("IndividualOrShaper");
    individualOrShaper = Number(selection);

  }
  useEffect(()=>{
    Selection
  },[]);
  return (
    <View style={{ flex: 1 }}>

      {/* <CustomTabBar selectedTab={selectedTab} handleTabPress={handleTabPress} /> */}
      <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
        <Text style={{ paddingLeft: 5, marginBottom: 5, color: 'black', fontWeight: '900' }}>Your {individualOrShaper == 1 ? "First" : "Business"} Name</Text>
        <TextInput
          placeholder="Enter first name"
          value={name}
          onChangeText={(value) => {
            setName(value);
          }}
          style={{
            borderBottomWidth: .5, // Single bottom border
            marginBottom: 20, // Spacing between text inputs
          }}
        />
        {/* <TextInput
          placeholder="Enter last name"
          // value={lastName}
          // onChangeText={setLastName}
          style={{
            borderBottomWidth: .4, // Single bottom border
            marginBottom: 20, // Spacing between text inputs
          }}
        /> */}

      </View>
      <View style={{ position: 'absolute', bottom: 40, left: 0, right: 0, alignItems: 'center' }}>
        <TouchableOpacity
          onPress={() => {
            console.log("ON NAME PARESS")
            if (auth.user.name != name) {
              userService.updateUser({
                UserId: auth.user.userId,
                Name: name,
                Location: auth.user.location,
                ProfilePicture: auth.user.profilePicture,
                BoardLength: auth.user.boardLength,
                BoardType: auth.user.boardType,
                Distance: auth.user.distance,
                GetStartedCompleted:false
              }).then((res: UserResponseModel) => {
                console.log(res);
                if (res.code == "400") {
                  toast.show({
                    description: res.message,
                  })
                } else {
                  auth.setUser((user: UserResponseModel) => {
                    return { 
                      ...user, 
                      token: auth.user.token,
                      userId :auth.user.userId,
                      getStartedCompleted : auth.user.getStartedCompleted,
                      name: name,
                      location: auth.user.location,
                      distance: auth.user.distance,
                      boardLength : auth.user.boardLength,
                      boardType : auth.user.boardType,
                      profilePicture : auth.user.profilePicture
                    }
                  })
                  auth.setSelectedTab(3);
                }

              }).catch((error) => {
                console.log(error);
              });
            }
            else{
              auth.setSelectedTab(3);
            }
          }
          
          }
          style={{
            backgroundColor: '#59cae9',
            paddingVertical: 24,
            paddingHorizontal: 48,
            borderRadius: 30,
            alignItems: 'center',
            width: 300
          }}
        >
          <Text style={{ color: 'black', fontWeight: 'bold' }}>Next</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

export { YourFullName };

