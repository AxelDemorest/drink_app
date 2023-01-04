import React from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';
import Home from './views/Home';

const App = () => {
  return (
    <View style={styles.screen}>
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
