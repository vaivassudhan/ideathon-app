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
import { TagSelect } from 'react-native-tag-select';
import { Button } from 'react-native-paper';
 
export default class Symptoms extends React.Component {
  render() {
    const data = [
      { id: 1, label: 'Fever' },
      { id: 2, label: 'Cold' },
      { id: 3, label: 'Loss of smell' },
      { id: 4, label: 'Loss of taste' },
      { id: 5, label: 'Headache' },
      { id: 6, label: 'Pain in chest with deep breaths' },
      { id: 7, label: 'Shortness of breath' },
      { id: 8, label: 'Sore Throat' },
      { id: 9, label: 'Stomach ache' },
      { id: 10, label: 'Diarrhea' },
    ];
 
    return (
      <View styles={styles.container}>
                <View style={{backgroundColor:'#3880ff'}}>
                    <StatusBar
                    animated={true}
                    backgroundColor="#040631"/>
                    <SafeAreaView>
                    <Icon.Button name="arrow-back-sharp" size={25} backgroundColor="#343661" onPress={() => this.props.navigation.navigate('Home')}> Back</Icon.Button>   
                    </SafeAreaView>
                </View>
                <View>
                    <Text style={styles.headtext}>
                    Please select your symptoms
                    </Text>
                    <View style={styles.symptom_list}>
                    <TagSelect
                      theme="info"
                        data={data}
                        itemStyle={styles.item}
                        itemLabelStyle={styles.label}
                        itemStyleSelected={styles.itemSelected}
                        itemLabelStyleSelected={styles.labelSelected}
                        ref={(tag) => {
                              this.tag = tag;
                        }}
                      />     
                      </View>
                </View>
                <View style={{alignSelf:'flex-end'}}>
                <Button style={[styles.nextbutton,{backgroundColor:'#3880ff', marginRight:20, marginTop:'40%'}]} mode="contained" onPress={() => this.props.navigation.navigate('Symco',{selected:JSON.stringify(this.tag.itemsSelected)})}>
                        Next
                </Button>
                </View>
            </View>
    );
  }
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
      alignSelf:'center',
      color:'#fff'
    },
    symptom_list:{
      marginTop:30,
      marginLeft:50,
      marginRight:50,

    },
    nextbutton:{
      // position: 'absolute',
      alignSelf: 'flex-end',
      top:50,
      // bottom:0,
      right:20,
    },
    item:{
      borderColor: '#3880ff',
      backgroundColor:'#343661',
      margin:5,
    },
    label:{
      color:'#fff',
      fontSize:16,
      fontWeight:'600'
    },
    itemSelected:{
      borderColor: '#343661',
      backgroundColor:'#3380ff'
    },
    labelSelected:{
      color:'#fff'
    },
 
})