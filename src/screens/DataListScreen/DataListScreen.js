import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import { connect } from "react-redux";

import { deleteExpense } from "../../store/actions/index";

import ExpenseList from "../../components/ExpenseList/ExpenseList";


class DataListScreen extends Component {
  render() {
    return (
      <View>
        <ExpenseList expenses={this.props.expenses}/>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    expenses: state.expenses.expenses
  }
}

export default connect(mapStateToProps, null) (DataListScreen);
