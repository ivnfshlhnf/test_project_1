import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import { connect } from "react-redux";

import { deleteExpense, getExpenses } from "../../store/actions/index";

import ExpenseList from "../../components/ExpenseList/ExpenseList";

class DataListScreen extends Component {
  state = {
    sheetId: "1wk_aiHQnXG78iw2pVSY-8puoH0h3F3_kcgTFB7vhIoU"
  };
  componentDidMount() {
    console.log("datalist screen mounted");
    this.props.onGetExpenses(this.state.sheetId);
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.expenses !== prevProps.expenses) {
      console.log("expenses:", this.props.expenses)
    }
  }
  

  render() {
    return (
      <View>
        <ExpenseList
          expenses={this.props.expenses}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    expenses: state.expenses.expenses
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDeleteExpense: id => dispatch(deleteExpense(id)),
    onGetExpenses: sheet => dispatch(getExpenses(sheet))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DataListScreen);
