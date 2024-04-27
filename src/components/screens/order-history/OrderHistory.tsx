import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Center, HStack, Icon, Image } from 'native-base'
import Entypo from 'react-native-vector-icons/Entypo';
const OrderHistory = () => {
  return (
    <View>
        
      <HStack space={12} marginTop={5} margin={6}>
      <Center>
            <Image width={70} height={50} source={require('../../../assets/images/board-sale-logo.png')} />
         </Center>
         <Center><Text style={styles.text}>$175</Text></Center>
         <Center><Text>31-March-2024</Text></Center>
         <Center><Icon size="5" as={<Entypo name="cross" />} /></Center>
      </HStack>
      <HStack space={12} marginTop={5} margin={6}>
      <Center>
            <Image width={70} height={50} source={require('../../../assets/images/board-sale-logo.png')} />
         </Center>
         <Center><Text style={styles.text}>$175</Text></Center>
         <Center><Text>31-March-2024</Text></Center>
         <Center><Icon size="5" as={<Entypo name="cross" />} /></Center>
      </HStack>
     
    </View>
  )
}
const styles = StyleSheet.create({
    text: {
     color:'blue'
    }
});
export default OrderHistory