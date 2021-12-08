import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {
  HomeNavigator,
  ProfileNavigator,
  SearchNavigator,
  SplashNavigator
} from "./screen-stack-navigators";

const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let IconComponent = Ionicons;
  let iconName;
  if (routeName === "Home") {
    iconName = "ios-home";
  } else if (routeName === "Courses") {
    iconName = "md-book-outline";
  } else if (routeName === "Stats") {
    iconName = "ios-search";
  }

  return <IconComponent name={iconName} size={25} color={tintColor} />;
};

const BottomTabNavigator = createBottomTabNavigator(
  {
    /* Splash: SplashNavigator, */
    Home: HomeNavigator,
    Courses: ProfileNavigator,
    Stats: SearchNavigator
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) =>
        getTabBarIcon(navigation, focused, tintColor)
    }),
    tabBarOptions: {
      activeTintColor: "#444444",
      inactiveTintColor: "#9D9B9B"
    }
  }
);

export default BottomTabNavigator;
