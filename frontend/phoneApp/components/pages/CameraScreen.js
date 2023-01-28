import { StyleSheet, Text, TextInput, View, Image,  Button, TouchableOpacity } from 'react-native';
import BasicStyles from '../styles/BasicStyles';

const CameraScreen = ({ navigation }) => {
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
                    This is where the infinite scroll demo will go 
                </Text>
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
                <TouchableOpacity onPress={() => navigation.navigate('OptionsScreen')}>
                    <Image source={require("../images/camera.png")}></Image>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('CameraScreen')}>
                    <Image source={require("../images/notes.png")}></Image>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CameraScreen;