import { StyleSheet, Text, TextInput, View, Image,  Button, TouchableOpacity } from 'react-native';
import BasicStyles from '../styles/BasicStyles';
import Icon from 'react-native-vector-icons/FontAwesome5';

const OptionsScreen = ({ navigation }) => {
    return(
        <View style={{}}>
            <View style={{
                borderBottomWidth: 3, 
                borderBottomColor: "#A0A0A0",
                justifyContent : 'center',
                paddingLeft: 20,
                alignContent: 'center',
                backgroundColor: '#fff',
            }}>
                <View style={{width: 100, height: 100, marginVertical: 20, alignSelf: 'center'}}>
                    <Image style={{width: 100, height: 100, alignSelf: 'center', borderRadius: 50, borderWidth: 2}} source={require('../images/ProfilePic.png')}/>
                    <TouchableOpacity style={{backgroundColor: "#D9D9D9", borderRadius: 50, position: 'absolute', bottom: 0, right: 0}}>
                        <Icon style={{padding: 10}} name="camera" size={20} color="#fff" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={BasicStyles.profileSection}>
                <TouchableOpacity><Text style={{color: "#000"}}>First Name: Aidan</Text>
                </TouchableOpacity>
            </View>
            <View style={BasicStyles.profileSection}>
                <TouchableOpacity><Text style={{color: "#000"}}>Last Name: Johnson</Text>
                </TouchableOpacity>
            </View>
            <View style={BasicStyles.profileSection}>
                <TouchableOpacity><Text style={{color: "#000"}}>Email: adam.johnson@gmail.com</Text>
                </TouchableOpacity>
            </View>
            <View style={BasicStyles.profileSection}>
                <TouchableOpacity><Text style={{color: "#000"}}>Change Password</Text>
                </TouchableOpacity>
            </View>
            <View style={BasicStyles.profileSection}>
                <TouchableOpacity><Text style={{color: "#000"}}>Delete Account</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default OptionsScreen;