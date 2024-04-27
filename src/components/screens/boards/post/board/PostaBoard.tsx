
// import Header
import { Image, Keyboard, ScrollView, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import React, { useState } from "react";
import { Center, HStack, Icon, Input, Pressable } from "native-base";
import { ListItem } from "react-native-elements";
import { WordCounter } from "./WordCounter";
import { useAuthContext } from "../../../../context/AuthContext";
import ImagePicker, { ImageOrVideo } from 'react-native-image-crop-picker';
import { PROFILEPIC_BASE_URL } from "../../../../../config/config";
import Entypo from "react-native-vector-icons/Entypo";
import DraggableFlatList, { ScaleDecorator } from "react-native-draggable-flatlist";
export const TodoList = () => {
  const auth = useAuthContext();
  
  const [selectedImage, setSelectedImage] = useState<ImageOrVideo | null>(null);
  
  const [data, setData] = useState<any[]>([]);
    // Function to handle image selection
    const handleImagePicker = () => {
      ImagePicker.openPicker({
        width: 300,
        height: 400,
        includeBase64: true,
        mediaType: "photo"
      }).then(image => {
       setData(data => [...data,image.data])
      }).catch(error => {
        console.log(error);
      });
    };
  const [text, setText] = useState("");
  // add state to save todos
console.log(data);
  const renderItem = ({ item, drag, isActive } : any) => {
    // console.log(drag);
    console.clear();
    console.log(item);
    return (
      <ScrollView>
        <Pressable
          onPress={drag}
          disabled={isActive}
        >
      <Image source={{uri:PROFILEPIC_BASE_URL + auth.user.profilePicture}} style={{ width: 50, height: 30, resizeMode: 'contain' }} />    
         
        {/* <Text>{item}</Text> */}
        </Pressable>
        </ScrollView>
    );
  };
console.log(data.length)
  return (
    <ScrollView>
      {data.length>0 &&<>
    <View>
    <HStack space={0} marginTop={5} marginLeft={3}>
    <TouchableOpacity onPress={handleImagePicker}>
                <View style={{ justifyContent: 'space-between', paddingLeft: 30 }}>
                    <Image source={require('../../../../../assets/images/upload-img-icon.png')} style={{ width: 50, height: 30, resizeMode: 'contain' }} />
                </View>
            </TouchableOpacity>
      <DraggableFlatList
        data={data}
        onDragEnd={({ data }) => setData(data)}
        keyExtractor={(item) => item}
        renderItem={renderItem}
        horizontal
      />
      </HStack>
  </View>
  </>
  }

<TouchableWithoutFeedback onPress={Keyboard.dismiss}>

<View style={{ flex: 1 }}>
  {data.length ==0 &&
    <>
        <View style={{ paddingTop: 0, justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 100 }}>
            <TouchableOpacity onPress={handleImagePicker}>
                <View style={{ justifyContent: 'space-between', paddingHorizontal: 40 }}>
                    <Image source={require('../../../../../assets/images/upload-img-icon.png')} style={{ width: 150, height: 330, resizeMode: 'contain' }} />
                </View>
            </TouchableOpacity>
            
        </View>
        <View style={{ paddingLeft: 40 }}>
            <Text style={{ color: 'black' }}>✓ The first photo will be your listing's cover photo.</Text>
            <Text style={{ color: 'black' }}>✓ Tap and hold photo to re-order.</Text>
            <Text style={{ color: 'black' }}>✓ Up to 10 photos per listing.</Text>
        </View>
        </>}
        <View style={{}}>
            <WordCounter />
        </View>


    <View style={{ paddingTop: 50, position: 'relative', bottom: 40, left: 0, right: 0, alignItems: 'center' }}>
        <TouchableOpacity
            onPress={() => auth.setSelectedTab(1)}
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
</View>
</TouchableWithoutFeedback>
      
</ScrollView>
  );
};


const styles = StyleSheet.create({
  rowItem: {
    height: 100,
    width: 10,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  text: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});

