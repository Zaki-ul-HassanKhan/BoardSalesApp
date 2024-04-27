// import React, { useState } from 'react';
// import { Text, TextInput, View } from 'react-native';

// const PizzaTranslator = () => {
//     const [text, setText] = useState('');
//     const [characterCount, setCharacterCount] = useState(0);

//     const handleTextChange = (newText: string) => {
//         setText(newText);
//         setCharacterCount(newText.length);
//     };
//     return (
//         <View style={{ padding: 10 }}>
//             <TextInput
//                 style={{ height: 40, marginBottom: 10 }}
//                 placeholder="Type here to translate!"
//                 onChangeText={handleTextChange}
//                 value={text}
//             />
//             <View style={{ paddingLeft: 10, }}>
//                 <Text style={{ fontSize: 18, color: '#666', }}>
//                     {characterCount}/100

//                 </Text>
//             </View>
//             {/* <Text style={{padding: 10, fontSize: 42 }}>
//                 {text
//                     .split(' ')
//                     .map((word) => word && '🍕')
//                     .join(' ')}
//             </Text> */}
//         </View>
//     );
// };

// export { PizzaTranslator };
import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';

const WordCounter = () => {
//   const [text, setText] = useState('');
//   const [characterCount, setCharacterCount] = useState(0);
const [text, setText] = useState('');
const [wordCount, setWordCount] = useState(0);
const countWords = (inputText:string):number => {
  console.log(inputText);
    // Remove extra white spaces and split the text by spaces to count words
 //   const wordsArray = inputText.trim().split(/\s+/);
    return inputText.length;
  };
//   const handleTextChange = (newText:string) => {
//     setText(newText);
//     setCharacterCount(newText.length);
//   };
const handleTextChange = (newText:string) => {
    setText(newText);
    setWordCount(countWords(newText));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        // placeholder=""
        onChangeText={handleTextChange}
        value={text}
        maxLength={100}
      />
      <View style={styles.counterContainer}>
        <Text style={styles.counterText}>{wordCount}/100</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingLeft:30,
    paddingRight:30,

  },
  input: {
    height: 40,
    borderWidth: 3,
    borderColor: '#ccc',
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius:5,
    color:'black',

  },
  counterContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  counterText: {
    fontSize: 18,
    color: '#666',
  },
});

export { WordCounter };

