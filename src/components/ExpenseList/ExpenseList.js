import React from "react";
import { FlatList, StyleSheet } from "react-native";

import Expense from "./Expense";

const expenseList = props => {
  return (
      <FlatList
        style={styles.listContainer}
        data={props.expenses}
        keyExtractor={item => item.id}
        renderItem={i => (
          <Expense
            key={i.item.id}
            expense={i.item}
            onItemPressed={() => props.onItemPressed(i.item.id)}
          />
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

export default expenseList;
