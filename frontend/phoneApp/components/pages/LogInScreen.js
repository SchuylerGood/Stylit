import { StyleSheet, TextInput, Text, View, Button, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import BasicStyles from '../styles/BasicStyles';
import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { auth } from '../../firebase'


const LogInScreen = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
          if (user) {
            navigation.navigate('HomeScreen')
          }
        })
    
        return unsubscribe
      }, [])

      const handleSignup = () => {
        auth
        .createUserWithEmailAndPassword(email, password)
        .then(userCredentials => {
          const user = userCredentials.user
          console.log('Registered with: ', user.email)
        })
        .catch(error => alert(error.message))
      }

      const handleLogin = () => {
        auth
        .signInWithEmailAndPassword(email, password)
        .then(userCredentials => {
          const user = userCredentials.user
          console.log('Logged in with: ', user.email)
        })
        .catch(error => alert(error.message))
      }

    return (
      <View style={{ 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#2A4ED0'
    }}>
        <Text style={BasicStyles.bigText}> Welcome back! </Text>
        <TextInput style={BasicStyles.textField} placeholder="Email" value={email} onChangeText={text => setEmail(text)} placeholderTextColor="#fff">	
            {/* <Text style={BasicStyles.fieldText}>Email</Text> */}
        </TextInput>
        <TextInput style={BasicStyles.textField} placeholder="Password" value={password} onChangeText={text => setPassword(text)} placeholderTextColor="#fff">	
            {/* <Text style={BasicStyles.fieldText}>Password</Text> */}
        </TextInput>
        <TouchableOpacity
            onPress={() => navigation.navigate('ForgotPasswordScreen')}
        >
            <Text style={BasicStyles.forgotpassword}>forgot your password?</Text>
        </TouchableOpacity>
        

        {/* LOGIN BUTTON */}
        <TouchableOpacity
            title="Log In"
            color="#fff"
            onPress={handleLogin}   
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


        {/* CREATE ACCOUNT BUTTON */}
        <TouchableOpacity
            title="Create an Account"
            color="#fff"
            onPress={handleSignup}
        >
            <Text style={BasicStyles.loginButton}>Create an Account</Text>
        </TouchableOpacity>
      </View>
    );
  }


export default LogInScreen;