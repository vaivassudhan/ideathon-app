import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, StyleSheet, Animated, Easing ,StatusBar,SafeAreaView} from 'react-native';
import { useTheme } from '@react-navigation/native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Button,Title } from 'react-native-paper';

 export default function WaterPlanet ({navigation}) {
  const [scaleValue] = useState(new Animated.Value(0))
  const {colors} = useTheme();
  const styles = StyleSheet.create({
    pic: {
      height: 400,
      width: 480,
    },
    container: {
      marginTop:'25%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.accent0,
    },
    title:{
      fontWeight: 'bold',
      fontSize:30,
      marginTop:40,
      textAlign:'center',
      color:'#fff'
    },
  });
  const [etype , setetype] = useState(true)
  const type=true;
  return (
    <View style={{backgroundColor: colors.accent0,flex:1}}>
      <View style={{backgroundColor:colors.accent0}}>
        <StatusBar
        animated={true}
        backgroundColor={colors.accent0}/>
        <SafeAreaView>
        <Icon.Button name="arrow-back-sharp" size={25} backgroundColor={colors.accent1} onPress={() => navigation.navigate('Home')}> Back</Icon.Button>   
        </SafeAreaView>
        
      </View>
      <Title style={styles.title}>Exercise</Title>
      {etype && (
      <View style={styles.container}>
        <Animated.Image
          source={require('../assets/breathing.gif')}
          style={[styles.pic]}
        />
      </View>
      )}
      {!etype &&(
      <View style={styles.container}>
        <Animated.Image
          source={require('../assets/workout.gif')}
          style={[styles.pic]}
        />
      </View>
      )}
      <View>
        <Button onPress={()=>{setetype(!etype)}} style={{margin:20,backgroundColor:colors.accent1}}>Click Here to Change Exercise</Button>
      </View>
    </View>
  );
}


