import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from '../SplashScreen/SplashScreen';
// import Register from '../Auth/RegisterForm';
import Slide from '../Slide/Slide';

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="SplashScreen" component={SplashScreen}/>
        {/* <RootStack.Screen name="Register" component={Register}/> */}
        <RootStack.Screen name="Slide" component={Slide}/>
    </RootStack.Navigator>
);

export default RootStackScreen;