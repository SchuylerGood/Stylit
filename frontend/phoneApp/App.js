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
import CameraScreen from './components/pages/CameraScreen';
  import ProcessScreen from './components/pages/ProcessScreen';
import OptionsScreen from './components/pages/OptionsScreen';


// THIS ARE THE PROFILE MANAGEMENT SCREENS
import ProfileScreen from './components/pages/ProfileScreen';
import PrivacyOptions from './components/pages/PrivacyOptionsScreen';
import PrivacyPolicies from './components/pages/PrivacyPoliciesScreen';
import ReportAProblem from './components/pages/ReportAProblemScreen';
import Help from './components/pages/HelpScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* THIS IS THE LOGIN/REGISTRATION SCREENS */}
        <Stack.Screen name="LandingScreen" component={LandingScreen} />
        <Stack.Screen name="LogInScreen"          component={LogInScreen} options={{headerBackVisible:false}} />
        <Stack.Screen name="CreateAccountScreen" component={CreateAccountScreen} />
        <Stack.Screen name="PasswordSetupScreen" component={PasswordSetupScreen} />


        {/* THIS IS THE MAIN CONTENT SCREENS */}
        <Stack.Screen name="SavedScreen"   component={SavedScreen} options={{headerBackVisible:false}}/>
        <Stack.Screen name="ShareScreen"   component={ShareScreen} options={{headerBackVisible:false}}/>
        <Stack.Screen name="HomeScreen"    component={HomeScreen} options={{headerBackVisible:false}} />
        <Stack.Screen name="CameraScreen"  component={CameraScreen}/>
          <Stack.Screen name="ProcessScreen" component={ProcessScreen}/>
        <Stack.Screen name="OptionsScreen" component={OptionsScreen} />


        {/* THIS IS THE PROFILE MANAGEMENT SECTION */}
        <Stack.Screen name="ProfileScreen"   component={ProfileScreen} />
        <Stack.Screen name="PrivacyOptions"  component={PrivacyOptions} />
        <Stack.Screen name="PrivacyPolicies" component={PrivacyPolicies} />
        <Stack.Screen name="ReportAProblem"  component={ReportAProblem} />
        <Stack.Screen name="Help"            component={Help} />
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
