import { StyleSheet, Text, View, Image,  Button, TouchableOpacity } from 'react-native';
import Arrow from "../images/WhiteArrow.png";

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
        
        >
            Finding your next great haristyle
        </Text>
        <TouchableOpacity
            style={{
                // backgroundColor: '#fff',
                padding: 10,
                paddingHorizontal: 20,
                borderRadius: 10,
                marginTop: 20
            }} 
            onPress={() => navigation.navigate('LogInScreen')}
        >
            <Image source={require('../images/WhiteArrow.png')}></Image>
        </TouchableOpacity>
      </View>
    );
  }


export default LogInScreen;