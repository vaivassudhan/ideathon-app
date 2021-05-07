import React,{useState , createRef,useEffect , Component} from 'react';
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
import symrem from '../../Data/symrem';
export default function Symco(props) { 
    const { AddSelectedList } = React.useContext(AuthContext);

    console.log(props.route.params.selected)
    const [Arr ,setArr] =useState([])
    const [Allo,setAllo] = useState([])
    const [Homeo,setHomeo] = useState([])
    const [Ayur,setAyur] = useState([])
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
    global.sr=[]
    global.remedy={
        allo:[],
        homeo:[],
        ayur:[]
    }
    for(var i=0;i<symp.length;i++){
        global.a.push(symp[i].label);
        global.remedy.allo.push(symrem[symp[i].id-1].allo);
        global.remedy.homeo.push(symrem[symp[i].id-1].homeo);
        global.remedy.ayur.push(symrem[symp[i].id-1].ayur);
    }
    console.log(global.a)
    setArr(a)
    setAllo(remedy.allo)
    setHomeo(remedy.homeo)
    setAyur(remedy.ayur)
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
        <View style={{flex:1}}>
                <View style={{backgroundColor:'rgb(54,118,203)'}}>
                    <StatusBar
                    animated={true}
                    backgroundColor="rgb(54,118,203)"/>
                    <SafeAreaView>
                    <Icon.Button name="arrow-back-sharp" size={25} backgroundColor="rgb(54,118,203)" onPress={() => props.navigation.navigate('Symptoms')}> Back</Icon.Button>   
                    </SafeAreaView>
                </View>
                <ScrollView>
                <View style={{flex:1,}}>
                        
                            {Arr.length>3 && (
                            <Card style={styles.card}>
                                <Card.Content>
                                <Title style={[styles.title,{color:'red'}]}>Please consult a Doctor</Title>
                                <Divider/>
                                <Paragraph style={{fontWeight: 'bold',paddingTop:25}}>Seek immediate medical attention if you have serious symptoms. Always call before visiting your doctor or health facility.</Paragraph>
                                <Divider/>
                                <Paragraph style={{fontWeight: 'bold',paddingTop:15}}>Serious symptoms:</Paragraph>
                                <Text> - difficulty breathing or shortness of breath</Text>
                                <Text> - chest pain or pressure</Text>
                                <Text> - loss of speech or movement</Text>
                                <Paragraph style={{fontWeight: 'bold',paddingTop:15}}>On average it takes 5–6 days from when someone is infected with the virus for symptoms to show, however it can take up to 14 days.</Paragraph>
                                <Divider/>
                                <Paragraph style={{fontWeight: 'bold',paddingTop:25,color:'green'}}>People with mild symptoms who are otherwise healthy should manage their symptoms at home. Use this app to find remedy for your symptoms</Paragraph>
                                </Card.Content>
                            </Card>
                            )}
                            {Arr.length<=3 && (
                            <View>
                            <Card style={styles.card}>
                                <Card.Content>
                                <View style={{flexDirection:'row'}}>
                                <Image style={{width:120,height:100,marginRight:10}} source={require('../../assets/allopathy.jpg')}/>
                                <Title style={[styles.title,{alignSelf:'center',marginLeft:22,}]}>Allopathy</Title>
                                </View>
                                <Divider style={{marginBottom:16}}/>
                                
                                <View style={{flex:1,flexDirection:'column'}}>
                                {
                                    Allo.map((k,i)=>{
                                        return(
                                           
                                                <View style={{flex:1,flexDirection:'column'}} key={i}>
                                                <Paragraph style={{width:'100%',flex:1,flexWrap: 'wrap',color: '#34495e',fontSize:18}}>{k}</Paragraph>
                                                </View>
                                        )
                                    })
                                }
                                
                               </View> 
                            </Card.Content>
                            </Card>
                            <Card style={styles.card}>
                            <Card.Content>
                            <View style={{flexDirection:'row'}}>
                            <Image style={{width:120,height:100,marginRight:10}} source={require('../../assets/homeopathy.jpg')}/>
                            <Title style={[styles.title,{alignSelf:'center',marginLeft:22,}]}>Homeopathy</Title>
                            </View>
                            <Divider style={{marginBottom:16}}/>
                            <View style={{flex:1,flexDirection:'column'}}>
                            {
                                Homeo.map((k,i)=>{
                                    return(
                                        <View style={{flex:1}} key={i} key={i}>
                                        <Paragraph style={{flex:1,flexWrap: 'wrap',color: '#34495e',fontSize:18}}>{k}</Paragraph>
                                        </View>
                                    )
                                })
                            }
                            </View>
                            </Card.Content>
                            </Card>
                            <Card style={styles.card}>
                            <Card.Content>
                            <View style={{flexDirection:'row'}}>
                            <Image style={{width:120,height:100,marginRight:10}} source={require('../../assets/ayurvedha.png')}/>
                            <Title style={[styles.title,{alignSelf:'center',marginLeft:22,}]}>Ayurvedha</Title>
                            </View>
                            <Divider style={{marginBottom:16}}/>
                            
                                <View style={{flex:1,flexDirection:'column'}}>
                                {
                                    Ayur.map((k,i)=>{
                                        return(
                                            <View style={{flex:1}} key={i}>
                                        <Paragraph style={{flex:1,flexWrap: 'wrap',color: '#34495e',fontSize:18}}>{k}</Paragraph>
                                            </View>
                                        )
                                    })
                                }
                               
                            </View>
                            </Card.Content>
                            </Card>
                            </View>)}
                            
                        {/* <Divider/> */}
                        {/* <Card.Content>
                        <Paragraph style={{fontWeight: 'bold'}}>Status<Paragraph style={{color: '#000080',fontWeight:'bold'}}> : On Progress With SSE</Paragraph></Paragraph>
                        </Card.Content> */}
                </View>
                <View style={{alignSelf:'flex-end'}}>
                <Button style={[styles.nextbutton,{backgroundColor:'rgb(51,124,247)', marginRight:20,marginBottom:18}]} mode="contained" onPress={() => Done()}>
                        Done
                </Button>
                </View>
                </ScrollView>    
                
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        alignContent:'center',
        margin: 16,
        marginTop:15,

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
  title:{
      fontSize:24,
  }
});