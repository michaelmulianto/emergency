import React from "react";
import {
  StyleSheet,
  Text,
  Alert,
  Linking,
  ImageBackground,
  View,
  ScrollView,
} from "react-native";
import { Container, Header } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import { TouchableOpacity } from "react-native-gesture-handler";
import i18n from "../components/Translation";

export default class AboutBNPBScreen extends React.Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.grid}>{this.props.children}</View>

        <View style={styles.card}>
          <Text style={styles.title}>{i18n.t("abt1")}</Text>
          <Text style={styles.text}>{i18n.t("abb1")}</Text>
          <Text style={styles.text}> </Text>
          <Text style={styles.title}>{i18n.t("abt2")}</Text>
          <Text style={styles.text}>{i18n.t("abb2")}</Text>
          <Text style={styles.text}> </Text>
          <Text style={styles.title}>{i18n.t("abt3")}</Text>
          <Text style={styles.text}>{i18n.t("abb3")}</Text>
          <Text style={styles.text}>{i18n.t("abb4")}</Text>
          <Text style={styles.text}>{i18n.t("abb5")}</Text>
          <Text style={styles.text}>{i18n.t("abb6")}</Text>
          <Text style={styles.text}>{i18n.t("abb7")}</Text>
          <Text style={styles.text}> </Text>
          <Text style={styles.title}>{i18n.t("abt4")}</Text>
          <Text style={styles.text}>{i18n.t("abb8")}</Text>
          <Text style={styles.text}>{i18n.t("abb9")}</Text>
          <Text style={styles.text}>{i18n.t("abb10")}</Text>
          <Text style={styles.text}>{i18n.t("abb11")}</Text>
          <Text style={styles.text}>{i18n.t("abb12")}</Text>
          <Text style={styles.text}>{i18n.t("abb13")}</Text>
          <Text style={styles.text}>{i18n.t("abb14")}</Text>
          <Text style={styles.text}>{i18n.t("abb15")}</Text>
          <Text style={styles.text}> </Text>
          <Text style={styles.title}>{i18n.t("abt5")}</Text>
          <Text style={styles.text}>{i18n.t("abb16")}</Text>
          <Text style={styles.text}>{i18n.t("abb17")}</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
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
    fontSize: 25,
    fontWeight: "bold",
    paddingLeft: 10,
    paddingRight: 10,
  },
  image: {
    width: null,
    height: 233,
    resizeMode: "contain",
    margin: 10,
  },
  mainView: {
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
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
  Background: {
    resizeMode: "contain",
  },
  grid: {
    backgroundColor: "rgba(0,0,0,0.7)",
    flex: 1,
  },
  cellText: {
    color: "white",
    fontSize: 35,
  },
  cellText2: {
    color: "white",
    fontSize: 20,
  },
});
