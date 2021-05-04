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

export class Symptoms extends Component {
    render() {
        return (
            <View style={styles.container}>
                {/* <Image style={styles.backgroundimage} source={require('../assets/bg1.png')}/> */}
                <View style={styles.incont}>
                    <Text>
                        hello
                    </Text>
                </View>
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