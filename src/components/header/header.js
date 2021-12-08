import React from 'react'
import {Image, TouchableOpacity, Dimensions} from 'react-native'
import Icon from "react-native-vector-icons/Ionicons";
import {View} from "react-native";
const deviceWidth = Dimensions.get("window").width;

export class Logo extends React.Component {
    render() {
        return (
            <View style={{ flex: 0.8 }}>
            <Image
                source={require('../../assets/logo.png')}
                resizeMode = "contain"
                style = {{width: 45,
                marginTop: 5,alignSelf:'center', marginRight:59 }}
            />
            </View>
        );
    }
}

export class MenuButton extends React.Component {
    render() {
        return (
            <TouchableOpacity onPress = {this.props.onPress} ><Icon name = "md-menu" size={30} style = {{color: '#9D9B9B',paddingLeft: 10}}/></TouchableOpacity>
        );
    }
}