import { ADD_EXPENSE, DELETE_EXPENSE, SET_EXPENSES } from "./actionTypes";

export const addExpense = expense => {
  return {
    type: ADD_EXPENSE,
    expense: expense
  };
};

export const deleteExpense = id => {
  return {
    type: DELETE_EXPENSE,
    id: id
  };
};

const baseUrlSpreadSheet = "https://sheets.googleapis.com/v4/spreadsheets/";
const sheetId = "1wk_aiHQnXG78iw2pVSY-8puoH0h3F3_kcgTFB7vhIoU";
export const getExpenses = () => {
  return (dispatch, getState) => {
    const state = getState();
    console.log("state in getexpenses: ", state.auth.user.accessToken);
    let url =
      baseUrlSpreadSheet +
      sheetId +
      "/values/Sheet1!A2:C25" +
      "?access_token=" +
      state.auth.user.accessToken;
    console.log("get", url);
    fetch(url)
      .catch(err => console.log(err))
      .then(res => res.json())
      .then(parsedRes => {
        console.log(parsedRes);
        const expenses = [];
        for (let expense of parsedRes.values) {
          expenses.push({
            id: expense[0],
            name: expense[1],
            amount: expense[2]
          });
        }
        dispatch(setExpenses(expenses));
      });
  };
};

export const setExpenses = expenses => {
  return {
    type: SET_EXPENSES,
    expenses: expenses
  };
};

export const postExpense = expense => {
  return (dispatch, getState) => {
    const state = getState();
    console.log("post expense", state.auth.user.accessToken);
    const newExpense = {
      id: Math.random().toString(),
      name: expense.name,
      amount: expense.amount
    };
    console.log("new expense to send: ", newExpense);
    const range =
      "Sheet1!A" +
      (state.expenses.expenses.length + 2) +
      ":C" +
      (state.expenses.expenses.length + 2);
    const body = JSON.stringify({
      values: [[newExpense.id, newExpense.name, newExpense.amount]]
    });
    let url =
      baseUrlSpreadSheet +
      sheetId +
      "/values/" +
      range +
      "?valueInputOption=USER_ENTERED&access_token=" +
      state.auth.user.accessToken;
    console.log("post", url);
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body
    })
      .then(response => {
        console.log("0", response);
        response
          .json()
          .then(data => {
            // console.log("1", data);
            dispatch(getExpenses())
          })
          .catch(err => {
            console.log("2", err);
          });
      })
      .catch(err => {
        console.log("3", err);
      });
  };
};
