import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Demo from './Screens/Demo'
import {DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    
    primary: 'rgb(220,75,99)',
    accent: 'rgb(223,98,51)',
  },
  backgroundColor:'rgb(0,0,0)',
};
export default function App() {
  return (
    <PaperProvider theme={theme}>
      <Demo />
    </PaperProvider>
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
