import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import { Container, Header, Card, CardItem, Body, Content } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";

export default class TyphoonScreen extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <View style={styles.grid}>
            <Text style={[styles.text, styles.title]}>TYPHOON: </Text>
            <Image
              style={styles.image}
              source={require("../assets/typ.png")}
            />
            <View style={styles.card}>
              <Text style={styles.text}>
                Stay inside the house
              </Text>
              <Text style={styles.text}>
                 Close all windows and turn off the main power unit
              </Text>
               <Text style={styles.text}>
                Continuously check for weather updates
              </Text>
              <Text style={styles.text}>
                Check whether or not the supply of water is safe to drink. If not, boil water for at least 20 minutes
              </Text>
              
              <Text style={styles.text}>
              </Text>
              <Text style={styles.text}>
                After The Typhoon:
              </Text>
              <Text style={styles.text}>
                Beware of dangerous animals such as snakes that may have entered your house
              </Text>
              <Text style={styles.text}>
                Report damaged electrical cables and fallen electric posts to the authorities.
              </Text>
            </View>
              <Text>
              </Text>
              <Text>
              </Text>
              <Text>
              </Text>
              <Text>
              </Text>
              <Text>
              </Text>
              <Text>
              </Text>
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

