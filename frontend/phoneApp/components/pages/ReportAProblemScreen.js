import { StyleSheet, Text, TextInput, View, Image,  Button, TouchableOpacity } from 'react-native';
import BasicStyles from '../styles/BasicStyles';
import Icon from 'react-native-vector-icons/FontAwesome5';

const ReportAProblemScreen = ({ navigation }) => {
    return(
        <View>
            <Text style={BasicStyles.profileHeader}>Report a Problem</Text>
            <Text style={BasicStyles.profileText}>To report a problem you can 
            send all inquiries to help@styleFast.com, and our team will be sure 
            to get back to you within 7 business days.</Text>
        </View>
    )
}

export default ReportAProblemScreen;