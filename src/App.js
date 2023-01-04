import React from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';
import Recipe from './views/Recipe.js';
import Home from './views/Home';

const App = () => {
  return (
    <View style={styles.screen}>
      <Recipe />
      <Home />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default App;
