import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import EmergencyView from "../components/EmergencyView";

export default class VolcanicEruptionScreen extends React.Component {
  render() {
    return (
      <EmergencyView>
        <Text style={[styles.text, styles.title]}>VOLCANIC ERUPTION: </Text>
        <Image style={styles.image} source={require("../assets/volcan.png")} />
        <View style={styles.card}>
          <Text style={styles.text}>
            Evacuate only as recommended by authorities to stay clear of lava,
            mudflows, and flying rocks and debris.
          </Text>
          <Text style={styles.text}>
            Before you leave the house, change into long-sleeved shirts and long
            pants and use goggles or eyeglasses, not contacts. Wear an emergency
            mask or hold a damp cloth over your face
          </Text>
          <Text style={styles.text}>
            If you are not evacuating, close windows and doors and block
            chimneys and other vents
          </Text>
          <Text style={styles.text}>
            Be aware that ash may put excess weight on your roof and need to be
            swept away. Wear protection during cleanups
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
    height: 290,
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
    flex: 1
  },
  cellText: {
    color: "white",
    fontSize: 35
  },
  cellText2: {
    color: "white",
    fontSize: 20
  },
  overlayBackground: {
    backgroundColor: "rgba(0,0,0,0.7)",
    flex: 1
  },
  outer: {
    flex: 1
  }
});
