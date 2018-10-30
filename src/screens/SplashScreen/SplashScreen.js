import React, { Component } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { connect } from "react-redux";

import startMainTabs from "../MainTabs/startMainTabs";
import { getToken } from '../../store/actions/index'



class SplashScreen extends Component {
  componentDidMount = () => {
  }
  onLoginHandler = () => {
    this.props.onGetToken();
  }
  render() {
    return (
      <View style={styles.container}>
        <Text> SPLASH </Text>
        <Button
          title="login"
          onPress={this.onLoginHandler}/>
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

const mapDispatchToProps = dispatch => {
  return {
    onGetToken: () => dispatch(getToken())
  }
}

export default connect(null, mapDispatchToProps)(SplashScreen);
