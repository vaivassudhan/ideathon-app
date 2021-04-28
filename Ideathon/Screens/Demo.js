import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Image,SafeAreaView, TextInput } from 'react-native';
import { Badge } from 'react-native-paper';
import { Button } from 'react-native-paper';
import {Text} from 'react-native-paper'
export default function Demo() {

  return (
    <SafeAreaView style={styles.container}>
    <View >
      <StatusBar style="auto" />
      <Text style={{color:"white", fontSize:32}} >Server monks</Text>
      <View style={{paddingTop:24}}>

      <Button  icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
        click me
      </Button>
      <TextInput ></TextInput>
      </View>
      <Image
        style={styles.logo}
        source={{
        }}
      />
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
   
    // backgroundColor:'rgb(0,0,0)'
  },
});
