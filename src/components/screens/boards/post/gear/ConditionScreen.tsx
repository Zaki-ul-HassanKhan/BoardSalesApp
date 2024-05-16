import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useAuthContext } from '../../../../context/AuthContext';

const ConditionScreen = () => {
    const auth = useAuthContext();
    const [displayText, setDisplayText] = useState('');
    const handleImageClick = (text: string) => {
        var gears = auth.userGears;
    
   
        // Perform functionality here when the image is clicked
        if (text === 'Used') {
            gears.Condition = 1;
            auth.setSelectedTab(2);
            setDisplayText('You clicked on Used');
            console.log('You clicked on Used');
        } else if (text === 'New') {
            gears.Condition = 1;
            setDisplayText('You clicked on New');
            console.log('You clicked on New');

        }
        
        auth.setUserGears(gears);
    };

    return (
        <View style={{ flex: 1 }}>
            {/* <CustomTabBar selectedTab={selectedTab} handleTabPress={handleTabPress} /> */}

            <View style={{ alignItems: 'center', paddingTop: 20 }}>
                <TouchableOpacity onPress={() => handleImageClick('Used')}
                
                >
                    <View style={{
                        borderRadius: 85, // Half of the width/height to make it circular
                        width: 170,
                        height: 170,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 12,
                        },
                        shadowOpacity: 0.58,
                        shadowRadius: 16.00,

                        elevation: 24,
                    }}>
                        <Image
                            source={require('../../../../../assets/images/used-icon.jpg')}
                            style={{
                                width: 170,
                                height: 170,
                                borderRadius: 80, // Half of the width/height to make it circular
                                borderWidth: 5, // Optional: Add a border for better visual effect
                                borderColor: 'white', // Optional: Set border color
                            }}
                        />
                    </View>
                </TouchableOpacity>
                <Text style={{ fontWeight: '900', color: 'black', paddingTop: 20 }}>Used</Text>
            </View>

            <View style={{ alignItems: 'center', paddingTop: 20 }}>
                <TouchableOpacity onPress={() => handleImageClick('New')}>
                    <View style={{
                        borderRadius: 85, // Half of the width/height to make it circular
                        width: 170,
                        height: 170,
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 4 },
                        shadowOpacity: 0.3,
                        shadowRadius: 4,
                        elevation: 5, // For Android
                    }}>
                        <Image
                            source={require('../../../../../assets/images/new-icon.png')}
                            style={{
                                width: 170,
                                height: 170,
                                borderRadius: 50, // Half of the width/height to make it circular
                                borderWidth: 5, // Optional: Add a border for better visual effect
                                borderColor: 'white', // Optional: Set border color
                            }}
                        />
                    </View>
                </TouchableOpacity>
                <Text style={{ fontWeight: '900', color: 'black', paddingTop: 20 }}>New</Text>
            </View>
            <View style={{ position: 'absolute', bottom: 100, left: 0, right: 0, alignItems: 'center' }}>
                <TouchableOpacity
                    onPress={() => console.log("Get Started button pressed")}
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

export { ConditionScreen };














