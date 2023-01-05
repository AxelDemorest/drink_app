import React, {useEffect, useState} from 'react';

import {
  View,
  StyleSheet,
  Text,
  FlatList,
  ImageBackground,
  Image,
} from 'react-native';
import axios from 'axios';

const Recipe = props => {
  const [drink, setDrink] = useState();

  useEffect(() => {
    axios
      .get('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007')
      .then(res => {
        const key = res.data.drinks[0];
        console.log(typeof key);
        console.log(key);
        setDrink(key);
      });
  }, []);

  if (!drink) {
    return <Text>Chargement de la page...</Text>;
  }

  const localImage = require('../../assets/images/recipeBg.png');
  return (
    <View style={styles.screen}>
      <ImageBackground
        source={localImage}
        resizeMode={'cover'}
        style={styles.bgStyle}>
        <>
          <View style={styles.title}>
            <Text style={styles.cocktailName}>{drink.strDrink}</Text>
          </View>
        </>

        <>
          <View style={styles.infoCocktail}>
            <Text style={styles.infoDificulty}>Catégorie</Text>
            <Text style={styles.dificulty}>{drink.strCategory}</Text>
            <Text style={styles.infoServes}>Type de verre</Text>
            <Text style={styles.serves}>{drink.strGlass}</Text>
            <Text style={styles.infoCategory}>Instruction</Text>
            <Text style={styles.cocktailDescription}>
              {drink.strInstructions}
            </Text>
          </View>
          <View>
            <Image
              source={{uri: drink.strDrinkThumb}}
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
              data={(drink.strIngredient1, drink.strIngredient1)}
              horizontal
              renderItem={({item}) => {
                return (
                  <>
                    <View style={styles.baseItem}>
                      <Text style={styles.textItem}>
                        {drink.strIngredient1}
                      </Text>
                      <Text style={styles.textItem}>{drink.strMeasure1}</Text>
                    </View>
                  </>
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
    marginBottom: 200,
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
    fontSize: 15,
    fontWeight: '200',
    lineHeight: 20,
    marginBottom: 60,
    marginRight: 195,
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
    marginTop: -30,
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
    fontSize: 25,
    fontWeight: '700',
    lineHeight: 44,
    color: '#FB7D8A',
  },
  cocktailImage: {
    width: 204,
    height: 248,
    position: 'absolute',
    bottom: 90,
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
    marginTop: -40,
  },
  flatList: {
    width: 380,
    marginTop: 5,
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
