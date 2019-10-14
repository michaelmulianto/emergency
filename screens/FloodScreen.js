import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import EmergencyView from "../components/EmergencyView";

export default class FloodScreen extends React.Component {
  render() {
    return (
      <EmergencyView>
        <Text style={[styles.text, styles.title]}>FLOOD:</Text>
        <Image
          style={styles.image}
          source={require("../assets/Floodstep.png")}
        />
        <View style={styles.card}>
          <Text style={styles.text}>
            DO NOT walk, swim, or dive into flood water
          </Text>
          <Text style={styles.text}>
            Stay away from areas with fast-moving waters
          </Text>
          <Text style={styles.text}>
            If flood gets worst, find higher ground
          </Text>
          <Text style={styles.text}>WAIT for help to arrive</Text>
          <Text style={styles.text}></Text>
          <Text style={styles.text}>After The Flood:</Text>
          <Text style={styles.text}>
            Listen to authorities for information and instructions. Return home
            only when authorities say it is safe
          </Text>
          <Text style={styles.text}>Avoid driving, except in emergencies</Text>
          <Text style={styles.text}>
            Be aware of the risk of electrocution. Do not touch electrical
            equipment if it is wet or if you are standing in water. If it is
            safe to do so, turn off the electricity to prevent electric shock.
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
    height: 233,
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
