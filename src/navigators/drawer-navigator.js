import React from "react";
import { View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import BottomTabNavigator from "./bottom-tab-navigator";
import { SettingsNavigator } from "./screen-stack-navigators";

const DrawerNavigator = createDrawerNavigator({
  
  Home: BottomTabNavigator,
  Notifications: SettingsNavigator
});

const Drawer = createAppContainer(DrawerNavigator);

export default Drawer;
