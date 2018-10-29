import React, { Component } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";


class ExpenseInput extends Component {
  state = {
    expense: {
      name: "",
      amount: ""
    }
  }
  expenseNameChangedHandler = val => {
    var expense = this.state.expense;
    expense.name = val;
    this.setState({ expense: expense });
  };
  amountChangedHandler = val => {
    var expense = this.state.expense;
    expense.amount = val.replace(/[^0-9]/g, '');
    this.setState({ expense: expense });
  };
  addToList = val => {
    this.props.onExpenseAdded(this.state.expense)
    this.setState({
      expense: {
        name: "",
        amount: ""
      }
    })
  }
  render() {
    return (
      <View>
        <View>
          <Text>Name</Text>
          <TextInput
            style={styles.textInput}
            value={this.state.expense.name}
            onChangeText={this.expenseNameChangedHandler} />
          <Text>Amount</Text>
          <TextInput
            style={styles.textInput}
            value={this.state.expense.amount}
            onChangeText={this.amountChangedHandler} />
          <Button
            style={styles.addBtn}
            title="Add"
            onPress={this.addToList} />
        </View>
      </View>
    );
  }
}

styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  textInput: {
    backgroundColor: "#eee"
  },
  addBtn: {
    marginTop: 10
  }
})

export default ExpenseInput;
