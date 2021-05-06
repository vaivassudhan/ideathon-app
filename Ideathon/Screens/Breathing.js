import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, StyleSheet, Animated, Easing ,StatusBar,SafeAreaView} from 'react-native';

 export default function WaterPlanet ({navigation}) {
  const [scaleValue] = useState(new Animated.Value(0))

  const waterAnimation = () => {
    Animated.sequence([
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: true
      }),
      Animated.timing(scaleValue, {
        toValue: 0,
        duration: 0,
        useNativeDriver: true
      })
    ]).start(() => waterAnimation());
  };

  React.useEffect(() => {
    waterAnimation();
  }, []);

  return (
    <View style={{backgroundColor: 'rgb(241,242,244)',flex:1}}>
    <View style={{backgroundColor:'rgb(54,118,203)'}}>
        <StatusBar
        animated={true}
        backgroundColor="rgb(54,118,203)"/>
        <SafeAreaView>
        <Icon.Button name="arrow-back-sharp" size={25} backgroundColor="rgb(54,118,203)" onPress={() => navigation.navigate('Home')}> Back</Icon.Button>   
        </SafeAreaView>
        
    </View>
    <View style={styles.container}>
        <Animated.Image
          source={require('../assets/breathing.gif')}
          style={[styles.pic]}
        />
      </View>
      </View>
  );
}


const styles = StyleSheet.create({
  pic: {
    height: 400,
    width: 480,
  },
  container: {
    marginTop:'45%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(241,242,244)',
  }
});