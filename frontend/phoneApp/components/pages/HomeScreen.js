import BasicStyles from '../styles/BasicStyles';
import React, {Component, useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity, FlatList, StyleSheet, SafeAreaView ,Platform, ScrollView, Dimensions, Animated, Easing, Button, TextInput} from 'react-native';
import Video from 'react-native-video';
import EStyleSheet from 'react-native-extended-stylesheet';
import LinearGradient from 'react-native-linear-gradient';
import {Portal, Modal} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import Navbar from '../Navbar';

const sampleImages = [
    {
        id: 1,
        imagesrc: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=michael-dam-mEZ3PoFGs_k-unsplash.jpg&w=640',
        description: "Image 1",
        uri: 'https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png'
    },
    {
        id: 2,
        imagesrc: 'https://images.unsplash.com/photo-1569913486515-b74bf7751574?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=minh-pham-5yENNRbbat4-unsplash.jpg&w=640',
        description: "Image 2"
    },
    {
        id: 3,
        imagesrc: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=michael-dam-mEZ3PoFGs_k-unsplash.jpg&w=640',
        description: "Image 3"
    },
    {
        id: 4,
        imagesrc: 'https://images.unsplash.com/photo-1569913486515-b74bf7751574?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=minh-pham-5yENNRbbat4-unsplash.jpg&w=640',
        description: "Image 4"
    },
    {
        id: 5,
        imagesrc: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=michael-dam-mEZ3PoFGs_k-unsplash.jpg&w=640',
        description: "Image 5"
    },
    {
        id: 6,
        imagesrc: 'https://images.unsplash.com/photo-1569913486515-b74bf7751574?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=minh-pham-5yENNRbbat4-unsplash.jpg&w=640',
        description: "Image 6"
    }
]

const HomeScreen = ({ navigation }) => {
    return (        
        <View style={{
            flex: 1,
            // alignItems: 'center',
            // justifyContent: 'center',
            backgroundColor: '#fff'
        }}>
            <SafeAreaView>
                <ScrollView>
                    {/* <Image source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}} style={{width: "100%"}}></Image> */}
                    {/* <Image source={{uri: 'https://reactjs.org/logo-og.png'}} style={{width: "100%", height: 700}} /> */}
                    <Image source={require("../images/HSImages/HS2.png")} style={{width: "100%", height: 700}}></Image>
                    <Image source={require("../images/HSImages/HS3.png")} style={{width: "100%", height: 700}}></Image>
                    <Image source={require("../images/HSImages/HS4.png")} style={{width: "100%", height: 700}}></Image>
                    <Image source={require("../images/HSImages/HS5.png")} style={{width: "100%", height: 700}}></Image>
                    <Image source={require("../images/HSImages/HS6.png")} style={{width: "100%", height: 700}}></Image>
                    {/* <Icon style={{padding: 10}} name="camera" size={20} color="#fff" /> */}
                </ScrollView>
            </SafeAreaView>
            <Navbar/>
        </View>
    )
}

export default HomeScreen;