import React,{useState , createRef,useEffect , Component} from 'react';
import { 
    View, 
    ScrollView ,
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar,
    Alert,
    ImageBackground
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import * as Notifications from 'expo-notifications'
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';
import { useTheme } from 'react-native-paper';
import axios from 'axios';
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';
const styles= StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
    },
    welcometext:{
        fontSize:20,
        marginTop:12,
        marginLeft:12,

    },
    cardrow:{
        flexDirection:'row',
        marginTop:12,
        marginLeft:12,

    },
    cardstyle:{
        marginLeft:12,
        marginRight:12,
        marginTop:12,
        flexDirection:'row',
      },
      cardtext:{
        color:'rgb(223,98,51)',
        fontSize:22,
        marginTop:12,
        width:'50%'
      },
      cardtext2:{
        color:'rgb(88,178,177)',
        fontSize:22,
        marginTop:12,
        width:'50%'
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
        color:'white',
        marginTop:12
      }


})

export class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcometext}>
                    Hello Vaivas,
                </Text>
                <Text style={styles.welcometext}>
                    Welcome back!!
                </Text>
                <View style={styles.cardrow}>
                <Card style={styles.cardstyle}>
                    <Card.Content style={{flexDirection:'row'}}>
                        <Text style={styles.cardtext2}>Fuel Level  </Text>
                        <Title style={styles.cardvalue}>8</Title>
                        <Paragraph  style={{marginTop:20}}> L</Paragraph>
                    </Card.Content>
                    <Card.Content style={{flexDirection:'row',marginLeft:20}}>
                    
                    </Card.Content>
                </Card>
                </View>
            </View>
            
            
        )
    }
}

export default Home
