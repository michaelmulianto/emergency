import React from "react";
import {
  StyleSheet,
  Text,
  Alert,
  Linking,
  ImageBackground,
  View,
} from "react-native";
import { Container, Header } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import { TouchableOpacity } from "react-native-gesture-handler";
import i18n from "../components/Translation";

export default class DisasterScreen extends React.Component {
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
    Alert.alert(
      i18n.t("no"),
      "",
      [
        {
          text: "BNPB - +62 21 29827444",
          onPress: () => {
            console.log("+622129827444");
            Linking.openURL("tel://+622129827444");
          },
        },

        {
          text: "Cancel",
          onPress: () => console.log("Cancel"),
          style: "cancel",
        },
        {
          text: "TNI - +62 21 84595576",
          onPress: () => {
            console.log("+622184595576");
            Linking.openURL("tel://+622184595576");
          },
        },
      ],
      { cancelable: false }
    );
  };

  render() {
    console.log(JSON.stringify(i18n));
    return (
      <Container>
        <Grid style={styles.grid}>
          <View style={styles.overlayBackground}>
            <Row>
              <Col style={styles.cell}>
                <ImageBackground
                  style={styles.cellBackground}
                  source={require("../assets/flood.png")}
                >
                  <TouchableOpacity
                    onPress={this.goToFlood}
                    style={styles.cellButton}
                  >
                    <Text style={styles.cellText}>{i18n.t("Flood")}</Text>
                  </TouchableOpacity>
                </ImageBackground>
              </Col>
              <Col style={styles.cell}>
                <ImageBackground
                  style={styles.cellBackground}
                  source={require("../assets/earthquake.png")}
                >
                  <TouchableOpacity
                    onPress={this.goToEarthquake}
                    style={styles.cellButton}
                  >
                    <Text style={styles.cellText}>{i18n.t("Earthquake")}</Text>
                  </TouchableOpacity>
                </ImageBackground>
              </Col>
            </Row>
          </View>
          <View style={styles.overlayBackground}>
            <Row>
              <Col style={styles.cell}>
                <ImageBackground
                  style={styles.cellBackground}
                  source={require("../assets/tsunami.png")}
                >
                  <TouchableOpacity
                    onPress={this.goToTsunami}
                    style={styles.cellButton}
                  >
                    <Text style={styles.cellText}>{i18n.t("Tsunami")}</Text>
                  </TouchableOpacity>
                </ImageBackground>
              </Col>
              <Col style={styles.cell}>
                <ImageBackground
                  style={styles.cellBackground}
                  source={require("../assets/typhoon.png")}
                >
                  <TouchableOpacity
                    onPress={this.goToTyphoon}
                    style={styles.cellButton}
                  >
                    <Text style={styles.cellText}>{i18n.t("Typhoon")}</Text>
                  </TouchableOpacity>
                </ImageBackground>
              </Col>
            </Row>
          </View>

          <Row>
            <View style={styles.overlayBackground}>
              <Col style={styles.cell}>
                <ImageBackground
                  style={styles.cellBackground}
                  source={require("../assets/forest.png")}
                >
                  <TouchableOpacity
                    onPress={this.goToForestFire}
                    style={styles.cellButton}
                  >
                    <Text style={styles.cellText}>{i18n.t("ForestF")}</Text>
                  </TouchableOpacity>
                </ImageBackground>
              </Col>
            </View>
            <View style={styles.overlayBackground}>
              <Col style={styles.cell}>
                <ImageBackground
                  style={styles.cellBackground}
                  source={require("../assets/volcano.png")}
                >
                  <TouchableOpacity
                    onPress={this.goToVolcanicEruption}
                    style={styles.cellButton}
                  >
                    <Text style={styles.cellText}>{i18n.t("Volcano")}</Text>
                  </TouchableOpacity>
                </ImageBackground>
              </Col>
            </View>
          </Row>
        </Grid>
      </Container>
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

  cell: {
    backgroundColor: "yellow",
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  cellButton: {
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },

  grid: {
    backgroundColor: "rgba(0,0,0,0)",
  },

  cellBackground: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
  Background: {
    resizeMode: "contain",
  },
  cellButton: {
    backgroundColor: "rgba(0,0,0,0.1)",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    borderRadius: 20,
  },
  cellIcon: {},
  cellText: {
    fontWeight: "bold",
    color: "white",
  },
  overlayBackground: {
    backgroundColor: "rgba(246,245,220,100)",
    flex: 1,
  },
});
