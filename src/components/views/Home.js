import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const App = () => {
  const navigation = useNavigation();

  const localImage = require('../../assets/backgroundHome.jpg');
  return (
    <View style={styles.container}>
      <ImageBackground
        source={localImage}
        resizeMode={'cover'}
        style={styles.imageBackground}>
        <Text style={styles.titleFirst}>It’s time for a</Text>
        <Text style={styles.titleDrink}>Drink !</Text>
        <Text style={styles.title}>
          L'application unique pour trouver des mélanges de boissons incroyables
          pour toutes les occasions !
        </Text>
        <TouchableOpacity>
          <Text style={styles.textTest}>Get Started</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleFirst: {
    textAlign: 'left',
    //fontFamily: 'Poppins',
    color: '#1E2742',
    fontSize: 35,
    marginTop: 65,
    marginLeft: 25,
  },
  titleDrink: {
    textAlign: 'left',
    fontSize: 60,
    textTransform: 'capitalize',
    color: '#F66372',
    marginTop: 15,
    marginLeft: 25,
  },
  title: {
    textAlign: 'left',
    marginTop: 13,
    color: 'grey',
    marginLeft: 25,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btnStarted: {
    marginTop: 27,
    width: 180,
    color: 'white',
    backgroundColor: '#1E2742',
    paddingHorizontal: 37,
    paddingVertical: 17,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 25,
  },
  textTest: {
    textAlign: 'left',
    color: 'white',
    fontSize: 16,
    lineHeight: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBackground: {
    flex: 1,
  },
});

export default App;
