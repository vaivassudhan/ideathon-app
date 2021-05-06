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
                    
                        
                            {Arr.length>3 && (
                            <Card style={styles.card}>
                                <Card.Content>
                                <Title style={styles.title}>Please consult a Doctor</Title>
                                <Divider/>
                                <Paragraph style={{fontWeight: 'bold',paddingTop:25}}>Please Consult a doctor</Paragraph>
                                <Divider/>
                                <Paragraph style={{fontWeight: 'bold',paddingTop:25}}>Helplines<Paragraph style={{color: '#34495e'}}> : go to helpline page</Paragraph></Paragraph>
                                </Card.Content>
                            </Card>
                            )}
                            {Arr.length<=3 && (
                            <View>
                            <Card style={styles.card}>
                                <Card.Content>
                                <Title style={styles.title}></Title>
                                <Divider/>
                                <Paragraph style={{fontWeight: 'bold',padding:25}}>Helplines<Paragraph style={{color: '#34495e'}}> : go to helpline page</Paragraph></Paragraph>
                                </Card.Content>
                            </Card>
                            <Card style={styles.card}>
                            <Card.Content>
                            <Title style={styles.title}></Title>
                            <Divider/>
                            <Paragraph style={{fontWeight: 'bold',padding:25}}>Helplines<Paragraph style={{color: '#34495e'}}> : go to helpline page</Paragraph></Paragraph>
                            </Card.Content>
                            </Card>
                            <Card style={styles.card}>
                            <Card.Content>
                            <Title style={styles.title}></Title>
                            <Divider/>
                            <Paragraph style={{fontWeight: 'bold',padding:25}}>Helplines<Paragraph style={{color: '#34495e'}}> : go to helpline page</Paragraph></Paragraph>
                            </Card.Content>
                            </Card>
                            </View>)}
                            
                        <Divider/>
                        {/* <Card.Content>
                        <Paragraph style={{fontWeight: 'bold'}}>Status<Paragraph style={{color: '#000080',fontWeight:'bold'}}> : On Progress With SSE</Paragraph></Paragraph>
                        </Card.Content> */}
                    
                </View>
                <View style={{alignSelf:'flex-end'}}>
                <Button style={[styles.nextbutton,{backgroundColor:'rgb(34,88,163)', marginRight:20, marginTop:10}]} mode="contained" onPress={() => Done()}>
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