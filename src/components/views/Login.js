import React, {useState, useRef} from 'react';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import {StackActions} from '@react-navigation/native';

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
import {storeData} from '../../helpers/data.helper';

const Login = props => {
  const {navigation} = props;
  const [email, onChangeEmail] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  const simpleAlertHandler = () => {
    //function to make simple alert
    alert('Inscription envoyée');
  };

  const onGoogleButtonPress = async () => {
    const {idToken} = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    const user = await auth().signInWithCredential(googleCredential);

    try {
      await storeData('user', user);
      navigation.dispatch(StackActions.replace('Root'));
    } catch (e) {}
  };

  GoogleSignin.configure({
    webClientId:
      '460241381805-jpbs2bhn97nhbvkdjn7unofefocp3j1j.apps.googleusercontent.com',
  });

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.view}>
        <Text style={styles.textSignIn}>Sign In</Text>
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
            Sign In
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

        <TouchableOpacity
          style={styles.touchableOpacityGoogle}
          onPress={() =>
            onGoogleButtonPress().then(() =>
              console.log('Signed in with Google!'),
            )
          }>
          <Image
            source={{
              uri: 'https://img.freepik.com/icones-gratuites/rechercher_318-265146.jpg?w=2000',
            }}
            style={styles.googleImage}
          />
        </TouchableOpacity>

        <View style={styles.viewRegister}>
          <Text style={{fontSize: 20}}>
            if you don’t an account you can
            <Text style={{fontWeight: 'bold', fontSize: 20, color: 'blue'}}>
              {' '}
              Register here!
            </Text>
          </Text>
        </View>
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

export default Login;
