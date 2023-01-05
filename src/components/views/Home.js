import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const App = () => {
  const localImage = require('../../assets/images/backgroundHome.jpg');
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground
        source={localImage}
        resizeMode={'cover'}
        style={styles.imageBackground}>
        <Text style={styles.titleFirst}>It’s time for a</Text>
        <Text style={styles.titleDrink}>Drink</Text>
        <Text style={styles.title}>
          L'application unique pour trouver des mélanges de boissons incroyables
          pour toutes les occasions !
        </Text>
        <TouchableOpacity
          style={styles.btnStarted}
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <Text style={styles.textTest}>Get Started</Text>
          <MaterialIcons name="arrow-forward-ios" size={15} color={'#fff'} />
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
    fontFamily: 'Poppins-SemiBold',
    color: '#1E2742',
    fontSize: 35,
    marginTop: 60,
    marginLeft: 25,
  },
  titleDrink: {
    textAlign: 'left',
    fontFamily: 'DancingScript-Regular',
    fontSize: 60,
    textTransform: 'capitalize',
    color: '#F66372',
    marginLeft: 25,
  },
  title: {
    textAlign: 'left',
    fontFamily: 'Poppins-Regular',
    marginTop: 13,
    color: 'grey',
    marginLeft: 25,
    marginRight: 20,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btnStarted: {
    marginTop: 22,
    width: 180,
    color: 'white',
    backgroundColor: '#1E2742',
    paddingHorizontal: 37,
    paddingVertical: 13,
    borderRadius: 40,
    marginLeft: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textTest: {
    textAlign: 'left',
    color: 'white',
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    marginRight: 6,
  },
  imageBackground: {
    flex: 1,
  },
});

export default App;
