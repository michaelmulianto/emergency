import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  Alert,
  Linking,
  ImageBackground,
  Image,
  View,
} from "react-native";
import { Container, Header } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import { TouchableOpacity } from "react-native-gesture-handler";
import i18n from "../components/Translation";

export default class COVIDScreen extends React.Component {
  goToAboutCOVID = () => {
    console.log("Go to COVID");
    this.props.navigation.navigate("AboutCOVID");
  };

  goToCOVIDNews = () => {
    console.log("Go to COVIDNews");
    this.props.navigation.navigate("COVIDNews");
  };

  goToSymptomChecker = () => {
    console.log("Go to SymptomChecker");
    this.props.navigation.navigate("SymptomChecker");
  };

  state = { covidStats: "" };
  getCOVIDStats() {
    let statUpdate = "";
    let count = 0;
    let stats = "https://api.covid19api.com/total/country/indonesia";

    fetch(stats)
      .then((response) => response.json())
      .then((responseJSON) => {
        console.log("getting data", responseJSON);

        let mostRecent = responseJSON[count];
        do {
          if (responseJSON[count] != null) {
            count++;
          }
        } while (responseJSON[count] != null);
        count--;
        mostRecent = responseJSON[count];

        statUpdate =
          "Confirmed Cases: " +
          mostRecent.Confirmed +
          "\nDeaths: " +
          mostRecent.Deaths +
          "\nRecovered: " +
          mostRecent.Recovered +
          "\nActive: " +
          mostRecent.Active;
        console.log(statUpdate);
        this.setState({ covidStats: statUpdate });
      });
  }

  componentDidMount() {
    this.getCOVIDStats();
  }

  render() {
    console.log(JSON.stringify(i18n));
    return (
      <Container>
        <Grid style={styles.grid}>
          <Row style={{ flex: 4 }}>
            <Col style={{ justifyContent: "center", alignItems: "center" }}>
              <Image
                style={styles.logo}
                source={require("../assets/SampleCOVIDGraph.png")}
              ></Image>
            </Col>
          </Row>

          <Row style={{ flex: 7 }}>
            <Col style={{ flex: 7 }}>
              <Row style={styles.cell1}>
                <TouchableOpacity
                  onPress={this.goToAboutCOVID}
                  style={styles.cellButton}
                >
                  <Text style={styles.cellText}>About COVID-19</Text>
                </TouchableOpacity>
              </Row>
              <Row style={styles.cell2}>
                <TouchableOpacity style={styles.cellButton}>
                  <Text style={styles.cellText}>COVID News</Text>
                </TouchableOpacity>
              </Row>
            </Col>

            <Col style={{ flex: 7 }}>
              <Row style={styles.cell3}>
                <View style={styles.card}>
                  <Text style={styles.cellText}>
                    {this.state.covidStats == ""
                      ? "Loading... "
                      : this.state.covidStats}
                  </Text>
                </View>
              </Row>
              <Row style={styles.cell4}>
                <TouchableOpacity style={styles.cellButton}>
                  <Text style={styles.cellText}>Symptom Checker</Text>
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
    height: "60%",
    width: "100%",
  },
  cell2: {
    backgroundColor: "white",
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
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
});
