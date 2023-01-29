import { useNavigation } from '@react-navigation/core';
import { StyleSheet, Text, TextInput, View, Image,  Button, Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Navbar = ({}) => {
    const Width = Dimensions.get('window').width;
    const Height = Dimensions.get('window').height;
    const navigation = useNavigation();
    return(
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            padding: 20,
            backgroundColor: '#2A4ED0',
            position: 'absolute',
            bottom: 0,
            zIndex: 3,
        }}>
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                position: 'absolute',
                bottom: 15,
            }}>
                <View style={{
                    width: 100,
                    height: 120,
                    borderRadius: 140 / 2,
                    backgroundColor: '#2A4ED0',
                    transform: [{ scaleX: 5}]
                }}/>
            </View>
            
 
            <TouchableOpacity 
                onPress={() => navigation.navigate('SavedScreen')}
                style={{
                    marginTop: 20,
                }}
            >
                {/* <Image source={require("./images/files.png")} ></Image> */}
                <Icon name="file" size={40} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={() => navigation.navigate('ShareScreen')}
                style={{
                    marginTop: 18,
                }}
            >
                {/* <Image source={require("./images/telegram.png")}></Image> */}
                <Icon name="share" size={45} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={() => navigation.navigate('HomeScreen')}

            >
                {/* <Image source={require("./images/home.png")}></Image> */}
                <Icon name="home" size={70} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={() => navigation.navigate('ProcessScreen')}
                style={{
                    marginTop: 20,
                }}
            >
                {/* <Image source={require("./images/camera.png")}></Image> */}
                <Icon name="camera" size={36} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={() => navigation.navigate('OptionsScreen')}
                style={{
                    marginTop: 15,
                }}
            >
                {/* <Image source={require("./images/notes.png")}></Image> */}
                <Icon name="bars" size={45} color="#fff" />
            </TouchableOpacity>
        </View>
    )
}

export default Navbar;