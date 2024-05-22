import { View, Text, StyleSheet, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button, Icon, Image } from 'native-base'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import useUserService from '../../../shared/services/user/user.service';
import { useAuthContext } from '../../context/AuthContext';
import { UserListingResponse } from '../../../models/userlistings/UserListingsReponse';
import { Data } from '../../../models/userboard/DashboardBoardsResponse';
import Entypo from 'react-native-vector-icons/Entypo';
import { BOARDPIC_BASE_URL } from '../../../config/config';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const MyListings = () => {
  const userService = useUserService();
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const auth = useAuthContext();
  const datas = ['Active', 'Archived'];
  const [data] = useState(datas);
  const [clicked, setClicked] = useState(false);
  const [forSale, setForSale] = useState(true);
  const [sold, setSold] = useState(false);
  const [isActive, setIsActive] = useState('Active');
  const [userBoards, setUserBoards] = useState<Data[]>([]);
  const [userGears, setUserGears] = useState<Data[]>([]);
  useEffect(() => {
    console.log(auth.user);
    setUserBoards([]);
    setUserGears([]);
    userService.getUserListings({
      IsSold: sold,
      UserId: auth.user.userId,
      IsForSale: forSale,
      IsArchive: isActive == "Archive" ? true : false,
      IsActive: isActive == "Active" ? true : false,
    }).then((res: UserListingResponse) => {
      console.log(res.userBoards);
      res.userBoards.forEach(z=>z.imagesPath = z.imagesPath?.split(",")[0] + ".png");
      console.log(res.userBoards);
      setUserBoards(res.userBoards);
      setUserGears(res.userGears);
    }).catch((error) => {
      console.log(error);
    });
  }, [forSale, sold, isActive]);
  const handleImageClick = (text: string) => {
    // Perform functionality here when the image is clicked
    if (text === 'Used$350') {
        // setDisplayText('You clicked on Used$350');
        console.log("you select", text)
    } else if (text === 'New$300') {
        // setDisplayText('You clicked on New$300');
        console.log("you select", text)

    }
};
  const renderItem = ({ item }: any) => (
    <View style={{ alignItems: 'flex-start', paddingTop: 20, paddingLeft: 10 }}>
            <TouchableOpacity onPress={() => handleImageClick('Used$350')}>
                <View style={{ alignItems: 'center', borderWidth: 1, borderTopEndRadius: 10, borderTopStartRadius: 10, padding: 5 }}>
                    <Image source={require('../../../assets/images/01.jpg')} style={{ width: 155, height: 150, borderRadius: 15, resizeMode: 'contain', marginTop: -50, }} />
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
    <>
      <View style={styles.container}>
        <Text style={styles.text}>My Listing</Text>
        <View style={styles.filler} />
        <TouchableOpacity
          style={{
            width: '20%',
            height: 50,
            borderRadius: 10,
            borderWidth: 0.5,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingLeft: 5,
            paddingRight: 5,
          }}
          onPress={() => {
            setClicked(!clicked);
          }}>
          <Text style={{ fontWeight: '600' }}>
            {isActive}
          </Text>
        </TouchableOpacity>
        {clicked ? (
          <View
            style={{
              elevation: 5,
              marginTop: 85,
              marginLeft: 235,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: "center",
              width: '45%',
              backgroundColor: '#fff',
              borderRadius: 10,
              zIndex: 100,
              position: 'absolute',
            }}>

            <FlatList
              data={data}
              renderItem={({ item, index }) => {
                return (
                  <TouchableOpacity
                    style={{
                      width: '75%',
                      alignSelf: 'center',
                      height: 50,
                      justifyContent: 'center',
                      borderBottomWidth: 0.5,
                      borderColor: '#8e8e8e',
                    }}
                    onPress={() => {
                      setIsActive(item);
                    }}>
                    <Text style={{ fontWeight: '600' }}>{item}</Text>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        ) : null}


      </View>
      <View style={{ flex: 1, backgroundColor: 'white', zIndex: -100 }} >
        <ScrollView>
          <View style={{ flexDirection: 'row', justifyContent: 'center', margin: 10 }}>
            <View style={{ width: '45%' }}>
              <TouchableOpacity onPress={() => { setForSale(true); setSold(false) }}>
                <Text style={forSale ? styles.Selected : styles.NotSelected}>For Sale</Text></TouchableOpacity>

              <View style={{ borderBottomWidth: 1, borderColor: forSale ? "blue" : "black" }} />

            </View>
            <View style={{ width: '45%' }}>
              <TouchableOpacity onPress={() => { setForSale(false); setSold(true) }}>
                <Text style={sold ? styles.Selected : styles.NotSelected} >Sold</Text></TouchableOpacity>

              <View style={{ borderBottomWidth: 1, borderColor: sold ? "blue" : "black" }} />

            </View>
          </View>

          {forSale && (userBoards == null || userBoards.length == 0) &&
            <>
              <View style={{ flexDirection: 'row', alignContent: 'center', justifyContent: 'center', marginTop: "40%" }}>
                <Image source={require("../../../assets/images/no-item-for-sale.png")} width={70} height={70} alt='hehe' />
              </View>
              <View style={{ flexDirection: 'row', alignContent: 'center', justifyContent: 'center', marginTop: "5%" }}>
                <Text>No Items for Sale</Text>
              </View>
              <View style={{ flexDirection: 'row', alignContent: 'center', justifyContent: 'center', marginTop: "30%" }}>
                <Button colorScheme="blue" width={120} size="sm" leftIcon={<Icon ml="2" size="4" as={<Entypo name="plus" />} />} onPress={()=>{navigation.navigate("Post")}}>Post an Item</Button>
              </View>
            </>

          }
          {sold && (userGears == null || userGears.length == 0) &&
            <>
              <View style={{ flexDirection: 'row', alignContent: 'center', justifyContent: 'center', marginTop: "40%" }}>
                <FontAwesome5Icon name='shopping-cart' size={40} ></FontAwesome5Icon>
              </View>
              <View style={{ flexDirection: 'row', alignContent: 'center', justifyContent: 'center', marginTop: "5%" }}>
                <Text>No Items Sold</Text>
              </View>
              <View style={{ flexDirection: 'row', alignContent: 'center', justifyContent: 'center', marginTop: "30%" }}>
                <Button colorScheme="blue" width={120} size="sm" leftIcon={<Icon ml="2" size="4" as={<Entypo name="plus" />} onPress={()=>{navigation.navigate("Post")}} />}>Post an Item</Button>
              </View>


            </>
          }
          {(userBoards == null || userBoards.length >= 0) != null &&

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 }}>
              <FlatList
                data={userBoards}
                renderItem={renderItem}
                numColumns={2}
              />
            </View>

          }
          {(userGears == null || userGears.length >= 0) &&

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 }}>
              <FlatList
                data={userGears}
                renderItem={renderItem}
                numColumns={2}
              />
            </View>

          }
        </ScrollView>
      </View>
    </>
  )
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16, // Optional: Add padding for spacing
    paddingTop: 30, // Optional: Adjust spacing from the top
    backgroundColor: 'white'
  },
  text: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black'
  },
  Selected: {
    color: 'blue',
    paddingTop: 5,
    marginBottom: 5
  },
  NotSelected: {
    color: 'black',
    paddingTop: 5,
    marginBottom: 5
  },
  filler: {
    flex: 1, // Fill remaining space
  },
  imgContainer: {
    flex: 1,
    // You can add additional styles to the container if needed
  },
  image: StyleSheet.absoluteFillObject
});
export default MyListings;