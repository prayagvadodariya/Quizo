import React from 'react';
import { TouchableOpacity } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './src/screens/Home';
import User from './src/screens/User';
import Icon from 'react-native-vector-icons/AntDesign';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTabStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor:"#06d3f7",
        inactiveTintColor: 'gray',
        style: {
          backgroundColor: '#ffffff',
        },
        labelStyle: {
          textAlign: 'center',
          fontSize: 12,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={26} />)
        }}
      />
      <Tab.Screen
        name="User"
        component={User}
        options={{
          tabBarLabel: 'User',
          tabBarIcon: ({ color }) => (
            <Icon name="user" color={color} size={26} />)
        }}
      />
    </Tab.Navigator>
  );
};


const Router = () => {
    return (
      <NavigationContainer>
         <Stack.Navigator initialRouteName="BottomTabStack">
         <Stack.Screen options={{headerLeft:false, headerRight: false, headerTitle: false, headerStyle: false, headerTransparent: true}} name="BottomTabStack" component={BottomTabStack} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };
export default Router;