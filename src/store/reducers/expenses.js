import { ADD_EXPENSE, DELETE_EXPENSE, SET_EXPENSES } from "../actions/actionTypes";

initialState = {
  expenses: [],
  detail: null
}

const expenseReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EXPENSE:
      return {
        ...state,
        expenses: state.expenses.concat({
          id: action.expense.id,
          name: action.expense.name,
          amount: action.expense.amount,
          date: expense.date
        })
      };
    case DELETE_EXPENSE:
      return {
        ...state,
        expenses: state.expenses.filter(expenses => {
          return expenses.id !== action.id;
        })
      };
    case SET_EXPENSES:
      return {
        ...state,
        expenses: action.expenses
      };
    default:
      return state
  }
}

export default expenseReducer;