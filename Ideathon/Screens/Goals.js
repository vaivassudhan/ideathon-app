import React, { Component,useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { 
    SafeAreaView,
    View, 
    ScrollView ,
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
    Linking,
    StatusBar,
    Alert,
    Image,
    ImageBackground
} from 'react-native';
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';
import { useTheme } from '@react-navigation/native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
export default function Goals ({navigation}){
  const {colors} = useTheme();
  const [Show ,setShow] = useState(false)
  const [Show1 ,setShow1] = useState(false)
  const [Show2 ,setShow2] = useState(false)
  const [Show3 ,setShow3] = useState(false)
  const [Show4 ,setShow4] = useState(false)
        return (
        <View>
            <View style={{backgroundColor:colors.accent0}}>
            <StatusBar
            animated={true}
            backgroundColor={colors.accent0}/>
            <SafeAreaView>
                <View style={{flexDirection:'row'}}>
                <Icon.Button name="arrow-back-sharp" size={25} backgroundColor={colors.accent0} onPress={() => navigation.navigate('Home')}> </Icon.Button>   
                <Text style={[styles.head,{alignSelf:'center',marginLeft:'30%'}]}>Goals</Text>
                </View>
            </SafeAreaView>
            </View>
                <ScrollView>
            <View style={[styles.container,{marginBottom:20}]}>
            <View>
                    <Card style={styles.cardstyle}>
                        <Card.Content style={{flexDirection:'row'}}>
                            <Image style={styles.cardlogo} source={require('../assets/sleep.png')}/> 
                            <Text style={styles.cardtext2}>Sleep for 7-9 hours</Text>
                        </Card.Content>
                        <Card.Content style={{flexDirection:'row'}}>
                            <Paragraph style={styles.cardvalue}>Take rest. As you fall into the deeper stages of sleep, your muscles will see an increase in blood flow, which brings along oxygen and nutrients that that help recover and repair muscles and regenerate cells.</Paragraph>
                        </Card.Content>
                    </Card>
                    {/* healthy card */}
                    <Card style={styles.cardstyle}>
                        <Card.Content style={{flexDirection:'row'}}>
                            <Image style={styles.cardlogo} source={require('../assets/healthy.jpeg')}/> 
                            <Text style={styles.cardtext2}>Healthy Diet</Text>
                        </Card.Content>
                        <Card.Content style={{flexDirection:'row'}}>
                            <Paragraph style={styles.cardvalue}>Take healthy diet as your body needs enough nutrition to fight the virus.The nutrients that proper nutrition provides supply their body with much needed energy. The person feels better mentally, physically, and emotionally.</Paragraph>
                        </Card.Content>
                    </Card>
                    {/* Water card */}
                    <Card style={styles.cardstyle}>
                        <Card.Content style={{flexDirection:'row'}}>
                            <Image style={styles.cardlogo} source={require('../assets/Water-icon.png')}/> 
                            <Text style={styles.cardtext2}>Drink water (10 glasses)</Text>
                        </Card.Content>
                        <Card.Content style={{flexDirection:'row'}}>
                            <Text style={styles.cardvalue}>Drinking water to stay hydrated is important for those participating in physical therapy programs. Maintaining the body’s hydration is critical to your recovery</Text>
                        </Card.Content>
                    </Card>
                    {/* Stay home card */}
                    <Card style={styles.cardstyle}>
                        <Card.Content style={{flexDirection:'row'}}>
                            <Image style={styles.cardlogo2} source={require('../assets/stayhome.jpeg')}/> 
                            <Text style={styles.cardtext2}>Isolation</Text>
                        </Card.Content>
                        <Card.Content style={{flexDirection:'row'}}>
                            <Text style={styles.cardvalue}>Stay in a well-ventilated single-room preferably with an attached/separate toilet.</Text>
                        </Card.Content>
                    </Card>
                </View>
            </View>
                </ScrollView>
        </View>
        )
    }

const styles = StyleSheet.create({
    container: {
        margin:4,
        marginBottom:20,
        justifyContent:'center',
        alignItems:'center',
      },
      logo: {
        width: 70,
        height:70,
        marginRight:28
      },
      cardlogo:{
        width: 70,
        height:70,
        marginRight:8
      },
      cardlogobefore:{
        width: 75,
        height:75,
        marginRight:8
      },
      cardlogo2:{
        width: 80,
        height:50,
        marginRight:5
      },
      head: {
        //   marginTop:4,
          fontSize:24,
          color:'white',
      },
      headview: {
        marginTop:5,
        marginLeft:28,
        marginRight:32,
        marginBottom:14,
        flexDirection:'row'
      },
      cardstyle:{
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
        backgroundColor:"#343661",
        color:'#ddd',
        elevation: 8,
      },
      cardtext2:{
        color:'#3880ff',
        fontSize:22,
        marginTop:18,
        margin:12,
        width:'70%'
      },
      cardvalue:{
        color:'#ddd',
        // marginTop:12,
        margin:10,
        padding:5
      }
    
});