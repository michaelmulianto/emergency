import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  Alert,
  Linking,
  ImageBackground,
  Image,
  View,
  ScrollView,
  ActivityIndicator,
  Modal,
} from "react-native";
import { Container, Header } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import { TouchableOpacity } from "react-native-gesture-handler";
import i18n from "../components/Translation";

function _linkPressed(url) {
  Linking.openURL(url);
}

function compareLocationResults(a, b) {
  return a.distance > b.distance;
}

function checkIsPlace(a) {
  return a.resultType === "place" && a.category === "hospital";
}

function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export default class NearestHospitalScreen extends React.Component {
  state = {
    messages: [],
    name: [],
    distance: [],
    links: [],
    animating: true,
  };

  topic = "";

  getHospital() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        let coords = position.coords;
        console.log(`Your latitude is ${coords.latitude}`);
        console.log(`Your longitude is ${coords.longitude}`);
        let mapQuery = `https://places.cit.api.here.com/places/v1/autosuggest?at=${coords.latitude},${coords.longitude}&q=hospital&app_id=N5nEvjSbDSCfxrJKR61D&app_code=kxwOsSQIVJ7X9J_D5ajC4Q`;

        fetch(mapQuery)
          .then((response) => response.json())
          .then((responseJSON) => {
            let results = responseJSON.results
              .filter(checkIsPlace)
              .sort(compareLocationResults);
            console.log(results);

            let nearest = results[0];
            let n = [];
            let d = [];
            let l = [];
            for (let i = 0; i <= 11; i++) {
              nearest = results[i];
              n[i] = nearest.title;
              d[i] = (nearest.distance - (nearest.distance % 10)) / 1000;
              l[i] = `https://www.google.com/maps/search/${nearest.title}`;
            }
            console.log(n);
            console.log(d);
            console.log(l);
            this.setState({ name: n });
            this.setState({ distance: d });
            this.setState({ links: l });
          });
      },
      (error) => {
        console.log(error);
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }

  closeActivityIndicator = () =>
    setTimeout(
      () =>
        this.setState({
          animating: false,
        }),
      11000
    );

  componentDidMount() {
    this.getHospital();
    this.closeActivityIndicator();
  }

  render() {
    console.log(JSON.stringify(i18n));
    const animating = this.state.animating;
    return (
      <ScrollView>
        <TouchableOpacity
          onPress={() => _linkPressed(this.state.links[0])}
          style={styles.cellButton}
        >
          <Text style={styles.title}>{this.state.name[0]}</Text>
          <Text style={styles.title}>{this.state.distance[0] + "km"}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => _linkPressed(this.state.links[1])}
          style={styles.cellButton}
        >
          <Text style={styles.title}>{this.state.name[1]}</Text>
          <Text style={styles.title}>{this.state.distance[1] + "km"}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => _linkPressed(this.state.links[2])}
          style={styles.cellButton}
        >
          <Text style={styles.title}>{this.state.name[2]}</Text>
          <Text style={styles.title}>{this.state.distance[2] + "km"}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => _linkPressed(this.state.links[3])}
          style={styles.cellButton}
        >
          <Text style={styles.title}>{this.state.name[3]}</Text>
          <Text style={styles.title}>{this.state.distance[3] + "km"}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => _linkPressed(this.state.links[4])}
          style={styles.cellButton}
        >
          <Text style={styles.title}>{this.state.name[4]}</Text>
          <Text style={styles.title}>{this.state.distance[4] + "km"}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => _linkPressed(this.state.links[5])}
          style={styles.cellButton}
        >
          <Text style={styles.title}>{this.state.name[5]}</Text>
          <Text style={styles.title}>{this.state.distance[5] + "km"}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => _linkPressed(this.state.links[6])}
          style={styles.cellButton}
        >
          <Text style={styles.title}>{this.state.name[6]}</Text>
          <Text style={styles.title}>{this.state.distance[6] + "km"}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => _linkPressed(this.state.links[7])}
          style={styles.cellButton}
        >
          <Text style={styles.title}>{this.state.name[7]}</Text>
          <Text style={styles.title}>{this.state.distance[7] + "km"}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => _linkPressed(this.state.links[8])}
          style={styles.cellButton}
        >
          <Text style={styles.title}>{this.state.name[8]}</Text>
          <Text style={styles.title}>{this.state.distance[8] + "km"}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => _linkPressed(this.state.links[9])}
          style={styles.cellButton}
        >
          <Text style={styles.title}>{this.state.name[9]}</Text>
          <Text style={styles.title}>{this.state.distance[9] + "km"}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => _linkPressed(this.state.links[10])}
          style={styles.cellButton}
        >
          <Text style={styles.title}>{this.state.name[10]}</Text>
          <Text style={styles.title}>{this.state.distance[10] + "km"}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => _linkPressed(this.state.links[11])}
          style={styles.cellButton}
        >
          <Text style={styles.title}>{this.state.name[11]}</Text>
          <Text style={styles.title}>{this.state.distance[11] + "km"}</Text>
        </TouchableOpacity>
        <Modal
          transparent={true}
          animationType={"none"}
          visible={animating}
          onRequestClose={() => {
            console.log("close modal");
          }}
        >
          <View style={styles.modalBackground}>
            <View style={styles.activityIndicatorWrapper}>
              <ActivityIndicator
                animating={animating}
                size="large"
                style={styles.activityIndicator}
              />
            </View>
          </View>
        </Modal>
      </ScrollView>
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
  imageCellBackground: {
    borderRadius: 15,
  },

  overlayBackground: {
    backgroundColor: "rgba(246,245,220,100)",
    flex: 1,
  },
  cellButton: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 0,

    height: 60,
    borderWidth: 0.5,
    borderColor: "#D4D4D4",
    margin: 0,
  },
  title: {
    backgroundColor: "white",
    textAlign: "left",
    justifyContent: "center",
    width: "100%",
    borderRadius: 0,
    borderWidth: 2,
    borderColor: "rgba(0, 0, 0, 0)",
    margin: 3,
    fontWeight: "bold",
  },
  activityIndicator: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 80,
    position: "absolute",
    left: 140,
    right: 140,
    top: 300,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 10,
  },
});
