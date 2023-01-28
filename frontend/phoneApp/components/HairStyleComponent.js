import { StyleSheet, Text, TextInput, View, Image,  Button, TouchableOpacity } from 'react-native';
import BasicStyles from './styles/BasicStyles';

function HairStyleComponent(props){
    return(
        <View style={{}}>
            <TouchableOpacity>
                <Image 
                source={props.props.image}
                 style={{
                    width: 130,
                    height: 130,
                }}/>
            </TouchableOpacity>
        </View>
    )
}

export default HairStyleComponent;