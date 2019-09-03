import React from "react";
import { StyleSheet, Text, View, Button, Alert, Linking } from "react-native";
import { Container, Header } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class EmergencyScreen extends React.Component {
  goToFlood = () => {
    console.log("Go to flood");
    this.props.navigation.navigate("Flood");
  };

  goToEarthquake = () => {
    console.log("Go to earthquake");
    this.props.navigation.navigate("Earthquake");
  };

  goToTsunami = () => {
    console.log("Go to tsunami");
    this.props.navigation.navigate("Tsunami");
  };

  goToTyphoon = () => {
    console.log("Go to typhoon");
    this.props.navigation.navigate("Typhoon");
  };

  goToForestFire = () => {
    console.log("Go to forestfire");
    this.props.navigation.navigate("ForestFire");
  };

  goToVolcanicEruption = () => {
    console.log("Go to volcaniceruption");
    this.props.navigation.navigate("VolcanicEruption");
  };

  goToEMERGENCYCALL = () => {
    console.log("Go to emergencycall");
    Alert.alert(
      "Pick Number",
      "",
      [
        {
          text: "BNPB - +62 21 29827444",
          onPress: () => {
            console.log("+622129827444");
            Linking.openURL("tel://+622129827444");
          }
        },

        {
          text: "Cancel",
          onPress: () => console.log("Cancel"),
          style: "cancel"
        },
        {
          text: "TNI - +62 21 84595576",
          onPress: () => {
            console.log("+622184595576");
            Linking.openURL("tel://+622184595576");
          }
        }
      ],
      { cancelable: false }
    );
  };

  render() {
    return (
      <Container>
        <Grid>
          <Row>
            <Col style={styles.cell}>
              <TouchableOpacity
                onPress={this.goToFlood}
                style={styles.cellButton}
              >
                <Ionicons name="md-checkmark-circle" size={32} color="green" />
                <Button onPress={this.goToFlood} title="Flood" />
              </TouchableOpacity>
            </Col>
            <Col style={styles.cell}>
              <TouchableOpacity
                onPress={this.goToEarthquake}
                style={styles.cellButton}
              >
                <Ionicons name="md-checkmark-circle" size={32} color="green" />
                <Button onPress={this.goToEarthquake} title="Earthquake" />
              </TouchableOpacity>
            </Col>
          </Row>
          <Row>
            <Col style={styles.cell}>
              <TouchableOpacity
                onPress={this.goToTsunami}
                style={styles.cellButton}
              >
                <Ionicons name="md-checkmark-circle" size={32} color="green" />
                <Button onPress={this.goToTsunami} title="Tsunami" />
              </TouchableOpacity>
            </Col>
            <Col style={styles.cell}>
              <TouchableOpacity
                onPress={this.goToTyphoon}
                style={styles.cellButton}
              >
                <Ionicons name="md-checkmark-circle" size={32} color="green" />
                <Button onPress={this.goToTyphoon} title="Typhoon" />
              </TouchableOpacity>
            </Col>
          </Row>
          <Row>
            <Col style={styles.cell}>
              <TouchableOpacity
                onPress={this.goToForestFire}
                style={styles.cellButton}
              >
                <Ionicons name="md-checkmark-circle" size={32} color="green" />
                <Button onPress={this.goToForestFire} title="ForestFire" />
              </TouchableOpacity>
            </Col>
            <Col style={styles.cell}>
              <TouchableOpacity
                onPress={this.goToVolcanicEruption}
                style={styles.cellButton}
              >
                <Ionicons name="md-checkmark-circle" size={32} color="green" />
                <Button
                  onPress={this.goToVolcanicEruption}
                  title="VolcanicEruption"
                />
              </TouchableOpacity>
            </Col>
          </Row>

          <Row>
            <Button onPress={this.goToEMERGENCYCALL} title="EMERGENCYCALL" />
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
    backgroundColor: "yellow",
    margin: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  cellButton: {
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  }
});
