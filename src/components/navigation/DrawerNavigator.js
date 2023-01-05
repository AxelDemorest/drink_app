import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../views/Home';
import Recipe from '../views/Recipe';
import CustomDrawer from '../others/CustomDrawer';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: null,
        drawerActiveTintColor: 'black',
        drawerInactiveTintColor: 'white',
        drawerLabelStyle: {
          fontWeight: '600',
          fontSize: 25,
          paddingLeft: 15,
          margin: 0,
        },
      }}
      initialRouteName="Home">
      <Drawer.Screen name="Accueil" component={Home} />
      <Drawer.Screen name="Cocktail" component={Recipe} />
      <Drawer.Screen name="Cocktail2" component={Recipe} />
      <Drawer.Screen name="Cocktail3" component={Recipe} />
      <Drawer.Screen name="Cocktail4" component={Recipe} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
