
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native';
import { useAuthContext } from '../../../../context/AuthContext';


const BoardTypeScreen = () => {
    const auth = useAuthContext();
    const [clicked, setClicked] = useState(false);
    const [data, setData] = useState(auth.lookups.boardTypes);
    const [selectedBoardType, setSelectedBoardType] = useState(0);
    const [selectedShowBoardType, setSelectedShowBoardType] = useState("");
    return (

        <View style={{ flex: 1 }}>
            <View style={{ paddingTop: 20, justifyContent: 'space-between', paddingLeft: 30 }}>
                {/* <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      searchable
    /> */}

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
                        {selectedBoardType == 0 ? 'Select Board Type' : selectedShowBoardType}
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
                                            setSelectedBoardType(item.key);
                                            setSelectedShowBoardType(item.value)
                                            setClicked(!clicked);
                                            var boards = auth.userBoards;
                                            boards.BoardType = item.key;
                                            auth.setUserBoards(boards);
                                        }}>
                                        <Text style={{ fontWeight: '600' }}>{item.value}</Text>
                                    </TouchableOpacity>
                                );
                            }}
                        />
                    </View>
                ) : null}
            </View>


            <View style={{ paddingTop: 0, justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 100 }}>
                <View style={{ justifyContent: 'space-between', paddingHorizontal: 40 }}>
                    <Image source={require('../../../../../assets/images/img-for-screen37.jpg')} style={{ width: 350, height: 430, resizeMode: 'contain' }} />
                </View>
            </View>

            <View style={{ paddingTop: 50, position: 'absolute', bottom: 40, left: 0, right: 0, alignItems: 'center' }}>
                <TouchableOpacity
                    onPress={() => 
                        auth.setSelectedTab(3)}
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
