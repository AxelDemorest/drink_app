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
import cocktailWithAlcohol from '../../assets/images/cocktail.png';
import {getCocktailsWithFilter} from '../../helpers/data.helper';
import cocktailWithoutAlcohol from '../../assets/images/mojitoIcon.png';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Categories = () => {
  const [search, setSearch] = useState('');
  const [listCocktail, setListCocktail] = useState([]);
  const [drink, setDrink] = useState();
  const [isSearch, setIsSearch] = useState();
  const navigation = useNavigation();

  const logo = require('../../assets/images/logo.jpg');
  const cocktailWithAlcohol = require('../../assets/images/cocktail.png');
  const cocktailWithoutAlcohol = require('../../assets/images/mojitoIcon.png');

  const likeCocktail = async cocktailId => {
    let array;
    const likes = await AsyncStorage.getItem('@likes_cocktails');
    if (likes) {
      array = JSON.parse(likes);
      if (array.includes(cocktailId)) {
        delete array.indexOf(cocktailId);
      } else {
        array.push(cocktailId);
      }
    } else {
      array = [];
      array.push(cocktailId);
    }
    await AsyncStorage.setItem('@likes_cocktails', JSON.stringify(array));
  };

  const loadData = async () => {
    const cocktails = await getCocktailsWithFilter();
    setListCocktail(cocktails);

    axios
      .get('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007')
      .then(res => {
        const key = res.data.drinks[0];
        setDrink(key);
      });
  };

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
      .then(res => {
        const key = res.data.drinks;

        setDrink(key);
        console.log(key);
      });
  }, [search]);

  return (
    <View style={styles.viewCategories}>
      <Image style={styles.imageLogo} source={logo} />
      <TextInput
        style={styles.inputRecherche}
        value={search}
        onChangeText={setSearch}
        placeholder={'Recherche  ...'}
      />
      {search && (
        <View style={{flexDirection: 'column', alignItems: 'center'}}>
          <FlatList
            data={drink}
            numColumns={1}
            renderItem={({item}) => {
              return (
                <View style={{...styles.cardMixes, marginLeft: 0, width: 300}}>
                  <Text style={styles.textTitle}>{item.strDrink}</Text>
                  <Image
                    style={styles.imageCocktail}
                    source={{
                      uri: item.strDrinkThumb,
                    }}
                  />
                  <View>
                    <TouchableOpacity
                      style={styles.redirectButton}
                      onPress={() => {
                        navigation.navigate('Recipe', {drinkItem: item});
                      }}>
                      <Text
                        style={{
                          color: 'white',
                          fontFamily: 'Poppins-Regular',
                          fontSize: 17,
                        }}>
                        Lire plus
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.cardBot}>
                    <Image
                      style={styles.imageLike}
                      source={require('../../assets/images/like.png')}
                    />
                    <Image
                      style={styles.imageNote}
                      source={require('../../assets/images/note.png')}
                    />
                  </View>
                </View>
              );
            }}
          />
        </View>
      )}
      {!search && (
        <>
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
                source={cocktailWithAlcohol}
              />
              <Text style={styles.titleCocktail}>Cocktails</Text>
              <Text style={styles.mixeCocktail}>Sans alcool</Text>
            </View>

            <View style={styles.cardCategories}>
              <Image
                style={styles.imageCategories}
                source={cocktailWithoutAlcohol}
              />
              <Text style={styles.titleCocktail}>Cocktails</Text>
              <Text style={styles.mixeCocktail}>Avec alcool</Text>
            </View>
          </ScrollView>

          <View style={styles.categoriesSee2}>
            <Text style={styles.categoriesTitle2}>Recent Mixes</Text>
            <TouchableOpacity style={styles.seeAll2}>
              <Text style={styles.seeAllText2}>See all</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            style={styles.cardScrollMixes}
            horizontal={true}
            data={listCocktail}
            renderItem={({item}) => {
              return (
                <View style={styles.cardMixes}>
                  <Text style={styles.textTitle}>{item.strDrink}</Text>
                  <Image
                    style={styles.imageCocktail}
                    source={{
                      uri: item.strDrinkThumb,
                    }}
                  />
                  <View>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate('Recipe', {drinkItem: item});
                      }}
                      style={styles.redirectButton}>
                      <Text
                        style={{
                          color: 'white',
                          fontFamily: 'Poppins-Regular',
                          fontSize: 17,
                        }}>
                        Lire plus
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.cardBot}>
                    <TouchableOpacity
                      onPress={() => likeCocktail(item.idDrinks)}>
                      <AntDesign name={'hearto'} size={20} color={'#E45362'} />
                    </TouchableOpacity>
                    <Image
                      style={styles.imageNote}
                      source={require('../../assets/images/note.png')}
                    />
                  </View>
                </View>
              );
            }}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  viewCategories: {
    flex: 1,
    backgroundColor: '#fff',
  },
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
    width: 200,
    height: 130,
    borderRadius: 12,
    backgroundColor: '#FEF9E4',
    alignItems: 'center',
    flexDirection: 'column',
    marginLeft: 25,
    marginRight: -10,
  },
  imageCategories: {
    width: 60,
    height: 60,
    marginVertical: 8,
  },
  titleCocktail: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 6,
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
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FB7D8A',
  },
  textTitle: {
    fontFamily: 'Poppins-SemiBold',
    color: 'white',
    fontSize: 27,
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
  redirectButton: {
    color: 'white',
    marginTop: 10,
    fontSize: 20,
    paddingHorizontal: 25,
    paddingVertical: 7,
    borderRadius: 10,
    backgroundColor: '#E45362',
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
    marginBottom: 10,
  },
  imageNote: {
    width: 100,
    height: 30,
    marginLeft: 60,
    marginBottom: 10,
  },
});

export default Categories;
