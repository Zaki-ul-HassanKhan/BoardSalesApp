import React, { useState } from 'react';
import { Keyboard } from 'react-native';
import { TouchableWithoutFeedback, Switch } from 'react-native';
import { StyleSheet } from 'react-native';
import { View, Text, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';


const PriceLocation = () => {
    const [text, settext] = useState('');
    const [Locationtext, setLocationtext] = useState('');

    
    const handleTextChange = (text: string) => {
        settext(text);
    };
    const SelectLocation=(Locationtext:string)=>{
        setLocationtext(Locationtext);
        console.log("Select Location")
    }
    const handleSubmit = () => {
        console.log("text:", text);
    };
    const [showToggle, setShowToggle] = useState(false);
    const [isSwapConsidered, setIsSwapConsidered] = useState(false);

    const handleButtonPress = () => {
        setIsSwapConsidered(!isSwapConsidered);
    };

    const handleToggleChange = (value: boolean) => {
        setIsSwapConsidered(value);
    };

    const MakeitFeaturedPost = () => {
        console.log("Make it Featured Post?")
    };
    const TeamBoard = () => {
        console.log("TeamBoard")
    }
    const Vintage = () => {
        console.log("Vintage")
    }
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

            <View style={{ flex: 1 }}>
            <ScrollView>
                <View style={{ alignItems: 'center', paddingTop: 50 }}>
                    <Text style={{ color: 'black', fontWeight: '900', fontSize: 15 }}>Set you Price</Text>
                </View>
                <View style={styles.container}>
                    <TextInput
                        style={styles.input}
                        placeholder="$"
                        onChangeText={handleTextChange}
                        value={text}
                        keyboardType="numeric"
                    />
                    
                    <View />
                </View>
                <View style={{ paddingTop: 10, alignItems: 'center' }}>
                    <TouchableOpacity
                        onPress={handleButtonPress}
                        style={{
                            backgroundColor: '#487bf5',
                            paddingVertical: 12,
                            paddingHorizontal: 24,
                            borderRadius: 7,
                            alignItems: 'center',
                            width: 200,
                        }}
                    >
                        <Text style={{ color: '#fff' }}>Will Consider a Swap</Text>
                    </TouchableOpacity>
                    {(
                        <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ marginRight: 10 }}>Yes</Text>
                            <Switch
                                value={isSwapConsidered}
                                onValueChange={handleToggleChange}
                                trackColor={{ false: '#a4bdfa', true: '#81b0ff' }}
                                thumbColor={isSwapConsidered ? '#f5dd4b' : '#6367ed'}
                            />
                            <Text style={{ marginLeft: 10 }}>No</Text>
                        </View>
                    )}
                </View>
                <View style={{ alignItems: 'center', paddingTop: 20 }}>
                    <Text style={{ color: 'black', fontWeight: '900', fontSize: 15 }}>Set you Location</Text>
                </View>
                <View style={styles.container}>
                    {/* <TextInput
                        style={styles.input}
                        placeholder="Select a Location"
                        onChangeText={SelectLocation}
                        value={Locationtext}
                    /> */}
                         <TextInput
                            style={{
                                borderWidth: 1, borderColor: 'black', padding: 5,
                                height: 40,
                                marginBottom: 10,
                                paddingHorizontal: 40,
                                borderRadius: 5,
                                color: 'black',
                                textAlign: 'center',

                            }}
                             placeholder="Select a Location"
                            value={Locationtext}
                            onChangeText={SelectLocation}
                        />
                    <View />
                </View>


                <View style={{ paddingTop: 20, alignItems: 'center' }}>
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

                <View style={{ paddingTop: 20, alignItems: 'center' }}>
                    <TouchableOpacity
                        onPress={TeamBoard}
                        style={{
                            backgroundColor: '#487bf5',
                            paddingVertical: 8,
                            paddingHorizontal: 24,
                            borderRadius: 7,
                            alignItems: 'center',
                            width: 150,
                        }}
                    >
                        <Text style={{ color: '#fff' }}>Team Board</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ paddingTop: 20, alignItems: 'center' }}>
                    <TouchableOpacity
                        onPress={Vintage}
                        style={{
                            backgroundColor: '#487bf5',
                            paddingVertical: 8,
                            paddingHorizontal: 24,
                            borderRadius: 7,
                            alignItems: 'center',
                            width: 100,
                        }}
                    >
                        <Text style={{ color: '#fff' }}>Vintage</Text>
                    </TouchableOpacity>
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
                        <Text style={{ color: 'black', fontWeight: 'bold' }}>Post</Text>
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

export { PriceLocation };
