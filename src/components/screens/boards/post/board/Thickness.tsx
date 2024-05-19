import React, { useState } from 'react';
import { Keyboard } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native';
import { StyleSheet } from 'react-native';
import { View, Text, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import { useAuthContext } from '../../../../context/AuthContext';


const Thickness = () => {
    const auth = useAuthContext();
    const [thickness, setThickness] = useState('');
    const handleInchesChange = (text: string) => {
        setThickness(text);
    };
    const handleSubmit = () => {
        auth.setSelectedTab(9);
        var boards = auth.userBoards;
        boards.Thickness = thickness;
        auth.setUserBoards(boards);
        console.log("thickness:", thickness);
    };
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

        <View style={{ flex: 1 }}>
            <ScrollView>
            <View style={{ alignItems: 'center' }}>
                <View style={{
                    paddingTop: 20, alignItems: 'center'
                }}>
                    <View style={{
                        flexDirection: 'row', marginTop: 10,
                    }}>
                        <TextInput
                            style={{
                                borderWidth: 1, borderColor: 'black', padding: 5,
                                height: 40,
                                marginBottom: 10,
                                paddingHorizontal: 90,
                                borderRadius: 5,
                                color: 'black',
                            }}
                            // placeholder="Inches"
                            keyboardType="numeric"
                            value={thickness}
                            onChangeText={handleInchesChange}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', }}>

                        <View style={{ alignItems: 'center' }}>
                            <Text style={{}}>Thickness/optioanal...</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{ alignItems: 'center',paddingTop:10 }}>
                <Image source={require('../../../../../assets/images/board-thickness.jpg')} style={{ width: 350, height: 430, resizeMode: 'contain' }} />
            </View>
            </ScrollView>
            <View style={{ paddingTop: 50, position: 'relative', bottom: 40, left: 0, right: 0, alignItems: 'center' }}>
                <TouchableOpacity
                    onPress={handleSubmit}
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
        </TouchableWithoutFeedback>

    );
};

export { Thickness };
