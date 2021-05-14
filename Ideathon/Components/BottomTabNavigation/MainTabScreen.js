import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../../Screens/HomeScreen';
import ProfileScreen from '../../Screens/Profile';
import HelplineScreen from '../../Screens/Helpline';
import { useTheme } from '@react-navigation/native';

const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const HelplineStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => {
  const {colors}=useTheme();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
      barStyle={{ backgroundColor: colors.accent0 }}
      
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: colors.accent0,
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />
            <Tab.Screen
        name="Helpline"
        component={HelplineStackScreen}
        options={{
          tabBarLabel: 'Helplines',
          tabBarColor: colors.accent0,
          tabBarIcon: ({ color }) => (
            <Icon name="call-sharp" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor: colors.accent0,
          tabBarIcon: ({ color }) => (
            <Icon name="ios-person" color={color} size={26} />
          ),
        }}
      />

    </Tab.Navigator>
)};

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => {
  const {colors}=useTheme();
  return(
<HomeStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: colors.accent0,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <HomeStack.Screen name="Home" component={HomeScreen} options={{
        title:'Home',
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor={colors.accent0} onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }} />
</HomeStack.Navigator>
)};

const ProfileStackScreen = ({navigation}) => {
  const {colors}=useTheme();
  return(
<ProfileStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: colors.accent0,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <ProfileStack.Screen name="Profile" component={ProfileScreen} options={{
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor={colors.accent0} onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }} />
</ProfileStack.Navigator>
)};

const HelplineStackScreen = ({navigation}) => {
  const {colors}=useTheme();
  return(
  <HelplineStack.Navigator screenOptions={{
          headerStyle: {
          backgroundColor: colors.accent0,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
          fontWeight: 'bold'
          }
      }}>
          <HelplineStack.Screen name="Helpline" component={HelplineScreen} options={{
          headerLeft: () => (
              <Icon.Button name="ios-menu" size={25} backgroundColor={colors.accent0} onPress={() => navigation.openDrawer()}></Icon.Button>
          )
          }} />
  </HelplineStack.Navigator>
  )};
  