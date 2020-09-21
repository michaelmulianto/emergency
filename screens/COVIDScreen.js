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
          "\nConfirmed: " +
          mostRecent.Confirmed +
          "\nDeaths: " +
          mostRecent.Deaths +
          "\nRecovered: " +
          mostRecent.Recovered +
          "\nActive: " +
          mostRecent.Active +
          "\n";
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
        <View style={styles.overlayBackground}>
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
                  <ImageBackground
                    style={styles.cellBackground}
                    source={require("../assets/aboutCOVID.png")}
                    imageStyle={styles.imageCellBackground}
                  >
                    <TouchableOpacity
                      onPress={this.goToAboutCOVID}
                      style={styles.cellButton}
                    >
                      <Text style={styles.cellText}>About COVID-19</Text>
                    </TouchableOpacity>
                  </ImageBackground>
                </Row>
                <Row style={styles.cell2}>
                  <ImageBackground
                    style={styles.cellBackground}
                    source={require("../assets/News.png")}
                    imageStyle={styles.imageCellBackground}
                  >
                    <TouchableOpacity
                      style={styles.cellButton}
                      onPress={this.goToCOVIDNews}
                    >
                      <Text style={styles.cellText}>COVID News</Text>
                    </TouchableOpacity>
                  </ImageBackground>
                </Row>
              </Col>

              <Col style={{ flex: 7 }}>
                <Row style={styles.cell3}>
                  <ImageBackground
                    style={styles.cellBackground}
                    source={require("../assets/counter.png")}
                    imageStyle={styles.imageCellBackground}
                  >
                    <TouchableOpacity style={styles.cellButton}>
                      <Text style={styles.cellText}>
                        {this.state.covidStats == ""
                          ? "Loading... "
                          : this.state.covidStats}
                      </Text>
                    </TouchableOpacity>
                  </ImageBackground>
                </Row>
                <Row style={styles.cell4}>
                  <ImageBackground
                    style={styles.cellBackground}
                    source={require("../assets/symptom.png")}
                    imageStyle={styles.imageCellBackground}
                  >
                    <TouchableOpacity
                      onPress={this.goToSymptomChecker}
                      style={styles.cellButton}
                    >
                      <Text style={styles.cellText}>Symptom Checker</Text>
                    </TouchableOpacity>
                  </ImageBackground>
                </Row>
              </Col>
            </Row>
          </Grid>
        </View>
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
    borderRadius: 5,
  },
  grid: {
    backgroundColor: "rgba(0,0,0,0)",
  },
  logo: {
    height: "95%",
    width: "95%",
    resizeMode: "contain",
    borderColor: "black",
    borderWidth: 2,
  },
  cell1: {
    backgroundColor: "white",
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    height: "60%",
    width: "90%",
    borderRadius: 15,
  },
  cell2: {
    backgroundColor: "white",
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    borderRadius: 15,
  },
  cell3: {
    backgroundColor: "white",
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    height: "35%",
    width: "90%",
    borderRadius: 15,
  },
  cell4: {
    backgroundColor: "white",
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    borderRadius: 15,
  },
  cellButton: {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
    borderRadius: 15,
  },
  imageCellBackground: {
    borderRadius: 15,
  },
  card: {
    borderWidth: 2,
    borderColor: "rgba(255, 255, 255, 0.5)",
    borderRadius: 5,
    shadowOpacity: 1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    backgroundColor: "rgba(255,0,0,0.5)",
    margin: 10,
  },
  cellBackground: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    flex: 1,
  },
  overlayBackground: {
    backgroundColor: "rgba(246,245,220,100)",
    flex: 1,
  },
  cellText: {
    fontWeight: "bold",
    color: "black",
    fontSize: 13,
  },
});
