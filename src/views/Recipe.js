import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  FlatList,
  ImageBackground,
  Image,
} from 'react-native';

const Recipe = () => {
  const localImage = require('../assets/recipeBg.png');
  return (
    <View style={styles.screen}>
      <ImageBackground
        source={localImage}
        resizeMode={'cover'}
        style={styles.bgStyle}>
        <>
          <View style={styles.title}>
            <Text style={styles.cocktailName}>Mojito</Text>
            <Text style={styles.cocktailDescription}>
              A Mojito alcohol, its combination of sweet and citrusy flavors
              makes it the summers go to.
            </Text>
          </View>
        </>

        <>
          <View style={styles.infoCocktail}>
            <Text style={styles.infoTime}>Temps de preparation</Text>
            <Text style={styles.time}>25 min</Text>
            <Text style={styles.infoDificulty}>Difficulté</Text>
            <Text style={styles.dificulty}>Intermédiaire</Text>
            <Text style={styles.infoCategory}>Catégorie</Text>
            <Text style={styles.category}>Doux</Text>
            <Text style={styles.infoServes}>Nombre de verre</Text>
            <Text style={styles.serves}>2</Text>
          </View>
          <View>
            <Image
              source={require('../assets/mojiito.png')}
              resizeMode={'cover'}
              style={styles.cocktailImage}
            />
          </View>
        </>

        <>
          <View style={styles.infoIngredients}>
            <Text style={styles.infoListIng}> Liste des ingrédients </Text>
          </View>
        </>

        <>
          <View style={styles.flatList}>
            <FlatList
              data={[
                'Menthe',
                'Rhum',
                'Citron',
                'Jus de citron',
                'Glaçon',
                'Eau gazeuse',
              ]}
              horizontal
              renderItem={({item}) => {
                return (
                  <View style={styles.baseItem}>
                    <Text style={styles.textItem}>{item}</Text>
                  </View>
                );
              }}
            />
          </View>
        </>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  bgStyle: {
    flex: 1,
    marginBottom: 270,
  },
  title: {
    alignItems: 'center',
  },
  cocktailName: {
    marginTop: 45,
    marginBottom: 27,
    fontSize: 26,
    fontWeight: '600',
    lineHeight: 44,
  },
  cocktailDescription: {
    fontSize: 16,
    fontWeight: '200',
    lineHeight: 20,
    textAlign: 'center',
    marginBottom: 60,
  },
  infoCocktail: {
    justifyContent: 'flex-start',
    marginLeft: 26,
  },
  infoTime: {
    fontSize: 15,
    fontWeight: '300',
    lineHeight: 44,
  },
  time: {
    fontSize: 32,
    fontWeight: '700',
    lineHeight: 44,
    marginBottom: 10,
  },
  infoDificulty: {
    fontSize: 24,
    fontWeight: '300',
    lineHeight: 44,
    color: '#82B70B',
  },
  dificulty: {
    fontSize: 32,
    fontWeight: '700',
    lineHeight: 44,
    color: '#82B70B',
  },
  infoCategory: {
    fontSize: 24,
    fontWeight: '300',
    lineHeight: 44,
    color: '#F1A411',
  },
  category: {
    fontSize: 32,
    fontWeight: '700',
    lineHeight: 44,
    color: '#F1A411',
  },
  infoServes: {
    fontSize: 24,
    fontWeight: '300',
    lineHeight: 44,
    color: '#FB7D8A',
  },
  serves: {
    fontSize: 32,
    fontWeight: '700',
    lineHeight: 44,
    color: '#FB7D8A',
  },
  cocktailImage: {
    width: 204,
    height: 248,
    position: 'absolute',
    bottom: 60,
    left: 200,
  },

  infoIngredients: {
    justifyContent: 'flex-start',
    marginLeft: 26,
  },
  infoListIng: {
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 44,
    color: '#FB7D8A',
  },
  flatList: {
    width: 380,
  },
  baseItem: {
    width: 150,
    height: 150,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    borderRadius: 70,
    backgroundColor: '#FEF9E4',
    borderWidth: 1.5,
    borderColor: '#FBE897',
    marginLeft: 5,
    marginTop: 20,
    paddingBottom: 15,
  },
  textItem: {
    fontSize: 12,
    lineHeight: 14,
    fontWeight: '300',
  },
});

export default Recipe;
