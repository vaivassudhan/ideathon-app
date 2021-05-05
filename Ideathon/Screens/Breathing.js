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
          source={require('../assets/water-planet.png')}
          style={[styles.pic, {
            transform: [
              {
                scale: scaleValue.interpolate({
                  inputRange: [0, 0.5, 1],
                  outputRange: [1, 1.2, 1]
                })
              }
            ]
          }]}
        />
      </View>
  );
}

export default () => <WaterPlanet/>

const styles = StyleSheet.create({
  pic: {
    height: 140,
    width: 180,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  }
});