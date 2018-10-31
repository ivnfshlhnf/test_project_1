import React, { Component } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import DatePicker from "react-native-datepicker";

class ExpenseInput extends Component {
  state = {
    expense: {
      name: "",
      amount: "",
      date: ""
    }
  };
  expenseNameChangedHandler = val => {
    var expense = this.state.expense;
    expense.name = val;
    this.setState({ expense: expense });
  };
  amountChangedHandler = val => {
    var expense = this.state.expense;
    expense.amount = val.replace(/[^0-9]/g, "");
    this.setState({ expense: expense });
  };
  dateChangedHandler = val => {
    var expense = this.state.expense;
    expense.date = val;
    this.setState({ expense: expense });
  };
  addToList = val => {
    this.props.onExpenseAdded(this.state.expense);
    this.setState({
      expense: {
        name: "",
        amount: "",
        date: ""
      }
    });
  };
  render() {
    return (
      <View style={styles.expenseInputContainer}>
        <Text>Name</Text>
        <TextInput
          style={styles.textInput}
          value={this.state.expense.name}
          onChangeText={this.expenseNameChangedHandler}
        />
        <Text>Amount</Text>
        <TextInput
          style={styles.textInput}
          value={this.state.expense.amount}
          onChangeText={this.amountChangedHandler}
        />
        <Text>Date</Text>
        <DatePicker
          style={styles.datePicker}
          date={this.state.expense.date}
          mode="date"
          placeholder="select date"
          format="YYYY-MM-DD"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: "absolute",
              left: 0,
              top: 4,
              marginLeft: 0
            },
            dateInput: {
              marginLeft: 36
            }
            // ... You can check the source to find the other keys.
          }}
          onDateChange={this.dateChangedHandler}
        />
        <Button style={styles.addBtn} title="Add" onPress={this.addToList} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  expenseInputContainer: {},
  textInput: {
    backgroundColor: "#eee",
    marginBottom: 20
  },
  datePicker: {
    width: "100%",
    paddingRight: 10,
    marginBottom: 20
  },
  addBtn: {
    marginTop: 10
  }
});

export default ExpenseInput;
