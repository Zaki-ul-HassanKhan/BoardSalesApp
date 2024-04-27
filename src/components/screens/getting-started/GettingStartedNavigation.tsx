
import React, { useState } from 'react';
import { View } from 'react-native';
import { CustomTabBar } from './TopNavigationTab';
import Welcome from './Welcome';
import IndividualOrShop from './IndividualOrShop';
import WhatsYourGoToBoard from './WhatsYourGoToBoard';
import LongBoardLength from './LongBoardLength';
import ProfilePicture from './ProfilePicture';
import { SelectLocation } from './SelectLocation';
import { YourFullName } from './YourFullName';
import { useAuthContext } from '../../context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FilterYouLove } from './FilterYouLove';

const GettingStartedNavigation = () => {
  const auth = useAuthContext();
  const [individualOrShaper, setIndividualOrShaper] = useState(0);
  const handleTabPress = (index: number) => {
    auth.setSelectedTab(index);
  };

  const handleIndividualOrShaper = (index: number) => {
    AsyncStorage.setItem("IndividualOrShaper", String(index));
    setIndividualOrShaper(index);
  };
  return (
    <View style={{ flex: 1 }}>
      <CustomTabBar selectedTab={auth.selectedTab} handleTabPress={handleTabPress} />
      {auth.selectedTab === 0 && <Welcome />}
      {auth.selectedTab === 1 && <IndividualOrShop selectedTab={individualOrShaper} handleTabPress={handleIndividualOrShaper} />}
      {auth.selectedTab === 2 && <YourFullName individualOrShaper={individualOrShaper} />}
      {auth.selectedTab === 3 && <SelectLocation />}
      {auth.selectedTab === 4 && <WhatsYourGoToBoard />}
      {auth.selectedTab === 5 && <LongBoardLength />}
      {auth.selectedTab === 6 && <ProfilePicture />}
      {auth.selectedTab === 7 && <FilterYouLove />}
    </View>
  );
};

export default GettingStartedNavigation;

