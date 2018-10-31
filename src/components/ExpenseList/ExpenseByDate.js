import React from "react";
import { FlatList, StyleSheet, View, Text } from "react-native";

import ExpenseList from "./ExpenseList";

const expenseByDate = props => {
  return (
    <FlatList
      style={styles.listContainer}
      data={props.expenses}
      keyExtractor={item => item.index}
      renderItem={i => (
        <View>
          <Text>test</Text>
          <ExpenseList expenses={i.item} />
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: "100%",
    paddingHorizontal: 10
  }
});

export default expenseByDate;
