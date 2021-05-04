import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { 
    SafeAreaView,
    View, 
    ScrollView ,
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar,
    Alert,
    Image,
    ImageBackground
} from 'react-native';
export class Breathing extends Component {
    render() {
        return (
        <View>
        <StatusBar
        animated={true}
        backgroundColor="rgb(54,118,203)"/>
        <Icon.Button name="ios-menu" size={25} backgroundColor="rgb(54,118,203)" onPress={() => this.props.navigation.navigate('Home')}> Back</Icon.Button>   
        </View>
        )
    }
}

export default Breathing
