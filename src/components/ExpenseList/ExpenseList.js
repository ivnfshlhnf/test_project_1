import React from "react";
import { FlatList, StyleSheet, View, Text } from "react-native";

import Expense from "./Expense";

const expenseList = props => {

  _renderItem = ({ item, index }) => {
    const dateComp = (item, index) => {
      const itemDate = item.date
      const prevIndex = index - 1
      const prevDate = (typeof props.expenses[(index - 1)] != 'undefined') ? props.expenses[(index - 1)].date : new Date(1)
      console.log("_renderItem", itemDate.getTime() === prevDate.getTime());
      if (!(itemDate.getTime() === prevDate.getTime())) {
        return (
          <View>
            <Text>{item.date.toDateString()}</Text>
          </View>
        );
      }
    };

    return (
      <View>
        {dateComp(item, index)}
        <Expense key={item.id} expense={item} />
      </View>
    );
  };
  return (
    <FlatList
      style={styles.listContainer}
      data={props.expenses}
      keyExtractor={item => item.id}
      renderItem={this._renderItem}
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
