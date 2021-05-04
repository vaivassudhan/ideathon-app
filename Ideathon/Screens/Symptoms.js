import React, { Component } from 'react'
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
import Icon from 'react-native-vector-icons/Ionicons';
export class Symptoms extends Component {
    render() {
        return (
            <View style={{backgroundColor:'rgb(54,118,203)'}}>
                <StatusBar
                animated={true}
                backgroundColor="rgb(54,118,203)"/>
                <SafeAreaView>
                <Icon.Button name="arrow-back-sharp" size={25} backgroundColor="rgb(54,118,203)" onPress={() => this.props.navigation.navigate('Home')}> Back</Icon.Button>   
                </SafeAreaView>
            </View>
        )
    }
}

export default Symptoms
const styles= StyleSheet.create({
    backgroundimage:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width:null,
        height:null
    },
    container:{
        flex:1,
    },
    incont:{
        justifyContent: 'center',
        alignItems: 'center',
    }
   
})