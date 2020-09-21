import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import EmergencyView from "../components/EmergencyView";
import i18n from "../components/Translation";

export default class TsunamiScreen extends React.Component {
  render() {
    return (
      <EmergencyView>
        <Text style={[styles.text, styles.title]}>TSUNAMI: </Text>
        <Image style={styles.image} source={require("../assets/tsunev.jpg")} />
        <View style={styles.card}>
          <Text style={styles.text}>{i18n.t("t1")}</Text>
          <Text style={styles.text}>{i18n.t("t2")}</Text>
          <Text style={styles.text}>{i18n.t("t3")}</Text>
          <Text style={styles.text}>{i18n.t("t4")}</Text>

          <Text style={styles.text}></Text>
          <Text style={styles.text}>{i18n.t("t5")}</Text>
          <Text style={styles.text}>{i18n.t("t6")}</Text>
          <Text style={styles.text}>{i18n.t("t7")}</Text>
        </View>
      </EmergencyView>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 2,
    borderColor: "rgba(255, 255, 255, 0.5)",
    borderRadius: 5,
    shadowOpacity: 1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 10 },
    backgroundColor: "rgba(255,0,0,0.5)",
    margin: 10,
  },
  text: {
    color: "white",
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
  },
  image: {
    width: null,
    height: 200,
    resizeMode: "contain",
    margin: 10,
  },
});
