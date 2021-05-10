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
import Feather from 'react-native-vector-icons/Feather';
import AsyncStorage from '@react-native-community/async-storage';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Avatar, Button, Card, Title, Paragraph, Divider } from 'react-native-paper';
export function Helpline () {
        return (
                <View>
                <ScrollView>
                { helpline_nums.map((item, key)=>(
                    <View key={key}>
                    <Card style={styles.card}>
                <Card.Title
                    title={<Title  style={styles.title}>{item.state}</Title>}
                    left={()=><FontAwesome 
                        name="map-marker"
                        color="rgb(224,91,40)"
                        size={30}
                    />}
                    right={()=>
                        <TouchableOpacity onPress = {()=>{Linking.openURL(`tel:${item.number}`)}}>                            
                        <FontAwesome 
                        style={{marginRight:30}}
                        name="phone"
                        color="rgb(97,212,203)"
                        size={30}
                        />
                        </TouchableOpacity>
                        }
                    />
            </Card>
                    
        </View>
                ))}
                    </ScrollView>
                </View>
        )
    }
export default Helpline
const styles=StyleSheet.create({
    // container:{
    //     margin:4,
    //     alignItems:"center",
    //     justifyContent:'center',
    // },
    statename:{
        fontSize:20,
        fontWeight:'500',
        marginBottom:12,
        marginTop:8,
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
    },
    card: {
        marginLeft:"8%",
            marginRight:"8%",
            width: '85%',
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
        color:'rgb(52,125,247)'
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
})