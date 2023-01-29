import { StyleSheet, Text, TextInput, View, Image,  Button, TouchableOpacity } from 'react-native';
import BasicStyles from '../styles/BasicStyles';
import Navbar from '../Navbar';

const ShareScreen = ({ navigation }) => {
    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#fff'
        }}>
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                backgroundColor: '#fff'
            }}>
                <Text style={{
                    color: '#8E8E8E',
                    fontSize: 15,
                    fontWeight: 'bold',
                    marginHorizontal: 100,
                    textAlign: 'center',
                }}>
                    Share feature coming soon!
                </Text>
            </View>
            <Navbar/>
        </View>
    )
}

export default ShareScreen;