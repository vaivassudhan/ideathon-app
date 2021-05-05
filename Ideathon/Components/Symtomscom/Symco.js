import React from 'react'
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
import { AuthContext } from '../context';
import { Avatar, Button, Card, Title, Paragraph, Divider  } from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';
import { useEffect } from 'react';
export default function Symco(props) { 
    const { AddSelectedList } = React.useContext(AuthContext);

    console.log(props.route.params.selected)

    const getCurrentDate=()=>{
        var date = new Date().getDate();
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();
        return month + '/' + date + '/' + year;
  }
  useEffect(() => {
    readData();
    global.symp=JSON.parse(props.route.params.selected)
    global.a=[]
    for(var i=0;i<symp.length;i++){
        global.a.push(symp[i].label)
    }
    if(global.a.length>3){
        console.log('Consult a Doctor')
    }
}, [props.route.params.selected])

const readData = async() => {
    try {
      global.userSymtoms = await AsyncStorage.getItem('Symtoms');
    } catch(e) {
      console.log(e);
    }
}
    const Done=()=>{
        var dem = JSON.parse(userSymtoms)
        var date = getCurrentDate();
        var today = new Date(),
        time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
        const dic = {
            Symptoms:a,
            Date:date,
            Time:time
        }
        console.log(dem["data"]);
        dem["data"].push(dic);
        console.log("After update DEM",dem)
        AddSelectedList(JSON.stringify(dem))
        props.navigation.navigate('Home')
    }
    return (
        <View>
                <View style={{backgroundColor:'rgb(54,118,203)'}}>
                    <StatusBar
                    animated={true}
                    backgroundColor="rgb(54,118,203)"/>
                    <SafeAreaView>
                    <Icon.Button name="arrow-back-sharp" size={25} backgroundColor="rgb(54,118,203)" onPress={() => props.navigation.navigate('Symptoms')}> Back</Icon.Button>   
                    </SafeAreaView>
                </View>
                <View>
                    <Card style={styles.card}>
                        
                            {global.a.length>3 && (
                                <Card.Content>
                                <Title style={styles.title}>Please consult a Doctor</Title>
                                <Divider/>
                                <Paragraph style={{fontWeight: 'bold'}}>Helplines<Paragraph style={{color: '#34495e'}}> : go to helpline page</Paragraph></Paragraph>
                                </Card.Content>
                            )}
                            {global.a.length<=3 && symp.map((u,i)=>{
                                return (
                                <Card.Content>
                                <Title style={styles.title}>Remedy for </Title>
                                <Divider/>
                                <Paragraph style={{fontWeight: 'bold'}}>Allo<Paragraph style={{color: '#34495e'}}> : show remedies</Paragraph></Paragraph>
                                </Card.Content>
                                )}
                            )}
                        <Divider/>
                        <Card.Content>
                        <Paragraph style={{fontWeight: 'bold'}}>Status<Paragraph style={{color: '#000080',fontWeight:'bold'}}> : On Progress With SSE</Paragraph></Paragraph>
                        </Card.Content>
                    </Card>
                </View>
                <View style={{alignSelf:'flex-end'}}>
                <Button style={[styles.nextbutton,{backgroundColor:'rgb(34,88,163)'}]} mode="contained" onPress={() => Done()}>
                        Done
                </Button>
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