import React from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';
import Recipe from './views/Recipe.js';
import Home from './views/Home';
import Categories from './views/Categories';
import ProfilPage from './views/ProfilPage.js';

const App = () => {
  return (
    <View style={styles.screen}>
      <ProfilPage />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default App;
