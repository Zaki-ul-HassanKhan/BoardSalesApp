import React, { useState } from 'react';
import { View , TouchableOpacity, TextInput, FlatList, StyleSheet, Dimensions} from 'react-native';
import { useAuthContext } from '../../context/AuthContext';
import { HStack, Icon, Slider, Switch, Text, useToast } from 'native-base';
import { UserResponseModel } from '../../../models/user/UserResponseModel';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import useUserService from '../../../shared/services/user/user.service';
const SelectLocation = () => {
  
  const auth = useAuthContext();
  const [search, setSearch] = useState('');
  const [clicked, setClicked] = useState(false);
  const [data, setData] = useState(auth.lookups.locations);
  const [selectedLocation, setSelectedLocation] = useState(auth.user.location);
  const selectLocation = auth.lookups.locations.filter(x=>x.key == auth.user.location);
  const [selectedShowLocation, setSelectedShowLocation] = useState((selectLocation == undefined || selectLocation== null || (selectLocation && selectLocation?.length == 0))? "Select Location": selectLocation[0].value);
  const [miles, setMiles] = useState(true);
  const [distance, setDistance] = useState(auth.user.distance);
  const userService = useUserService();
  const toast = useToast();
  const onSearch = (search: string) => {
    if (search !== '') {
      let tempData = data.filter(item => {
        return item.value.toLowerCase().indexOf(search.toLowerCase()) > -1;
      });
      setData(tempData);
    } else {
      setData(auth.lookups.locations);
    }
  };

  return (
    <>
      <View style={{paddingTop:20}}>
     <Text style={{ paddingLeft:40,color: 'black', fontWeight: '900'  }}>Where are you located?</Text>
     <View style={{paddingTop:10}}>
     <Text style={{ paddingLeft:40, }}>Your location stays under wraps, just like your</Text>
     <Text style={{ paddingLeft:40, }}>hidden surf sanctuary!</Text>
     </View>
     </View>
    <TouchableOpacity
      style={{
        width: '75%',
        height: 50,
        borderRadius: 10,
        borderWidth: 0.5,
        alignSelf: 'center',
        marginTop: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 30,
      }}
      onPress={() => {
        setClicked(!clicked);
      }}>
      <Text style={{fontWeight:'600'}}>
        {selectedLocation == 0 ? 'Select Location' : selectedShowLocation}
      </Text>
    </TouchableOpacity>
    {clicked ? (
      <View
        style={{
          elevation: 5,
          marginTop: 20,
          height: 300,
          alignSelf: 'center',
          width: '75%',
          backgroundColor: '#fff',
          borderRadius: 10,
        }}>
        <TextInput
          placeholder="Search.."
          value={search}
          onChangeText={txt => {
            onSearch(txt);
            setSearch(txt);
          }}
          style={{
            width: '75%',
            height: 50,
            alignSelf: 'center',
            borderWidth: 0.2,
            borderColor: '#8e8e8e',
            borderRadius: 7,
            marginTop: 20,
            paddingLeft: 20,
          }}
        />

        <FlatList
          data={data}
          renderItem={({item, index}) => {
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
                  setSelectedLocation(item.key);
                  setSelectedShowLocation(item.value)
                  setClicked(!clicked);
                  onSearch('');
                  setSearch('');
                }}>
                <Text style={{fontWeight: '600'}}>{item.value}</Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    ) : null}
     <View style={{paddingTop:20}}>
       <Text style={{ paddingLeft:40, }}>Click "Select Location", then enter location in</Text>
     <Text style={{ paddingLeft:40, }}>search bar</Text>
       </View>
    <View style={{ paddingHorizontal: 20, marginTop: 30 }}>
    <Text style={{ paddingLeft:18,color: 'black', fontWeight: '900'  }}>Please specify the distance from beach</Text>
        <HStack style={{marginLeft:'10%'}} alignItems="center" space={4}>
      <Text>mi</Text>
      <Switch size="sm" onChange={()=>{setMiles(!miles)}} />
      <Text>Km</Text>
    </HStack>
        <Slider defaultValue={60} marginLeft="10%" size="sm" colorScheme="blue" w="75%" maxW="300"
        onChange={v => {
          console.log(Math.floor(v));
        }} onChangeEnd={v => {
          v && setDistance(Math.floor(v));
        }}>
        <Slider.Track bg="blue.100">
          <Slider.FilledTrack bg="blue.600" />
        </Slider.Track>
        <Slider.Thumb borderWidth="0" bg="transparent">
          <Icon as={<FontAwesome name='circle-o' />} name="park" size="sm" />
        </Slider.Thumb>
       
      </Slider>
      
        {miles && 
        <HStack>
      <Text style={{marginLeft:'10%'}}>5mi</Text>
      <Text style={{marginLeft:'8%'}}>15mi</Text>
      <Text style={{marginLeft:'8%'}}>25mi</Text>
      <Text style={{marginLeft:'8%'}}>35mi</Text>
      <Text style={{marginLeft:'8%'}}>45mi</Text>
      </HStack>
      }
        {!miles && 
        <HStack>
      <Text style={{marginLeft:'10%'}}>5km</Text>
      <Text style={{marginLeft:'8%'}}>15km</Text>
      <Text style={{marginLeft:'8%'}}>25km</Text>
      <Text style={{marginLeft:'8%'}}>35km</Text>
      <Text style={{marginLeft:'8%'}}>45km</Text>
      </HStack>
      }
      
        </View>
 

       <View style={{ position: 'absolute', bottom: 40, left: 0, right: 0, alignItems: 'center' }}>
       <TouchableOpacity
          onPress={() => {
            if (auth.user.location != selectedLocation) {
              userService.updateUser({
                UserId: auth.user.userId,
                Name: auth.user.name,
                Location: selectedLocation,
                ProfilePicture: auth.user.profilePicture,
                BoardLength: auth.user.boardLength,
                BoardType: auth.user.boardType,
                Distance: distance,
                GetStartedCompleted:false
              }).then((res: UserResponseModel) => {
                
                if (res.code == "400") {
                  toast.show({
                    description: res.message,
                  })
                } else {
                  auth.setUser((user: UserResponseModel) => {
                    return { 
                      ...user, 
                      token: auth.user.token,
                      userId :auth.user.userId,
                      getStartedCompleted : auth.user.getStartedCompleted,
                      name:auth.user.name,
                      location: selectedLocation,
                      distance: distance,
                      boardLength : auth.user.boardLength,
                      boardType : auth.user.boardType,
                      profilePicture : auth.user.profilePicture
                    }
                  });
                  auth.setSelectedTab(4);
                }

              }).catch((error) => {
                console.log(error);
              });
            }
            else{
              auth.setSelectedTab(4);
            }
          }
          
          }
          style={{
            backgroundColor: '#59cae9',
            paddingVertical: 24,
            paddingHorizontal: 48,
            borderRadius: 30,
            alignItems: 'center',
            width: 300
          }}
        >
          <Text style={{ color: 'black', fontWeight: 'bold' }}>Next</Text>
        </TouchableOpacity>
      </View>
  </>
    
  );
};




const styles = StyleSheet.create({
  
  box : {
    height: Dimensions.get('screen').height
  }
});

export { SelectLocation};





