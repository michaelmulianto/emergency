import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import EmergencyView from "../components/EmergencyView";

export default class TsunamiScreen extends React.Component {
  render() {
    return (
      <EmergencyView>
        <Text style={[styles.text, styles.title]}>TSUNAMI: </Text>
        <Image style={styles.image} source={require("../assets/tsunev.jpg")} />
        <View style={styles.card}>
          <Text style={styles.text}>
            Evacuate: DO NOT wait! Leave as soon as you see any natural signs of
            a tsunami or receive an official tsunami warning.
          </Text>
          <Text style={styles.text}>
            Go inland as quickly as possible and find high grounds
          </Text>
          <Text style={styles.text}>
            If you are in a boat, face the wave direction and head out into the
            sea
          </Text>
          <Text style={styles.text}>
            If you are in the water, grab onto something that floats or is
            sturdy
          </Text>

          <Text style={styles.text}></Text>
          <Text style={styles.text}>After The Tsunami:</Text>
          <Text style={styles.text}>
            Avoid wading in floodwater, which can contain dangerous debris.
            Water may be deeper than it appears
          </Text>
          <Text style={styles.text}>
            Stay away from damaged buildings, roads, and bridges
          </Text>
        </View>
      </EmergencyView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  card: {
    borderWidth: 2,
    borderColor: "rgba(255, 255, 255, 0.5)",
    borderRadius: 5,
    shadowOpacity: 1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 10 },
    backgroundColor: "rgba(255,0,0,0.5)",
    margin: 10
  },
  text: {
    color: "white",
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 20
  },
  title: {
    fontSize: 40,
    fontWeight: "bold"
  },
  image: {
    width: null,
    height: 200,
    resizeMode: "contain",
    margin: 10
  },
  mainView: {
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10
  },
  cellBackground: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    zIndex: -1,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  Background: {
    resizeMode: "contain"
  },
  grid: {
    backgroundColor: "rgba(0,0,0,0.7)",
    flex: 1
  },
  cellText: {
    color: "white",
    fontSize: 35
  },
  cellText2: {
    color: "white",
    fontSize: 20
  }
});
