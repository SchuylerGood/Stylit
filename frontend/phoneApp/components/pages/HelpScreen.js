import { StyleSheet, Text, TextInput, View, Image,  Button, TouchableOpacity, FlatList } from 'react-native';
import BasicStyles from '../styles/BasicStyles';
import Icon from 'react-native-vector-icons/FontAwesome5';


const HelpScreen = ({ navigation }) => {
    return(
        <View>
            <View>
                <Text style={BasicStyles.profileHeader}> Frequently Asked Questions </Text>
            </View>
            <View>
                <FlatList
                    data={[
                        { key: 'I took a photo of my face and the algorithm gave me a result I didn\'t expect? \n\n We use a data set of over 280,000 faces to match your face structure with, and only select the certain few that match! If you would like to see different results, just hit the refresh button.' },
                        { key: 'There was an error saying that my face had no results? \n\n This could be the cause of using a photo with improper lighting or a bad angle. Try retaking the photo looking straight at the camera in a well lit space with natural light preferably.' },
                        { key: 'I forgot my password? \n\n You can manage your password by going to: Options > Account > Forgot Password' },
                        { key: 'How do I see who designed and made this app? \n\n So glad you asked! Our team can be found on our supporting website here: https://styleFast.com' },
                    ]}
                    renderItem={({ item }) => 
                        <View>
                            <Text style={BasicStyles.profileListHeader}>{'\u2022'} {item.key}</Text>
                        </View>}
                />
            </View>
        </View>
    )
}

export default HelpScreen;