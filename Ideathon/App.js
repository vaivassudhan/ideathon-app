import React, { useEffect } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, Text, View ,Button , ActivityIndicator} from 'react-native';
import { NavigationContainer, DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import { 
    Provider as PaperProvider, 
    DefaultTheme as PaperDefaultTheme,
    DarkTheme as PaperDarkTheme 
  } from 'react-native-paper';
import { AuthContext } from './Components/context';
import RootStackScreen from './Components/Navigation/RootStackScreen';
import HomeScreen from './Screens/HomeScreen'
import { DrawerContent } from './Components/Drawer/DrawerContent';
import Symptoms from './Screens/Symptoms';
import Breathing from './Screens/Breathing';
import Report from './Screens/Report';
import Goals from './Screens/Goals';
import Symco from './Components/Symptomscom/Symco';
const Drawer = createDrawerNavigator();
import MainTabScreen from './Components/BottomTabNavigation/MainTabScreen';
import { enableScreens } from 'react-native-screens';

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
      text: '#000000',
      text_secondary:'3c3c3c',
      accent0:'#3880ff',
      accent1:'#3dc2ff',
      accent2:'#5260ff',
      accent3:'#f6a409',
      backcard:'#ffffff'
    }
  }
  
  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: '#040631',
      text: '#fff',
      text_secondary:'#ddd',
      accent0:'#040631',
      accent1:'#343661',
      accent2:'#0a0f41',
      accent3:'#3880ff',
      backcard:'#3D225D'
    }
  }

  const theme = isDarkTheme ? CustomDefaultTheme : CustomDarkTheme;

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
    update:async(updated)=>{
      try {
        await AsyncStorage.removeItem('Name');
        await AsyncStorage.removeItem('Age');
        await AsyncStorage.removeItem('Gender');

        await AsyncStorage.setItem('Name', updated.Name );
        await AsyncStorage.setItem('Age', updated.Age);
        await AsyncStorage.setItem('Gender', updated.Gender);
      }catch(e){
        console.log(e); 
      }
    },

    AddSelectedList:async(selected)=>{
      try {
        await AsyncStorage.setItem('Symptoms', selected );
        userSymptoms = await AsyncStorage.getItem('Symptoms');
        console.log("ghfhhgfhfh",userSymptoms)
      }catch(e){
        console.log(e); 
      }
    },
    signIn: async(dic) => {
      // setUserToken('fgkj');
      // setIsLoading(false);
      console.log("APP.JS",dic.Location)
      try {
        
        await AsyncStorage.setItem('Name', dic.Name );
        await AsyncStorage.setItem('Age', dic.Age);
        await AsyncStorage.setItem('Gender', dic.Gender);
        await AsyncStorage.setItem('PhoneNumber', dic.PhoneNumber);
        await AsyncStorage.setItem('Date', dic.Date);
        await AsyncStorage.setItem('Time', dic.Time);
        await AsyncStorage.setItem('Symptoms', dic.Symptoms);
        await AsyncStorage.setItem('Location', dic.Location);

        userSymptoms = await AsyncStorage.getItem('Symptoms');

        console.log("dsfhggfhj",userSymptoms)
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
        await AsyncStorage.removeItem('Date');
        await AsyncStorage.removeItem('Time');
        await AsyncStorage.removeItem('Symptoms');
        await AsyncStorage.removeItem('Location');
        
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

        userToken = await AsyncStorage.getItem('Name');
        userName = await AsyncStorage.getItem('Name');
        userAge = await AsyncStorage.getItem('Age');
        userGender = await AsyncStorage.getItem('Gender');
        userPhoneNumber = await AsyncStorage.getItem('PhoneNumber');
        userDate = await AsyncStorage.getItem('Date');
        userTime = await AsyncStorage.getItem('Time');
        userSymptoms = await AsyncStorage.getItem('Symptoms');
        userLocation = await AsyncStorage.getItem('Location');
        
        console.log("App.js:",userTime)
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
    <AuthContext.Provider value={authContext}>
    <NavigationContainer theme={theme}>
    { loginState.userToken !== null ? (
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
          <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
          <Drawer.Screen name="HomeScreen" component={HomeScreen} /> 
          <Drawer.Screen name="Symptoms" component={Symptoms} /> 
          <Drawer.Screen name="Goals" component={Goals} /> 
          <Drawer.Screen name="Breathing" component={Breathing} /> 
          <Drawer.Screen name="Report" component={Report} /> 
          <Drawer.Screen name="Symco" component={Symco} /> 
        </Drawer.Navigator>

         )  
         :
           <RootStackScreen/>
         }
    </NavigationContainer>
    </AuthContext.Provider> 
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
