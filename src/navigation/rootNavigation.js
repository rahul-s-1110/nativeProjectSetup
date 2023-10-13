import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../screens/home';

const Stack = createNativeStackNavigator();
export default function RootNavigation() {
  return (
    <Stack.Navigator>
        <NavigationContainer>
            <Stack.Screen name='Home' component={Home} />
        </NavigationContainer>
    </Stack.Navigator>
  )
}