import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, TextInput, View, Image, Platform, Button, TouchableOpacity, Dimensions } from 'react-native';
import BasicStyles from '../styles/BasicStyles';
import { Camera, CameraType} from 'expo-camera';
// import * as MediaLibrary from 'expo-media-library';
import CameraButton from '../CameraButton';
import * as ImagePicker from 'expo-image-picker';
import { image } from './CameraScreen';

// import { arraySum } from '../../model/httpsSendData';


const ProcessScreen = ({navigation}) => {

    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;


    const [image, setImage] = useState(null);
    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
          }
        };
    

    return(
        <View style={{
            flex: 1,
            // justifyContent: 'center',
            alignItems: 'center',
        }}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
                padding: 20,
                backgroundColor: '#2A4ED0',
            }}>
                <TouchableOpacity title="Choose" onPress={pickImage} style={{
                    backgroundColor: '#6E80E1',
                    borderRadius: 30,
                }}>
                    <Text style={{
                        color: '#fff',
                        fontSize: 15,
                        fontWeight: 'bold',
                        paddingHorizontal: 30,
                        paddingVertical: 15,
                    }}>
                        Choose
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity title="Take Photo" onPress={() => {
                    navigation.navigate('CameraScreen');
                }} style={{
                    backgroundColor: '#6E80E1',
                    borderRadius: 30,
                }}>
                    <Text style={{
                        color: '#fff',
                        fontSize: 15,
                        fontWeight: 'bold',
                        paddingHorizontal: 30,
                        paddingVertical: 15,
                    }}>
                        Take Photo
                    </Text>
                </TouchableOpacity>
            </View>
            
            
            {image && <Image source={{ uri: image }} style={{
                    width: width - 100, 
                    height: height - 400,
                    borderRadius: 30,
                    marginTop: 50,
                    marginBottom: 50,
                }} />}

            
            <TouchableOpacity 
                style={{
                    backgroundColor: '#6E80E1',
                    paddingHorizontal: 30,
                    paddingVertical: 20,
                    borderRadius: 30,
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'absolute',
                    bottom: 50,
                }}
                onPress= {() => {
                    // make a file object from image uri using filreader
                    const file = new File([image], "image.jpg", {type: "image/jpeg", lastModified: Date.now()});

                    //encode the file object to base64
                    const reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onload = function () {
                        const base64 = reader.result;
                        const s1 = base64.split(',')[1];    
                        console.log(s1)

                        // This is what we send to the backend
                        const javaScriptObject = {
                            "image": s1,
                        }

                        // arraysum(javaScriptObject);

                    };
                    reader.onerror = function (error) {
                        console.log('Error: ', error);
                    };

                    


                    // navigation.navigate('HomeScreen');
                }}>

                <Text style={{
                    color: '#fff',
                    fontSize: 20,
                    fontWeight: 'bold',
                    backgroundColor: '#6E80E1',
                }}>Process</Text>
            </TouchableOpacity>
        </View>
    )
}


export default ProcessScreen;