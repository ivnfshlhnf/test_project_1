import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import { connect } from "react-redux";

import { deleteExpense } from "../../store/actions/index";

import ExpenseList from "../../components/ExpenseList/ExpenseList";


class DataListScreen extends Component {
  onDeleteExpenseHandler = id => {
    this.props.onDeleteExpense(id);
  }
  render() {
    return (
      <View>
        <ExpenseList
          expenses={this.props.expenses}
          onItemPressed={this.onDeleteExpenseHandler} />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    expenses: state.expenses.expenses
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onDeleteExpense: (id) => dispatch(deleteExpense(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DataListScreen);
