import React,{useState , createRef,useEffect , Component} from 'react';
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
import { Button } from 'react-native-paper';
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
        fontWeight:"500",
    },
    cardrow:{
        flexDirection:'row',
        marginTop:12,
        marginBottom:28,

    },
    buttonrow:{
        flexDirection:'row',
        marginTop:22,
        // marginLeft:12,

    },
    cardstyle:{
        marginLeft:12,
        marginRight:12,
        marginTop:12,
        flexDirection:'row',
      },
      cardtext:{
        color:'rgb(54,118,203)',
        fontSize:22,
        marginTop:12,
      },
      buttontext:{
        color:'rgb(54,118,203)',
        fontSize:18,
        marginTop:12,
      },

      fourbuttons:{
        marginLeft:10,
        marginRight:10,
      },
      cardbutton:{
        alignItems:'center',
          width:'40%',
          margin:10,
          justifyContent:'center'
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
                <Card>
                    <Card.Content>
                        <Text style={styles.cardtext}>9 out of 14 days </Text>

                    </Card.Content>
                </Card>
                </View>

                <View style={styles.buttonrow}>
                    <Card style={[styles.cardbutton,]}>
                        <Card.Content>
                            <Image style={{width:50,height:50,alignSelf:'center'}} source={require('../assets/symptoms2.png')}/>
                            <Text style={styles.buttontext}>Symptoms </Text>
                        </Card.Content>
                    </Card>
                    <Card style={[styles.cardbutton,]}>
                        <Card.Content>
                            <Image style={{width:50,height:50,alignSelf:'center'}} source={require('../assets/reportcc.png')}/>
                            <Text style={styles.buttontext}>Report </Text>
                        </Card.Content>
                    </Card>
                </View>
                <View style={styles.buttonrow}>
                    <Card style={[styles.cardbutton,]}>
                        <Card.Content>
                            <Image style={{width:50,height:50,alignSelf:'center'}} source={require('../assets/symptoms2.png')}/>
                            <Text style={styles.buttontext}>Goals </Text>
                        </Card.Content>
                    </Card>
                    <Card style={[styles.cardbutton,]}>
                        <Card.Content>
                            <Image style={{width:50,height:50,alignSelf:'center'}} source={require('../assets/reportcc.png')}/>
                            <Text style={styles.buttontext}>Something </Text>
                        </Card.Content>
                    </Card>
                </View>
               
                {/* <View style={styles.buttonrow}>
                    <Button style={[styles.cardbutton,{backgroundColor:'rgb(34,88,163)'}]} mode="contained">
                        Symptoms
                    </Button>
                    <Button style={[styles.cardbutton,{backgroundColor:'rgb(34,88,163)'}]} mode="contained">
                        <Image style={{width:50,height:50,alignSelf:'center'}} source={require('../assets/reportcc.png')}/>
                        <Text style={{alignSelf:'center',fontSize:20}}>Report</Text>
                    </Button>
                </View>
                <View style={styles.buttonrow}>
                    <Button style={[styles.cardbutton,{backgroundColor:'rgb(34,88,163)'}]} mode="contained">
                        Goals
                    </Button>
                    <Button style={[styles.cardbutton,{backgroundColor:'rgb(34,88,163)'}]} mode="contained">
                        Helplines
                    </Button>
                </View> */}
            </View>
            
            
        )
    }
}

export default Home
