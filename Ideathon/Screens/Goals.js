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
export default function Goals ({navigation}){

  const [Show ,setShow] = useState(false)
  const [Show1 ,setShow1] = useState(false)
  const [Show2 ,setShow2] = useState(false)
  const [Show3 ,setShow3] = useState(false)
  const [Show4 ,setShow4] = useState(false)
        return (
        <View>
            <View style={{backgroundColor:'rgb(54,118,203)'}}>
            <StatusBar
            animated={true}
            backgroundColor="rgb(54,118,203)"/>
            <SafeAreaView>
                <View style={{flexDirection:'row'}}>
                <Icon.Button name="arrow-back-sharp" size={25} backgroundColor="rgb(54,118,203)" onPress={() => navigation.navigate('Home')}> </Icon.Button>   
                <Text style={[styles.head,{alignSelf:'center',marginLeft:'30%'}]}>Goals</Text>
                </View>
            </SafeAreaView>
            </View>
            <ScrollView>
            <View style={styles.container}>
                <View>
              <Card style={styles.cardstyle}>

                  {!Show && (
                    <Card.Title style={styles.title}
                    left={()=><Image style={styles.cardlogobefore} source={require('../assets/sleep.png')}/> }
                    title={<Text style={styles.cardtext2before}>    Sleep for 7-9 hours</Text>}
                    right={()=>
                    <TouchableOpacity onPress = {()=>{setShow(!Show)}}>                            
                    <Feather
                      style={{marginRight:15}} 
                      name="chevron-down"
                      color="grey"
                      size={30}
                    />
                    </TouchableOpacity>
                    }
                  />)}

                      {Show &&(
                          <View>
                            <Card.Title style={styles.title}
                            left={()=><Image style={styles.cardlogo} source={require('../assets/sleep.png')}/> }
                            title={<Text style={styles.cardtext2}>    Sleep for 7-9 hours</Text>}
                            right={()=>
                            <TouchableOpacity onPress = {()=>{setShow(!Show)}}>                            
                            <Feather
                              style={{marginRight:15}} 
                              name="chevron-down"
                              color="grey"
                              size={30}
                            />
                            </TouchableOpacity>
                            }
                          />
                            <Card.Content style={{flexDirection:'row'}}>
                            {/* <Text style={styles.cardvalue}>Take rest. As you fall into the deeper stages of sleep, your muscles will see an increase in blood flow, which brings along oxygen and nutrients that that help recover and repair muscles and regenerate cells.To know more about sleep and covid</Text> */}
                            <Paragraph style={styles.cardvalue}>Take rest. As you fall into the deeper stages of sleep, 
                            your muscles will see an increase in blood flow, which brings along oxygen and nutrients that that help recover and repair muscles and regenerate cells.</Paragraph>
                            {/* <Text style={[styles.cardvalue,{color:'rgb(54,118,203)',textDecorationLine: 'underline',}]} onPress={() => Linking.openURL('https://www.physio-pedia.com/COVID-19_and_Sleep')}>    Click Here</Text> */}
                        </Card.Content>
                        </View>
                        )
                      }   
                    </Card>



                    {/* healthy card */}
                  <Card style={styles.cardstyle}>

                  {!Show1 && (
                    <Card.Title style={styles.title}
                    left={()=><Image style={styles.cardlogobefore} source={require('../assets/healthy.jpeg')}/> }
                    title={<Text style={styles.cardtext2before}>    Healthy Diet</Text>}
                    right={()=>
                    <TouchableOpacity onPress = {()=>{setShow1(!Show1)}}>                            
                    <Feather
                      style={{marginRight:15}} 
                      name="chevron-down"
                      color="grey"
                      size={30}
                    />
                    </TouchableOpacity>
                    }
                  />)}

                      {Show1 &&(
                          <View>
                            <Card.Title style={styles.title}
                            left={()=><Image style={styles.cardlogo} source={require('../assets/healthy.jpeg')}/> }
                            title={<Text style={styles.cardtext2}>    Healthy Diet</Text>}
                            right={()=>
                            <TouchableOpacity onPress = {()=>{setShow1(!Show1)}}>                            
                            <Feather
                              style={{marginRight:15}} 
                              name="chevron-down"
                              color="grey"
                              size={30}
                            />
                            </TouchableOpacity>
                            }
                          />
                        <Card.Content style={{flexDirection:'row'}}>
                            <Paragraph style={styles.cardvalue}>Take healthy diet as your body needs enough nutrition to fight the virus.The nutrients that proper nutrition provides supply their body with much needed energy. The person feels better mentally, physically, and emotionally.</Paragraph>
                        </Card.Content>
                        </View>
                        )
                      }   
                    </Card>

                    {/* Water card */}
                  <Card style={styles.cardstyle}>

                  {!Show2 && (
                    <Card.Title style={styles.title}
                    left={()=><Image style={styles.cardlogobefore} source={require('../assets/Water-icon.png')}/> }
                    title={<Text style={styles.cardtext2before}>    Drink water (10 glasses)</Text>}
                    right={()=>
                    <TouchableOpacity onPress = {()=>{setShow2(!Show2)}}>                            
                    <Feather
                      style={{marginRight:15}} 
                      name="chevron-down"
                      color="grey"
                      size={30}
                    />
                    </TouchableOpacity>
                    }
                  />)}

                      {Show2 &&(
                          <View>
                            <Card.Title style={styles.title}
                            left={()=><Image style={styles.cardlogo} source={require('../assets/Water-icon.png')}/> }
                            title={<Text style={styles.cardtext2}>    Drink water (10 glasses)</Text>}
                            right={()=>
                            <TouchableOpacity onPress = {()=>{setShow2(!Show2)}}>                            
                            <Feather
                              style={{marginRight:15}} 
                              name="chevron-down"
                              color="grey"
                              size={30}
                            />
                            </TouchableOpacity>
                            }
                          />
                        <Card.Content style={{flexDirection:'row'}}>
                            <Text style={styles.cardvalue}>Drinking water to stay hydrated is important for those participating in physical therapy programs. Maintaining the body’s hydration is critical to your recovery</Text>
                        </Card.Content>
                        </View>
                        )
                      }   
                    </Card>
                    {/* Stay home card */}

                    <Card style={styles.cardstyle}>

                        {!Show3 && (
                          <Card.Title style={styles.title}
                          left={()=><Image style={styles.cardlogobefore} source={require('../assets/stayhome.jpeg')}/> }
                          title={<Text style={styles.cardtext2before}>    Isolation</Text>}
                          right={()=>
                          <TouchableOpacity onPress = {()=>{setShow3(!Show3)}}>                            
                          <Feather
                            style={{marginRight:15}} 
                            name="chevron-down"
                            color="grey"
                            size={30}
                          />
                          </TouchableOpacity>
                          }
                        />)}

                            {Show3 &&(
                                <View>
                                  <Card.Title style={styles.title}
                                  left={()=><Image style={styles.cardlogo} source={require('../assets/stayhome.jpeg')}/> }
                                  title={<Text style={styles.cardtext2}>    Isolation</Text>}
                                  right={()=>
                                  <TouchableOpacity onPress = {()=>{setShow3(!Show3)}}>                            
                                  <Feather
                                    style={{marginRight:15}} 
                                    name="chevron-down"
                                    color="grey"
                                    size={30}
                                  />
                                  </TouchableOpacity>
                                  }
                                />
                              <Card.Content style={{flexDirection:'row'}}>
                                  <Text style={styles.cardvalue}>Stay in a well-ventilated single-room preferably with an attached/separate toilet.</Text>
                              </Card.Content>
                              </View>
                              )
                            }   
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

        elevation: 8,
      },
      cardtext:{
        color:'rgb(223,98,51)',
        fontSize:22,
        marginTop:12,
        width:'50%'
      },
      cardtext2:{
        color:'rgb(54,118,203)',
        fontSize:22,
        marginTop:18,
        margin:12,
        width:'70%'
      },
      cardtext2before:{
        color:'rgb(54,118,203)',
        fontSize:24,
        marginTop:18,
        margin:12,
        width:'70%'
      },
      cardtext3:{
        // color:'rgb(56, 130, 241)',
        color:'rgb(85,177,94)',
        fontSize:22,
        marginTop:12,
        width:'50%'
      },
      cardtext4:{
        color:'#dc4b63',
        fontSize:22,
        marginTop:12,
        width:'50%'
      },
      cardvalue:{
        color:'black',
        // marginTop:12,
        margin:20,
      }
    
});