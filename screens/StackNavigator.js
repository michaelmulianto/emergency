import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "./HomeScreen";
import EmergencyScreen from "./EmergencyScreen";
import ChatScreen from "./ChatScreen";
import FloodScreen from "./FloodScreen";
import EarthquakeScreen from "./EarthquakeScreen";
import TsunamiScreen from "./TsunamiScreen";
import TyphoonScreen from "./TyphoonScreen";
import ForestFireScreen from "./ForestFireScreen";
import VolcanicEruptionScreen from "./VolcanicEruptionScreen";
import EMERGENCYCALLScreen from "./EMERGENCYCALLScreen";

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
    },

    Flood: {
      screen: FloodScreen,
      navigationOptions: () => ({
        title: "Flood"
      })
    },

    Earthquake: {
      screen: EarthquakeScreen,
      navigationOptions: () => ({
        title: "Earthquake"
      })
    },

    Tsunami: {
      screen: TsunamiScreen,
      navigationOptions: () => ({
        title: "Tsunami"
      })
    },

    Typhoon: {
      screen: TyphoonScreen,
      navigationOptions: () => ({
        title: "Typhoon"
      })
    },

    ForestFire: {
      screen: ForestFireScreen,
      navigationOptions: () => ({
        title: "ForestFire"
      })
    },

    VolcanicEruption: {
      screen: VolcanicEruptionScreen,
      navigationOptions: () => ({
        title: "VolcanicEruption"
      })
    },

    EMERGENCYCALL: {
      screen: EMERGENCYCALLScreen,
      navigationOptions: () => ({
        title: "EMERGENCYCALL"
      })
    }
  })
);
