import React, { Component ,useState} from 'react';
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
import CountdownCircle from "../Components/CountdownTimer";
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import AsyncStorage from '@react-native-community/async-storage';
import { Avatar, Button, Card, Title, Paragraph, Divider } from 'react-native-paper';
export function Profile() {

  const [Show ,Setshow]=useState(false)
        return (
            <View>
            
            <View style={styles.container}>
            <Card style={styles.card}>
                <Card.Title
                    title={<Title  style={styles.title}>  
                    <Feather
                    name="user"
                    color='rgb(224,91,40)'
                    size={30}
                  /> Name : {userName}</Title>}
                    right={()=>
                        <View style={{flexDirection:'row'}}>
                        <Text style={{marginTop:5,color:'grey'}}>
                            {}
                        </Text>
                        <TouchableOpacity onPress = {()=>{Setshow(!Show)}}>                            
                        <Feather
                          style={{marginRight:15}} 
                          name="chevron-down"
                          color="grey"
                          size={30}
                        />
                        </TouchableOpacity>
                        </View>
                        }
                
                    />
                <Card.Content>
                   <Divider/>
                   {
                       Show && (
                           <View>
                            <Paragraph style={{fontWeight: 'bold',marginTop:8,marginBottom:8}}>Age<Paragraph style={{color: '#34495e'}}> : {userAge}</Paragraph></Paragraph>
                            <Paragraph style={{fontWeight: 'bold',marginTop:8,marginBottom:8}}>Gender<Paragraph style={{color: '#34495e'}}> : {userGender}</Paragraph></Paragraph>
                            </View>
                       )
                   }
                  
               </Card.Content>
                    
               <Divider/>
            </Card>
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

export default Profile
const styles = StyleSheet.create({
  card: {
      marginLeft:12,
          marginRight:12,
          width: '93%',
          marginTop:8,
          marginBottom:2,
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
    title:{
      fontWeight: 'bold',
      marginRight:20,
      color:'rgb(224,91,40)'
    },
      paragraph: {
        margin: 2,
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
      //color: '#34495e',
  
      },
      cardText:{
        fontSize:30,
        padding:10
      },
      text_header: {
          color: '#34495e',
          fontWeight: 'bold',
          fontSize: 20,
          textAlign:'center',
          marginTop:12,
        },
        title_nodata:{
          fontWeight: 'bold',
          textAlign:'center',
        },
  });