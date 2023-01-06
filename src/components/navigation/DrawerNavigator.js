import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../views/Home';
import Recipe from '../views/Recipe';
import CustomDrawer from '../others/CustomDrawer';
import Categories from '../views/Categories';
import Login from '../views/Login';
import Readme from '../views/Readme';

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
          fontFamily: 'Poppins-Bold',
          fontWeight: '600',
          fontSize: 25,
          paddingLeft: 15,
          margin: 0,
        },
      }}
      initialRouteName="Categories">
      <Drawer.Screen
        name="Categories"
        component={Categories}
        options={{drawerLabel: 'Catégories'}}
      />
      <Drawer.Screen
        name="Readme"
        component={Readme}
        options={{drawerLabel: 'À propos'}}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
