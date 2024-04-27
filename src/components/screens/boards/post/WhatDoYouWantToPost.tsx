import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, TextInput, Button } from 'react-native';
import { GearTabNavigation } from './board/GearTabNavigation';
import { useAuthContext } from '../../../context/AuthContext';

const WhatDoYouWantToPost = () => {
    const handletoclose = () => {
        // Handle navigation or any other logic when Next is pressed
        console.log("Next button pressed");
    };

    const [postType, setPostType] = useState(0);
const auth = useAuthContext();
    return (
        <View style={{ flex: 1 }}>

{postType == 0 &&
<>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <Text style={{ paddingLeft: 15, color: 'black', fontWeight: '900', fontSize: 18 }}>What do you want to post?</Text>
                <TouchableOpacity
                    onPress={handletoclose}
                    style={{
                        // backgroundColor: '#fff',
                        paddingVertical: 6,
                        paddingHorizontal: 12,
                        borderRadius: 100,
                        alignItems: 'center',
                        width: 60,
                        marginRight: 5,
                        // borderWidth: 1,
                        // borderColor: '#000'
                    }}
                >
                    <Text style={{ color: 'black', fontSize: 24 }}>X</Text>
                </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'center',  paddingTop: 50 }}>
                <TouchableOpacity onPress={() => {setPostType(1);auth.setBottomShow(false);}}>
                <Image source={require('../../../../assets/images/surf-board-icon.jpg')} style={{ width: 200, height: 200, borderRadius: 100 }} />
                </TouchableOpacity>
            </View>
            <View style={{ alignItems: 'center' }}>
                <Text style={{ color: 'black', fontSize: 18,fontWeight:'900' }}>SURFBOARD</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'center', paddingTop: 50 }}>
            <TouchableOpacity onPress={() => {setPostType(2);auth.setBottomShow(false);}}>
                <Image source={require('../../../../assets/images/gear-icon.jpg')} style={{ width: 200, height: 200, borderRadius: 100 }} />
            </TouchableOpacity>
            </View>
            <View style={{ alignItems: 'center' }}>
                <Text style={{ color: 'black', fontWeight: '900', fontSize: 18 }}>GEAR</Text>
            </View>
            </>
}
            {postType == 1 &&
            <GearTabNavigation />
            }
        </View>
    );
};

export default WhatDoYouWantToPost;

