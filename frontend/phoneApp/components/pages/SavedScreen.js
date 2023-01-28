import { StyleSheet, Text, TextInput, View, Image,  Button, TouchableOpacity } from 'react-native';
import BasicStyles from '../styles/BasicStyles';
import HairStyleComponent from '../HairStyleComponent';

const savedImages = [];
savedImages.push(require('../images/HSImages/HS1.png'));
savedImages.push(require('../images/HSImages/HS2.png'));
savedImages.push(require('../images/HSImages/HS3.png'));
savedImages.push(require('../images/HSImages/HS4.png'));
savedImages.push(require('../images/HSImages/HS5.png'));
savedImages.push(require('../images/HSImages/HS6.png'));

const SavedScreen = ({ navigation }) => {
    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#fff'
        }}>
            <View style={{
                flex: 1,
                alignItems: 'left',
                width: '100%',
                backgroundColor: '#fff',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
            }}>
                {/* This is where the saved images go */}
                <HairStyleComponent props={{image: savedImages[0]}}/>
                <HairStyleComponent props={{image: savedImages[1]}}/>
                <HairStyleComponent props={{image: savedImages[2]}}/>
                <HairStyleComponent props={{image: savedImages[3]}}/>
                <HairStyleComponent props={{image: savedImages[4]}}/>
                <HairStyleComponent props={{image: savedImages[5]}}/>
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

export default SavedScreen;