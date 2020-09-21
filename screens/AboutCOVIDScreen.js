import React from "react";
import {
  StyleSheet,
  Text,
  ImageBackground,
  View,
  ScrollView,
} from "react-native";
import i18n from "../components/Translation";

export default class AboutCOVIDScreen extends React.Component {
  render() {
    return (
      <View style={styles.outer}>
        <ScrollView>
          <View style={styles.grid}>{this.props.children}</View>

          <View style={styles.card}>
            <Text style={styles.title}>{i18n.t("act")}</Text>
            <Text style={styles.text}>{i18n.t("acb1")}</Text>
            <Text style={styles.text}> </Text>
            <Text style={styles.text}>{i18n.t("acb2")}</Text>
            <Text style={styles.text}> </Text>
            <Text style={styles.text}>{i18n.t("acb3")}</Text>
            <Text style={styles.text}> </Text>
            <Text style={styles.text}>{i18n.t("acb4")}</Text>
            <Text style={styles.text}> </Text>
            <Text style={styles.source}>{i18n.t("acs")}</Text>
          </View>
        </ScrollView>
        <ImageBackground
          style={styles.cellBackground}
          source={require("../assets/AboutCOV.png")}
        ></ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 2,
    borderColor: "rgba(255, 255, 255, 0.5)",
    borderRadius: 5,
    backgroundColor: "rgba(0,0,0,0)",
    margin: 10,
  },
  text: {
    color: "black",
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 20,
  },
  source: {
    color: "black",
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    paddingLeft: 10,
    paddingRight: 10,
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
    bottom: 0,
  },

  grid: {
    backgroundColor: "rgba(0,0,0,0.7)",
    flex: 1,
  },
  outer: {
    flex: 1,
  },
});
