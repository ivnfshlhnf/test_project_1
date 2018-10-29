import { createStore, combineReducers, compose, applyMiddleware } from "redux";
 import thunk from "redux-thunk";

import expensesReducers from "./reducers/expenses";
import authReducers from "./reducers/auth";

const rootReducer = combineReducers({
  expenses: expensesReducers,
  auth:authReducers
});

let composeEnhancers = compose;

if (__DEV__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
}

const configureStore = () => {
  return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
};

export default configureStore;