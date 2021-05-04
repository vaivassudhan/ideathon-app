import React, { Component } from 'react'
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
import { Avatar, Button, Card, Title, Paragraph, Divider } from 'react-native-paper';
export class Breathing extends Component {
    render() {
        return (
    <View>
        <View style={{backgroundColor:'rgb(54,118,203)'}}>
            <StatusBar
            animated={true}
            backgroundColor="rgb(54,118,203)"/>
            <SafeAreaView>
            <Icon.Button name="arrow-back-sharp" size={25} backgroundColor="rgb(54,118,203)" onPress={() => this.props.navigation.navigate('Home')}> Back</Icon.Button>   
            </SafeAreaView>
        </View>
                <Card style={styles.card}>
               <Card.Content>
                   <Title style={styles.title}>Ragul</Title>
                   <Divider/>
                   <Paragraph style={{fontWeight: 'bold'}}>Name<Paragraph style={{color: '#34495e'}}> :     Ragul</Paragraph></Paragraph>
               </Card.Content>
            </Card>   
    </View>
        )
    }
}

export default Breathing

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
    }
});