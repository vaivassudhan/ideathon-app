import React, { Component } from 'react';
import { 
    View, 
    ScrollView ,
    Text, 
    Image,
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar,
    Alert,
    ImageBackground
} from 'react-native';
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';
import CountdownCircle from "../Components/CountdownTimer";
export class Profile extends Component {
    render() {
        return (
            <View>
            
            <View style={styles.container}>

            <CountdownCircle
                seconds={1209600}
                radius={140}
                borderWidth={25}
                color="rgb(54,118,203)"
                bgColor="#fff"
                shadowColor="rgb(97,212,203)"
                textStyle={{ fontSize: 70}}
                onTimeElapsed={() => this.props.navigation.navigate("Home")}
              />
                <View style={styles.headview}>
                    <Text style={styles.head}>Goals</Text>
                </View>
                <View>
                    <Card style={styles.cardstyle}>
                        <Card.Content style={{flexDirection:'row'}}>
                            <Image style={styles.cardlogo} source={require('../assets/sleep.png')}/> 
                            <Text style={styles.cardtext2}>Sleep for 7-9 hours</Text>
                        </Card.Content>
                        <Card.Content style={{flexDirection:'row'}}>
                            <Text style={styles.cardvalue}>To know more about sleep and covid</Text>
                        </Card.Content>
                            <Text style={{alignSelf:'center' ,paddingTop:10}} onPress={() => Linking.openURL('https://www.physio-pedia.com/COVID-19_and_Sleep')}>    Click Here</Text>
                    </Card>
                    {/* healthy card */}
                    <Card style={styles.cardstyle}>
                        <Card.Content style={{flexDirection:'row'}}>
                            <Image style={styles.cardlogo} source={require('../assets/healthy.jpeg')}/> 
                            <Text style={styles.cardtext2}>Healthy Diet</Text>
                        </Card.Content>
                        <Card.Content style={{flexDirection:'row'}}>
                            <Text style={styles.cardvalue}>Take healthy diet as your body needs enough nutrition to fight the virus</Text>
                        </Card.Content>
                    </Card>
                    {/* Water card */}
                    <Card style={styles.cardstyle}>
                        <Card.Content style={{flexDirection:'row'}}>
                            <Image style={styles.cardlogo} source={require('../assets/Water-icon.png')}/> 
                            <Text style={styles.cardtext2}>Water</Text>
                        </Card.Content>
                        <Card.Content style={{flexDirection:'row'}}>
                            <Text style={styles.cardvalue}>Drink more water, average adult body needs 2.5 Litres (10 glasses) of water</Text>
                        </Card.Content>
                    </Card>
                    {/* Stay home card */}
                    <Card style={styles.cardstyle}>
                        <Card.Content style={{flexDirection:'row'}}>
                            <Image style={styles.cardlogo} source={require('../assets/healthy.jpeg')}/> 
                            <Text style={styles.cardtext2}>Isolation</Text>
                        </Card.Content>
                        <Card.Content style={{flexDirection:'row'}}>
                            <Text style={styles.cardvalue}>Stay Home, Stay safe</Text>
                        </Card.Content>
                    </Card>
                </View>
            </View>
            </View>
        )
    }
}

export default Profile
const styles = StyleSheet.create({
    container: {
        margin:12,
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
      cardlogo2:{
        width: 50,
        height:50,
        marginRight:5
      },
      head: {
          marginTop:4,
          fontSize:32,
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
        marginTop:12,
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
        marginTop:12,
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
        marginTop:12
      }
    
});