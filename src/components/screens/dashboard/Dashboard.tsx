import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'native-base';
import FeaturedBoards from '../boards/dashboard/FeaturedBoards';
import BoardScreen from '../boards/dashboard/BoardScreen';
import GearScreen from '../gear/GearScreen';
import PostBoard from '../boards/post/PostBoard';
import ChatScreen from '../chat/ChatScreen';
import MyListings from '../my-listings/MyListings';
const Tab = createBottomTabNavigator();
const Dashboard = () => {
    const [boardSource, setBoardSource] = useState(true);
    const [gearSource, setGearSource] = useState(false);
    const [postBoardScreen, setPostBoardScreen] = useState(false);
    const [chatScreen, setChatScreen] = useState(false);
    const [listingScreen, setListingScreen] = useState(false);

    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false, tabBarShowLabel: false, tabBarStyle: {
                position: 'absolute', bottom: 25, left: 10, right: 10, elevation: 0, backgroundColor: '#457eff',
                borderRadius: 30, height: 60
            }
        }} initialRouteName='Board'>
           
            <Tab.Screen options={() => ({
                tabBarButton: () => (<TouchableOpacity onPress={() => {
                    console.log("BoardPressed")
                    setListingScreen(false);
                    setChatScreen(false);
                    setPostBoardScreen(false);
                    setGearSource(false);
                    setBoardSource(true);
                    navigation.navigate("Board");
                }}>
                    <View>
                        {boardSource &&
                            <Image alt="Alternate Text" source={require('../../../assets/images/nav-board-selected.png')}
                                resizeMode='contain' style={{ width: 100, height: 100, marginTop: -20, marginLeft: 6 }} />
                        }{!boardSource &&
                            <Image alt="Alternate Text" source={require('../../../assets/images/nav-board.png')}
                                resizeMode='contain' style={{ width: 20, height: 20, marginTop: 20, marginLeft: 15 }} />
                        }</View>
                </TouchableOpacity>
                )
            })}

                name="Board" component={BoardScreen} />
            <Tab.Screen options={() => ({
                tabBarButton: () => (<TouchableOpacity onPress={() => {
                    console.log("BoardPressed")
                    setBoardSource(false);
                    setListingScreen(false);
                    setChatScreen(false);
                    setPostBoardScreen(false);
                    setGearSource(true);
                    navigation.navigate("Gear");
                }}>
                    <View>
                        {gearSource &&
                            <Image alt="Alternate Text" source={require('../../../assets/images/nav-gear-selected.png')}
                                resizeMode='contain' style={{ width: 100, height: 100, marginTop: -20, marginLeft: 20 }} />
                        }{!gearSource &&
                            <Image alt="Alternate Text" source={require('../../../assets/images/nav-gear.png')}
                                resizeMode='contain' style={{ width: 20, height: 20, marginTop: 20, marginLeft: 45 }} />
                        }</View>
                </TouchableOpacity>
                )
            })}

                name="Gear" component={GearScreen} />

            <Tab.Screen options={() => ({
                tabBarButton: () => (<TouchableOpacity onPress={() => {
                    console.log("BoardPressed")
                    setBoardSource(false);
                    setGearSource(false);
                    setListingScreen(false);
                    setChatScreen(false);
                    setPostBoardScreen(true);
                    navigation.navigate("Post");
                }}>
                    <View>
                        {postBoardScreen &&
                            <Image alt="Alternate Text" source={require('../../../assets/images/nav-post-selected.png')}
                                resizeMode='contain' style={{ width: 100, height: 100, marginTop: -20, marginLeft: 20 }} />
                        }{!postBoardScreen &&
                            <Image alt="Alternate Text" source={require('../../../assets/images/nav-post.png')}
                                resizeMode='contain' style={{ width: 20, height: 20, marginTop: 20, marginLeft: 45 }} />
                        }</View>
                </TouchableOpacity>
                )
            })}

                name="Post" component={PostBoard} />

            <Tab.Screen options={() => ({
                tabBarButton: () => (<TouchableOpacity onPress={() => {
                    console.log("BoardPressed")
                    setBoardSource(false);
                    setGearSource(false);
                    setPostBoardScreen(false);
                    setListingScreen(false);
                    setChatScreen(true);
                    navigation.navigate("Chat");
                }}>
                    <View>
                        {chatScreen &&
                            <Image alt="Alternate Text" source={require('../../../assets/images/nav-chat-selected.png')}
                                resizeMode='contain' style={{ width: 100, height: 100, marginTop: -20, marginLeft: 20 }} />
                        }{!chatScreen &&
                            <Image alt="Alternate Text" source={require('../../../assets/images/nav-chat.png')}
                                resizeMode='contain' style={{ width: 20, height: 20, marginTop: 20, marginLeft: 45 }} />
                        }</View>
                </TouchableOpacity>
                )
            })}

                name="Chat" component={ChatScreen} />

            <Tab.Screen options={() => ({
                tabBarButton: () => (<TouchableOpacity onPress={() => {
                    console.log("BoardPressed")
                    setBoardSource(false);
                    setGearSource(false);
                    setChatScreen(false);
                    setPostBoardScreen(false);
                    setListingScreen(true);
                    navigation.navigate("MyListings");
                }}>
                    <View>
                        {listingScreen &&
                            <Image alt="Alternate Text" source={require('../../../assets/images/nav-my-listing-selected.png')}
                                resizeMode='contain' style={{ width: 100, height: 100, marginTop: -20, marginLeft: 20 }} />
                        }{!listingScreen &&
                            <Image alt="Alternate Text" source={require('../../../assets/images/nav-mylisting.png')}
                                resizeMode='contain' style={{ width: 20, height: 20, marginTop: 20, marginLeft: 45 }} />
                        }</View>
                </TouchableOpacity>
                )
            })}

                name="MyListings" component={MyListings} />

        </Tab.Navigator>
    )
}

export default Dashboard