
// import Header
import { Image, Keyboard, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import React, { useState } from "react";
import { Center, HStack, Pressable } from "native-base";
import { useAuthContext } from "../../../../context/AuthContext";
import ImagePicker from 'react-native-image-crop-picker';
import DraggableFlatList from "react-native-draggable-flatlist";
export const PostAGear = () => {
  const auth = useAuthContext();

  const [data, setData] = useState<any[]>([]);
  // Function to handle image selection
  const handleImagePicker = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      includeBase64: true,
      mediaType: "photo"
    }).then(image => {
      var base64 = `data:image/png;base64,${image.data}`;

      setData(data => [...data, base64])
    }).catch(error => {
      console.log(error);
    });
  };
  const [title, setTitle] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const countWords = (inputText: string): number => {
    // Remove extra white spaces and split the text by spaces to count words
    //   const wordsArray = inputText.trim().split(/\s+/);
    
    return inputText ? inputText?.length: 0;
  };

  const handleTextChange = (newTitle: string) => {
    setTitle(newTitle);
    setWordCount(countWords(newTitle));
  };
  const renderItem = ({ item, drag, isActive }: any) => {
    // console.log(item +" NOW NEWWWW FROM HERERERERE");
    return (
      <ScrollView>
        <Pressable
          onPress={drag}
          disabled={isActive}
        >
          {/* <Image source={{ uri: PROFILEPIC_BASE_URL + auth.user.profilePicture }} style={{ width: 50, height: 30, resizeMode: 'contain' }} /> */}
          <Image source={{uri: item}}   style={{  width: 50, height: 30, resizeMode: 'contain'}} />
          {/* <Image
                source={{
                  uri: image,
                }}
              /> */}
          {/* <Image
        source={{
          uri: 'data:image/jpeg;base64,',
        }}
      /> */}

          {/* <Image src={auth.} */}
          {/* <Text>{item}</Text> */}
        </Pressable>
      </ScrollView>
    );
  };
  return (
    <ScrollView>
      {data && data.length > 0 && <>
        <View>
          <HStack space={0} marginTop={5} marginLeft={3}>
            <TouchableOpacity onPress={handleImagePicker}>
              <View style={{ justifyContent: 'space-between', paddingLeft: 30 }}>
                <Image source={require('../../../../../assets/images/upload-img-icon.png')} style={{ width: 50, height: 30, resizeMode: 'contain' }} />
              </View>
              {/* <View style={{ justifyContent: 'space-between', paddingHorizontal: 40 }}>
                  {image != ""?  <Image source={{uri:image}} /> : <Text>No image path</Text>}
                  </View> */}
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
          {data && data.length == 0 &&
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
           
          <View style={styles.container}>
            <TextInput
              style={styles.input}
              // placeholder=""
              onChangeText={handleTextChange}
              value={title}
              maxLength={100}
            />
            <View style={styles.counterContainer}>
              <Text style={styles.counterText}>{wordCount}/100</Text>
            </View>
          </View>


          <View style={{ paddingTop: 50, position: 'relative', bottom: 40, left: 0, right: 0, alignItems: 'center' }}>
            <TouchableOpacity
              onPress={() => {
                auth.setUserGears({ ImagesPath: data, Title: title });
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
  container: {
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,

  },
  input: {
    height: 40,
    borderWidth: 3,
    borderColor: '#ccc',
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    color: 'black',

  },
  counterContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  counterText: {
    fontSize: 18,
    color: '#666',
  }
});

