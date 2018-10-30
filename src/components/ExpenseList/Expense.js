import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

class Expense extends Component {
  render() {
    return (
      <View style={styles.listItem}>
        <Text style={styles.expenseName}>{this.props.expense.name}</Text>
        <Text>{this.props.expense.amount}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 5,
    padding: 10,
    backgroundColor: "#aaa"
  },
  expenseName: {
    marginRight: 10
  }
});

export default Expense;
