// import BasicStyles from '../styles/BasicStyles';
import React, {Component, useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity, FlatList, StyleSheet, SafeAreaView ,Platform, ScrollView, Dimensions, Animated, Easing, Button, TextInput} from 'react-native';
//import Icon from 'react-native-vector-icons/FontAwesome';
import Navbar from '../Navbar';
import HSCard from '../HSCard';

const sampleImages = [
    {
        id: 1,
        imagesrc: require('../images/HSImages/HS1.png'),
        description: "Brown Curls",
    },
    {
        id: 2,
        imagesrc: require('../images/HSImages/HS2.png'),
        description: "Dyed Slightly Curled"
    },
    {
        id: 3,
        imagesrc: require('../images/HSImages/HS3.png'),
        description: "Wolf Cut"
    },
    {
        id: 4,
        imagesrc: require('../images/HSImages/HS4.png'),
        description: "Textured Straight Black Hair"
    },
    {
        id: 5,
        imagesrc: require('../images/HSImages/HS5.png'),
        description: "Short Curly Black Hair"
    },
    {
        id: 6,
        imagesrc: require('../images/HSImages/HS6.png'),
        description: "Messy Curly Hair"
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
                    <HSCard image={sampleImages[0].imagesrc} desc={sampleImages[0].description}/>
                    <HSCard image={sampleImages[1].imagesrc} desc={sampleImages[1].description}/>
                    <HSCard image={sampleImages[2].imagesrc} desc={sampleImages[2].description}/>
                    <HSCard image={sampleImages[3].imagesrc} desc={sampleImages[3].description}/>
                    <HSCard image={sampleImages[4].imagesrc} desc={sampleImages[4].description}/>
                    <HSCard image={sampleImages[5].imagesrc} desc={sampleImages[5].description}/>
                </ScrollView>
            </SafeAreaView>
            <Navbar/>
        </View>
    )
}

export default HomeScreen;