import { StyleSheet, TextInput, Text, View, Button, TouchableOpacity } from 'react-native';
import BasicStyles from '../styles/BasicStyles';

const LogInScreen = ({ navigation }) => {
    return (
      <View style={{ 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#2A4ED0'
    }}>
        <Text style={BasicStyles.bigText}> Welcome back! </Text>
        <TextInput style={BasicStyles.textField}>	
            <Text style={BasicStyles.fieldText}>Email</Text>
        </TextInput>
        <TextInput style={BasicStyles.textField}>	
            <Text style={BasicStyles.fieldText}>Password</Text>
        </TextInput>
        <TouchableOpacity
            onPress={() => navigation.navigate('ForgotPasswordScreen')}
        >
            <Text style={BasicStyles.forgotpassword}>forgot your password?</Text>
        </TouchableOpacity>
            
        <TouchableOpacity
            title="Log In"
            color="#fff"   
        >
            <Text style={BasicStyles.loginButton}>Log In</Text>
        </TouchableOpacity>

        <Text
            style={{
                color: '#fff',
                fontWeight: 'bold',
                marginTop: 40
            }}
        >
            Dont have an acccount yet?
        </Text>
        <TouchableOpacity
            title="Create an Account"
            color="#fff"
            onPress={() => navigation.navigate('CreateAccountScreen')}
        >
            <Text style={BasicStyles.loginButton}>Create an Account</Text>
        </TouchableOpacity>
      </View>
    );
  }


export default LogInScreen;