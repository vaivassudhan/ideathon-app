import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import useTheme from 'react-native-paper';

import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../../Screens/HomeScreen';
import ProfileScreen from '../../Screens/Profile';
import HelplineScreen from '../../Screens/Helpline';

const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const HelplineStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
  
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
      barStyle={{ backgroundColor: 'rgb(54,118,203)' }}
      
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: 'rgb(54,118,203)',
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
          tabBarColor: 'rgb(54,118,203)',
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
          tabBarColor: 'rgb(54,118,203)',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-person" color={color} size={26} />
          ),
        }}
      />

    </Tab.Navigator>
);

export default MainTabScreen;
function HomeStackScreen ({navigation}){
  const { colors } = useTheme();
<HomeStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: 'rgb(54,118,203)',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <HomeStack.Screen name="Home" component={HomeScreen} options={{
        title:'Home',
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="rgb(54,118,203)" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }} />
</HomeStack.Navigator>
}

const ProfileStackScreen = ({navigation}) => (
<ProfileStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: 'rgb(54,118,203)',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <ProfileStack.Screen name="Profile" component={ProfileScreen} options={{
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="rgb(54,118,203)" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }} />
</ProfileStack.Navigator>
);

const HelplineStackScreen = ({navigation}) => (
  <HelplineStack.Navigator screenOptions={{
          headerStyle: {
          backgroundColor: 'rgb(54,118,203)',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
          fontWeight: 'bold'
          }
      }}>
          <HelplineStack.Screen name="Helpline" component={HelplineScreen} options={{
          headerLeft: () => (
              <Icon.Button name="ios-menu" size={25} backgroundColor="rgb(54,118,203)" onPress={() => navigation.openDrawer()}></Icon.Button>
          )
          }} />
  </HelplineStack.Navigator>
  );
  