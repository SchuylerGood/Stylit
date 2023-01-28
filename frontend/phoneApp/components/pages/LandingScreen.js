import { StyleSheet, Text, View, Button, PermissionsAndroid } from 'react-native';


const LogInScreen = ({ navigation }) => {
    return (
      <View style={{ 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor: '#2A4ED0'
      }}>
        <Text style={{
            color: '#fff',
            fontSize: 30,
            fontWeight: 'bold',
            marginBottom: 20,
            textAlign: 'center',
            paddingHorizontal: 20
        }}
        
        >Finding your next great haristyle</Text>
        <Button
          title=" GO TO THE LOG IN "
          onPress={() => navigation.navigate('LogInScreen')}
          style={{
            backgroundColor: '#fff',
            color: '#fff',
          }}
        />
      </View>
    );
  }


export default LogInScreen;