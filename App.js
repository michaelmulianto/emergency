import React from "react";
import { StyleSheet, Text, View } from "react-native";
import StackNavigator from "./screens/StackNavigator";
import * as Font from "expo-font";
import { requestReview } from "expo/build/StoreReview/StoreReview";

export default class App extends React.Component {
  state = {
    fontLoaded: false
  };

  async componentDidMount() {
    await Font.loadAsync({
      "source-sans": require("./assets/fonts/SourceSansPro-Regular.otf"),
      "source-sans-bold": require("./assets/fonts/SourceSansPro-Bold.otf")
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    return this.state.fontLoaded ? <StackNavigator /> : null;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
