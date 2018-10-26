import { createStore, combineReducers, compose } from "redux";

import expensesReducers from "./reducers/expenses";

const rootReducer = combineReducers({
  expenses: expensesReducers
});

let composeEnhancers = compose;

if (__DEV__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
}

const configureStore = () => {
  return createStore(rootReducer, composeEnhancers());
};

export default configureStore;