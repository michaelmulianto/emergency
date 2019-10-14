import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import EmergencyView from "../components/EmergencyView";

export default class EarthquakeScreen extends React.Component {
  render() {
    return (
      <EmergencyView>
        <Text style={[styles.text, styles.title]}>EARTHQUAKE:</Text>
        <Image style={styles.image} source={require("../assets/Drop.png")} />
        <View style={styles.card}>
          <Text style={styles.text}>
            When earthquake stops go outside and find an open area
          </Text>
          <Text style={styles.text}>
            Stay AWAY from buildings, there will be aftershocks following
          </Text>
          <Text style={styles.text}></Text>
          <Text style={styles.text}>If Outdoors:</Text>
          <Text style={styles.text}>
            Quickly find an open area away from buildings and stay there until
            the earthquake stops
          </Text>
          <Text style={styles.text}>
            If you are in a vehicle, stop your vehicle as soon as possible and
            find an open area
          </Text>
          <Text style={styles.text}></Text>
          <Text style={styles.text}>After The Earthquake:</Text>
          <Text style={styles.text}>
            Expect aftershocks to follow the main shock of an earthquake
          </Text>
          <Text style={styles.text}>Do not enter damaged buildings</Text>
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
    height: 140,
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
