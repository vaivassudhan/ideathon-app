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
import Feather from 'react-native-vector-icons/Feather';
import AsyncStorage from '@react-native-community/async-storage';
import { Avatar, Button, Card, Title, Paragraph, Divider } from 'react-native-paper';
export default function Report (props) {

    const [Symptoms , setSymptoms]=useState({})
    const [Show , setShow ] =useState(false);

    useEffect(() => {
        readData();
        var res=""
        for(var i=0;i<Symptoms.lenth;i++){
            res+=Symptoms[i]+", ";
        }
        console.log(res);

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

    const sym = (Sympt) => {
        console.log(Sympt)
        var res=[]
        for(var i=0;i<Sympt.length;i++){
            res.push(Sympt[i]+",")
        } 
        return res;
    }

    const show = (index) =>{
        
        console.log(index)
        setShow(!Show)
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
        {
            Symptoms.data &&(

                <View>
                     <Text style={styles.text_header}>Report</Text>
        {Symptoms.data.map((u,i) => {
            return(
                <View key={i}>
                <Card style={styles.card}>
                <Card.Title
                    title={<Title  style={styles.title}>  
                    <Feather
                    name="activity"
                    color='rgb(224,91,40)'
                    size={30}
                  /> Symptoms</Title>}
                    right={()=>
                        <View style={{flexDirection:'row'}}>
                        <Text style={{marginTop:5,color:'grey'}}>
                            {u.Date}
                        </Text>
                        <TouchableOpacity onPress = {()=>{show(i)}}>                            
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
                            <Paragraph style={{fontWeight: 'bold'}}>Symptoms<Paragraph style={{color: '#34495e'}}> : {sym(u.Symptoms)}</Paragraph></Paragraph>
                            <Paragraph style={{fontWeight: 'bold',marginTop:8,marginBottom:8}}>Date<Paragraph style={{color: '#34495e'}}> : {u.Date}</Paragraph></Paragraph>
                            <Paragraph style={{fontWeight: 'bold',marginTop:8,marginBottom:8}}>Time<Paragraph style={{color: '#34495e'}}> : {u.Time}</Paragraph></Paragraph>
                            </View>
                       )
                   }
                  
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