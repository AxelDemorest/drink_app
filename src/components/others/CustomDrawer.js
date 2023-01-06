import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Text, TouchableOpacity, View} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const CustomDrawer = props => {
  return (
    <View style={{flex: 1, backgroundColor: '#FB7D8A'}}>
      <DrawerContentScrollView {...props}>
        <View style={{paddingLeft: 30, paddingBottom: 20, paddingTop: 20}}>
          <TouchableOpacity>
            <SimpleLineIcons name="menu" size={20} />
          </TouchableOpacity>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View />
    </View>
  );
};

export default CustomDrawer;
