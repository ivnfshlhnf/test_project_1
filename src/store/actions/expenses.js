import { ADD_EXPENSE, DELETE_EXPENSE, SET_EXPENSES } from "./actionTypes";

export const addExpense = (expense) => {
  return {
    type: ADD_EXPENSE,
    expense: expense
  };
};

export const getExpenses = () => {
  return dispatch => {
    fetch("https://spreadsheets.google.com/feeds/list/1D6dLdk30q8_wN8IsRY5Tc6rs2u4DTQCwvS8YauL-R54/od6/public/values?alt=json", {
      method: "GET"
    })
      .catch(err => console.log(err))
      .then(res => res.json())
      .then(parsedRes => {
        const expenses = [];
        for (let expense of parsedRes.feed.entry) {
          expenses.push({
            id: expense.gsx$id.$t,
            name: expense.gsx$name.$t,
            amount: expense.gsx$amount.$t
          })
        }
        dispatch(setExpenses(expenses))
      });
  }
}

export const setExpenses = (expenses) => {
  return {
    type: SET_EXPENSES,
    expenses: expenses
  }
}

export const deleteExpense = (id) => {
  return {
    type: DELETE_EXPENSE,
    id: id
  };
};