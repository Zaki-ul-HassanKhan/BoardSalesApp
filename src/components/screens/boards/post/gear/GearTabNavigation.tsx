
import React, { useState } from 'react';
import { NavigationContainer, ParamListBase, useNavigation } from '@react-navigation/native';
import { GearCustomTabBar } from './GearCustomTabBar';
import { Image, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native';
import { PriceDescription } from './PriceDescription';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useAuthContext } from '../../../../context/AuthContext';
import { PostAGear } from './PostaGear';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ConditionScreen } from './ConditionScreen';
import { PostedPriceLocation } from './PostedPriceLocation';




const GearTabNavigation = () => {
  
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
              <Text style={{ color: 'black', fontWeight: '900', fontSize: 17 }}>Post a Gear</Text>
            ) : null}
              {auth.selectedTab === 1 ? (
              <Text style={{ color: 'black', fontWeight: '900', fontSize: 17 }}>Condition</Text>
            ) : null}
               {auth.selectedTab === 2 ? (
                <Text style={{ color: 'black', fontWeight: '900', fontSize: 17 }}>Price & Description</Text>
            ) : null}
                  {auth.selectedTab === 3 ? (
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
      <GearCustomTabBar selectedTab={auth.selectedTab} handleTabPress={handleTabPress} />
      {auth.selectedTab === 0 && <PostAGear />}
      {auth.selectedTab === 1 && <ConditionScreen/>}
      {auth.selectedTab === 2 && <PriceDescription/>}
      {auth.selectedTab === 3 && <PostedPriceLocation/>}
    </View>
  );
};



export { GearTabNavigation };

