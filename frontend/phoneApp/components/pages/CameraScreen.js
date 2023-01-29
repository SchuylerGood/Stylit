import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, TextInput, View, Image,  Button, TouchableOpacity } from 'react-native';
import BasicStyles from '../styles/BasicStyles';
import { Camera, CameraType} from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import CameraButton from '../CameraButton';

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
                console.log(data);
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
                setImage(null);
            } catch(e) {
                console.log(e);
            }
        }
    }

    if(hasCameraPermission === false) {
        return <Text>The app does not have access to the camera, please navigate to settings and enable camera permissions to have access to this feature</Text>
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
                            <CameraButton title={'Take a picture'} icon='camera' color={'#fff'} onPress={takePicture} styleType={BasicStyles.buttonButton}/>
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
                                <CameraButton title={'Save'} icon='check' color={'#fff'} styleType={BasicStyles.smallButton}
                                    onPress={saveImage}
                                />
                            </View>
                        </View>
                    </View>
                }
            </View>

            <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '100%',
                    padding: 20,
                    backgroundColor: '#2A4ED0'
            }}>
                <TouchableOpacity onPress={() => navigation.navigate('SavedScreen')}>
                    <Image source={require("../images/files.png")} ></Image>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('ShareScreen')}>
                    <Image source={require("../images/telegram.png")}></Image>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')} >
                    <Image source={require("../images/home.png")}></Image>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('CameraScreen')}>
                    <Image source={require("../images/camera.png")}></Image>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('OptionsScreen')}>
                    <Image source={require("../images/notes.png")}></Image>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CameraScreen;