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
import { Button } from 'react-native-paper';
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
}, [])

const readData = async() => {
    try {
      userSymtoms = await AsyncStorage.getItem('SymptomDetails');
    } catch(e) {
      console.log(e);
    }
}
    const Done=()=>{
        var date = getCurrentDate();
        const dic = {
            "sym":[{
                Symptoms:props.route.params.selected,
                Date:date,
            }]
        }
        AddSelectedList(JSON.stringify(dic))
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

                </View>
                <View style={{alignSelf:'flex-end'}}>
                <Button style={[styles.nextbutton,{backgroundColor:'rgb(34,88,163)'}]} mode="contained" onPress={() => Done()}>
                        Done
                </Button>
                </View>
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    incont:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    headtext: {
        margin: 10,
        marginTop: 30,
        fontSize:18,
        alignSelf:'center'
        
      },
      symptom_list:{
        marginLeft:44,
        marginRight:44,

      },
      nextbutton:{
        // position: 'absolute',
        alignSelf: 'flex-end',
        top:50,
        bottom:0,
        right:20,
      }
   
})