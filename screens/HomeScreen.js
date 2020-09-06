import React from "react";
import {
  StyleSheet,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  View,
  Dimensions,
  Alert,
} from "react-native";
import { Container } from "native-base";
import i18n from "../components/Translation";
import { Col, Row, Grid } from "react-native-easy-grid";
import {} from "react-native-gesture-handler";
import * as firebase from "firebase";
import CarouselWithPagination from "./CarouselWithPagination";

const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 1);
const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 4);

var firebaseConfig = {
  apiKey: "AIzaSyBWEaiAtk_zg7R1WOiapfiCqqm36b0Y88g",
  authDomain: "bapat-6e6a6.firebaseapp.com",
  databaseURL: "https://bapat-6e6a6.firebaseio.com",
  projectId: "bapat-6e6a6",
  storageBucket: "bapat-6e6a6.appspot.com",
  messagingSenderId: "950064821641",
  appId: "1:950064821641:web:5ed6c18714375d5bc0dd58",
  measurementId: "G-1L9REWZTVV",
};

firebase.initializeApp(firebaseConfig);

export default class HomeScreen extends React.Component {
  state = {
    showEmergency: false,
  };
  goToDisaster = () => {
    console.log("Go to Disaster");
    this.props.navigation.navigate("Disaster");
  };

  goToChat = () => {
    console.log("Go to chat");
    this.props.navigation.navigate("Chat");
  };

  goToCOVID = () => {
    console.log("Go to COVID");
    this.props.navigation.navigate("COVID");
  };

  goToBNPB = () => {
    console.log("Go to BNPB");
    this.props.navigation.navigate("BNPB");
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
    return (
      <Container>
        <Grid style={styles.grid}>
          {this.state.showEmergency ? (
            <Row>
              <Text>energency text</Text>
            </Row>
          ) : null}
          <Row style={{ flex: 11 }}>
            <Col style={{ justifyContent: "center", alignItems: "center" }}>
              <CarouselWithPagination></CarouselWithPagination>
            </Col>
          </Row>
          <Row style={{ flex: 6 }}>
            <Col style={styles.cell}>
              <ImageBackground
                style={styles.cellBackground}
                source={require("../assets/COVID.jpg")}
              >
                <TouchableOpacity
                  onPress={this.goToCOVID}
                  style={styles.cellButton}
                >
                  <View>
                    <Text style={styles.cellText}>COVID</Text>
                  </View>
                </TouchableOpacity>
              </ImageBackground>
            </Col>
            <Col style={styles.cell}>
              <ImageBackground
                style={styles.cellBackground}
                source={require("../assets/LOGO.png")}
              >
                <TouchableOpacity
                  onPress={this.goToBNPB}
                  style={styles.cellButton}
                >
                  <Text style={styles.cellText}>BNPB</Text>
                </TouchableOpacity>
              </ImageBackground>
            </Col>
          </Row>
          <Row style={{ flex: 6 }}>
            <Col style={styles.cell}>
              <ImageBackground
                style={styles.cellBackground}
                source={require("../assets/Disaster.jpg")}
              >
                <TouchableOpacity
                  onPress={this.goToDisaster}
                  style={styles.cellButton}
                >
                  <Text style={styles.cellText}>{i18n.t("Emer")}</Text>
                </TouchableOpacity>
              </ImageBackground>
            </Col>
            <Col style={styles.cell}>
              <ImageBackground
                style={styles.cellBackground}
                source={require("../assets/chat.png")}
              >
                <TouchableOpacity
                  onPress={this.goToChat}
                  style={styles.cellButton}
                >
                  <Text style={styles.cellText}>Chat</Text>
                </TouchableOpacity>
              </ImageBackground>
            </Col>
          </Row>
          <Row style={{ flex: 6 }}>
            <Col style={styles.cell}>
              <ImageBackground
                style={styles.cellBackground}
                source={require("../assets/CallButton.png")}
              >
                <TouchableOpacity
                  onPress={this.goToEMERGENCYCALL}
                  style={styles.cellButton}
                >
                  <Text style={styles.cellText}>{i18n.t("Call")}</Text>
                </TouchableOpacity>
              </ImageBackground>
            </Col>
            <Col style={styles.cell}>
              <ImageBackground style={styles.cellBackground}>
                <TouchableOpacity style={styles.cellButtoncs}>
                  <Text style={styles.cellText}>Coming soon...</Text>
                </TouchableOpacity>
              </ImageBackground>
            </Col>
          </Row>

          <Row style={{ flex: 0 }}>
            <Col
              style={{ justifyContent: "center", alignItems: "center" }}
            ></Col>
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
    backgroundColor: "white",
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
    backgroundColor: "rgba(0,0,0,0.2)",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    borderRadius: 10,
  },
  cellButtoncs: {
    backgroundColor: "rgba(0,0,0,0.8)",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  cellIcon: {},
  cellText: {
    fontWeight: "bold",
    color: "white",
  },
  logo: {
    height: "100%",
    width: "70%",
    resizeMode: "contain",
  },
  carouselContainer: {
    marginTop: 0,
  },
  itemContainer: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
  itemLabel: {
    color: "white",
    fontSize: 24,
  },

  circleGradient: {
    backgroundColor: "white",
    borderRadius: 5,
  },
  visit: {
    margin: 4,
    paddingHorizontal: 6,
    textAlign: "center",
    backgroundColor: "white",
    color: "#008f68",
    fontSize: 12,
  },
});
