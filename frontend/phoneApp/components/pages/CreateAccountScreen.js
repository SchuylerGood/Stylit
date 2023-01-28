import { StyleSheet, Text, TextInput, View, Image,  Button, TouchableOpacity } from 'react-native';
import BasicStyles from '../styles/BasicStyles';

const CreateAccountScreen = ({ navigation }) => {
    return (
      <View style={{ 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor: '#2A4ED0'
      }}>
        <Text style={BasicStyles.bigText}>
            First some things about you...
        </Text>
        <TextInput style={BasicStyles.textField}>	
            <Text style={BasicStyles.fieldText}>First Name</Text>
        </TextInput>
        <TextInput style={BasicStyles.textField}>	
            <Text style={BasicStyles.fieldText}>Last Name</Text>
        </TextInput>
        <TextInput style={BasicStyles.textField}>	
            <Text style={BasicStyles.fieldText}>Email</Text>
        </TextInput>
        <Text style={{
            marginTop: 20,
            color: '#fff',
            fontWeight: 'bold'
        }}>
            already have an account?
        </Text>
        <View style={{
            flexDirection: 'row',
        }}>
            <TouchableOpacity
                onPress={() => navigation.navigate('LogInScreen')}
            >
                <Text style={{
                    color: '#fff',
                    fontWeight: 'bold',
                    textDecorationLine: 'underline'
                }}>
                    login
                </Text>
            </TouchableOpacity>
            <Text style={{color: '#fff', fontWeight: 'bold'}}> instead</Text>
        </View>
        <TouchableOpacity
            title="Next"
            color="#000"
            style={BasicStyles.bigButton}
            onPress={() => navigation.navigate('PasswordSetupScreen')}
        >
            <Text style={{
                color: '#000',
                fontWeight: 'bold'
            }}>Next</Text>
        </TouchableOpacity>

      </View>
    );
  }

export default CreateAccountScreen;