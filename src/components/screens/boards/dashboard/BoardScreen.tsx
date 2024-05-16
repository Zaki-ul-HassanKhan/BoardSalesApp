import React, { useEffect, useState } from 'react';
import { TextInput } from 'react-native';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import useUserBoardService from '../../../../shared/services/userboard/userboard.service';
import { DashboardBoardsResponse, Data } from '../../../../models/userboard/DashboardBoardsResponse';
import { useAuthContext } from '../../../context/AuthContext';
import { FlatList, Stack } from 'native-base';
export const BoardScreen = () => {
    const auth = useAuthContext();
    const userBoardService = useUserBoardService();
    const [boards, setBoards] = useState<Data[]>([]);
    const [pairs, setPairs] = useState<Data[]>([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [displayText, setDisplayText] = useState('');

    const handleSearch = (text: any) => {
        setSearchQuery(text);
    };


    useEffect(() => {
        userBoardService.dashboardBoards({
            Normal: true,
            Vintage: false,
            TeamBoard: false,
            FeaturedBoard: false,
            UserId: auth.user.userId
        }).then((res: DashboardBoardsResponse) => {
            console.log("BOARDS");
            console.log(res);
            setBoards(res.data);

        }).catch((error) => {
            console.log(error);
        });
    }, []);


    const skipImageClick = () => {
        console.log('skip button pressed');
        // Add functionality for skipping
    };

    const handleImageClick = (text: string) => {
        // Perform functionality here when the image is clicked
        if (text === 'Used$350') {
            setDisplayText('You clicked on Used$350');
            console.log("you select", text)
        } else if (text === 'New$300') {
            setDisplayText('You clicked on New$300');
            console.log("you select", text)

        }
    };
    const renderItem = ({ item }: any) => (
        <View style={{ alignItems: 'flex-start', paddingTop: 20, paddingLeft: 10 }}>
            <TouchableOpacity onPress={() => handleImageClick('Used$350')}>
                <View style={{ alignItems: 'center', borderWidth: 1, borderTopEndRadius: 10, borderTopStartRadius: 10, padding: 5 }}>
                    <Image source={require('../../../../assets/images/01.jpg')} style={{ width: 155, height: 150, borderRadius: 15, resizeMode: 'contain', marginTop: -50, }} />
                    <View style={{ width: 150, alignItems: 'center', marginTop: -50, borderWidth: 1, borderTopEndRadius: 10, borderTopStartRadius: 10, padding: 10, backgroundColor: item.condition ? '#eb4e5b' : '#477ef8' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#fff', left: -30 }}>{item.condition ? "New" : "Used"}</Text>
                            <Text style={{ fontWeight: 'bold', color: '#fff', right: -30, marginTop: 12 }}>$350</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontWeight: '600', fontSize: 12, color: '#fff', left: -30 }}>5'7"X26.62L</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }} >
            <ScrollView>

                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 10, paddingHorizontal: 30, margin: 10 }}>
                    {/* <View style={{borderWidth:0.5,borderColor:'black', padding:5}}>
                        <Text style={{ color: 'black', paddingTop: 5, marginBottom: 5 }}>Featured Boards</Text>
                    </View> */}
                    <View>
                        <Text style={{ color: 'black', paddingTop: 5, marginBottom: 5 }}>Featured Boards</Text>
                        <View style={{ borderBottomWidth: 1, borderColor: 'black' }} />
                    </View>
                    <View style={{ marginLeft: 50 }}>
                        <Text style={{ color: 'black', paddingTop: 5, marginBottom: 5 }}>Team Boards</Text>
                        <View style={{ borderBottomWidth: 1, borderColor: 'black' }} />
                    </View>
                    <View style={{ marginLeft: 50 }}>
                        <Text style={{ color: 'black', paddingTop: 5, marginBottom: 5 }}>Vintage Boards</Text>
                        <View style={{ borderBottomWidth: 1, borderColor: 'black' }} />
                    </View>
                </View>


                {/* Search bar */}
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 30, paddingTop: 40 }}>
                    <TextInput
                        style={{ flex: 1, borderWidth: 1, borderColor: 'gray', borderRadius: 10, paddingHorizontal: 10 }}
                        placeholder="Let's find your magic board..."
                        onChangeText={handleSearch}
                        value={searchQuery}
                    />
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 }}>
                    {/* Left side - Location */}
                    <View style={{}}>
                        <Text>Your Location</Text>
                        {/* Add your location component here */}
                    </View>

                    {/* Right side - Image */}
                    <TouchableOpacity onPress={() => skipImageClick()}>

                        <View >
                            <Image source={require('../../../../assets/images/filter-control.jpg')} style={{ width: 40, height: 50, resizeMode: 'contain' }} />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 }}>
                    <FlatList
                        data={boards}
                        renderItem={renderItem}
                        numColumns={2}
                    />
                </View>

                {/* Rest of your code */}
            </ScrollView>
        </View>
    );
};