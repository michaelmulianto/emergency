import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  Linking,
  ImageBackground,
} from "react-native";
import { Container, Header } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import { TouchableOpacity } from "react-native-gesture-handler";
import i18n from "../components/Translation";

export default class TakeActionScreen extends React.Component {
  state = { finalUpdate: "" };
  getInfo() {
    let update = "https://michaelmulianto.github.io/BNPBUpdate/update.json";
    let current = "";
    fetch(update)
      .then((response) => response.json())
      .then((responseJSON) => {
        console.log(responseJSON);
        current = responseJSON.TakeActionUpdate;
        console.log(current);

        this.setState({ finalUpdate: current });
      });
  }

  componentDidMount() {
    this.getInfo();
  }
  render() {
    return (
      <Container>
        <Grid style={styles.grid}>
          <Row style={{ flex: 1 }}></Row>
          <Row style={{ flex: 1 }}>
            <View style={styles.card}>
              <Text style={styles.text}></Text>
              <Text style={styles.text}>{this.state.finalUpdate}</Text>
            </View>
          </Row>
          <Row style={{ flex: 1 }}></Row>
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
