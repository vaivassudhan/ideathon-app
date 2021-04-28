import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Badge } from 'react-native-paper';
import { Button } from 'react-native-paper';

export default function Demo() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
        Press me
      </Button>
      <Image
        style={styles.logo}
        source={{
        }}
      />

      <Badge>3</Badge>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
