import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, TextInput, Button, ScrollView, Pressable } from 'react-native';
import { useAuthContext } from '../../context/AuthContext';
import useUserService from '../../../shared/services/user/user.service';
import { UpdateUserResponse } from '../../../models/user/UpdateUserResponse';
import { useToast } from 'native-base';
import { UserResponseModel } from '../../../models/user/UserResponseModel';

const WhatsYourGoToBoard = () => {
    const auth = useAuthContext();
    const userService = useUserService();
    const toast = useToast();
    const [boardType, setBoardType] = useState(auth.user.boardType);
    
    const handleNext = () => {
        if (auth.user.boardType != boardType) {
            userService.updateUser({
                UserId: auth.user.userId,
                Name: auth.user.name,
                Location: auth.user.location,
                ProfilePicture: auth.user.profilePicture,
                BoardLength: auth.user.boardLength,
                BoardType: boardType,
                Distance: auth.user.distance,
                GetStartedCompleted:false
            }).then((res: UserResponseModel) => {
                
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
                          name:auth.user.name,
                          location: auth.user.location,
                          distance: auth.user.distance,
                          boardLength : auth.user.boardLength,
                          boardType : boardType,
                          profilePicture : auth.user.profilePicture
                        }
                      });
                    auth.setSelectedTab(5);
                }
            });
        }
        else{
            auth.setSelectedTab(5);
        }
    }

    return (
        <View style={{ flex: 1 }}>

            {/* <CustomTabBar selectedTab={selectedTab} handleTabPress={handleTabPress} /> */}
            <ScrollView style={{ flex: 1, marginBottom: 150 }}>
                <View style={{ paddingTop: 20 }}>
                    <Text style={{ paddingLeft: 40, color: 'black', fontWeight: '900' }}>What's Your go-to board?</Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 40, paddingTop: 20, paddingLeft: 50 }}>
                    <Pressable onPress={() => { setBoardType(1); }}>
                        <Image source={require('../../../assets/images/short-board.jpg')} style={{ width: 150, height: 330, resizeMode: 'contain' }} />
                    </Pressable>
                    <Pressable onPress={() => { setBoardType(2); }}>
                        <Image source={require('../../../assets/images/longboard.jpg')} style={{ width: 150, height: 330, resizeMode: 'contain' }} />
                    </Pressable>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 40, paddingTop: 20, paddingLeft: 50 }}>
                    <Text style={{ paddingLeft: 20, color: 'black', fontWeight: '900' }}>Short-board</Text>
                    <Text style={{ paddingRight: 20, paddingTop: 0, color: 'black', fontWeight: '900' }}>Long-board</Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 40, paddingTop: 20 }}>
                    {/* Second Row */}
                    <Pressable onPress={() => { setBoardType(3); }}>
                        <Image source={require('../../../assets/images/fish.jpg')} style={{ width: 150, height: 330, resizeMode: 'contain' }} />
                    </Pressable>
                    <Pressable onPress={() => { setBoardType(4); }}>
                        <Image source={require('../../../assets/images/mid-length.jpg')} style={{ width: 150, height: 330, resizeMode: 'contain' }} />

                    </Pressable>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 40, paddingTop: 20, paddingLeft: 50 }}>
                    <Text style={{ paddingLeft: 20, color: 'black', fontWeight: '900' }}>Fish</Text>
                    <Text style={{ paddingRight: 20, paddingTop: 0, color: 'black', fontWeight: '900' }}>Mid-length</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 40, paddingTop: 20 }}>
                    {/* Third Row */}
                    <Pressable onPress={() => { setBoardType(5); }}>
                        <Image source={require('../../../assets/images/SUP.jpg')} style={{ width: 150, height: 330, resizeMode: 'contain' }} />
                    </Pressable>
                    <Pressable onPress={() => { setBoardType(6); }}>
                        <Image source={require('../../../assets/images/foam-board.jpg')} style={{ width: 150, height: 330, resizeMode: 'contain' }} />
                    </Pressable>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 40, paddingTop: 20, paddingLeft: 50 }}>
                    <Text style={{ paddingLeft: 20, color: 'black', fontWeight: '900' }}>SUP</Text>
                    <Text style={{ paddingRight: 20, paddingTop: 0, color: 'black', fontWeight: '900' }}>Foam-board</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 40, paddingTop: 20 }}>
                    {/* Third Row */}
                    <Pressable onPress={() => { setBoardType(7); }}>
                        <Image source={require('../../../assets/images/body-board.jpg')} style={{ width: 150, height: 330, resizeMode: 'contain' }} />
                    </Pressable>
                    <Pressable onPress={() => { setBoardType(8); }}>
                        <Image source={require('../../../assets/images/surf-craft.jpg')} style={{ width: 150, height: 330, resizeMode: 'contain' }} />
                    </Pressable>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 40, paddingTop: 20, paddingLeft: 50 }}>
                    <Text style={{ paddingLeft: 20, color: 'black', fontWeight: '900' }}>Body Board</Text>
                    <Text style={{ paddingRight: 20, paddingTop: 0, color: 'black', fontWeight: '900' }}>Surf Craft</Text>
                </View>
            </ScrollView>
            <View style={{ position: 'absolute', bottom: 40, left: 0, right: 0, alignItems: 'center' }}>
                <TouchableOpacity
                    disabled={boardType == 0}
                    onPress={handleNext}
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
export default WhatsYourGoToBoard;