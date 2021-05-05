import React, { Component ,useEffect,useState} from 'react'
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

    const [Symptoms , setSymptoms]=useState({})
    
    console.log("hvhghjdghd",props)

    useEffect(() => {
        readData();

    }, [props.route.params.count])

    const readData = async() => {
        try {
          global.userSymtoms = await AsyncStorage.getItem('Symtoms');
          await setSymptoms(JSON.parse(userSymtoms))
        //   global.Symp = JSON.parse(userSymtoms)
        //   console.log("fdahgcsdfhgj",Symp.data[0].Date)
        } catch(e) {
          console.log(e);
        }
    }

    console.log(Symptoms.data)
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
        {
            Symptoms.data &&(

                <View>
                     <Text style={styles.text_header}>Report</Text>
        {Symptoms.data.map((u,i) => {
            return(
                <View key={i}>
                <Card style={styles.card}>
               <Card.Content>
                   <Title style={styles.title}>Symptoms</Title>
                   <Divider/>
                   <Paragraph style={{fontWeight: 'bold'}}>Symptoms<Paragraph style={{color: '#34495e'}}> : {u.Symptoms}</Paragraph></Paragraph>
                   <Paragraph style={{fontWeight: 'bold'}}>Time<Paragraph style={{color: '#34495e'}}> : {u.Time}</Paragraph></Paragraph>
                   <Paragraph style={{fontWeight: 'bold'}}>Date<Paragraph style={{color: '#34495e'}}> : {u.Date}</Paragraph></Paragraph>
               </Card.Content>
               <Divider/>
            </Card>
        </View>
            );
        })} 
        </View>  
        )
        }
        {
            Symptoms.data==0 && (
                <View>
                   
                    <Card style={styles.card}>
                    <Card.Content>
                    <Title style={styles.title_nodata}>No Report Found</Title>
                    </Card.Content>
                    </Card>
                </View> 
            )
        }
        
         
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
    },
    text_header: {
        color: '#34495e',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign:'center'
      },
      title_nodata:{
        fontWeight: 'bold',
        textAlign:'center',
      },
});