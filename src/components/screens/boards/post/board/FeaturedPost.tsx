import React, { useState } from 'react';
import { Keyboard } from 'react-native';
import { TouchableWithoutFeedback, Switch } from 'react-native';
import { StyleSheet } from 'react-native';
import { View, Text, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';


const FeaturedPost = () => {
    const [textInputValue, setTextInputValue] = useState('');

    const handleTextInputChange = (textInputValue: string) => {
        setTextInputValue(textInputValue);
    };
    const handleSubmit = () => {
        console.log(" pay now");
    };
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

            <View style={{ flex: 1 }}>
                <ScrollView>

                    <View style={styles.container}>
                        <TextInput
                            style={[styles.input, styles.placeholderText]}
                            onChangeText={handleTextInputChange}
                            value={textInputValue}
                            placeholder="Total: $15"
                            placeholderTextColor="#aaaaaa"
                        />
                    </View>
                    <View style={{ paddingHorizontal: 70, paddingTop: 20 }}>
                        <Text style={{ color: 'black', textAlign: 'left' }}>✓ $5 fee for normal posting</Text>
                        <Text style={{ color: 'black', textAlign: 'left' }}>✓ $10 fee for extra featured posting</Text>
                    </View>
                    <View />
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
                        <Text style={{ color: 'black', fontWeight: 'bold' }}>Pay Now</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </TouchableWithoutFeedback>

    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
       paddingLeft:70,
       paddingRight:70,
        paddingTop:150,
    },
    input: {
        width: '100%',
        height: 60,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 50,
        marginBottom: 20,
    },
    placeholderText: {
        fontSize: 30,
        fontWeight:'bold',
        color:'black',
    },
});

export { FeaturedPost };
