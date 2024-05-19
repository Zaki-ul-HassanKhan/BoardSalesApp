import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity} from 'react-native';
import { useAuthContext } from '../../context/AuthContext';
import { useToast } from 'native-base';
import useUserService from '../../../shared/services/user/user.service';
import { UserResponseModel } from '../../../models/user/UserResponseModel';


const LongBoardLength = () => {
    const auth = useAuthContext();
    const userService = useUserService();
    const toast = useToast();
    const [boardLength,setBoardLength] = useState(auth.user.boardLength)
    const handleNext = () => {
        if (auth.user.boardLength != boardLength) {
            userService.updateUser({
                UserId: auth.user.userId,
                Name: auth.user.name,
                Location: auth.user.location,
                ProfilePicture: auth.user.profilePicture,
                BoardLength: boardLength,
                BoardType: auth.user.boardType,
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
                          boardLength : boardLength,
                          boardType : auth.user.boardType,
                          profilePicture : auth.user.profilePicture
                        }
                      });
                    auth.setSelectedTab(6);
                }
            });
        }
        else{
            auth.setSelectedTab(6);
        }
    };
    
    return (
        <View style={{ flex: 1 }}>

            {/* <CustomTabBar selectedTab={selectedTab} handleTabPress={handleTabPress} /> */}
            <View style={{ paddingTop: 20 }}>
                <Text style={{ paddingLeft: 40, color: 'black', fontWeight: '900' }}>Long-board length?</Text>
            </View>
   
   
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 40, paddingTop: 20 }}>
                <TouchableOpacity
                    onPress={()=>setBoardLength("5feet0inches - 5feet6inches")}
                    style={{
                        backgroundColor: '#467efe',
                        paddingVertical: 12,
                        paddingHorizontal: 24,
                        borderRadius: 30,
                        alignItems: 'center',
                        width: 110,
                        marginRight: 5
                    }}
                >
                    <Text style={{ color: '#fff', fontWeight: 'bold' }}>5'0" - 5'6"</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=>setBoardLength("5feet6inches - 6feet0inches")}
                    style={{
                        backgroundColor: '#467efe',
                        paddingVertical: 12,
                        paddingHorizontal: 24,
                        borderRadius: 30,
                        alignItems: 'center',
                        width: 110,
                        marginRight: 5
                    }}
                >
                    <Text style={{ color: '#fff', fontWeight: 'bold' }}>5'6" - 6'0"</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=>setBoardLength("6feet0inches - 6feet6inches")}
                    style={{
                        backgroundColor: '#467efe',
                        paddingVertical: 12,
                        paddingHorizontal: 24,
                        borderRadius: 30,
                        alignItems: 'center',
                        width: 110
                    }}
                >
                    <Text style={{ color: '#fff', fontWeight: 'bold' }}>6'0" - 6'6"</Text>
                </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 40, paddingTop: 20 }}>
                <TouchableOpacity
                    onPress={()=>setBoardLength("6feet6inches - 7feet0inches")}
                    style={{
                        backgroundColor: '#467efe',
                        paddingVertical: 12,
                        paddingHorizontal: 24,
                        borderRadius: 30,
                        alignItems: 'center',
                        width: 110,
                        marginRight: 5

                    }}
                >
                    <Text style={{ color: '#fff', fontWeight: 'bold' }}>6'6" - 7'0"</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=>setBoardLength("7feet0inches - 7feet6inches")}
                    style={{
                        backgroundColor: '#467efe',
                        paddingVertical: 12,
                        paddingHorizontal: 24,
                        borderRadius: 30,
                        alignItems: 'center',
                        width: 110,
                        marginRight: 5

                    }}
                >
                    <Text style={{ color: '#fff', fontWeight: 'bold' }}>7'0" - 7'6"</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=>setBoardLength("7feet6inches - 8feet0inches")}
                    style={{
                        backgroundColor: '#467efe',
                        paddingVertical: 12,
                        paddingHorizontal: 24,
                        borderRadius: 30,
                        alignItems: 'center',
                        width: 110
                    }}
                >
                    <Text style={{ color: '#fff', fontWeight: 'bold' }}>7'6" - 8'0"</Text>
                </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 40, paddingTop: 20}}>
                <TouchableOpacity
                    onPress={()=>setBoardLength("8feet0inches +")}
                    style={{
                        backgroundColor: '#467efe',
                        paddingVertical: 12,
                        paddingHorizontal: 24,
                        borderRadius: 30,
                        alignItems: 'center',
                        width: 110
                    }}
                >
                    <Text style={{ color: '#fff', fontWeight: 'bold' }}>8'0" +</Text>
                </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 40, paddingTop: 20,alignItems:'center', paddingLeft:120 }}>
            <Image source={require('../../../assets/images/longboard.jpg')} style={{ width: 150, height: 330 }} />
            </View>

            <View style={{ position: 'absolute', bottom: 40, left: 0, right: 0, alignItems: 'center' }}>
                <TouchableOpacity
                disabled={boardLength == ""}
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
export default LongBoardLength ;





