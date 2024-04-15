import React from 'react'
import { AspectRatio, Box, Center, Fab, HStack, Heading, Icon, Image, Stack, Text, VStack } from 'native-base'
import { ImageBackground, StyleSheet, TouchableOpacity, View } from 'react-native'
import design from '../../../assets/images/home-screen-img.jpg';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const Profile = () => {
    return (
        //    <Center>
        //     <Box alignItems="center" >
        //       <Box borderColor="coolGray.200" roundedTop={100}  _dark={{
        //       borderColor: "coolGray.600",
        //       backgroundColor: "gray.700"
        //     }} _web={{
        //       shadow: 2,
        //     }} _light={{
        //       backgroundColor: "gray.50"
        //     }}>
        //         <Box>
        //           <AspectRatio w="100%" ratio={16 / 9}>
        //             <Image source={{
        //             uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
        //           }} alt="image" />
        //           </AspectRatio>
        //           <Center position="absolute" bottom="-10" px="3"  zIndex={1}>
        //             <Image borderRadius={50}  source={design} size={10} />
        //           </Center>
        //         </Box>
        //         <Stack p="4" space={3} height='xl'>
        //           <Stack space={2}>
        //             <Heading size="md" ml="-1">
        //               The Garden City
        //             </Heading>
        //             <Text fontSize="xs" _light={{
        //             color: "violet.500"
        //           }} _dark={{
        //             color: "violet.400"
        //           }} fontWeight="500" ml="-0.5" mt="-1">
        //               The Silicon Valley of India.
        //             </Text>
        //           </Stack>
        //           <Text fontWeight="400">
        //             Bengaluru (also called Bangalore) is the center of India's high-tech
        //             industry. The city is also known for its parks and nightlife.
        //           </Text>
        //           <HStack alignItems="center" space={4} justifyContent="space-between">
        //             <HStack alignItems="center">
        //               <Text color="coolGray.600" _dark={{
        //               color: "warmGray.200"
        //             }} fontWeight="400">
        //                 6 mins ago
        //               </Text>
        //             </HStack>
        //           </HStack>
        //         </Stack>
        //       </Box>
        //     </Box>
        //    </Center>

        // <Center flex={1} zIndex={100}>
        //     <VStack m="3" marginTop="100%" h="full" w="full" borderRadius="3xl" bg="cyan.200" >

        //         <Text fontSize="lg" textAlign="center" _dark={{
        //             color: "coolGray.800"
        //         }}>
        //             <Box>
                        
        //                 <Center position="absolute" marginX="-180px" bottom="-10" zIndex={1}>
        //                     <Image borderRadius={50} source={design} size="sm"/>
        //                 </Center>
        //             </Box>
        //         </Text>
        //     </VStack>
        // </Center>


        <View style={styles.container}>
      
      <Image source={require("../../../assets/images/home-screen-img.jpg")} style={styles.img} />
      <View style={styles.cont3}>
       <Image source={design} style={styles.profilepic} />
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
    
    profilepic:{
        height: "13%",
      width: "13%",
      borderRadius:200/2,
      marginTop:-20
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
      borderTopRightRadius:20,
      paddingHorizontal: 20,
      zIndex:100,
      marginTop:-15
    },
  });
  