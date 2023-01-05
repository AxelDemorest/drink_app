import React from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';
import Recipe from './views/Recipe.js';
import Home from './views/Home';
import Categories from './views/Categories';
import Readme from './views/Readme';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './components/navigation/DrawerNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>

  );
};

export default App;
