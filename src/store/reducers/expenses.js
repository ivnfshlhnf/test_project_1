import { ADD_EXPENSE, DELETE_EXPENSE } from "../actions/actionTypes";

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
          id: Math.random().toString(),
          name: action.expense.name,
          amount: action.expense.amount
        })
      };
    case DELETE_EXPENSE:
      return {
        ...state,
        expenses: state.expenses.filter(expenses => {
          return expenses.id !== action.id;
        })
      };
    default:
      return state
  }
}

export default expenseReducer;