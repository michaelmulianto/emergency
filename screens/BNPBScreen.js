import React from "react";
import {
  StyleSheet,
  Text,
  Alert,
  Linking,
  ImageBackground,
  Image,
} from "react-native";
import { Container, Header } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import { TouchableOpacity } from "react-native-gesture-handler";
import i18n from "../components/Translation";

export default class BNPBScreen extends React.Component {
  goToAboutBNPB = () => {
    console.log("Go to AboutBNPB");
    this.props.navigation.navigate("AboutBNPB");
  };
  goToBNPBNews = () => {
    console.log("Go to BNPBNews");
    this.props.navigation.navigate("BNPBNews");
  };
  goToTakeAction = () => {
    console.log("Go to TakeAction");
    this.props.navigation.navigate("TakeAction");
  };

  render() {
    console.log(JSON.stringify(i18n));
    return (
      <Container>
        <Grid style={styles.grid}>
          <Row style={{ flex: 4 }}>
            <Col style={{ justifyContent: "center", alignItems: "center" }}>
              <Image
                style={styles.logo}
                source={require("../assets/LOGO.png")}
              ></Image>
            </Col>
          </Row>

          <Row style={{ flex: 8 }}>
            <Col style={{ flex: 7 }}>
              <Row style={styles.cell1}>
                <TouchableOpacity
                  onPress={this.goToAboutBNPB}
                  style={styles.cellButton}
                >
                  <Text style={styles.cellText}>About BNPB</Text>
                </TouchableOpacity>
              </Row>
            </Col>

            <Col style={{ flex: 7 }}>
              <Row style={styles.cell3}>
                <TouchableOpacity style={styles.cellButton}>
                  <Text style={styles.cellText}>BNPB News</Text>
                </TouchableOpacity>
              </Row>
              <Row style={styles.cell4}>
                <TouchableOpacity
                  onPress={this.goToTakeAction}
                  style={styles.cellButton}
                >
                  <Text style={styles.cellText}>Take Action</Text>
                </TouchableOpacity>
              </Row>
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
    justifyContent: "center",
  },
  grid: {
    backgroundColor: "rgba(0,0,0,0)",
  },
  logo: {
    height: "100%",
    width: "90%",
    resizeMode: "contain",
  },
  cell1: {
    backgroundColor: "white",
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    height: "95.5%",
    width: "100%",
  },
  cell3: {
    backgroundColor: "white",
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    height: "35%",
    width: "90%",
  },
  cell4: {
    backgroundColor: "white",
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
  },
  cellButton: {
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    borderRadius: 15,
  },
});
