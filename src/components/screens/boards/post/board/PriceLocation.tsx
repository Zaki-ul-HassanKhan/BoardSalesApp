import { AlertDialog, Button } from 'native-base';
import React, { useState } from 'react';
import { FlatList, Keyboard } from 'react-native';
import { TouchableWithoutFeedback, Switch } from 'react-native';
import { StyleSheet } from 'react-native';
import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { useAuthContext } from '../../../../context/AuthContext';


const PriceLocation = () => {
    const [price, setPrice] = useState('');
    const auth = useAuthContext();
    const [isOpen, setIsOpen] = React.useState(false);
    const [board, setBoard] = useState(auth.userBoards);
    const [clicked, setClicked] = useState(false);
    const [data] = useState(auth.lookups.locations);
    const [selectedLocation, setSelectedLocation] = useState(0);
    const [selectedShowLocation, setSelectedShowLocation] = useState("");
    const [isSwapConsidered, setIsSwapConsidered] = useState(false);
    const onClose = () => setIsOpen(false);
    const onOk = () => {
        board.Price = price;
        setBoard(board);
        setIsOpen(false);
    }
    const cancelRef = React.useRef(null);
    const [Locationtext, setLocationtext] = useState('');
    const handleTextChange = (text: string) => {
        setPrice(text);
    };
    const handleSubmit = () => {
        board.Price = price;
        board.ConsiderSwap = isSwapConsidered;
        auth.setSelectedTab(12);

    };

    const handleButtonPress = () => {
        setIsSwapConsidered(!isSwapConsidered);
    };

    const handleToggleChange = (value: boolean) => {
        setIsSwapConsidered(value);
    };

    const MakeitFeaturedPost = () => {
        setIsOpen(true);
        board.IsFeatured = true;
        board.Vintage = false;
        board.TeamBoard = false;
    };
    const TeamBoard = () => {
        setIsOpen(true);
        board.IsFeatured = false;
        board.Vintage = false;
        board.TeamBoard = true;
    }
    const Vintage = () => {
        setIsOpen(true);
        board.IsFeatured = false;
        board.Vintage = true;
        board.TeamBoard = false;
    }
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
                    <View style={{ paddingTop: 10, alignItems: 'center' }}>
                        <TouchableOpacity
                            onPress={handleButtonPress}
                            style={{
                                backgroundColor: '#487bf5',
                                paddingVertical: 12,
                                paddingHorizontal: 24,
                                borderRadius: 7,
                                alignItems: 'center',
                                width: 200,
                            }}
                        >
                            <Text style={{ color: '#fff' }}>Will Consider a Swap</Text>
                        </TouchableOpacity>
                        {(
                            <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ marginRight: 10 }}>Yes</Text>
                                <Switch
                                    value={isSwapConsidered}
                                    onValueChange={handleToggleChange}
                                    trackColor={{ false: '#a4bdfa', true: '#81b0ff' }}
                                    thumbColor={isSwapConsidered ? '#f5dd4b' : '#6367ed'}
                                />
                                <Text style={{ marginLeft: 10 }}>No</Text>
                            </View>
                        )}
                    </View>
                    <View style={{ alignItems: 'center', paddingTop: 20 }}>
                        <Text style={{ color: 'black', fontWeight: '900', fontSize: 15 }}>Set your Location</Text>
                    </View>
                    <View style={{
                        display: 'flex', justifyContent: 'center', padding: 10,
                        paddingLeft: 85
                    }}>

                        <TouchableOpacity
                            style={{
                                width: '75%',
                                height: 50,
                                borderRadius: 10,
                                borderWidth: 0.5,
                                marginTop: 10,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                paddingLeft: 15,
                                paddingRight: 30
                            }}
                            onPress={() => {
                                setClicked(!clicked);
                            }}>
                            <Text style={{ fontWeight: '600' }}>
                                {selectedLocation == 0 ? 'Select Location' : selectedShowLocation}
                            </Text>
                        </TouchableOpacity>
                        {clicked ? (
                            <View
                                style={{
                                    elevation: 5,
                                    marginTop: 80,
                                    height: 300,
                                    marginLeft: 30,
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: "center",
                                    width: '75%',
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
                                                    setSelectedLocation(item.key);
                                                    setSelectedShowLocation(item.value)
                                                    setClicked(!clicked);
                                                    board.Location = item.key;
                                                    board.UserId = auth.user.userId;
                                                    auth.setUserBoards(board);
                                                }}>
                                                <Text style={{ fontWeight: '600' }}>{item.value}</Text>
                                            </TouchableOpacity>
                                        );
                                    }}
                                />
                            </View>
                        ) : null}
                    </View>


                    <View style={{ paddingTop: 20, alignItems: 'center' }}>
                        <TouchableOpacity
                            onPress={MakeitFeaturedPost}
                            style={{
                                backgroundColor: '#487bf5',
                                paddingVertical: 6,
                                paddingHorizontal: 12,
                                borderRadius: 7,
                                alignItems: 'center',
                                width: 200,
                            }}
                        >
                            <Text style={{ color: '#fff' }}>Make it Featured Post?</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ paddingTop: 20, alignItems: 'center' }}>
                        <TouchableOpacity
                            onPress={TeamBoard}
                            style={{
                                backgroundColor: '#487bf5',
                                paddingVertical: 8,
                                paddingHorizontal: 24,
                                borderRadius: 7,
                                alignItems: 'center',
                                width: 150,
                            }}
                        >
                            <Text style={{ color: '#fff' }}>Team Board</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ paddingTop: 20, alignItems: 'center' }}>
                        <TouchableOpacity
                            onPress={Vintage}
                            style={{
                                backgroundColor: '#487bf5',
                                paddingVertical: 8,
                                paddingHorizontal: 24,
                                borderRadius: 7,
                                alignItems: 'center',
                                width: 100,
                            }}
                        >
                            <Text style={{ color: '#fff' }}>Vintage</Text>
                        </TouchableOpacity>
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
                <AlertDialog leastDestructiveRef={cancelRef} isOpen={isOpen} onClose={onClose}>
                    <AlertDialog.Content>
                        {/* <AlertDialog.CloseButton /> */}
                        <AlertDialog.Header>Special Post</AlertDialog.Header>
                        <AlertDialog.Body>
                            {`Hi ${auth.user.name}, \n`}
                            Thank you for considering our services for your special posting needs.
                            We strive to accommodate all requests to the best of our ability.
                            However, I wanted to kindly inform you that there will be an 10$
                            additional charge for the special posting of your item. This covers extra resources and attention required.
                            {'\n Please feel free to ask if you need more details. \n'}
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button.Group space={2}>
                                <Button variant="unstyled" colorScheme="coolGray" onPress={onClose} ref={cancelRef}>
                                    Cancel
                                </Button>
                                <Button colorScheme="success" onPress={onOk}>
                                    Ok
                                </Button>
                            </Button.Group>
                        </AlertDialog.Footer>
                    </AlertDialog.Content>
                </AlertDialog>
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

});

export { PriceLocation };
