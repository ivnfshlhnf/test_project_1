import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const expense = (props) => (
  <TouchableOpacity
    onPress={props.onItemPressed}>
    <View style={styles.listItem} >
      <Text style={styles.expenseName}>{props.expense.name}</Text>
      <Text>{props.expense.amount}</Text>
    </View>
  </TouchableOpacity>
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