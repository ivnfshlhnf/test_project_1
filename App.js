import { Navigation } from "react-native-navigation";

import SplashScreen from "./src/screens/SplashScreen/SplashScreen";
import InputScreen from "./src/screens/InputScreen/InputScreen";
import DataListScreen from "./src/screens/DataListScreen/DataListScreen";


// Register Screens
Navigation.registerComponent(
  "test-app.SplashScreen",
  () => SplashScreen
);
Navigation.registerComponent(
  "test-app.InputScreen",
  () => InputScreen
);
Navigation.registerComponent(
  "test-app.DataListScreen",
  () => DataListScreen
);

// Start a App
Navigation.startSingleScreenApp({
  screen: {
    screen: "test-app.SplashScreen",
    title: "SplashScreen"
  }
});
