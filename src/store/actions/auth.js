import { GoogleSignin } from "react-native-google-signin";
import startMainTabs from '../../screens/MainTabs/startMainTabs';

import { SET_USER } from "./actionTypes";

export const getToken = () => {
  console.log("getting token")
  return dispatch => {
    GoogleSignin.configure({
      // https://developers.google.com/identity/protocols/googlescopes
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
      webClientId:
        "692692301441-eiochasfvc458k784ptdrbl1j26qskg1.apps.googleusercontent.com"
    });
    GoogleSignin.signIn()
      .then(user => {
        // console.log("User : ", user);
        dispatch(setUser(user));
        startMainTabs()
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
