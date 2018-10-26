import { Navigation } from "react-native-navigation";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const startMainTabs = () => {
  Promise.all([
    Icon.getImageSource("view-list", 20),
    Icon.getImageSource("database", 20)
  ]).then(sources => {
    Navigation.startTabBasedApp({
      tabs: [
        {
          screen: "test-app.InputScreen",
          label: "Input",
          title: "Input",
          icon: sources[0]
        },
        {
          screen: "test-app.DataListScreen",
          label: "Data List",
          title: "Data List",
          icon: sources[1]
        }
      ]
    });
  });
};

export default startMainTabs;
