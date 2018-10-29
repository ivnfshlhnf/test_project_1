import { SET_USER } from "../actions/actionTypes";

initialState = {
  user: null
}

const authReducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.user
      };
    default:
      return state
  }
}

export default authReducers;