import React, { Component } from "react";
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SearchScreen from "../screens/SearchScreen";
/* import Splash from "../components/SplashScreen/SplashScreen"; */

//Add navigators with screens in this file

export const HomeNavigator = createStackNavigator({
  Home: { screen: HomeScreen }
});

export const SettingsNavigator = createStackNavigator({
  Notifications: { screen: SettingsScreen }
});

export const ProfileNavigator = createStackNavigator({
  Courses: { screen: ProfileScreen }
});

export const SearchNavigator = createStackNavigator({
  Stats: { screen: SearchScreen }
});
