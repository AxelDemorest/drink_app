import React, {useState, useRef} from 'react';

import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Modal,
} from 'react-native';

const Register = () => {
  const [email, onChangeEmail] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  const simpleAlertHandler = () => {
    //function to make simple alert
    alert('Inscription envoyée');
  };

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.view}>
        <Text style={styles.textSignIn}>Register</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={onChangeEmail}
          value={email}
        />
        <TextInput
          style={styles.textInput}
          onChangeText={onChangePassword}
          value={password}
        />
        <TouchableOpacity
          style={styles.touchableOpacitySignIn}
          onPress={simpleAlertHandler}>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15}}>
            Register
          </Text>
        </TouchableOpacity>
        <View
          style={{flexDirection: 'row', alignItems: 'center', width: '80%'}}>
          <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
          <View>
            <Text style={styles.viewContinue}>Or continue with</Text>
          </View>
          <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
        </View>

        <TouchableOpacity style={styles.touchableOpacityGoogle}>
          <Image
            source={{
              uri: 'https://img.freepik.com/icones-gratuites/rechercher_318-265146.jpg?w=2000',
            }}
            style={styles.googleImage}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#FEF9E4',
  },
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textSignIn: {
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 50,
  },
  textInput: {
    height: 50,
    width: '80%',
    margin: 12,
    borderWidth: 0.1,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  touchableOpacitySignIn: {
    height: 60,
    width: '80%',
    margin: 12,
    borderWidth: 1,
    padding: 10,
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: '#4461F2',
    justifyContent: 'center',
    marginTop: 40,
  },
  viewContinue: {
    marginTop: 20,
    fontWeight: '500',
    fontSize: 15,
    color: 'grey',
    marginLeft: '10%',
  },
  touchableOpacityGoogle: {
    paddingHorizontal: 27,
    paddingVertical: 8,
    backgroundColor: 'white',
    borderRadius: 15,
    marginTop: 20,
  },
  googleImage: {
    width: 35,
    height: 35,
    justifyContent: 'center',
  },
  viewRegister: {
    paddingLeft: '20%',
    paddingRight: '20%',
    justifyContent: 'center',
    marginTop: 20,
  },
});

export default Register;
