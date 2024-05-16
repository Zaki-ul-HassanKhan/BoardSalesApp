import { AlertDialog, Button, useToast} from 'native-base';
import React, { useState } from 'react';
import { FlatList, Keyboard } from 'react-native';
import { TouchableWithoutFeedback, Switch } from 'react-native';
import { StyleSheet } from 'react-native';
import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { useAuthContext } from '../../../../context/AuthContext';
import useUserGearService from '../../../../../shared/services/usergear/usergear.service';
import { AddUpdateUserGearsResponse } from '../../../../../models/usergears/AddUpdateUserGearsResponse';


const PriceDescription = () => {
    const [price, setPrice] = useState('');
    const auth = useAuthContext();
    const usergearservice = useUserGearService();
    const toast = useToast();
    const [description, setDescription] = useState('');
    const [wordCount, setWordCount] = useState(0);
  const [isOpen, setIsOpen] = React.useState(false);
  const [gears, setGears] = useState(auth.userGears);

    const handleTextChange = (text: string) => {
        setPrice(text);
    };
    const handleDescriptionChange = (text: string) => {
        setDescription(text);
    };
    const handleSubmit = () => {
        gears.Price = price;
        gears.Description = description;
        usergearservice.addUpdateUserGear(gears).then((res: AddUpdateUserGearsResponse) => {
            console.log(res);
            if (res.code == "400") {
                toast.show({
                    description: res.message,
                })
            } else {
                console.log(res);
              
            }
        });
    setGears(gears);
    setIsOpen(false);
        auth.setSelectedTab(3);
    };
    
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

            <View style={{ flex: 1 }}>
            <ScrollView>
                <View style={{ alignItems: 'center', paddingTop: 50 }}>
                    <Text style={{ color: 'black', fontWeight: '900', fontSize: 15 }}>Set you Price</Text>
                </View>
                <View style={styles.container}>
                    <TextInput
                        style={styles.input}
                        placeholder="$"
                        onChangeText={handleTextChange}
                        value={price}
                        keyboardType="numeric"
                    />
                    
                    <View />
                </View>
                <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    // placeholder=""
                    onChangeText={handleDescriptionChange}
                    value={description}
                />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 10,}}>
                    <Text style={{ fontSize:11,color:'black' }}>For example: no dings, water tight- optional</Text>
                    <Text style={styles.counterText}>{wordCount}/100</Text>
                </View>
                <View />
            </View>
                </ScrollView>
                <View style={{ paddingTop: 50, position: 'relative', bottom: 40, left: 0, right: 0, alignItems: 'center' }}>
                    <TouchableOpacity
                        onPress={handleSubmit}
                        style={{
                            backgroundColor: '#59cae9',
                            paddingVertical: 24,
                            paddingHorizontal: 48,
                            borderRadius: 30,
                            alignItems: 'center',
                            width: 300
                        }}
                    >
                        <Text style={{ color: 'black', fontWeight: 'bold' }}>Post</Text>
                    </TouchableOpacity>
                </View>
            </View>
          
        </TouchableWithoutFeedback>

    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        paddingLeft: 70,
        paddingRight: 70

    },
    input: {
        height: 50,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 5,

        textAlign: 'center',
        fontSize: 20

    },
    counterText: {
        fontSize: 12,
        color: 'black',
    }
});

export { PriceDescription };
