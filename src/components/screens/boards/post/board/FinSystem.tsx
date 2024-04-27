import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';


const FinSystem = () => {

    return (

        <View style={{ flex: 1 }}>

            <View style={{ paddingTop: 20, paddingLeft: 30 }}>
                <Text> Plz show dropdown</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
                <Image source={require('../../../../../assets/images/fin-system.jpg')} style={{ width: 350, height: 530, resizeMode: 'contain' }} />
            </View>
            <View style={{ paddingTop: 50, position: 'absolute', bottom: 40, left: 0, right: 0, alignItems: 'center' }}>
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

export { FinSystem };
