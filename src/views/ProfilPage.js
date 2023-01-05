import React, {useState} from 'react';
import {
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';

const ProfilPage = () => {
  const [imageUriGallery, setImageUriGallery] = useState('');

  const editPicture = async () => {
    let options = {};

    try {
      const response = await launchImageLibrary(options);
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled picker');
      } else if (response.error) {
        console.log('PickeR error = ', response.error);
      } else if (response.TouchableOpacity) {
        console.log('');
      } else {
        setImageUriGallery(response.assets[0].uri.replace('file://', ''));
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SafeAreaView style={styles.screen}>
      <>
        <View style={styles.profilHeader}>
          <Image
            source={require('../assets/logo.jpg')}
            style={styles.profilLogo}
          />

          <Image
            source={
              imageUriGallery
                ? {uri: imageUriGallery}
                : require('../assets/profilAvatar.png')
            }
            /*source={require('../assets/profilAvatar.png')}*/
            style={styles.profilAvatar}
          />
          <View>
            <TouchableOpacity
              style={styles.seeAll}
              onPress={() => {
                editPicture();
              }}>
              <Text style={styles.seeAllText}>Modifier la photo</Text>
            </TouchableOpacity>
          </View>
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
    borderRadius: 100,
    borderWidth: 2,
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
  seeAll: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#FB7D8A',
    marginTop: 0,
    marginRight: 0,
    width: 70,
    height: 38,
  },
  seeAllText: {
    textAlign: 'center',
    fontSize: 10,
    padding: 6,
    color: '#FB7D8A',
    opacity: 1,
  },
});

export default ProfilPage;
