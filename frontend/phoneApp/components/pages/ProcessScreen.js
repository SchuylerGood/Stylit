import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, TextInput, View, Alert, Image, Platform, Button, TouchableOpacity, Dimensions } from 'react-native';
import BasicStyles from '../styles/BasicStyles';
import * as ImagePicker from 'expo-image-picker';
import { image } from './CameraScreen';
import { auth } from '../../firebase';
import * as firebase from 'firebase';
import "firebase/storage";

// import { arraysum } from 'C:\Users\dylan\Documents\GitHub\qhacks2023\model\httpsSendData.js';
  

function uploadBlob(file) {
    const ref = firebase.storage().ref().child('some-child');
    const task = ref.put(file);
    task.on('state changed',(snapshot) => {
      console.log('Uploaded a blob or file!');
    }), (error) => {
        console.log(error);
    }, () => { 
        console.log('Upload complete');
    }
  }


const ProcessScreen = ({navigation}) => {

    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;
    const [image, setImage] = useState(null);
    const storage = firebase.storage();
    const storageRef = storage.ref();
    // const imageRef = storageRef.child(image);
    // const task = imageRef.put(image);

    const [files, setFiles] = useState([]);



    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        // console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
            uploadImage(result.assets[0].uri, "Image-name").then(() => {
                Alert.alert("Success!");
            })
            .catch((error) => {
                Alert.alert(error);
            })
        }
    };
    
        uploadImage = async (uri, imageName) => {
            const response = await fetch(uri);
            const blob = await response.blob();

            var ref = firebase.storage().ref().child("tempImages/" + imageName);
            return ref.put(blob);
        }
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
                onPress= { async () => {
                    const file = new File([image.uri], "image.jpg", {type: "image/jpeg", lastModified: Date.now()});
                    uploadBlob(file);
                    var request = require('request-promise');
                    async function arraysum() {
                        var data = {
                            "image": file
                        }
                        var options = {
                            method: 'POST',
                    
                            // http:flaskserverurl:port/route
                            uri: 'http://127.0.0.1:5000/arraysum',
                            body: data,
                    
                            // Automatically stringifies
                            // the body to JSON
                            json: true
                        };
                        var sendrequest = await request(options)
                        .then(function (parsedBody) {
                            console.log(parsedBody);
                            
                            // You can do something with
                            // returned data
                            let result;
                            result = parsedBody['result'];
                            console.log("Sum of Array from Python: ", result);
                        })
                        .catch(function (err) {
                            console.log(err);
                        });
                    }
                    arraysum();

                    

                    // const reader = new FileReader();
                    // reader.readAsDataURL(file);
                    // reader.onload = function () {
                    //     const base64 = reader.result;
                    //     const s1 = base64.split(',')[1];    
                    //     // console.log(s1)

                    //     const javaScriptObject = {
                    //         "image": s1,
                    //     }

                    // };
                    // reader.onerror = function (error) {
                    //     // console.log('Error: ', error);
                    // };

                    // task.on('state_changed', (snapshot) => {
                    //     const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    //     // console.log('Upload is ' + progress + '% done');
                    // }, (error) => {
                    //     // console.log(error);
                    // }, () => {
                    //     task.snapshot.ref.getDownloadURL().then((downloadURL) => {
                    //     // console.log('File available at', downloadURL);
                    // });
                    // });
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