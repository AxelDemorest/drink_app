import React from 'react';
import {Text, SafeAreaView, View, StyleSheet, Image} from 'react-native';

const ProfilPage = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <>
        <View style={styles.profilHeader}>
          <Image
            source={require('../assets/profilLogo.png')}
            style={styles.profilLogo}
          />
          <Image
            source={require('../assets/profilAvatar.png')}
            style={styles.profilAvatar}
          />
          <Text style={styles.profilName}>Nom de profil</Text>
        </View>
      </>

      <>
        <View style={styles.allLogout}>
          <Text style={styles.textLogout}>Deconnexion</Text>
          <View style={styles.logOut}>
            <Image
              style={styles.imgLogout}
              source={require('../assets/logOut.png')}
            />
          </View>
        </View>
      </>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  profilHeader: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  profilLogo: {
    width: 54,
    height: 38,
    marginBottom: 37,
  },
  profilAvatar: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  profilName: {
    fontSize: 32,
    fontWeight: '400',
    lineHeight: 44,
  },
  allLogout: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    position: 'absolute',
    top: 780,
    left: 250,
  },
  textLogout: {fontSize: 16, lineHeight: 27, fontWeight: '400', marginRight: 5},
  logOut: {
    width: 30,
    height: 30,
    backgroundColor: '#FB7D8A',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgLogout: {
    width: 15,
    height: 15,
  },
});

export default ProfilPage;
