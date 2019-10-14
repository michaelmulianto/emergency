import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  Linking,
  ImageBackground
} from "react-native";
import { Container } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class HomeScreen extends React.Component {
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
          <Row>
            <Col style={styles.cell}>
              <ImageBackground
                style={styles.cellBackground}
                source={require("../assets/LOGO.png")}
              >
                <TouchableOpacity
                  onPress={this.goToEmergency}
                  style={styles.cellButton}
                >
                  <Text style={styles.cellText}>EMERGENCY</Text>
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
                  <Text style={styles.cellText}>CHAT</Text>
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
  }
});
