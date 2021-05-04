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
import { Button } from 'react-native-paper';
import _ from "lodash";
import {SelectMultipleButton} from 'react-native-selectmultiple-button'
import { Checkbox } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
const ios_blue = "#007AFF";
const multipleData = ["Fever", "Cold", "Loss of smell", "Loss of taste", "Headache","Pain in chest with deep breaths","Shortness of breath","Sore Throat","Stomach ache","Diarrhea","Tiredness","Sneexing"];
export class Symptoms extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          multipleSelectedData: [],
          multipleSelectedDataLimited: []
        };
      }
    render() {
        return (
            <View styles={styles.container}>
                <View style={{backgroundColor:'rgb(54,118,203)'}}>
                    <StatusBar
                    animated={true}
                    backgroundColor="rgb(54,118,203)"/>
                    <SafeAreaView>
                    <Icon.Button name="arrow-back-sharp" size={25} backgroundColor="rgb(54,118,203)" onPress={() => this.props.navigation.navigate('Home')}> Back</Icon.Button>   
                    </SafeAreaView>
                </View>
                <View>
                    <Text style={styles.headtext}>
                    Please select your symptoms
                    </Text>
                    {multipleData.map(interest => (
                    <View style={styles.symptom_list}>
                        <SelectMultipleButton
                        key={interest}
                        buttonViewStyle={{
                            borderRadius: 10,
                            height: 40
                        }}
                        textStyle={{
                            fontSize: 18
                        }}
                        highLightStyle={{
                            borderColor: "gray",
                            backgroundColor: "transparent",
                            textColor: "black",
                            borderTintColor: ios_blue,
                            backgroundTintColor: ios_blue,
                            textTintColor: "white"
                        }}
                        value={interest}
                        selected={this.state.multipleSelectedData.includes(interest)}
                        singleTap={valueTap =>
                            this._singleTapMultipleSelectedButtons(interest)
                        }
                        />
                        </View>
                    ))}
                
                </View>
                <View style={{alignSelf:'flex-end'}}>
                <Button style={[styles.nextbutton,{backgroundColor:'rgb(34,88,163)'}]} mode="contained">
                        Next
                </Button>
                </View>
            </View>
            
        )
    }

    _singleTapRadioSelectedButtons(valueTap, gender) {
        // Alert.alert('', valueTap)
        this.setState({
          radioSelectedData: gender
        });
      }
    
      _singleTapMultipleSelectedButtons(interest) {
        if (this.state.multipleSelectedData.includes(interest)) {
          _.remove(this.state.multipleSelectedData, ele => {
            return ele === interest;
          });
        } else {
          this.state.multipleSelectedData.push(interest);
        }
    
        this.setState({
          multipleSelectedData: this.state.multipleSelectedData
        });
      }
    
      _singleTapMultipleSelectedButtons_limited(interest) {
        if (this.state.multipleSelectedDataLimited.includes(interest)) {
          _.remove(this.state.multipleSelectedDataLimited, ele => {
            return ele === interest;
          });
        } else {
          if (this.state.multipleSelectedDataLimited.length < 3)
            this.state.multipleSelectedDataLimited.push(interest);
        }
    
        this.setState({
          multipleSelectedDataLimited: this.state.multipleSelectedDataLimited
        });
      }
}

export default Symptoms
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