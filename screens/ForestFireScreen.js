import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import { Container, Header, Card, CardItem, Body, Content } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";

export default class ForestFireScreen extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <View style={styles.grid}>
            <Text style={[styles.text, styles.title]}>FOREST FIRE: </Text>
            <Image
              style={styles.image}
              source={require("../assets/Forestf.png")}
            />
            <View style={styles.card}>
              <Text style={styles.text}>
                Don't try to outrun the blaze. Instead, look for a body of water such as a pond or river to crouch in.
              </Text>
              <Text style={styles.text}>
                 If there is no water nearby, find a depressed, cleared area with little vegetation, lie low to the ground, and cover your body with wet clothing, a blanket, or soil. Stay low and covered until the fire passes.
              </Text>
               <Text style={styles.text}>
                Protect your lungs by breathing air closest to the ground, through a moist cloth, if possible, to avoid inhaling smoke.
              </Text>
               <Text style={styles.text}>
                Shut off natural gas, propane, or fuel oil supplies.
              </Text>
              <Text style={styles.text}>
                Fill any large vessels – pools, hot tubs, garbage cans, or tubs – with water to slow or discourage fire.
              </Text>

            </View>
              <Text>
              </Text>
              <Text>
              </Text>

          </View>
 
        </Content>
        <ImageBackground
          style={styles.cellBackground}
          imageStyle={styles.Background}
          source={require("../assets/LOGO.png")}
        ></ImageBackground>
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
    height: 140,
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

