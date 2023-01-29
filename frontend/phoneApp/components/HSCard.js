import React, {Component, useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity, FlatList, StyleSheet, SafeAreaView ,Platform, ScrollView, Dimensions, Animated, Easing, Button, TextInput} from 'react-native';


const HSCard = ({ image, desc }) => {
    return (
        <View style={{
            flex: 1,
            // alignItems: 'center',
            // justifyContent: 'center',
            backgroundColor: '#fff'
        }}>
            <Text style={{
                fontSize: 30,
                fontWeight: 'bold',
                textAlign: 'left',
                color: '#fff',
                position: 'absolute',
                bottom: 70,
                marginLeft: 30,
                zIndex: 1,
            }}>{desc}</Text>
            <Image source={image} style={{width: "100%", height: 700}}></Image>
        </View>
    );
}

export default HSCard;