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
export function Home(props){
    const [Name,setName]=useState('')
    const [Gender,setGender]=useState('')

    useEffect(() => {
        readData()
    }, [])

    const readData = async() => {
        try {
          userName = await AsyncStorage.getItem('Name');
          userGender = await AsyncStorage.getItem('Gender');
          userAge = await AsyncStorage.getItem('Age');
          userPhoneNumber = await AsyncStorage.getItem('PhoneNumber');
          setName(userName)
          setGender(userGender)
          
        } catch(e) {
          console.log(e);
        }
    }
        return (
            <View style={styles.container}>
                <Text style={styles.welcometext}>
                    Hello {Name},
                </Text>
                <Text style={styles.welcometext}>
                    Welcome back!!
                </Text>
                <View style={styles.cardrow}>
                <Card style={styles.daycard}>
                    <Card.Content>
                        <Text style={styles.daycardtext}>9 out of 14 days </Text>

                    </Card.Content>
                </Card>
                </View>

                <View style={styles.buttonrow}>
                    <Card style={[styles.cardbutton,]}>
                        <TouchableOpacity onPress={() =>{this.props.navigation.navigate('Symptoms')}} >
                        <Card.Content style={styles.buttoncardcontent}>
                            <Image style={{width:50,height:50,alignSelf:'center'}} source={require('../assets/symptoms2.png')}/>
                            <Text style={styles.buttontext}>Symptoms </Text>
                        </Card.Content>
                        </TouchableOpacity>
                    </Card>
                    <Card style={[styles.cardbutton,]}>
                    <TouchableOpacity onPress={() =>{this.props.navigation.navigate('Report')}} >
                        <Card.Content style={styles.buttoncardcontent}>
                            <Image style={{width:50,height:50,alignSelf:'center'}} source={require('../assets/reportcc.png')}/>
                            <Text style={styles.buttontext}>Report </Text>
                        </Card.Content>
                    </TouchableOpacity>
                    </Card>
                </View>
                <View style={styles.buttonrow}>
                    <Card style={[styles.cardbutton,]}>
                    <TouchableOpacity onPress={() =>{this.props.navigation.navigate('Goals')}} >
                        <Card.Content style={styles.buttoncardcontent}>
                            <Image style={{width:50,height:50,alignSelf:'center'}} source={require('../assets/target.png')}/>
                            <Text style={styles.buttontext}>Goals </Text>
                        </Card.Content>
                    </TouchableOpacity>
                    </Card>
                    <Card style={[styles.cardbutton,]}>
                    <TouchableOpacity onPress={() =>{this.props.navigation.navigate('Breathing')}} >
                        <Card.Content style={styles.buttoncardcontent}>
                            <Image style={{width:50,height:50,alignSelf:'center'}} source={require('../assets/heart.png')}/>
                            <Text style={styles.buttontext}>Breathing </Text>
                        </Card.Content>
                        </TouchableOpacity>
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

export default Home

const styles= StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        backgroundColor:'#f2f2f2'
    },
    welcometext:{
        fontSize:20,
        marginTop:12,
        marginLeft:12,
        fontWeight:"500",
    },
    cardrow:{
        flexDirection:'row',
        marginBottom:28,
    },
    buttonrow:{
        flexDirection:'row',
        marginTop:22,
    },
    daycard:{
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    },
    cardstyle:{
        marginLeft:12,
        marginRight:12,
        marginTop:12,
        flexDirection:'row',
      },
      daycardtext:{
        color:'rgb(54,118,203)',
        fontSize:22,
        marginTop:12,
      },
      buttontext:{
        color:'rgb(54,118,203)',
        fontSize:18,
        marginTop:12,
      },
      cardbutton:{
        alignItems:'center',
        width:'40%',
        margin:10,
        justifyContent:'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.48,
        shadowRadius: 11.95,
        borderRadius:20,
        elevation: 18,
      },
      buttoncardcontent:{
        marginTop:12,
        marginBottom:12
      }
})
