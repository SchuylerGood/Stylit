import * as React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import BasicStyles from './styles/BasicStyles';

export default function Button({ title, onPress, icon, color, styleType }) {
    return(
        <TouchableOpacity onPress={onPress} style={styleType}>
            <Entypo name={icon} size={24} color = {color ? color : "f1f1f1"} />
            <Text style={BasicStyles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}