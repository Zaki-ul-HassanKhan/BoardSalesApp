// import React, { useState } from 'react';
// import { View, StyleSheet } from 'react-native';
// import Dropdown from 'react-dropdown'; // Assuming you're using the react-dropdown library

// const BoardTypeScreen = () => {
//   const [selectedValue, setSelectedValue] = useState(''); // Initialize with an empty string
//   const boardTypes = [
//     { label: 'Board Type 1', value: 'board_type_1' },
//     { label: 'Board Type 2', value: 'board_type_2' },
//     { label: 'Board Type 3', value: 'board_type_3' },
//   ];

//   const handleSelect = (option:any) => {
//     setSelectedValue(option.value);
//   };

//   return (
//     <View style={styles.container}>
//       <Dropdown options={boardTypes} onChange={handleSelect} value={selectedValue} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// export { BoardTypeScreen };
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';


const BoardTypeScreen = () => {

    return (

        <View style={{ flex: 1 }}>
                <View style={{ paddingTop:20,justifyContent: 'space-between', paddingLeft:30 }}>
                    <Text> Plz show dropdown</Text>
                </View>
      

            <View style={{ paddingTop: 0, justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 100 }}>
                <View style={{ justifyContent: 'space-between', paddingHorizontal: 40 }}>
                    <Image source={require('../../../../../assets/images/img-for-screen37.jpg')} style={{ width: 350, height: 430, resizeMode: 'contain' }} />
                </View>
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

export { BoardTypeScreen };
