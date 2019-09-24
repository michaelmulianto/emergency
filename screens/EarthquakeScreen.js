import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { Container, Header } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";

export default class EarthquakeScreen extends React.Component {
  render() {
    return (
      <Container>
        <ImageBackground
          style={styles.cellBackground}
          imageStyle={styles.Background}
          source={require("../assets/LOGO.png")}
        >
          <Grid style={styles.grid}>
            <View>
              <Text style={styles.cellText}> EARTHQUAKE: </Text>
              <Text style={styles.cellText2}>
                If Indoors: DROP, COVER, HOLD
              </Text>
            </View>
          </Grid>
        </ImageBackground>
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
  cellBackground: {
    width: "100%",
    height: "100%",
    justifyContent: "center"
  },
  Background: {
    resizeMode: "contain"
  },
  grid: {
    backgroundColor: "rgba(0,0,0,0.7)"
  },
  cellText: {
    color: "white",
    fontSize: 35
  },
  cellText2: {
    color: "white",
    fontSize: 20
  }
});
