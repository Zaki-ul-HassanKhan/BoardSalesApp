import React from 'react'
import { Button, Center, Divider, HStack, Icon, Image, Input, ScrollView, Text } from 'native-base'
import { StyleSheet, View } from 'react-native'
import design from '../../../assets/images/home-screen-img.jpg';
import Entypo from 'react-native-vector-icons/Entypo';
import { PROFILEPIC_BASE_URL } from '../../../config/config';
import { useAuthContext } from '../../context/AuthContext';
const Profile = () => {
  const auth = useAuthContext();
  return (
    <View style={styles.container}>

      <Image source={require("../../../assets/images/home-screen-img.jpg")} style={styles.img} />
      <View style={styles.cont3}>
        <Image source={{uri:PROFILEPIC_BASE_URL + auth.user.profilePicture}} style={styles.profilepic} />
        <HStack space={2}>
          <Text>{auth.user.name}</Text>
          <Button rounded={100} marginTop={-3} color={"#457EFF !important"} borderColor={"#457EFF"} height={10} variant="outline">Verify Account</Button>
          <Input style={styles.searchBar} marginTop={-3} borderColor={"#457EFF"} placeholderTextColor={"#457EFF"} placeholder="Search" variant="outline" width="30%" borderRadius="100" mx="12" paddingTop="0" paddingBottom="0" InputRightElement={<Icon ml="2" mr="3" size="4" as={<Entypo name="magnifying-glass" />} />} />
        </HStack>
        <HStack space="16" marginTop="10px">
          <Text>Range {auth.lookups.locations.filter(x=>x.key == auth.user.location)[0].value} ({auth.user.distance/2} miles)</Text>
          <Button colorScheme="blue" size="sm" mx="4" style={{ display: 'flex', justifyContent: 'flex-end' }} leftIcon={<Icon ml="2" size="4" as={<Entypo name="magnifying-glass" />} />}>Edit</Button>
        </HStack>
        <HStack space="16" marginTop="10px" margin="20px">
          <Text style={{ color: 'blue' }}>Board Range {"\n"}
            {auth.user.boardLength.replaceAll("feet",`'`).replaceAll("inches",`"`)}</Text>
          <Divider orientation="vertical" mx="3" _light={{
            bg: "muted.800"
          }} _dark={{
            bg: "muted.50"
          }} />
          <Text style={{ color: 'blue' }}>GO-TO BOARD {"\n"}
          {auth.lookups.boardTypes.filter(x=>x.key == auth.user.boardType)[0].value}</Text>
        </HStack>
        <HStack space="16" marginTop="10px">
          <Text>Active Listing</Text>
        </HStack>
        <Center>
          <HStack space="16" marginTop="10px">
            <Image width="50px" height="50px" source={require('../../../assets/images/no-item-for-sale.png')}></Image>

          </HStack>
        </Center>
        <Center>
          <HStack space="16">
            <Text>No Items for sale</Text>
          </HStack>
        </Center>
        <Center>
          <HStack space="16">
            <Text>We see those boards in your garage collecting dust...</Text>
          </HStack>
        </Center>
        <Center>
          <HStack space="16" marginTop="10px">
            <Button colorScheme="blue" size="sm" leftIcon={<Icon ml="2" size="4" as={<Entypo name="magnifying-glass" />} />}>Post an Item</Button>
          </HStack>
        </Center>
      </View>
    </View>
  )
};

export default Profile


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "grey",
  },

  profilepic: {
    height: "13%",
    width: "13%",
    borderRadius: 200 / 2,
    marginTop: -20
  },
  img: {
    height: "45%",
    width: "100%",
  },
  cont3: {
    flex: 1,
    backgroundColor: "white",
    width: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    zIndex: 100,
    marginTop: -15
  },
  searchBar: {
    color: "#457EFF"
  }
});
