import { StyleSheet, Text, TextInput, View, Image,  Button, TouchableOpacity } from 'react-native';
import BasicStyles from '../styles/BasicStyles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ToggleSwitch from 'toggle-switch-react-native'


const PrivacyOptionsScreen = ({ navigation }) => {
    return(
        <View style={{}}>
            <Text style={{fontWeight: 'bold'}} >Privacy Options</Text>
            <View>
                <ToggleSwitch
                    isOn={false}
                    onColor="green"
                    offColor="grey"
                    label="Collect User Data"
                    labelStyle={{ color: "black", fontWeight: "900" }}
                    size="large"
                    onToggle={isOn => console.log("changed to : ", isOn)}
                />
            </View>
            
        </View>
    )
}

export default PrivacyOptionsScreen;