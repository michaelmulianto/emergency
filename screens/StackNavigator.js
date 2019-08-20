import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "./HomeScreen";
import EmergencyScreen from "./EmergencyScreen";
import ChatScreen from "./ChatScreen";

export default createAppContainer(
  createStackNavigator({
    Home: {
      screen: HomeScreen,
      navigationOptions: () => ({
        title: "Home"
      })
    },

    Emergency: {
      screen: EmergencyScreen,
      navigationOptions: () => ({
        title: "Emergency"
      })
    },

    Chat: {
      screen: ChatScreen,
      navigationOptions: () => ({
        title: "Chat"
      })
    }
  })
);
