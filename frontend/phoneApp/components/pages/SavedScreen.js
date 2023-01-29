import { StyleSheet, Text, TextInput, View, Image,  Button, TouchableOpacity } from 'react-native';
import BasicStyles from '../styles/BasicStyles';
import HairStyleComponent from '../HairStyleComponent';
import Navbar from '../Navbar';

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
            <Navbar/>
        </View>
    )
}

export default SavedScreen;