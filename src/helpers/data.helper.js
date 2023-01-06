import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export const storeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    // saving error
  }
};

export const getCocktailsWithFilter = async () => {
  const {data} = await axios.get(
    'https://www.thecocktaildb.com/api/json/v2/9973533/popular.php',
  );

  return data.drinks;
};
