
import React, { useEffect } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, Text, View ,Button , ActivityIndicator} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import { 
  Provider as PaperProvider, 
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme 
} from 'react-native-paper';

import RootStackScreen from './Components/Navigation/RootStackScreen';


const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();
import { enableScreens } from 'react-native-screens';
import SplashScreen from './Components/SplashScreen/SplashScreen';


const App = () => {
  enableScreens();


  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: '#ffffff',
      text: '#333333'
    }
  }
  
  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: '#333333',
      text: '#ffffff'
    }
  }

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

  const loginReducer = (prevState, action) => {
    switch( action.type ) {
      case 'RETRIEVE_TOKEN': 
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN': 
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT': 
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER': 
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

  const authContext = React.useMemo(() => ({
    signIn: async(dic) => {
      // setUserToken('fgkj');
      // setIsLoading(false);
      console.log("APP.JS",dic.Name)
      try {
        
        await AsyncStorage.setItem('Name', dic.Name );
        await AsyncStorage.setItem('Age', dic.Age);
        await AsyncStorage.setItem('Gender', dic.Gender);
        await AsyncStorage.setItem('PhoneNumber', dic.PhoneNumber);
        
        // await AsyncStorage.setItem('Email',foundUser.userEmail);
      } catch(e) {
        console.log(e); 
      }
      // console.log('user token: ', userToken);
      dispatch({ type: 'LOGIN', id: dic.Name, token: dic.Name });
    },
    signOut: async() => {
      // setUserToken(null);
      // setIsLoading(false);
      try {
        await AsyncStorage.removeItem('Name');
        await AsyncStorage.removeItem('Age');
        await AsyncStorage.removeItem('Gender');
        await AsyncStorage.removeItem('PhoneNumber');
        
      } catch(e) {
        console.log(e);
      }
      dispatch({ type: 'LOGOUT' });
    },
    signUp: () => {
      // setUserToken('fgkj');
      // setIsLoading(false);
    },
    toggleTheme: () => {
      setIsDarkTheme( isDarkTheme => !isDarkTheme );
    }
  }), []);

  useEffect(() => {
    setTimeout(async() => {
      // setIsLoading(false);
      let userToken;
      userToken = null;
      try {

        userToken = await AsyncStorage.getItem('Name');
        console.log(JSON.parse(userToken))

        userToken = await AsyncStorage.getItem('Name');
        userName = await AsyncStorage.getItem('Name');
        userAge = await AsyncStorage.getItem('Age');
        userGender = await AsyncStorage.getItem('Gender');
        userPhoneNumber = await AsyncStorage.getItem('PhoneNumber');
        
        console.log("App.js:",userName)
      } catch(e) {
        console.log(e);
      }
      console.log('usertoken: ', userToken);
      dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
    }, 1000);
  }, []);

  if( loginState.isLoading ) {
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator size="large"/>
      </View>
    );
}
  return (
    <PaperProvider theme={theme}>
    <NavigationContainer theme={theme}>
          <RootStackScreen/>
    </NavigationContainer>
    </PaperProvider>
  
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
