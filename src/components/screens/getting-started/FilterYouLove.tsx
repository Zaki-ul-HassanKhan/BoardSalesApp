import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useAuthContext } from '../../context/AuthContext';
import useUserService from '../../../shared/services/user/user.service';
import { useToast } from 'native-base';
import { UpdateUserResponse } from '../../../models/user/UpdateUserResponse';
import { UserResponseModel } from '../../../models/user/UserResponseModel';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FilterYouLove = () => {
    const auth = useAuthContext();
    const userService = useUserService();
    const toast = useToast();

    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

    const handleGetStarted = () => {

        userService.updateUser({
            UserId: auth.user.userId,
            Name: auth.user.name,
            Location: auth.user.location,
            ProfilePicture: auth.user.profilePicture,
            BoardLength: auth.user.boardLength,
            BoardType: auth.user.boardType,
            Distance: auth.user.distance,
            GetStartedCompleted: true
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
                        userId: auth.user.userId,
                        getStartedCompleted: res.getStartedCompleted,
                        name: auth.user.name,
                        location: auth.user.location,
                        distance: auth.user.distance,
                        boardLength: auth.user.boardLength,
                        boardType: auth.user.boardType,
                        profilePicture: res.profilePicture
                    }
                });

                navigation.reset({ index: 0, routes: [{ name: "Dashboard" }] })
            }
        });

    };

    return (
        <View style={{ flex: 1 }}>

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingTop: 20, paddingHorizontal: 20 }}>
                <Text style={{ paddingLeft: 20, fontWeight: '900', color: 'black' }}>Filters you'll Love!</Text>
                <TouchableOpacity onPress={() => {/* Add onPress functionality for filter button */ }}>
                    {/* <Image source={require('./assets/filter-control.jpg')} style={{ width: 54, height: 54, }} /> */}
                </TouchableOpacity>
            </View>

            <View style={{ paddingLeft: 40 }}>
                <Text>You can find the filter button at the top</Text>
                <Text>right of the home page.</Text>
            </View>

            <View style={{ paddingTop: 70, paddingLeft: 20 }}>
                <Text style={{ paddingLeft: 20, fontWeight: '600', color: 'black' }}>You can sort by:</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 50, paddingTop: 20 }}>
                <Image source={require('../../../assets/images/location-icon.png')} style={{ width: 15, height: 15, marginRight: 5 }} />
                <Text style={{ marginRight: 10 }}>Location</Text>

            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 50, paddingTop: 10 }}>

                <Image source={require('../../../assets/images/size-icon.png')} style={{ width: 15, height: 15, marginRight: 5 }} />
                <Text>Size</Text>

            </View>
            <View style={{ paddingTop: 10, flexDirection: 'row', alignItems: 'center', paddingLeft: 50 }}>
                <Image source={require('../../../assets/images/fin-setup-icon.png')} style={{ width: 15, height: 15, marginRight: 5 }} />
                <Text>Fin setup</Text>

            </View>

            <View style={{ paddingTop: 10, flexDirection: 'row', alignItems: 'center', paddingLeft: 50 }}>
                <Image source={require('../../../assets/images/volume-icon.png')} style={{ width: 15, height: 15, marginRight: 5 }} />
                <Text>Volume</Text>

            </View>
            <View style={{ paddingTop: 10, flexDirection: 'row', alignItems: 'center', paddingLeft: 50 }}>
                <Image source={require('../../../assets/images/weight-icon.png')} style={{ width: 15, height: 15, marginRight: 5 }} />
                <Text>Weight</Text>

            </View>

            <View style={{ position: 'absolute', bottom: 100, left: 0, right: 0, alignItems: 'center' }}>
                <TouchableOpacity
                    onPress={handleGetStarted}
                    style={{
                        backgroundColor: '#59cae9',
                        paddingVertical: 24,
                        paddingHorizontal: 48,
                        borderRadius: 30,
                        alignItems: 'center',
                        width: 300
                    }}
                >
                    <Text style={{ color: 'black', fontWeight: 'bold' }}>Start Exploring</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export { FilterYouLove };
