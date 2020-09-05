import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "./HomeScreen";
import DisasterScreen from "./DisasterScreen";
import ChatScreen from "./ChatScreen";
import FloodScreen from "./FloodScreen";
import EarthquakeScreen from "./EarthquakeScreen";
import TsunamiScreen from "./TsunamiScreen";
import TyphoonScreen from "./TyphoonScreen";
import ForestFireScreen from "./ForestFireScreen";
import VolcanicEruptionScreen from "./VolcanicEruptionScreen";
import EMERGENCYCALLScreen from "./EMERGENCYCALLScreen";
import COVIDScreen from "./COVIDScreen";
import AboutCOVIDScreen from "./AboutCOVIDScreen";
import COVIDNewsScreen from "./COVIDNewsScreen";
import SymptomCheckerScreen from "./SymptomCheckerScreen";
import BNPBScreen from "./BNPBScreen";
import AboutBNPBScreen from "./AboutBNPBScreen";
import BNPBNewsScreen from "./BNPBNewsScreen";
import TakeActionScreen from "./TakeActionScreen";

export default createAppContainer(
  createStackNavigator({
    Home: {
      screen: HomeScreen,
      navigationOptions: () => ({
        title: "Home",
      }),
    },

    Disaster: {
      screen: DisasterScreen,
      navigationOptions: () => ({
        title: "Disaster",
      }),
    },

    Chat: {
      screen: ChatScreen,
      navigationOptions: () => ({
        title: "Chat",
      }),
    },

    Flood: {
      screen: FloodScreen,
      navigationOptions: () => ({
        title: "Flood",
      }),
    },

    Earthquake: {
      screen: EarthquakeScreen,
      navigationOptions: () => ({
        title: "Earthquake",
      }),
    },

    Tsunami: {
      screen: TsunamiScreen,
      navigationOptions: () => ({
        title: "Tsunami",
      }),
    },

    Typhoon: {
      screen: TyphoonScreen,
      navigationOptions: () => ({
        title: "Typhoon",
      }),
    },

    ForestFire: {
      screen: ForestFireScreen,
      navigationOptions: () => ({
        title: "ForestFire",
      }),
    },

    VolcanicEruption: {
      screen: VolcanicEruptionScreen,
      navigationOptions: () => ({
        title: "VolcanicEruption",
      }),
    },

    EMERGENCYCALL: {
      screen: EMERGENCYCALLScreen,
      navigationOptions: () => ({
        title: "EMERGENCYCALL",
      }),
    },

    COVID: {
      screen: COVIDScreen,
      navigationOptions: () => ({
        title: "COVID",
      }),
    },

    AboutCOVID: {
      screen: AboutCOVIDScreen,
      navigationOptions: () => ({
        title: "AboutCOVID",
      }),
    },

    COVIDNews: {
      screen: COVIDNewsScreen,
      navigationOptions: () => ({
        title: "COVIDNews",
      }),
    },

    SymptomChecker: {
      screen: SymptomCheckerScreen,
      navigationOptions: () => ({
        title: "SymptomChecker",
      }),
    },

    BNPB: {
      screen: BNPBScreen,
      navigationOptions: () => ({
        title: "BNPB",
      }),
    },

    AboutBNPB: {
      screen: AboutBNPBScreen,
      navigationOptions: () => ({
        title: "AboutBNPB",
      }),
    },

    BNPBNews: {
      screen: BNPBNewsScreen,
      navigationOptions: () => ({
        title: "BNPBNews",
      }),
    },

    TakeAction: {
      screen: TakeActionScreen,
      navigationOptions: () => ({
        title: "TakeAction",
      }),
    },
  })
);
