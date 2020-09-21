import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Container } from "native-base";
import { Row, Grid } from "react-native-easy-grid";

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

  grid: {
    backgroundColor: "rgba(0,0,0,0.7)",
    flex: 1,
  },
});
