import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Animated, Easing } from 'react-native';

const WaterPlanet = (props) => {
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
      <View style={styles.container}>
        <Animated.Image
          source={require('../assets/breathing.gif')}
          style={[styles.pic]}
        />
      </View>
  );
}

export default () => <WaterPlanet/>

const styles = StyleSheet.create({
  pic: {
    height: 400,
    width: 480,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  }
});