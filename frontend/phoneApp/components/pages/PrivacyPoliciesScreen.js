import { StyleSheet, Text, TextInput, View, Image,  Button, TouchableOpacity, FlatList} from 'react-native';
import BasicStyles from '../styles/BasicStyles';
import Icon from 'react-native-vector-icons/FontAwesome5';

const PrivacyPoliciesScreen = ({ navigation }) => {
    return(
        <View>
            <View>
                <Text style={BasicStyles.profileHeader}>Report a Problem</Text>
                <Text style={BasicStyles.profileText}>Personal Data: </Text>
            </View>
            <View>
                <FlatList
                    data={[
                        { key: 'Name' },
                        { key: 'Email' },
                        { key: 'Password' },
                        { key: 'Photos you take' },
                    ]}
                    renderItem={({ item }) => 
                        <View>
                            <Text style={BasicStyles.profileList}>{'\u2022'} {item.key}</Text>
                        </View>
                    }
                />
            </View>
            <View>
                <Text style={BasicStyles.profileText}>We collect this data to create your account credentials and it can 
                be managed in the manage account section in options. All of the data we 
                collect is given by you, the user. We do not collect any data outside of 
                this application. We use the photos you provide to match your face shape 
                to a haircut and after it is deleted from our app, and either remains on 
                your devices local storage or is deleted. Your photos are NEVER sent over 
                the internet or to the cloud.</Text>

                <Text style={BasicStyles.profileText}>We confirm that any third party with whom this app shares user 
                data with (for analytical tools or purposes, advertising networks and 
                third-party SDK's, as well as any parent, subsidiaries or other related 
                entities that will have access to user data) will provide the same or 
                equal protection of user data as stated in this privacy policy and required 
                by these Guidelines.</Text>

                <Text style={BasicStyles.profileText}>We retain user data for a short period of time to run it through our 
                algorithm, then we dispose of it after, unless the user decides on keeping
                said data (such as photos uploaded to the app). At any time the user can 
                request that their data be deleted (such as account authentication 
                information). However in requesting so, you will be forfeiting your account 
                and all data associated with your account.</Text>
            </View>
        </View>
    )
}

export default PrivacyPoliciesScreen;