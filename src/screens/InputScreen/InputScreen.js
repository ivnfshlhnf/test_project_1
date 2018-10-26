import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";

import ExpenseInput from '../../components/ExpenseInput/ExpenseInput';
import { addExpense } from '../../store/actions/index'

class InputScreen extends Component {
  onExpenseAdded = expense => {
    this.props.onAddExpense(expense);
  }

  render() {
    return (
      <View>
        <ExpenseInput onExpenseAdded={this.onExpenseAdded} />
      </View>
    )
  }
};
const mapStateToProps = state => {
  return {
    expenses: state.expenses.expenses
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onAddExpense: (expense) => dispatch(addExpense(expense))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputScreen);