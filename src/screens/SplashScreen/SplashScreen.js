import React, { Component } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import startMainTabs from '../MainTabs/startMainTabs';


class SplashScreen extends Component {
  componentDidMount = () => {
    setTimeout(function () {
      startMainTabs();
    }, 3000)
  }
  render() {
    return (
      <View style={styles.container}>
        <Text> SPLASH </Text>
      </View>
    );
  }
}

styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
})

export default SplashScreen;
