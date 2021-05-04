import React, { Component } from 'react'
import { 
    View, 
    ScrollView ,
    Text, 
    Image,
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar,
    Alert,
    ImageBackground
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
export class Helpline extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.statename}>Andhra Pradesh</Text>
                <View style={{flexDirection:'row'}}>
                    <Icon style={styles.callicon}  name="call" size={30} />
                    <Text style={styles.number}>4576876876</Text>
                </View>
            </View>
        )
    }
}
export default Helpline
const styles=StyleSheet.create({
    container:{
        flex:1,
        margin:30
    },
    statename:{
        fontSize:20,
        fontWeight:'500',
        marginBottom:8,
    },
    number:{
        color:'rgb(54,118,203)',
        fontSize:20,
        fontWeight:'400',
        marginTop:4,
        marginLeft:20,
    },  
    callicon:{
        height:30,
        width:30,
        marginLeft:10,
        color:'rgb(54,118,203)'
    }
})