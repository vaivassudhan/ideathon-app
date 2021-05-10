import React, { Component } from 'react';
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
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';
import CountdownCircle from "../Components/CountdownTimer";
export class Profile extends Component {
    render() {
        return (
            <View>
            
            <View style={styles.container}>

            <CountdownCircle
                seconds={1209600}
                radius={140}
                borderWidth={25}
                color="rgb(54,118,203)"
                bgColor="#fff"
                shadowColor="rgb(97,212,203)"
                textStyle={{ fontSize: 70}}
                onTimeElapsed={() => this.props.navigation.navigate("Home")}
              />
                
            </View>
            </View>
        )
    }
}

export default Profile
const styles = StyleSheet.create({
    container: {
        margin:12,
        justifyContent:'center',
        alignItems:'center',
      },
      logo: {
        width: 70,
        height:70,
        marginRight:28
      },
      cardlogo:{
        width: 70,
        height:70,
        marginRight:8
      },
      cardlogo2:{
        width: 50,
        height:50,
        marginRight:5
      },
      head: {
          marginTop:4,
          fontSize:32,
      },
      headview: {
        marginTop:5,
        marginLeft:28,
        marginRight:32,
        marginBottom:14,
        flexDirection:'row'
      },
      cardstyle:{
        marginLeft:12,
        marginRight:12,
        marginTop:12,
        flexDirection:'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 11.95,
        borderRadius:20,

        elevation: 8,
      },
      cardtext:{
        color:'rgb(223,98,51)',
        fontSize:22,
        marginTop:12,
        width:'50%'
      },
      cardtext2:{
        color:'rgb(54,118,203)',
        fontSize:22,
        marginTop:12,
        margin:12,
        width:'70%'
      },
      cardtext3:{
        // color:'rgb(56, 130, 241)',
        color:'rgb(85,177,94)',
        fontSize:22,
        marginTop:12,
        width:'50%'
      },
      cardtext4:{
        color:'#dc4b63',
        fontSize:22,
        marginTop:12,
        width:'50%'
      },
      cardvalue:{
        color:'black',
        marginTop:12
      }
    
});