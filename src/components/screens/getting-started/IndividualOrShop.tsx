import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useAuthContext } from '../../context/AuthContext';

interface CustomTabBarProps {
  selectedTab: number;
  handleTabPress: (index: number) => void;
}
const IndividualOrShop : React.FC<CustomTabBarProps> = ({ selectedTab, handleTabPress }) => {
  const auth = useAuthContext();

  return (
    <View style={{ flex: 1 }}>
      {/* <CustomTabBar selectedTab={selectedTab} handleTabPress={handleTabPress} /> */}
      <TouchableOpacity onPress={()=>{handleTabPress(1)}}>
      <View style={{ alignItems: 'center', paddingTop: 20 }}>
        <View style={{
          borderRadius: 85, // Half of the width/height to make it circular
          width: 170,
          height: 170,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 12,
          },
          shadowOpacity: 0.58,
          shadowRadius: 16.00,

          elevation: 24,
        }}>
          <Image
            source={require('../../../assets/images/individual-icon.jpg')}
            style={{
              width: 170,
              height: 170,
              borderRadius: 80, // Half of the width/height to make it circular
              borderWidth: 5, // Optional: Add a border for better visual effect
              borderColor: 'white', // Optional: Set border color
            }}
          />
        </View>
        <Text style={{ fontWeight: '900', color: 'black', paddingTop: 20 }}>Individual</Text>
      </View>
      </TouchableOpacity>
<TouchableOpacity onPress={()=>{handleTabPress(2)}}>
      <View style={{ alignItems: 'center', paddingTop: 20 }}>
        <View style={{
          borderRadius: 85, // Half of the width/height to make it circular
          width: 170,
          height: 170,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.3,
          shadowRadius: 4,
          elevation: 5, // For Android
        }}>
          <Image
            source={require('../../../assets/images/shop-or-shaper_icon.jpg')}
            style={{
              width: 170,
              height: 170,
              borderRadius: 50, // Half of the width/height to make it circular
              borderWidth: 5, // Optional: Add a border for better visual effect
              borderColor: 'white', // Optional: Set border color
            }}
          />
        </View>
        <Text style={{ fontWeight: '900', color: 'black', paddingTop: 20 }}>Shop or Shaper</Text>
      </View>
      </TouchableOpacity>






      <View style={{ position: 'absolute', bottom: 100, left: 0, right: 0, alignItems: 'center' }}>
        <TouchableOpacity
          onPress={()=>{
            auth.setSelectedTab(2);
          }}
          style={{
            backgroundColor: '#59cae9',
            paddingVertical: 24,
            paddingHorizontal: 48,
            borderRadius: 30,
            alignItems: 'center',
            width: 300
          }}
          disabled={selectedTab == 0 ? true:false}
        >
          <Text style={{ color: 'black', fontWeight: 'bold' }}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default IndividualOrShop;