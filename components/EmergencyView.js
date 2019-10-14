import React from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  ImageBackground,
  Text
} from "react-native";

export default class EmergencyView extends React.Component {
  render() {
    return (
      <View style={styles.outer}>
        <ScrollView>
          <View style={styles.grid}>{this.props.children}</View>
        </ScrollView>
        <ImageBackground
          style={styles.cellBackground}
          imageStyle={styles.Background}
          source={require("../assets/LOGO.png")}
        >
          <View style={styles.overlayBackground}></View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
  overlayBackground: {
    backgroundColor: "rgba(0,0,0,0.7)",
    flex: 1
  },
  outer: {
    flex: 1
  }
});
