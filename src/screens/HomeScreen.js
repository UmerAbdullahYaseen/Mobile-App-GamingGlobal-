import { View, Text, StyleSheet, ImageBackground,  SafeAreaView, style, ScrollView, Image  } from "react-native";
import React, { Component } from "react";
import { MenuButton, Logo } from "../components/header/header";
import { Card, ListItem,Button, Icon } from 'react-native-elements'

/* import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards'; */


/* import glazhome from '../assets/glazhome.jpg'
import tailwind from 'tailwind-rn'; */

export default class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <MenuButton onPress={() => navigation.openDrawer()} />,
      headerTitle: <Logo />,
      headerBackTitle: "Home",
      headerLayoutPreset: "center"
    };
  };

  render() {
    return (
    <View  style ={styles.container}>



<Card>
  <Card.Title>Gaming Global</Card.Title>
  <Card.Divider/>
  <Card.Image source={require('../assets/glazhome.jpg')}>
    <Text style={{marginBottom: 90,  color:'#ffffff' }}>
    GamingGlobal is a web application where gamers can find all necessary stuff under a single platform.
    </Text>
    <Button
      icon={<Icon name='code' color='#ffffff' />}
      buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, }}
      title='Latest Patches'
       />
  </Card.Image>
</Card>

      {/* <View >
        <ImageBackground style ={styles.imageContainer} source={require('../assets/glazhome.jpg')} />
        <View  >
          <Text> A gaming Experience you never had before</Text>
          <Text>
            GamingGlobal is a web application where gamers can find all necessary stuff under a single platform.
          </Text>
          <View>
            {/* <Link to="/patches"> */}{/* <Button title="Latest Patches" /> */}{/* </Link> */}
          {/* </View>
        </View> 
      </View> */} 

    </View >

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor:"#3A3747"
  },
  imageContainer: {
    width: '500',
    height:'500',
    resizeMode:'cover',
    position:'absolute',
    marginTop:'100px'

  }
});
