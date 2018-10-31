import React, { Component } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

import Expense from "./Expense";

class ExpenseList extends Component {
  // const renderExpense = this.this.props.expenses.map((item, id) => (
  //   <Expense key={i.item.id} expense={i.item} />
  // ));
  componentDidUpdate() {
    console.log("list mount", this.props.expenses)
  }
  render () {
    return (
      <FlatList
        // listKey={this.props.expenses.name}
        style={styles.listContainer}
        data={this.props.expenses}
        keyExtractor={item => {
          console.log("key",item.constructor)
          return item.id
        }}
        renderItem={i => (
          <View>
            <Text>key</Text>
            <Text>value</Text>
          </View>
        )}
      />
    );
  }
};

const styles = StyleSheet.create({
  listContainer: {
    width: "100%",
    paddingHorizontal: 10
  }
});

export default ExpenseList;
