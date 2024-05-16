
import React, { useState } from 'react';
import { NavigationContainer, ParamListBase, useNavigation } from '@react-navigation/native';
import { BoardCustomTabBar } from './BoardCustomTabBar';
import { Image, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native';
import { ConditionScreen } from './ConditionScreen';
import { BoardTypeScreen } from './BoardTypeScreen';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native';
import { Shapers } from './Shapers';
import { FinSystem } from './FinSystem';
import { FinSetup } from './FinSetup';
import { LengthScreen } from './LengthScreen';
import { WidthScreen } from './WidthScreen';
import { Thickness } from './Thickness';
import { Volume } from './Volume';
import { Description } from './Description';
import { PriceLocation } from './PriceLocation';
import { NormalPost } from './NormalPost';
import { FeaturedPost } from './FeaturedPost';
import { PostedPriceLocation } from './PostedPriceLocation';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useAuthContext } from '../../../../context/AuthContext';
import { PostABoard } from './PostaBoard';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';




const BoardTabNavigation = () => {
  
  const auth = useAuthContext();
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const handleImageClick = () => {
    if(auth.selectedTab == 0){
      auth.setBottomShow(true);
      auth.setPostType(0);
      auth.setHeaderShow(false);
    navigation.navigate("Post");

    }
    auth.setSelectedTab(auth.selectedTab > 0 ? auth.selectedTab - 1 : auth.selectedTab);
  }
  const handleTabPress = (index: number) => {
    auth.setSelectedTab(index);
  };
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 10, paddingTop: 10 }}>
        <View style={{ paddingLeft: 10 }}>
          <TouchableOpacity onPress={() => handleImageClick()}>
          <AntDesign name='arrowleft' size={30} color="black" />
          </TouchableOpacity>
        </View>
        <View>
          <View style={{ alignItems: 'center' }}>
            {auth.selectedTab === 0 ? (
              <Text style={{ color: 'black', fontWeight: '900', fontSize: 17 }}>Post a board</Text>
            ) : null}
              {auth.selectedTab === 1 ? (
              <Text style={{ color: 'black', fontWeight: '900', fontSize: 17 }}>Condition</Text>
            ) : null}
               {auth.selectedTab === 2 ? (
              <Text style={{ color: 'black', fontWeight: '900', fontSize: 17 }}>Board Type</Text>
            ) : null}
                 {auth.selectedTab === 3 ? (
              <Text style={{ color: 'black', fontWeight: '900', fontSize: 17 }}>Shapers</Text>
            ) : null}
                 {auth.selectedTab === 4 ? (
              <Text style={{ color: 'black', fontWeight: '900', fontSize: 17 }}>Fin System</Text>
            ) : null}
                  {auth.selectedTab === 5 ? (
              <Text style={{ color: 'black', fontWeight: '900', fontSize: 17 }}>Fin Setup</Text>
            ) : null}
                     {auth.selectedTab === 6 ? (
              <Text style={{ color: 'black', fontWeight: '900', fontSize: 17 }}>Length</Text>
            ) : null}
                      {auth.selectedTab === 7 ? (
              <Text style={{ color: 'black', fontWeight: '900', fontSize: 17 }}>Width</Text>
            ) : null}
                        {auth.selectedTab === 8 ? (
              <Text style={{ color: 'black', fontWeight: '900', fontSize: 17 }}>Thickness</Text>
            ) : null}
                        {auth.selectedTab === 9 ? (
              <Text style={{ color: 'black', fontWeight: '900', fontSize: 17 }}>Volume</Text>
            ) : null}
                        {auth.selectedTab === 10 ? (
              <Text style={{ color: 'black', fontWeight: '900', fontSize: 17 }}>Description</Text>
            ) : null}
                         {auth.selectedTab === 11 ? (
              <Text style={{ color: 'black', fontWeight: '900', fontSize: 17 }}>Price & Location</Text>
            ) : null}
                          {auth.selectedTab === 12 ? (
              <Text style={{ color: 'black', fontWeight: '900', fontSize: 17 }}>{`${(auth.userBoards.IsFeatured == true || auth.userBoards.Vintage == true || auth.userBoards.TeamBoard == true) == true ? 'Featured Post' : 'Normal Post'}`}</Text>
            ) : null}
                           {auth.selectedTab === 13 ? (
              <Text style={{ color: 'black', fontWeight: '900', fontSize: 17 }}>Price & Location</Text>
            ) : null}
          </View>
        </View>
        <View style={{ paddingRight: 10 }}>
          <TouchableOpacity onPress={() => handleImageClick()}>
            <Image source={require('../../../../../assets/images/close.png')} style={{ paddingRight: 20, width: 24, height: 24, borderRadius: 15 }} />
          </TouchableOpacity>
        </View>
      </View>
      <BoardCustomTabBar selectedTab={auth.selectedTab} handleTabPress={handleTabPress} />
      {auth.selectedTab === 0 && <PostABoard />}
      {auth.selectedTab === 1 && <ConditionScreen/>}
      {auth.selectedTab === 2 && <BoardTypeScreen/>}
      {auth.selectedTab === 3 && <Shapers/>}
      {auth.selectedTab === 4 && <FinSystem/>}
      {auth.selectedTab === 5 && <FinSetup/>}
      {auth.selectedTab === 6 && <LengthScreen/>}
      {auth.selectedTab === 7 && <WidthScreen/>}
      {auth.selectedTab === 8 && <Thickness/>}
      {auth.selectedTab === 9 && <Volume/>}
      {auth.selectedTab === 10 && <Description/>}
      {auth.selectedTab === 11 && <PriceLocation/>}
      {auth.selectedTab === 12 && <NormalPost/>}
      {auth.selectedTab === 13 && <PostedPriceLocation/>}
    </View>
  );
};



export { BoardTabNavigation };

