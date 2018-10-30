import React, { Component } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { connect } from "react-redux";

import { getToken } from "../../store/actions/index";

class SplashScreen extends Component {
  componentDidMount = () => {};
  onLoginHandler = () => {
    this.props.onGetToken();
  };
  render() {
    return (
      <View style={styles.container}>
        <Text> SPLASH </Text>
        <Button title="login" onPress={this.onLoginHandler} color="red" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

const mapDispatchToProps = dispatch => {
  return {
    onGetToken: () => dispatch(getToken())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SplashScreen);
