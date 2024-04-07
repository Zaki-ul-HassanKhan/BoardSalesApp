import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BoardScreen from '../screens/boards/BoardScreen';
import GearScreen from '../screens/gear/GearScreen';


const Tab = createBottomTabNavigator();

function AppStack() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={BoardScreen} />
      <Tab.Screen name="Settings" component={GearScreen} />
    </Tab.Navigator>
  )
}


export default AppStack;