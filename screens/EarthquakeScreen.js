import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class EarthquakeScreen extends React.Component {
  render() {
    return (
      <View>
        <Text> "this earthquake" </Text>
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
