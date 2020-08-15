import React from "react";
import { StyleSheet, Text, ImageBackground, Image } from "react-native";
import { Container } from "native-base";
import i18n from "../components/Translation";
import { Col, Row, Grid } from "react-native-easy-grid";
import {} from "react-native-gesture-handler";
import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBWEaiAtk_zg7R1WOiapfiCqqm36b0Y88g",
  authDomain: "bapat-6e6a6.firebaseapp.com",
  databaseURL: "https://bapat-6e6a6.firebaseio.com",
  projectId: "bapat-6e6a6",
  storageBucket: "bapat-6e6a6.appspot.com",
  messagingSenderId: "950064821641",
  appId: "1:950064821641:web:5ed6c18714375d5bc0dd58",
  measurementId: "G-1L9REWZTVV"
};

firebase.initializeApp(firebaseConfig);

export default class HomeScreen extends React.Component {
  state = {
    showEmergency: false
  };
  goToEmergency = () => {
    console.log("Go to emergency");
    this.props.navigation.navigate("Emergency");
  };

  goToChat = () => {
    console.log("Go to chat");
    this.props.navigation.navigate("Chat");
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
          <Row style={{ flex: 3 }}>
            <Col style={{ justifyContent: "center", alignItems: "center" }}>
              <Image
                style={styles.logo}
                source={require("../assets/BAPAT.png")}
              ></Image>
            </Col>
          </Row>
          <Row style={{ flex: 8 }}>
            <Col style={styles.cell}>
              <ImageBackground
                style={styles.cellBackground}
                source={require("../assets/LOGO.png")}
              >
                <TouchableOpacity
                  onPress={this.goToEmergency}
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
    justifyContent: "center"
  },
  cell: {
    backgroundColor: "white",
    margin: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  cellButton: {
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  },

  grid: {
    backgroundColor: "rgba(0,0,0,0.7)"
  },

  cellBackground: {
    width: "100%",
    height: "100%",
    justifyContent: "center"
  },
  Background: {
    resizeMode: "contain"
  },
  cellButton: {
    backgroundColor: "rgba(0,0,0,0.5)",
    alignItems: "center",
    justifyContent: "center",
    height: "100%"
  },
  cellIcon: {},
  cellText: {
    fontWeight: "bold",
    color: "white"
  },
  logo: {
    height: "100%",
    width: "70%",
    resizeMode: "contain"
  }
});
