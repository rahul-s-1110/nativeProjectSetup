import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../screens/home';

// const Stack = createNativeStackNavigator();
// const AuthStackNavigator = createNativeStackNavigator();
const HomeStackNavigator = createNativeStackNavigator();
export default function RootNavigation() {

    

  return (
    <HomeStackNavigator.Navigator>
        <NavigationContainer>
            <HomeStackNavigator.Screen name='Home' component={Home} />
        </NavigationContainer>
    </HomeStackNavigator.Navigator>
  )
}