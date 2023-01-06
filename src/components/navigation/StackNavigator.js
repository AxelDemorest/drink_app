import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DrawerNavigator from './DrawerNavigator';
import Home from '../views/Home';
import Login from '../views/Login';
import Categories from '../views/Categories';
import Recipe from '../views/Recipe';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'Home'}>
      <Stack.Screen name="Root" component={DrawerNavigator} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Recipe" component={Recipe} />
      <Stack.Screen name="Categories" component={Categories} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
