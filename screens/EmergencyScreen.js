import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default class EmergencyScreen extends React.Component {
  goToFlood = () => {
    console.log("Go to flood");
    this.props.navigation.navigate("Flood");
  };

  goToEarthquake = () => {
    console.log("Go to earthquake");
    this.props.navigation.navigate("Earthquake");
  };

  goToTsunami = () => {
    console.log("Go to tsunami");
    this.props.navigation.navigate("Tsunami");
  };

  goToTyphoon = () => {
    console.log("Go to typhoon");
    this.props.navigation.navigate("Typhoon");
  };

  goToForestFire = () => {
    console.log("Go to forestfire");
    this.props.navigation.navigate("ForestFire");
  };

  goToVolcanicEruption = () => {
    console.log("Go to volcaniceruption");
    this.props.navigation.navigate("VolcanicEruption");
  };

  goToEMERGENCYCALL = () => {
    console.log("Go to emergencycall");
    this.props.navigation.navigate("EMERGENCYCALL");
  };

  render() {
    return (
      <View style={styles.container}>
        <Button onPress={this.goToFlood} title="Flood" />
        <Button onPress={this.goToEarthquake} title="Earthquake" />
        <Button onPress={this.goToTsunami} title="Tsunami" />
        <Button onPress={this.goToTyphoon} title="Typhoon" />
        <Button onPress={this.goToForestFire} title="ForestFire" />
        <Button onPress={this.goToVolcanicEruption} title="VolcanicEruption" />
        <Button onPress={this.goToEMERGENCYCALL} title="EMERGENCYCALL" />
      </View>
    );
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
