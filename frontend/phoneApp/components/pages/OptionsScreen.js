import { StyleSheet, Text, TextInput, View, Image,  Button, TouchableOpacity } from 'react-native';
import BasicStyles from '../styles/BasicStyles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { auth } from '../../firebase';


function logOut(navigation){
    auth.signOut().then(() => {
        console.log("User signed out");
    }).catch((error) => {
        console.log(error);
    });
    navigation.navigate('LogInScreen')
}

const OptionsScreen = ({ navigation }) => {
    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#fff'
        }}>
            <View style={{
                flex: 1,
                // alignItems: 'center',
                width: '100%',
                backgroundColor: '#f1f1f1',
                flexDirection: 'column'
            }}>
                <View style={{borderBottomWidth: 3, borderBottomColor: "#A0A0A0"}}>
                    {/* This is the profile button */}
                    <TouchableOpacity
                    onPress={() => navigation.navigate('ProfileScreen')}
                        style={{
                            flexDirection: 'row',
                            backgroundColor: '#fff',
                            padding: 15,
                        }}
                        // onPress={() => navigation.navigate('ProfileScreen')}
                    >
                        <View>
                            <Image source={require('../images/ProfilePic.png')} width={50} height={50} ></Image>
                        </View>
                        <View
                            style={{ alignContent: 'center', justifyContent: 'center', marginLeft: 10 }}
                        >
                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Adam Johnson</Text>
                            <Text style={{ fontSize:10 }}>manage account</Text>
                        </View>
                        <View style={{ justifyContent: 'center', marginLeft: 20 }}>
                            <Icon name="arrow-right" size={50} color="#000" />
                        </View>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('PrivacyOptions')} style={BasicStyles.profileSection}><Text>Privacy Options</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('PrivacyPolicies')} style={BasicStyles.profileSection}><Text>Privacy Policies</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('ReportAProblem')} style={BasicStyles.profileSection}><Text>Report a problem</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Help')} style={BasicStyles.profileSection}><Text>Help</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => {logOut(navigation)}} style={BasicStyles.profileSection}>
                    <Text>Log Out</Text>

                </TouchableOpacity>
            </View>
        </View>
    )
}

export default OptionsScreen;