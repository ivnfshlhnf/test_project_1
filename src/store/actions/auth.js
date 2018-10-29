import { GoogleSignin } from "react-native-google-signin";

import { SET_USER } from "./actionTypes";

export const getToken = () => {
  return dispatch => {
    GoogleSignin.configure({
      // https://developers.google.com/identity/protocols/googlescopes
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
      webClientId:
        "692692301441-eiochasfvc458k784ptdrbl1j26qskg1.apps.googleusercontent.com"
    });
    GoogleSignin.signIn()
      .then(user => {
        console.log("User : ", user);
        dispatch(setUser(user));
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const setUser = user => {
  return {
    type: SET_USER,
    user: user
  };
};
