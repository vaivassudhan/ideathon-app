import React,{useState , createRef,useEffect ,Component} from 'react';
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
import Slide from './Slide';
export class Intro extends Component {
    render(){
        return(
            <View>
                <Slide />
            </View>
        )
    }
}
export default Intro