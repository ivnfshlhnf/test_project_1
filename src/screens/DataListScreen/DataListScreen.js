import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import { connect } from "react-redux";

import { deleteExpense, getExpenses } from "../../store/actions/index";

import ExpenseList from "../../components/ExpenseList/ExpenseList";

class DataListScreen extends Component {
  state = {
    sheetId: "1wk_aiHQnXG78iw2pVSY-8puoH0h3F3_kcgTFB7vhIoU",
    groupedExpenses: null
  };
  componentDidMount() {
    console.log("datalist screen mounted");
    this.props.onGetExpenses(this.state.sheetId);
  }

  onDeleteExpenseHandler = id => {
    this.props.onDeleteExpense(id);
  };
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate", prevProps);
    if (this.props.expenses !== prevProps.expenses) {
      this.setState({
        groupedExpenses: this.groupBy(this.props.expenses, "date")
      });
    }
    if (this.state !== prevState) {
      console.log("groupedExpenses", this.state.groupedExpenses);
      let tmparr = this.state.groupedExpenses
      for (obj in tmparr){
        let value = tmparr[obj]
        console.log("")
      }
    }
    console.log("new props", this.props);
  }

  groupBy = function(xs, key) {
    return xs.reduce(function(rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, []);
  };
  render() {
    return (
      <View>
        <ExpenseList
          expenses={this.state.groupedExpenses}
          onItemPressed={this.onDeleteExpenseHandler}
        />
        <Button
          title="group"
          onPress={() => this.groupBy(this.props.expenses, "date")}
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
