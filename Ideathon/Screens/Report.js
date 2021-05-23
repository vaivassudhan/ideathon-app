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
import { useTheme } from '@react-navigation/native';
export default function Report (props) {
    const {colors} = useTheme();
    const [Symptoms , setSymptoms]=useState({})
    const [Show , setShow ] =useState(false);

    const styles = StyleSheet.create({
        card: {
            marginLeft:12,
                marginRight:12,
                width: '93%',
                marginTop:10,
                marginBottom:5,
                flexDirection:'row',
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 4,
                },
                shadowOpacity: 0.30,
                shadowRadius: 11.95,
                borderRadius:20,
                backgroundColor:colors.accent1,
                elevation: 8,
          },  
          title:{
            fontWeight: '700',
            marginRight:20,
            color:'rgb(224,61,30)'
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
                color: colors.text,
                fontWeight: '600',
                fontSize: 30,
                textAlign:'center',
                margin:15,
                marginTop:20
              },
              title_nodata:{
                fontWeight: 'bold',
                textAlign:'center',
              },
    });
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
          global.userSymptoms = await AsyncStorage.getItem('Symptoms');
          await setSymptoms(JSON.parse(userSymptoms))
        //   global.Symp = JSON.parse(userSymptoms)
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

    return (
        <View>
        <View style={{backgroundColor:colors.accent0}}>
            <StatusBar
            animated={true}
            backgroundColor={colors.accent0}/>
            <SafeAreaView>
            <Icon.Button name="arrow-back-sharp" size={25} backgroundColor={colors.accent1} onPress={() => props.navigation.navigate('Home')}> Back</Icon.Button>   
            </SafeAreaView>
        </View>
        <ScrollView>
        {
            Symptoms.data &&(

                <View>
                     <Title style={styles.text_header}>Report</Title>
        {Symptoms.data.map((u,i) => {
            return(
                <View key={i}>
                <Card style={styles.card}>
                <Card.Title
                    title={<Title  style={styles.title}>  
                    <Feather
                    name="activity"
                    color='rgb(224,61,30)'
                    size={30}
                  /> Symptoms</Title>}
                    right={()=>
                        <View style={{flexDirection:'row'}}>
                        <Text style={{marginTop:5,marginRight:12,color:'grey'}}>
                            {u.Date}
                        </Text>
                        </View>
                        }
                
                    />
               <Card.Content>
                   <Divider/>
                   {
                       true && (
                           <View>
                            <Paragraph style={{fontWeight: 'bold'}}>Symptoms<Paragraph style={{color: colors.text_secondary}}> : {sym(u.Symptoms)}</Paragraph></Paragraph>
                            <Paragraph style={{fontWeight: 'bold',marginTop:8}}>Date<Paragraph style={{color: colors.text_secondary}}> : {u.Date}</Paragraph></Paragraph>
                            <Paragraph style={{fontWeight: 'bold',marginTop:8,marginBottom:8}}>Time<Paragraph style={{color: colors.text_secondary}}> : {u.Time}</Paragraph></Paragraph>
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
        
        </ScrollView>
    </View>
        )
    }
   