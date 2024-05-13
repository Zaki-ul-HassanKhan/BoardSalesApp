import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native';
import { useAuthContext } from '../../../../context/AuthContext';

const Shapers = () => {
    const auth = useAuthContext();
    const [clicked, setClicked] = useState(false);
    const [data] = useState(auth.lookups.shapers);
    const [selectedShapers, setSelectedShapers] = useState(0);
    const [selectedShowShapers, setSelectedShowShapers] = useState("");
    const handleSkip = () => {
        auth.setSelectedTab(4);
    };
    return (
        <View style={{ flex: 1 }}>
           
                {/* Header with the "Plz show dropdown" text and "Skip" button */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, marginTop: 20 }}>
                <TouchableOpacity
                    style={{
                        width: '45%',
                        height: 50,
                        borderRadius: 10,
                        borderWidth: 0.5,
                        marginTop: 10,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingLeft: 15,
                        paddingRight: 30,
                    }}
                    onPress={() => {
                        setClicked(!clicked);
                    }}>
                    <Text style={{ fontWeight: '600' }}>
                        {selectedShapers == 0 ? 'Select Board Shapers' : selectedShowShapers}
                    </Text>
                </TouchableOpacity>
                {clicked ? (
                    <View
                        style={{
                            elevation: 5,
                            marginTop: 80,
                            height: 300,
                            marginLeft:30,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: "center",
                            width: '45%',
                            backgroundColor: '#fff',
                            borderRadius: 10,
                            zIndex: 100,
                            position: 'absolute',
                        }}>

                        <FlatList
                            data={data}
                            renderItem={({ item, index }) => {
                                return (
                                    <TouchableOpacity
                                        style={{
                                            width: '75%',
                                            alignSelf: 'center',
                                            height: 50,
                                            justifyContent: 'center',
                                            borderBottomWidth: 0.5,
                                            borderColor: '#8e8e8e',
                                        }}
                                        onPress={() => {
                                            setSelectedShapers(item.key);
                                            setSelectedShowShapers(item.value)
                                            setClicked(!clicked);
                                            var boards = auth.userBoards;
                                            boards.BoardShapers = item.key;
                                            auth.setUserBoards(boards);
                                        }}>
                                        <Text style={{ fontWeight: '600' }}>{item.value}</Text>
                                    </TouchableOpacity>
                                );
                            }}
                        />
                    </View>
                ) : null}
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

            {/* "Next" button */}
            <View style={{ position: 'absolute', bottom: 40, left: 0, right: 0, alignItems: 'center' }}>
                <TouchableOpacity
                    onPress={() => auth.setSelectedTab(4)}
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

