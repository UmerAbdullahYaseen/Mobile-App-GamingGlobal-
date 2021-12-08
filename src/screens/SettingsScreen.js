import { View, Text, StyleSheet, SafeAreaView  } from "react-native";
import React, { Component } from "react";
import { MenuButton, Logo } from "../components/header/header";
import { HeaderBackButton } from "react-navigation-stack";
import HomeScreen from "./HomeScreen";
import { HomeNavigator } from "../navigators/screen-stack-navigators";

export default class SettingsScreen extends React.Component {
  
  
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <HeaderBackButton onPress={() => navigation.push('HomeScreen')} />,
      headerTitle: <Logo />,
      headerBackTitle: "Settings",
      headerLayoutPreset: "center"
    };
  };
  render() {
    return (
      
      <View style={styles.container}>
       
        <Text>Notification Page</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
