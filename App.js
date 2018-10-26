import { Navigation } from "react-native-navigation";
import { Provider } from "react-redux";

import SplashScreen from "./src/screens/SplashScreen/SplashScreen";
import InputScreen from "./src/screens/InputScreen/InputScreen";
import DataListScreen from "./src/screens/DataListScreen/DataListScreen";

import configureStore from "./src/store/configureStore";

const store = configureStore();

// Register Screens
Navigation.registerComponent(
  "test-app.SplashScreen",
  () => SplashScreen
);
Navigation.registerComponent(
  "test-app.InputScreen",
  () => InputScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "test-app.DataListScreen",
  () => DataListScreen,
  store,
  Provider
);

// Start a App
Navigation.startSingleScreenApp({
  screen: {
    screen: "test-app.SplashScreen"
  }
});
