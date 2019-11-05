import React from 'react';
import { Platform, Dimensions } from 'react-native';
import { createDrawerNavigator } from 'react-navigation';

// import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import SideMenu from './SideMenu';
var { height, width } = Dimensions.get('window');


export default createDrawerNavigator({
  HomeScreen: {
    screen: HomeScreen
  },
  LinksScreen:{
    screen: LinksScreen
  },
  SettingsScreen: {
    screen: SettingsScreen
  }


}, {
    // define customComponent here
    contentComponent: SideMenu,
    drawerWidth: width * .73,
    drawerBackgroundColor: 'transparent',
    overlayColor: '#838383'
  });
