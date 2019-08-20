import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "./HomeScreen";

export default createAppContainer(
  createStackNavigator({
    Home: {
      screen: HomeScreen,
      navigationOptions: () => ({
        title: "Home"
      })
    }
  })
);
