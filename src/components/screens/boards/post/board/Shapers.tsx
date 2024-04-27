// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';


// const Shapers = () => {
//     const handleSkip = () => {
//         console.log('skip button pressed');
//         // Add functionality for skipping
//     };
//     return (

//         <View style={{ flex: 1 }}>
//             {/* <ScrollView> */}
//                 <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 }}>
//                     <Text style={{ paddingLeft: 20 }}>Plz show dropdown</Text>
//                     <TouchableOpacity
//                         onPress={handleSkip}
//                         style={{
//                             backgroundColor: '#fff',
//                             paddingVertical: 6,
//                             paddingHorizontal: 12,
//                             borderRadius: 10,
//                             alignItems: 'center',
//                             width: 60,
//                             marginRight: 5,
//                             borderWidth: 1,
//                             borderColor: '#000'
//                         }}
//                     >
//                         <Text style={{ color: '#59cae9' }}>Skip</Text>
//                     </TouchableOpacity>
//                 </View>

//                 <View style={{ flexDirection: 'row', top: -70, justifyContent: 'space-between', paddingHorizontal: 40, marginBottom: 20 }}>
//                     <Image source={require('../../../../../assets/images/DSD_.png')} style={{ width: 150, height: 330, resizeMode: 'contain' }} />
//                     <Image source={require('../../../../../assets/images/channel_island.jpg')} style={{ width: 150, height: 330, resizeMode: 'contain' }} />
//                 </View>


//                 <View style={{ flexDirection: 'row', top: -300, justifyContent: 'space-between', paddingHorizontal: 40, }}>
//                     {/* Second Row */}
//                     <Image source={require('../../../../../assets/images/pyzel.png')} style={{ width: 150, height: 330, resizeMode: 'contain' }} />
//                     <Image source={require('../../../../../assets/images/sharpeye.png')} style={{ width: 150, height: 330, resizeMode: 'contain' }} />
//                 </View>

//                 <View style={{ flexDirection: 'row', top: -500, justifyContent: 'space-between', paddingHorizontal: 40, }}>
//                     {/* Third Row */}
//                     <Image source={require('../../../../../assets/images/Cap.png')} style={{ width: 150, height: 330, resizeMode: 'contain' }} />
//                     <Image source={require('../../../../../assets/images/Tractor.png')} style={{ width: 150, height: 330, resizeMode: 'contain' }} />
//                 </View>

//             {/* </ScrollView> */}

//             <View style={{ paddingTop: 50, position: 'absolute', bottom: 40, left: 0, right: 0, alignItems: 'center' }}>
//                 <TouchableOpacity
//                     onPress={() => console.log("Get Started button pressed")}
//                     style={{
//                         backgroundColor: '#59cae9',
//                         paddingVertical: 24,
//                         paddingHorizontal: 48,
//                         borderRadius: 30,
//                         alignItems: 'center',
//                         width: 300
//                     }}
//                 >
//                     <Text style={{ color: 'black', fontWeight: 'bold' }}>Next</Text>
//                 </TouchableOpacity>
//             </View>
//         </View>

//     );
// };

// export { Shapers };


import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';

const Shapers = () => {
    const handleSkip = () => {
        console.log('skip button pressed');
        // Add functionality for skipping
    };

    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                {/* Header with the "Plz show dropdown" text and "Skip" button */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, marginTop: 20 }}>
                    <Text style={{ paddingLeft: 20 }}>Plz show dropdown</Text>
                    <TouchableOpacity
                        onPress={handleSkip}
                        style={{
                            backgroundColor: '#fff',
                            paddingVertical: 6,
                            paddingHorizontal: 12,
                            borderRadius: 10,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderWidth: 1,
                            borderColor: '#000'
                        }}
                    >
                        <Text style={{ color: '#59cae9' }}>Skip</Text>
                    </TouchableOpacity>
                </View>

                {/* Image rows */}
                <View style={{  alignItems:'center' }}>
                    <View style={{ flexDirection: 'row',marginTop:30 }}>
                        <Image source={require('../../../../../assets/images/DSD_.png')} style={{backgroundColor:'black', width: 150, height: 230, resizeMode: 'contain' }} />
                        <Image source={require('../../../../../assets/images/channel_island.jpg')} style={{ backgroundColor:'black', width: 150, height: 230, resizeMode: 'contain' }} />
                    </View>

                    <View style={{ flexDirection: 'row',alignItems:'center',marginTop:-120}}>
                        <Image source={require('../../../../../assets/images/pyzel.png')} style={{ width: 150, height: 230, resizeMode: 'contain' }} />
                        <Image source={require('../../../../../assets/images/sharpeye.png')} style={{ width: 150, height: 230, resizeMode: 'contain' }} />
                    </View>

                    <View style={{ flexDirection: 'row',alignItems:'center',marginTop:-100}}>
                        <Image source={require('../../../../../assets/images/Cap.png')} style={{ width: 150, height: 230, resizeMode: 'contain' }} />
                        <Image source={require('../../../../../assets/images/Tractor.png')} style={{ width: 150, height: 230, resizeMode: 'contain' }} />
                    </View>
                </View>
            </ScrollView>

            {/* "Next" button */}
            <View style={{ position: 'absolute', bottom: 40, left: 0, right: 0, alignItems: 'center' }}>
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

export { Shapers };

