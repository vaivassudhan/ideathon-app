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
import { useTheme } from '@react-navigation/native';
export default function Symco(props) { 
    const { AddSelectedList } = React.useContext(AuthContext);
    const {colors} = useTheme();
    
const styles = StyleSheet.create({
        card: {
        alignContent:'center',
        margin: 16,
        marginTop:15,

        borderRadius:12,
        marginBottom:15,
        width:'93%',
        elevation: 6,
        backgroundColor:colors.accent1
        },
        paragraph: {
        margin: 2,
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.text_secondary,

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
      global.userSymptoms = await AsyncStorage.getItem('Symptoms');
    } catch(e) {
      console.log(e);
    }
}
    const Done=()=>{
        var dem = JSON.parse(userSymptoms)
        var date = getCurrentDate();
        var today = new Date(),
        time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
        const dic = {
            Symptoms:a,
            Date:date,
            Time:time
        }
        console.log(dem);
        dem["data"].push(dic);
        console.log("After update DEM",dem)
        AddSelectedList(JSON.stringify(dem))
        props.navigation.navigate('Home')
    }
    return (
        <View style={{flex:1}}>
                <View style={{backgroundColor:colors.accent0}}>
                    <StatusBar
                    animated={true}
                    backgroundColor={colors.accent0}/>
                    <SafeAreaView>
                    <Icon.Button name="arrow-back-sharp" size={25} backgroundColor={colors.accent1} onPress={() => props.navigation.navigate('Symptoms')}> Back</Icon.Button>   
                    </SafeAreaView>
                </View>
                <ScrollView>
                <View style={{flex:1,}}>
                       <Title style={[styles.title,{padding:20,paddingBottom:10}]}>Remedy</Title> 
                            {Arr.length>3 && (
                            <Card style={styles.card}>
                                <Card.Content>
                                <Title style={[styles.title,{color:'red'}]}>Please consult a Doctor</Title>
                                <Divider/>
                                <Paragraph style={{fontWeight: 'bold',paddingTop:25}}>Seek immediate medical attention if you have serious symptoms. Always call before visiting your doctor or health facility.</Paragraph>
                                <Divider/>
                                <Paragraph style={{fontWeight: 'bold',paddingTop:15}}>Serious symptoms:</Paragraph>
                                <Text style={{color:colors.text_secondary}}> - difficulty breathing or shortness of breath</Text>
                                <Text style={{color:colors.text_secondary}}> - chest pain or pressure</Text>
                                <Text style={{color:colors.text_secondary}}> - loss of speech or movement</Text>
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
                                                <Paragraph style={{width:'100%',flex:1,flexWrap: 'wrap',color:colors.text_secondary}}>{k}</Paragraph>
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
                                        <Paragraph style={{flex:1,flexWrap: 'wrap',color: colors.text_secondary}}>{k}</Paragraph>
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
                                        <Paragraph style={{flex:1,flexWrap: 'wrap',color: colors.text_secondary}}>{k}</Paragraph>
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
                <Button style={[styles.nextbutton,{backgroundColor:colors.accent3, marginRight:20,marginBottom:18}]} mode="contained" onPress={() => Done()}>
                        Done
                </Button>
                </View>
                </ScrollView>    
                
        </View>
    )
}
