
import { Image, useToast } from 'native-base';
import { useState } from 'react';
import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import { useAuthContext } from '../../context/AuthContext';
import useUserService from '../../../shared/services/user/user.service';
import { UpdateUserResponse } from '../../../models/user/UpdateUserResponse';
import { UserResponseModel } from '../../../models/user/UserResponseModel';
import { PROFILEPIC_BASE_URL } from '../../../config/config';
const ProfilePicture = () => {
    const auth = useAuthContext();
    const userService = useUserService();
    const toast = useToast();
    const [imageBase64, setImageBase64] = useState<string>("");
    const [selectedImage, setSelectedImage] = useState(PROFILEPIC_BASE_URL + auth.user.profilePicture); // Initialize selectedImage state with null
    // source={{uri:PROFILEPIC_BASE_URL + auth.user.profilePicture}}
    // const handleTabPress = (index: number) => {
    //   setSelectedTab(index);
    // };

    const handleGetStarted = () => {
        if (auth.user.profilePicture != selectedImage) {
            userService.updateUser({
                UserId: auth.user.userId,
                Name: auth.user.name,
                Location: auth.user.location,
                ProfilePicture: imageBase64,
                BoardLength: auth.user.boardLength,
                BoardType: auth.user.boardType,
                Distance: auth.user.distance,
                GetStartedCompleted: false
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
                          name:auth.user.name,
                          location: auth.user.location,
                          distance: auth.user.distance,
                          boardLength : auth.user.boardLength,
                          boardType : auth.user.boardType,
                          profilePicture : res.profilePicture
                        }
                      });
                    auth.setSelectedTab(7);
                }
            });
        }else{
            auth.setSelectedTab(7);
        }
    };

    const handleUploadPicture = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            includeBase64: true,
            mediaType: "photo",
            cropping: true
        }).then(image => {
            setImageBase64(image.data == null ? "" : image.data);
            setSelectedImage(image.path);

            console.log(image);
        });
    };


    return (
        <View style={{ flex: 1 }}>
            {/* <CustomTabBar selectedTab={selectedTab} handleTabPress={handleTabPress} /> */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingTop: 30 }}>
                <Text style={{ paddingLeft: 20, color: 'black', fontWeight: '900' }}>Profile Picture</Text>
                <TouchableOpacity
                    onPress={handleGetStarted}
                    style={{
                        backgroundColor: '#fff',
                        paddingVertical: 6,
                        paddingHorizontal: 12,
                        borderRadius: 10,
                        alignItems: 'center',
                        width: 60,
                        marginRight: 5,
                        borderWidth: 1,
                        borderColor: '#000'
                    }}
                >
                    <Text style={{ color: '#59cae9' }}>Skip</Text>
                </TouchableOpacity>
            </View>
            <View style={{}}>

                <Text style={{ paddingLeft: 40, }}>Before meeting face-to-face, people</Text>
                <Text style={{ paddingLeft: 40 }}>often take a look at a profile picture!</Text>

            </View>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'center', // Changed to center to align the image
                paddingHorizontal: 40,
                paddingTop: 60,
                shadowColor: '#000', // Shadow color
                shadowOffset: { width: 0, height: 2 }, // Shadow offset
                shadowOpacity: 0.5, // Shadow opacity
                shadowRadius: 2, // Shadow radius
                elevation: 5, // Android shadow elevation

            }}>
                {/* <View style={{
        overflow: 'hidden', // Clip child elements to the bounds of the view
        borderBottomLeftRadius: 125, // Adjust this value to change the roundness of the bottom side
        borderBottomRightRadius: 125, // Adjust this value to change the roundness of the bottom side
        borderTopLeftRadius: 0, // No border radius on the top side
        borderTopRightRadius: 0, // No border radius on the top side
        borderWidth: 1, // Add a border
        borderColor: 'rgba(0, 0, 0, 0.2)', // Border color
        shadowColor: '#000', // Shadow color
        shadowOffset: { width: 0, height: 2 }, // Shadow offset
        shadowOpacity: 1.5, // Shadow opacity
        shadowRadius: 4, // Shadow radius
        
    }}> */}
                {(selectedImage != "" || selectedImage != null) &&
                    <Image size={200} alt="fallback text" borderRadius={100} source={{ uri: selectedImage }} />

                }
                {selectedImage == "" &&
                    <Image
                        alt='fla'
                        borderRadius={100}
                        source={require('../../../assets/images/upload-img-camera.png')}
                        size={200}
                    />
                }
                {/* </View> */}
            </View>





            <View style={{ alignItems: 'center', paddingTop: 30 }}>
                <TouchableOpacity
                    onPress={handleUploadPicture}
                    style={{
                        backgroundColor: '#467efe',
                        paddingVertical: 12,
                        paddingHorizontal: 24,
                        borderRadius: 10,
                        alignItems: 'center',
                        marginHorizontal: 40,
                        width: 150
                    }}
                >
                    <Text style={{ color: '#fff' }}>Upload Photo</Text>
                </TouchableOpacity>
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
                    <Text style={{ color: 'black', fontWeight: 'bold' }}>Get Started!</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ProfilePicture;

