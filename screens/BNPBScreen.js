import React from "react";
import { StyleSheet, Text, ImageBackground, View } from "react-native";
import { Container } from "native-base";
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

  state = { finalUpdate: "" };
  getInfo() {
    let update = "https://michaelmulianto.github.io/BNPBUpdate/update.json";
    let current = "";
    fetch(update)
      .then((response) => response.json())
      .then((responseJSON) => {
        console.log(responseJSON);
        current = responseJSON.BNPBUpdate;
        console.log(current);

        this.setState({ finalUpdate: current });
      });
  }

  componentDidMount() {
    this.getInfo();
  }

  render() {
    console.log(JSON.stringify(i18n));
    return (
      <Container>
        <View style={styles.overlayBackground}>
          <Grid style={styles.grid}>
            <Row style={{ flex: 4 }}>
              <View style={styles.card}>
                <Text style={styles.updateText}>{this.state.finalUpdate}</Text>
              </View>
            </Row>

            <Row style={{ flex: 8 }}>
              <Col style={{ flex: 7 }}>
                <Row style={styles.cell1}>
                  <ImageBackground
                    style={styles.cellBackground}
                    source={require("../assets/aboutbnpb.png")}
                    imageStyle={styles.imageCellBackground}
                  >
                    <TouchableOpacity
                      onPress={this.goToAboutBNPB}
                      style={styles.cellButton}
                    >
                      <Text style={styles.cellText}>About BNPB</Text>
                    </TouchableOpacity>
                  </ImageBackground>
                </Row>
              </Col>

              <Col style={{ flex: 7 }}>
                <Row style={styles.cell3}>
                  <ImageBackground
                    style={styles.cellBackground}
                    source={require("../assets/bnpbnews.png")}
                    imageStyle={styles.imageCellBackground}
                  >
                    <TouchableOpacity style={styles.cellButton}>
                      <Text style={styles.cellText}>BNPB News</Text>
                    </TouchableOpacity>
                  </ImageBackground>
                </Row>
                <Row style={styles.cell4}>
                  <ImageBackground
                    style={styles.cellBackground}
                    source={require("../assets/takeaction.png")}
                    imageStyle={styles.imageCellBackground}
                  >
                    <TouchableOpacity
                      onPress={this.goToTakeAction}
                      style={styles.cellButton}
                    >
                      <Text style={styles.cellText}>Take Action</Text>
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
  grid: {
    backgroundColor: "rgba(0,0,0,0)",
  },

  cell1: {
    backgroundColor: "white",
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    height: "95.5%",
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
  card: {
    borderWidth: 3,
    borderColor: "rgba(255, 255, 255, 0.5)",
    paddingTop: 15,
    paddingLeft: 25,
    paddingRight: 25,
    shadowOpacity: 10,
    shadowOffset: { width: 0, height: 5 },
    backgroundColor: "rgba(225,0,0,0.8)",
    margin: 10,
  },
  updateText: {
    color: "white",
    fontSize: 20,
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
  imageCellBackground: {
    borderRadius: 15,
  },
});
