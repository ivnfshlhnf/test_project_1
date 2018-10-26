import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const expense = (props) => (
  <View style={styles.listItem} >
    <Text style={styles.expenseName}>{props.expense.name}</Text>
    <Text>{props.expense.amount}</Text>
  </View>
);

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    width: "100%",
    marginBottom: 5,
    padding: 10,
    backgroundColor: "#eee"
  },
  expenseName: {
    marginRight: 10
  }
});

export default expense;