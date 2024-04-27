
import { useState } from 'react';
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useAuthContext } from '../../context/AuthContext';

const Welcome = () => {
  
  const auth = useAuthContext();

  // const handleTabPress = (index: number) => {
  //   setSelectedTab(index);
  // };

  const handleGetStarted = () => {
    // Navigate to IndividualORshopScreen4
    // console.log('get started button pressed');
    // <IndividualORshopScreen4/>
  };

  return (
    <View style={{ flex: 1 }}>
      {/* <CustomTabBar selectedTab={selectedTab} handleTabPress={handleTabPress} /> */}
      <View style={{ alignItems: 'center', paddingTop: 10 }}>
        <Image source={require('../../../assets/images/img-for-screen3.jpg')} style={{ width: 360, height: 200, borderRadius: 15 }} />
      </View>
      <View style={{ alignItems: 'center', paddingTop: 20 }}>
        <Text style={{ fontWeight: '900', color: 'black' }}>Welcome to BOARDSALES</Text>
        <Text style={{ paddingTop: 20 }}>Discover Your Ideal Board In a Snap!</Text>
        <Text style={{ paddingLeft: 20, paddingTop: 20 }}>From first timers to seasoned surfers,</Text>
        <Text style={{ paddingLeft: 20 }}>BoardSales streamlines the surfboard buying and</Text>
        <Text style={{ paddingLeft: 20 }}>selling experience for everyone!</Text>
      </View>

      <View style={{ position: 'absolute', bottom: 100, left: 0, right: 0, alignItems: 'center' }}>
        <TouchableOpacity
          onPress={()=>{
            auth.setSelectedTab(1);
          }}
          style={{
            backgroundColor: '#59cae9',
            paddingVertical: 24,
            paddingHorizontal: 48,
            borderRadius: 30,
            alignItems: 'center',
            width: 300
          }}
        >
          <Text style={{ color: 'black', fontWeight: 'bold' }}>Get Started!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;

























































