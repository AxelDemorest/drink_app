import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  Image,
  ScrollView,
} from 'react-native';

const Readme = () => {
  const localImage = require('../../assets/recipeBg2.png');
  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        source={localImage}
        resizeMode={'cover'}
        style={styles.bgStyle}>
        <Image />
        <Text style={styles.slogan}>L'ALCOOL c'est pas COOL ?</Text>
        <Text style={styles.team}>L'équipe :</Text>
        <View style={styles.imageTeam} />
        <View style={styles.teamDescription}>
          <Image
            style={styles.picture}
            source={require('../../assets/alexis.jpg')}
          />

          <Image
            style={styles.picture}
            source={require('../../assets/merwan.png')}
          />

          <Image
            style={styles.picture}
            source={require('../../assets/axel.jpg')}
          />

          <Image
            style={styles.picture}
            source={require('../../assets/oceane.jpg')}
          />
        </View>
        <Image
          style={styles.picture2}
          source={require('../../assets/gauthier.jpg')}
        />
        <Text style={styles.team}>Le Projet :</Text>
        <Text style={styles.description}>
          DRINK l'application révolutionnaire des cocktails. Retrouvez tous les
          cocktail, avec leurs compositions et toutes les notes et les avis de
          nos clients. Créez un compte sur notre applications afin d'être
          notifié de toutes nos nouveautés. ET n'oubliez pas, vaut mieux de
          l'alcool avalé que recraché ...
        </Text>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageLogo: {
    marginTop: 45,
    marginLeft: 155,
    width: 90,
    height: 60,
  },
  slogan: {
    textAlign: 'center',
    marginTop: 30,
    fontSize: 25,
  },
  team: {
    marginTop: 30,
    marginLeft: 25,
    fontSize: 20,
  },
  bgStyle: {
    flex: 1,
  },
  teamDescription: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 15,
  },
  picture: {
    width: 155,
    height: 155,
    marginTop: 0,
    borderRadius: 200,
    borderColor: 'white',
    borderWidth: 2.5,
    marginLeft: 25,
    marginBottom: 5,
  },
  picture2: {
    width: 155,
    height: 155,
    marginTop: 0,
    borderRadius: 200,
    borderColor: 'white',
    borderWidth: 2.5,
    marginLeft: 115,
    marginBottom: 5,
  },
  description: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    marginBottom: 40,
  },
});

export default Readme;
