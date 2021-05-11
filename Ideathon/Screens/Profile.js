import React, { Component ,useState ,useEffect} from 'react';
import { 
    View, 
    ScrollView ,
    Text, 
    Image,
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
    Modal,
    StatusBar,
    Alert,
    ImageBackground
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useTheme ,RadioButton} from 'react-native-paper';
import CountdownCircle from "../Components/CountdownTimer";
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import AsyncStorage from '@react-native-community/async-storage';
import { Avatar, Button, Card, Title, Paragraph, Divider } from 'react-native-paper';
import { AuthContext } from '../Components/context';
export function Profile({navigation}) {


  const [Second,setCurrentSecond]=useState('')


  useEffect(() => {
      checkDate();
  }, [])
  const checkDate = ()=>{

    console.log(userDate)
    const date1 = new window.Date(userDate);
    const date2 = new window.Date();
    const diffTime = Math.abs(date2 - date1);

    var timeDiff = Math.abs(date2.getTime() - date1.getTime());
    var timeDiffInSecond = Math.ceil(timeDiff / 1000);

    var current_Second = 1209600 - timeDiffInSecond;

    setCurrentSecond(parseInt(current_Second)) 

    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    console.log(diffTime + " milliseconds");
    console.log(diffDays + " days");
}

  const [modalVisible,setModalVisible]=useState(false)
  const { colors } = useTheme();

  const [Show ,Setshow]=useState(false)
  const { update } = React.useContext(AuthContext);

    const [Name, setName]=useState('');
    const [Age , setAge]=useState('');
    const [value, setValue] = React.useState('first');

    const [data, setData] = React.useState({
        Name:'',
        Age:'',
        Gender:'',
        

        check_textNameChange: false,
        check_textAgeChange: false,
        check_textGenderChange: false,

        isValidUser: true,
        
    });
    
    function contin(){
        if(Name || Age || Gender){
            const dic= {
                Name:Name,
                Age:Age,
                Gender:value,
            }
            console.log(dic)
            update(dic);
            setModalVisible(!modalVisible);  
            setName('')
            setValue('first')
            setAge('')
            navigation.navigate('Profile')
        }
        else{
            Alert.alert('Plese Check!', 'Please Fill Your Details Correctly', [
                {text: 'Okay'}
               ]);
        }
    }

    const textNameChange = (Name) => {
        setName(Name)
        if( Name.trim().length >= 4 ) {
            setData({
                ...data,
                check_textNameChange: true,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                check_textNameChange: false,
                isValidUser: false
            });
        }
    }
    const textAgeChange = (Age) => {
        setAge(Age)
        if( Age.trim() >= 18) {
            setData({
                ...data,
                check_textAgeChange: true,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                check_textAgeChange: false,
                isValidUser: false
            });
        }
    }
        return (
          <View>
          <View style={styles.centeredView}>
              <Modal
                      animationType="fade"
                      transparent={true}
                      visible={modalVisible}
                      onRequestClose={() => {
                        setModalVisible(!modalVisible);  
                      }}
                    >
                      <View
                        style={{
                          position: 'absolute',
                          width: '100%',
                          height: '100%',
                          justifyContent: 'center',
                          backgroundColor: 'rgba(100,100,100, 0.5)',
                          padding: 20,
                        }}
                      >
          <View style={styles.centeredView}>      
            <View>
            <View>
            <Card style={styles.card_rej}>
               <Card.Content>
                   <Text style={[styles.text_footer, {
                    color: colors.text
                }]}>Name</Text>
            <View style={styles.action}>
                <FontAwesome 
                    name="user-o"
                    color={colors.text}
                    size={20}
                />
                <TextInput 
                    placeholder="Your Name"
                    placeholderTextColor="#666666"
                    style={[styles.textInput, {
                        color: colors.text
                    }]}
                    autoCapitalize="none"
                    onChangeText={(Name) => textNameChange(Name)}
                />
            </View>
            <Text style={[styles.text_footer, {
                    color: colors.text,
                    marginTop: 15
                }]}>Age</Text>
            <View style={styles.action}>
            <View >
                <FontAwesome 
                    name="child"
                    color={colors.text}
                    size={20}
                />
            </View>
                <TextInput 
                    placeholder="Your Age"
                    placeholderTextColor="#666666"
                    style={[styles.textInput, {
                        color: colors.text
                    }]}
                    autoCapitalize="none"
                    onChangeText={(Age) => textAgeChange(Age)}
                />
              </View>

              <Text style={[styles.text_footer, {
                    color: colors.text,
                    marginTop: 15
                }]}>Gender</Text>
            <View style={styles.action_radio}>
            <View style={{marginTop:7}}>
                <FontAwesome 
                    name="venus-mars"
                    color={colors.text}
                    size={20}
                />
            </View>
                <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                <View style={{flexDirection:'row'}}>
                    <RadioButton value="Male" color='rgb(34,88,163)'/>
                    <Text style={{marginTop:10,marginRight:8}}>Male</Text>
                    <RadioButton value="Female" color='rgb(34,88,163)'/>
                    <Text style={{marginTop:10}}>Female</Text>       
                </View>
                </RadioButton.Group>

              </View>
               </Card.Content>
               <Divider/>
                   <Card.Actions >
                     <Button color={'rgb(54,118,203)'} onPress={()=>{contin()}}>Update</Button>
                   </Card.Actions>
                 </Card>
            
            </View>
          </View>
         </View>
          </View>
          </Modal>
          </View>
            <View style={styles.container}>
            <CountdownCircle
                seconds={1209600}
                radius={140}
                borderWidth={25}
                color="rgb(97,212,203)"
                bgColor="#fff"
                shadowColor="rgb(54,118,203)"
                textStyle={{ fontSize: 70 ,marginLeft:-20}}
                onTimeElapsed={() => navigation.navigate("Home")}
              />
              <Card style={styles.card}>
                <Card.Title
                    title={<Title  style={styles.title}>  
                <FontAwesome 
                    name="user"
                    color='rgb(54,118,203)'
                    size={20}
                />    Name : {userName}</Title>} 
                right={()=>
                  <View style={{flexDirection:'row'}}>
                  {/* <Text style={{marginTop:5,color:'grey'}}>
                      {userName}
                  </Text> */}
                  <TouchableOpacity onPress = {()=>{setModalVisible(!modalVisible);}}>         
                      <Feather
                      style={{marginRight:15}}
                      name="edit"
                      color="grey"
                      size={20}
                      />
                  </TouchableOpacity>
                  </View>
                  }     
                    />
                    <Card.Title
                    title={<Title  style={styles.title_other}>  
                <FontAwesome 
                    name="child"
                    color='rgb(54,118,203)'
                    size={20}
                />    Age : {userAge}</Title>}
                    />
                    <Card.Title
                    title={<Title  style={styles.title}>  
                <FontAwesome 
                    name="venus-mars"
                    color='rgb(54,118,203)'
                    size={20}
                />  Gender : {userGender}</Title>}
                    />
            </Card>
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
          marginTop:40,
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
    action_radio: {
      flexDirection: 'row',
      marginTop: 10,
      paddingBottom: 5
  },
    footer: {
      flex: 3,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingHorizontal: 20,
      paddingVertical: 30
  },
    modalText: {
      paddingTop:10,
      marginBottom: -1,
      fontSize : 16,
      height: 60,
      borderBottomColor : '#000000',
      borderBottomWidth : 1,
      width : 300,
      textAlign : 'left'
      
    },
    textInput: {
      marginTop: Platform.OS === 'ios' ? 0 : -5,
      paddingLeft: 10,
      borderBottomColor : '#000000',
      width : 300,
      textAlign : 'left',
      color: '#05375a',
  },
    card_rej: {
      alignContent:'center',
      margin: 16,
      marginTop:15,
      backgroundColor:'#fff',
      borderRadius:12,
      marginBottom:15,
      width:'93%',
      elevation: 6,
    },
    title_Modal:{
      fontWeight: 'bold',
      marginRight:20,
      color:'rgb(54,118,203)',
      paddingBottom:20
    },
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22,
    },
    title:{
      fontWeight: 'bold',
      marginRight:20,
      color:'rgb(54,118,203)'
    },
    title_other:{
      fontWeight: 'bold',
      marginRight:20,
      marginBottom:"20%",
      color:'rgb(54,118,203)'
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
      action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
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