import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';

interface CustomTabBarProps {
  selectedTab: number;
  handleTabPress: (index: number) => void;
}

const CustomTabBar: React.FC<CustomTabBarProps> = ({ selectedTab, handleTabPress }) => {
  return (
    <View style={{
      flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#fff',
      paddingLeft: 30, paddingRight: 30, paddingTop: 10
    }}>
      {[0, 1, 2, 3, 4, 5, 6, 7].map((index) => (
        <TouchableOpacity key={index} onPress={() => handleTabPress(index)} style={{ position: 'relative' }}>

          {/* Conditionally render the checkmark icon */}
          {selectedTab >= index && <Text style={{ fontSize: 20, position: 'absolute', top: -30, left: 0 }}>✓</Text>}

          {/* Render the text with "-" */}
          <Text style={{ fontSize: 16, color: selectedTab >= index ? '#59cae9' : '#BABABA' }}>
            {selectedTab >= index ? '✓' : '—'}
          </Text>

          {/* Render the image */}
          <Image
            source={require('../../../assets/images/board-sale-icon.png')}
            style={{ width: 20, height: 20, tintColor: selectedTab >= index ? '#59cae9' : '#BABABA' }}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export {CustomTabBar};



