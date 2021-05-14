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
import style from '../Styles/style';
import AsyncStorage from '@react-native-community/async-storage';
import { Button } from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { useTheme } from 'react-native-paper';
import axios from 'axios';
import QuarantineTimer from "../Components/QuarantineTimer";
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';
import color from 'color';
export function Home({navigation}){


    const { colors } = useTheme();

    const styles= StyleSheet.create({
        container:{
            flex:1,
            alignItems:'center',
        },
        welcometext:{
            fontSize:20,
            marginTop:12,
            color:colors.text,
            // marginLeft:12,
            fontWeight:"700",
        },
        cardrow:{
            flexDirection:'row',
            marginBottom:28,
            marginTop:28,
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
            shadowRadius: 11.95,
            borderRadius:20,
    
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
          },
          buttontext:{
            color:'rgb(54,118,203)',
            fontSize:18,
            marginTop:12,
          },
          cardbutton:{
            alignItems:'center',
            backgroundColor:colors.accent1,
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
    const [Name,setName]=useState('')
    const [Gender,setGender]=useState('')
    const [Date ,setDate]=useState('')
    const [Days,setDays]=useState('')
    global.count=0
    useEffect(() => {
        readData();
        checkDate();
    }, [])

    const readData = async() => {
        try {
          userName = await AsyncStorage.getItem('Name');
          userGender = await AsyncStorage.getItem('Gender');
          userAge = await AsyncStorage.getItem('Age');
          userPhoneNumber = await AsyncStorage.getItem('PhoneNumber');
          userDate = await AsyncStorage.getItem('Date');
          setName(userName)
          setGender(userGender)
          setDate(userDate)
          global.userSymtoms = await AsyncStorage.getItem('Symtoms');
          
        } catch(e) {
          console.log(e);
        }
    }

    const report =() =>{
        count=count+1;
        navigation.navigate('Report',{symptoms:JSON.stringify(userSymtoms),count:count})
    }

    const checkDate = ()=>{

        console.log(userDate)
        const date1 = new window.Date(userDate);
        const date2 = new window.Date();
        const diffTime = Math.abs(date2 - date1);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
        console.log(diffTime + " milliseconds");
        console.log(diffDays + " days");
        if(diffDays<14){
            setDays(diffDays)
        }
        else{
            setDays('You are Quarantine free!!!')
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
                <QuarantineTimer
                    style={{ marginTop: 50 }}
                    until={1209600}
                    onFinish={() =>
                      alert("Your quarantine is over! You earned 120 points!")
                    }
                    onPress={() =>
                      alert("Don't give up! You're on your way to earning 120 points!")
                    }
                    size={20}
                  />
                {/* <View style={styles.cardrow}>
                <Card style={styles.daycard}>
                    <Card.Content>
                        <Text style={styles.daycardtext}> {Days} out of 14 days </Text>
                    </Card.Content>
                </Card>
                </View> */}

                <View style={styles.buttonrow}>
                    <Card style={[styles.cardbutton]}>
                        <TouchableOpacity onPress={() =>{navigation.navigate('Symptoms')}} >
                        <Card.Content style={styles.buttoncardcontent}>
                            <Image style={{width:50,height:50,alignSelf:'center'}} source={require('../assets/symptoms2.png')}/>
                            <Text style={styles.buttontext}>Symptoms </Text>
                        </Card.Content>
                        </TouchableOpacity>
                    </Card>
                    <Card style={[styles.cardbutton]}>
                    <TouchableOpacity onPress={() =>{report()}} >
                        <Card.Content style={styles.buttoncardcontent}>
                            <Image style={{width:50,height:50,alignSelf:'center'}} source={require('../assets/reportcc.png')}/>
                            <Text style={styles.buttontext}>Report </Text>
                        </Card.Content>
                    </TouchableOpacity>
                    </Card>
                </View>
                <View style={styles.buttonrow}>
                    <Card style={[styles.cardbutton]}>
                    <TouchableOpacity onPress={() =>{navigation.navigate('Goals')}} >
                        <Card.Content style={styles.buttoncardcontent}>
                            <Image style={{width:50,height:50,alignSelf:'center'}} source={require('../assets/target.png')}/>
                            <Text style={styles.buttontext}>Goals </Text>
                        </Card.Content>
                    </TouchableOpacity>
                    </Card>
                    <Card style={[styles.cardbutton]}>
                    <TouchableOpacity onPress={() =>{navigation.navigate('Breathing')}} >
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


