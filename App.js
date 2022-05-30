import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Home from './Home';
import Details from './Details';
import WorkIn from './WorkIn';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={'Home'}
        screenOptions={{headerShown: false}}>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Contact" component={WorkIn} />
        <Tab.Screen name="About" component={WorkIn} />
        <Tab.Screen name="Reach" component={WorkIn} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={'HomeScreen'}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={Home} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});
