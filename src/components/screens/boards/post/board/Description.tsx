import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import { WordCounter } from './WordCounter';
import { TouchableWithoutFeedback } from 'react-native';
import { Keyboard } from 'react-native';
import { useAuthContext } from '../../../../context/AuthContext';

const Description = () => {

    const auth = useAuthContext();
    const [text, setText] = useState('');
    const [wordCount, setWordCount] = useState(0);
    const countWords = (inputText: string): number => {

        const wordsArray = inputText.trim().split(/\s+/);
        return wordsArray.length;
    };
    const handleTextChange = (newText: string) => {
        setText(newText);
        setWordCount(countWords(newText));
        var boards = auth.userBoards;
        boards.Description = newText;
        auth.setUserBoards(boards);
    };
    const handleSubmit = () => {
        auth.setSelectedTab(11);
        console.log("Input box value:", text);
    };
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1 }}>

            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    // placeholder=""
                    onChangeText={handleTextChange}
                    value={text}
                />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 10,}}>
                    <Text style={{ fontSize:11,color:'black' }}>For example: no dings, water tight- optional</Text>
                    <Text style={styles.counterText}>{wordCount}/100</Text>
                </View>
                <View />
            </View>
            <View style={{ paddingTop: 50, position: 'absolute', bottom: 40, left: 0, right: 0, alignItems: 'center' }}>
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
const styles = StyleSheet.create({
    container: {
        padding: 50,
        paddingLeft: 30,
        paddingRight: 30,

    },
    input: {
        height: 90,
        borderWidth: 3,
        borderColor: '#ccc',
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 5,
        color: 'black',

    },
    counterContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    counterText: {
        fontSize: 12,
        color: 'black',
    },
});
export { Description };
