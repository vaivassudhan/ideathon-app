import React, { Component ,useEffect} from 'react'
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
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-community/async-storage';
import { Avatar, Button, Card, Title, Paragraph, Divider } from 'react-native-paper';
export default function Report (props) {
    useEffect(() => {
        readData();
    }, [props.route.params.symptoms])

    const readData = async() => {
        try {
          global.userSymtoms = await AsyncStorage.getItem('Symtoms');
          global.Symp = JSON.parse(userSymtoms)
          console.log("fdahgcsdfhgj",Symp.data[0].Date)
        } catch(e) {
          console.log(e);
        }
    }
return (
    <View>
        <View style={{backgroundColor:'rgb(54,118,203)'}}>
            <StatusBar
            animated={true}
            backgroundColor="rgb(54,118,203)"/>
            <SafeAreaView>
            <Icon.Button name="arrow-back-sharp" size={25} backgroundColor="rgb(54,118,203)" onPress={() => props.navigation.navigate('Home')}> Back</Icon.Button>   
            </SafeAreaView>
        </View>
        <View>
        {Symp.data.map((u,i) => {
            return(
                <View key={i}>
                <Card style={styles.card}>
               <Card.Content>
                   <Title style={styles.title}>{u.Date}</Title>
                   <Divider/>
                   <Paragraph style={{fontWeight: 'bold'}}>Time<Paragraph style={{color: '#34495e'}}> : {u.Time}</Paragraph></Paragraph>
                   <Paragraph style={{fontWeight: 'bold'}}>Symptoms<Paragraph style={{color: '#34495e'}}> : {u.Symptoms}</Paragraph></Paragraph>
               </Card.Content>
               <Divider/>
            </Card>

                </View>
            );
        })}
        </View>   
    </View>
        )
    }

const styles = StyleSheet.create({
card: {
    alignContent:'center',
    margin: 16,
    marginTop:15,
    backgroundColor:'#fff',
    borderRadius:12,
    marginBottom:15,
    width:'93%',
    elevation: 6,
  },
    paragraph: {
      margin: 2,
      fontSize: 25,
      fontWeight: 'bold',
      textAlign: 'center',
     // color: '#34495e',

    },
    cardText:{
      fontSize:30,
      padding:10
    }
});