import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';



const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode='none'>
    </RootStack.Navigator>
);

export default RootStackScreen;