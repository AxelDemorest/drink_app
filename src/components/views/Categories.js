import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
  FlatList,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState, useMemo} from 'react';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';

const Categories = () => {
  const [search, setSearch] = useState('');
  const [drink, setDrink] = useState();
  const navigation = useNavigation();

  useEffect(() => {
    axios
      .get('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007')
      .then(res => {
        const key = res.data.drinks;

        setDrink(key);
      });
  }, []);

  useEffect(() => {
    console.log(search);
    axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
      .then(res => {
        const key = res.data.drinks;

        setDrink(key);
      });
  }, [search]);

  return (
    <View style={styles.viewCategories}>
      <Image
        style={styles.imageLogo}
        source={{
          uri: drink.strDrinkThumb,
        }}
      />
      <TextInput
        style={styles.inputRecherche}
        value={search}
        onChangeText={setSearch}
        placeholder={'Recherche  ...'}
      />
      <FlatList
        data={drink}
        // style={styles.moviesList}
        numColumns={2}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('Recipe', {drink: item})}>
              <View>
                <Image
                  source={{
                    uri: drink.strDrinkThumb,
                  }}
                  style={{width: 35, height: 35, justifyContent: 'flex-end'}}
                />
                <Text>{item.strDrink}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />

      <View style={styles.categoriesSee}>
        <Text style={styles.categoriesTitle}>Categories</Text>
        <TouchableOpacity style={styles.seeAll}>
          <Text style={styles.seeAllText}>See all</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal={true} style={styles.scrollCard}>
        <View style={styles.cardCategories}>
          <Image
            style={styles.imageCategories}
            source={{
              uri: drink.strDrinkThumb,
            }}
          />
          <Text style={styles.titleCocktail}>Cocktails</Text>
          <Text style={styles.mixeCocktail}> 50 Mixes </Text>
        </View>

        <View style={styles.cardCategories}>
          <Image
            style={styles.imageCategories}
            source={{
              uri: drink.strDrinkThumb,
            }}
          />
          <Text style={styles.titleCocktail}>Cocktails</Text>
          <Text style={styles.mixeCocktail}> 50 Mixes </Text>
        </View>

        <View style={styles.cardCategories}>
          <Image
            style={styles.imageCategories}
            source={{
              uri: drink.strDrinkThumb,
            }}
          />
          <Text style={styles.titleCocktail}>Cocktails</Text>
          <Text style={styles.mixeCocktail}> 50 Mixes </Text>
        </View>

        <View style={styles.cardCategories}>
          <Image
            style={styles.imageCategories}
            source={{
              uri: drink.strDrinkThumb,
            }}
          />
          <Text style={styles.titleCocktail}>Cocktails</Text>
          <Text style={styles.mixeCocktail}> 50 Mixes </Text>
        </View>

        <View style={styles.cardCategories}>
          <Image
            style={styles.imageCategories}
            source={{
              uri: drink.strDrinkThumb,
            }}
          />
          <Text style={styles.titleCocktail}>Cocktails</Text>
          <Text style={styles.mixeCocktail}> 50 Mixes </Text>
        </View>
      </ScrollView>

      <View style={styles.categoriesSee2}>
        <Text style={styles.categoriesTitle2}>Recent Mixes</Text>
        <TouchableOpacity style={styles.seeAll2}>
          <Text style={styles.seeAllText2}>See all</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal={true} style={styles.cardScrollMixes}>
        <View style={styles.cardMixes}>
          <Text style={styles.textTitle}>Bleu Moon</Text>
          <Image
            style={styles.imageCocktail}
            source={{
              uri: drink.strDrinkThumb,
            }}
          />
          <Text style={styles.alcool}>Avec ou sans alcool : ...</Text>
          <Text style={styles.verre}>Type de verre : ...</Text>
          <View style={styles.cardBot}>
            <Image
              style={styles.imageLike}
              source={{
                uri: drink.strDrinkThumb,
              }}
            />
            <Image
              style={styles.imageNote}
              source={{
                uri: drink.strDrinkThumb,
              }}
            />
          </View>
        </View>

        <View style={styles.cardMixes}>
          <Text style={styles.textTitle}>Bleu Moon</Text>
          <Image
            style={styles.imageCocktail}
            source={{
              uri: drink.strDrinkThumb,
            }}
          />
          <Text style={styles.alcool}>Avec ou sans alcool : ...</Text>
          <Text style={styles.verre}>Type de verre : ...</Text>
          <View style={styles.cardBot}>
            <Image
              style={styles.imageLike}
              source={{
                uri: drink.strDrinkThumb,
              }}
            />
            <Image
              style={styles.imageNote}
              source={{
                uri: drink.strDrinkThumb,
              }}
            />
          </View>
        </View>

        <View style={styles.cardMixes}>
          <Text style={styles.textTitle}>Bleu Moon</Text>
          <Image
            style={styles.imageCocktail}
            source={{
              uri: drink.strDrinkThumb,
            }}
          />
          <Text style={styles.alcool}>Avec ou sans alcool : ...</Text>
          <Text style={styles.verre}>Type de verre : ...</Text>
          <View style={styles.cardBot}>
            <Image
              style={styles.imageLike}
              source={{
                uri: drink.strDrinkThumb,
              }}
            />
            <Image
              style={styles.imageNote}
              source={{
                uri: drink.strDrinkThumb,
              }}
            />
          </View>
        </View>

        <View style={styles.cardMixes}>
          <Text style={styles.textTitle}>Bleu Moon</Text>
          <Image
            style={styles.imageCocktail}
            source={{
              uri: drink.strDrinkThumb,
            }}
          />
          <Text style={styles.alcool}>Avec ou sans alcool : ...</Text>
          <Text style={styles.verre}>Type de verre : ...</Text>
          <View style={styles.cardBot}>
            <Image
              style={styles.imageLike}
              source={{
                uri: drink.strDrinkThumb,
              }}
            />
            <Image
              style={styles.imageNote}
              source={{
                uri: drink.strDrinkThumb,
              }}
            />
          </View>
        </View>

        <View style={styles.cardMixes}>
          <Text style={styles.textTitle}>Bleu Moon</Text>
          <Image
            style={styles.imageCocktail}
            source={{
              uri: drink.strDrinkThumb,
            }}
          />
          <Text style={styles.alcool}>Avec ou sans alcool : ...</Text>
          <Text style={styles.verre}>Type de verre : ...</Text>
          <View style={styles.cardBot}>
            <Image
              style={styles.imageLike}
              source={{
                uri: drink.strDrinkThumb,
              }}
            />
            <Image
              style={styles.imageNote}
              source={{
                uri: drink.strDrinkThumb,
              }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  imageLogo: {
    marginTop: 55,
    marginLeft: 170,
    width: 55,
    height: 35,
  },
  inputRecherche: {
    color: 'gray',
    borderRadius: 8,
    width: '90%',
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginTop: 20,
    marginLeft: 20,
    borderWidth: 1,
    borderColor: 'lightgray',
  },
  categoriesTitle: {
    fontSize: 20,
    marginTop: 21,
    marginLeft: 20,
  },
  categoriesSee: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  seeAll: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#FB7D8A',
    marginTop: 20,
    marginRight: 20,
  },
  seeAllText: {
    fontSize: 15,
    padding: 6,
    color: '#FB7D8A',
    opacity: 1,
  },

  scrollCard: {
    flexDirection: 'row',
  },
  cardCategories: {
    marginTop: 20,
    width: 90,
    height: 120,
    borderRadius: 12,
    backgroundColor: '#FEF9E4',
    marginLeft: 25,
    marginRight: -10,
  },
  imageCategories: {
    width: 60,
    height: 60,
    marginTop: 10,
    marginLeft: 15,
  },
  titleCocktail: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 3,
  },
  mixeCocktail: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 5,
    color: '#FB7D8A',
  },

  categoriesTitle2: {
    fontSize: 20,
    marginTop: 25,
    marginLeft: 20,
  },
  categoriesSee2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  seeAll2: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#FB7D8A',
    marginTop: 24,
    marginRight: 20,
  },
  seeAllText2: {
    fontSize: 15,
    padding: 6,
    color: '#FB7D8A',
    opacity: 1,
  },
  cardMixes: {
    marginTop: 25,
    marginLeft: 20,
    width: 270,
    height: 360,
    borderRadius: 18,
    backgroundColor: '#FB7D8A',
  },
  textTitle: {
    color: 'white',
    fontSize: 45,
    marginTop: 10,
    textAlign: 'center',
  },
  imageCocktail: {
    width: 170,
    height: 155,
    marginTop: 5,
    alignSelf: 'center',
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 2.5,
  },
  alcool: {
    color: 'white',
    marginTop: 10,
    fontSize: 20,
    textAlign: 'center',
  },
  verre: {
    color: 'white',
    marginTop: 10,
    fontSize: 20,
    textAlign: 'center',
  },
  cardBot: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
  },
  imageLike: {
    width: 65,
    height: 40,
    marginLeft: 20,
  },
  imageNote: {
    width: 100,
    height: 30,
    marginLeft: 60,
  },
});

export default Categories;
