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
    Linking,
    ImageBackground
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import helpline_nums from '../Data/helplines.js'
export class Helpline extends Component {
    render() {
        console.log(helpline_nums)
        return (
                <View style={styles.container}>
                <ScrollView>
                { helpline_nums.map((item, key)=>(
                    <View>
                    <Text key={key} style={styles.statename}>{item.state}</Text>
                    <View style={{flexDirection:'row'}}>
                        <Icon style={styles.callicon} onPress={() => {Linking.openURL(`tel:${item.number}`)}} name="call" size={25} />
                        <Text style={styles.number}  onPress={() => {Linking.openURL(`tel:${item.number}`)}}>{item.number}</Text>
                    </View>
                    <View
                    style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: 1,
                    }}
                    />
                    </View>
                ))}
                    </ScrollView>
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
        marginTop:0,
        marginLeft:20,
        marginBottom:12,
    },  
    callicon:{
        height:25,
        width:25,
        marginLeft:10,
        marginBottom:12,
        color:'rgb(54,118,203)'
    }
})