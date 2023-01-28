import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Share } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// THIS IS THE LOGIN/REGISTRATION SCREENS
import LogInScreen from './components/pages/LogInScreen';
import LandingScreen from './components/pages/LandingScreen';
import CreateAccountScreen from './components/pages/CreateAccountScreen';
import PasswordSetupScreen from './components/pages/PasswordSetupScreen';

// THIS IS THE MAIN CONTENT SCREENS
import SavedScreen from './components/pages/SavedScreen';
import ShareScreen from './components/pages/ShareScreen';
import HomeScreen from './components/pages/HomeScreen';
import OptionsScreen from './components/pages/OptionsScreen';
import CameraScreen from './components/pages/CameraScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* THIS IS THE LOGIN/REGISTRATION SCREENS */}
        <Stack.Screen name="LandingScreen" component={LandingScreen} />
        <Stack.Screen name="LogInScreen" component={LogInScreen} />
        <Stack.Screen name="CreateAccountScreen" component={CreateAccountScreen} />
        <Stack.Screen name="PasswordSetupScreen" component={PasswordSetupScreen} />

        {/* THIS IS THE MAIN CONTENT SCREENS */}
        <Stack.Screen name="SavedScreen" component={SavedScreen} />
        <Stack.Screen name="ShareScreen" component={ShareScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="CameraScreen" component={CameraScreen} />
        <Stack.Screen name="OptionsScreen" component={OptionsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  splashScreen: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
