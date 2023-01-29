import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, TextInput, View, Image,  Button, TouchableOpacity } from 'react-native';
import BasicStyles from '../styles/BasicStyles';
import { Camera, CameraType} from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import CameraButton from '../CameraButton';
import Navbar from '../Navbar';


const CameraScreen = ({ navigation }) => {
    const [hasCameraPermission, setHasCameraPermission] = useState(null);
    const [image, setImage] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.front); 
    const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
    const cameraRef = useRef(null);

    // Runs when the component is mounted
    useEffect(() => {
        //  Async function to request camera permissions
        (async () => {
            MediaLibrary.requestPermissionsAsync();
            const cameraStatus = await Camera.requestCameraPermissionsAsync();
            setHasCameraPermission(cameraStatus.status === 'granted');
        })();
    }, []);

    const takePicture = async () => {
        if(cameraRef) {
            try{
                const data = await cameraRef.current.takePictureAsync();
                setImage(data.uri);
            } catch(e) {
                console.log(e);
            }
        }
    }

    const saveImage = async () => {
        if(image) {
            try{
                await MediaLibrary.createAssetAsync(image);
                alert("Image saved")
                uploadImage(result.assets[0].uri, "Image-name").then(() => {
                    Alert.alert("Success!");
                })
                .catch((error) => {
                    Alert.alert(error);
                })
                setImage(null);
            } catch(e) {
                console.log(e);
            }
        }

    }
    

    if(hasCameraPermission === false) {
        return <Text>The app does not have access to the camera, please navigate to settings and enable camera permissions to have access to this feature</Text>
    }

    uploadImage = async (uri, imageName) => {
        const response = await fetch(uri);
        const blob = await response.blob();

        var ref = firebase.storage().ref().child("tempImages/" + imageName);
        return ref.put(blob);
    }

    return (
        <View style={BasicStyles.container1}>
            {/* THIS IS THE MAIN CAMERA SECTION */}
            <View style={{
                flex: 1,
                justifyContent: 'center',
                width: '100%',
                backgroundColor: '#fff'
            }}>
                { // If the image is null, show the camera
                !image ? 
                    <Camera
                        style={BasicStyles.camera}
                        type={type}
                        flashMode={flash}
                        ref={cameraRef}
                    >
                        <View style={{
                            flex: 1,
                            justifyContent: 'space-between',
                            width: '100%',
                        }}>
                            <View style = {{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                width: '100%',
                                padding: 20,
                                flex:0                                
                            }}>
                                <CameraButton title="" color="#fff" icon={'retweet'} onPress={() => {
                                    setType(type === CameraType.back ? CameraType.front: CameraType.back);
                                }}/>
                                <Text
                                    style={{
                                        fontSize: 12,
                                        paddingHorizontal: 50,
                                        color: 'white',
                                        fontWeight: 'bold',
                                        textAlign: 'center',
                                        flex: 1
                                    }}
                                >
                                    Take a photo of your face and well find the perfect haricut for you!
                                </Text>
                                <CameraButton title="" color={flash === Camera.Constants.FlashMode.off ? 'gray' : '#f1f1f1'} icon={'flash'} onPress={() => {
                                    setFlash(flash === Camera.Constants.FlashMode.off 
                                    ? 
                                    Camera.Constants.FlashMode.on 
                                    : 
                                    Camera.Constants.FlashMode.off)
                                }}/>
                            </View>
                            <View style={{
                                flex: 1,
                                justifyContent: 'flex-end',
                                alignContent: 'center',
                                width: '100%',
                            }}>
                                <CameraButton title={'Take a picture'} icon='camera' color={'#fff'} onPress={takePicture} styleType={BasicStyles.takePhotoButton}/>
                            </View>
                        </View>
                    </Camera>
                // Else if the image is taken, show the image
                :
                    <View>
                        <Image source={{uri: image}} style={{width: '100%', height: '100%'}}/>
                        <View style={{
                            flex: 1,
                            justifyContent: 'flex-end',
                            position: 'absolute',
                            bottom: 0,
                            width: '100%',
                        }}>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between'
                            }}>
                                <CameraButton title={'Retake'} icon='retweet' color={'#fff'} styleType={BasicStyles.smallButton}
                                    onPress={() => setImage(null)}
                                />
                                {/* THIS IS THE SAVE BUTTOn */}
                                <CameraButton title={'Save'} icon='check' color={'#fff'} styleType={BasicStyles.smallButton}
                                    onPress={() => {
                                        saveImage();
                                        navigation.navigate('ProcessScreen')
                                    }}
                                />
                            </View>
                        </View>
                    </View>
                }
            </View>
        </View>
    )
}

export default CameraScreen;