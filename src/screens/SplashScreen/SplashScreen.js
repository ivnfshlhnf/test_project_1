import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import startMainTabs from '../MainTabs/startMainTabs';


class SplashScreen extends Component {
  loginHandler = () => {
    startMainTabs();
  };
  render() {
    return (
      <View>
        <Text> AUTH </Text>
        <Button title="Login" onPress={this.loginHandler} />
      </View>
    );
  }
}

export default SplashScreen;
