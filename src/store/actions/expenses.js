import { ADD_EXPENSE, DELETE_EXPENSE } from "./actionTypes";

export const addExpense = (expense) => {
  return {
    type: ADD_EXPENSE,
    expense: expense
  };
};

export const deleteExpense = (id) => {
  return {
    type: DELETE_EXPENSE,
    id: id
  };
};