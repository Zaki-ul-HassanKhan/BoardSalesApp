import React, { useState } from 'react';
import { Keyboard } from 'react-native';
import { TouchableWithoutFeedback, Switch } from 'react-native';
import { StyleSheet } from 'react-native';
import { View, Text, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';


const PostedPriceLocation = () => {
    const [text, settext] = useState('');
    const handleTextChange = (text: string) => {
        settext(text);
    };

    const MakeitFeaturedPost = () => {
        console.log("Make it Featured Post?")
    };
    const PostAnotherItem = () => {
        console.log("PostAnotherItem")
    }
    const Mylisting = () => {
        console.log("Mylisting")
    }
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

            <View style={{ flex: 1 }}>
                <ScrollView>
                    <View style={{ alignItems: 'center', paddingTop: 30 }}>
                        <Image source={require('../../../../../assets/images/sent300.jpg')} style={{ width: 100, height: 100, borderRadius: 15 }} />
                        <Text style={{ color: '#487bf5', fontWeight: '900', fontSize: 20 }}>POSTED!!!</Text>
                    </View>
                    <View style={{ alignItems: 'center', paddingTop: 20 }}>
                        <Text style={{ color: '#487bf5' }}>Your listing is live and visible to others.</Text>
                    </View>
                    <View style={styles.container1}>
                        <TextInput
                            style={styles.input}
                            placeholder="TEST"
                            onChangeText={handleTextChange}
                            value={text}
                            keyboardType="numeric"
                        />

                        <View />
                    </View>
                    <View style={{ paddingHorizontal: 70, paddingTop: 20 }}>
                        <Text style={{ color: 'black', textAlign: 'left' }}>✓ $5 fee for normal posting</Text>
                        <Text style={{ color: 'black', textAlign: 'left' }}>✓ $10 fee for extra featured posting</Text>
                    </View>
                    <View style={{ paddingTop: 70, alignItems: 'center' }}>
                        <TouchableOpacity
                            onPress={MakeitFeaturedPost}
                            style={{
                                backgroundColor: '#487bf5',
                                paddingVertical: 6,
                                paddingHorizontal: 12,
                                borderRadius: 7,
                                alignItems: 'center',
                                width: 200,
                            }}
                        >
                            <Text style={{ color: '#fff' }}>Make it Featured Post?</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ paddingTop: 40, alignItems: 'center' }}>
                        <TouchableOpacity
                            onPress={Mylisting}
                            style={{
                                backgroundColor: '#59cae9',
                                paddingVertical: 24,
                                paddingHorizontal: 48,
                                borderRadius: 30,
                                alignItems: 'center',
                                width: 300
                            }}
                        >
                            <Text style={{ color: 'black', fontWeight: 'bold' }}>My listing</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                <View style={{ paddingTop: 50, position: 'relative', bottom: 40, left: 0, right: 0, alignItems: 'center' }}>
                    <TouchableOpacity
                        onPress={PostAnotherItem}
                        style={{
                            backgroundColor: '#fff', // Background color
                            borderColor: '#59cae9', // Border color
                            borderWidth: 2, // Border width
                            paddingVertical: 24,
                            paddingHorizontal: 48,
                            borderRadius: 30,
                            alignItems: 'center',
                            width: 300,
                        }}
                    >
                        <Text style={{ color: 'black', fontWeight: '900' }}>Post another item</Text>
                    </TouchableOpacity>
                </View>

            </View>

        </TouchableWithoutFeedback>

    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        paddingLeft: 70,
        paddingRight: 70,
        paddingTop: 20

    },
    container1: {
        paddingLeft: 70,
        paddingRight: 70,
        paddingTop: 30
    },
    input: {
        height: 50,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 5,

        textAlign: 'center',
        fontSize: 20

    },

});

export { PostedPriceLocation };
