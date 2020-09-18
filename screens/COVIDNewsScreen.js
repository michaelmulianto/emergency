import React from "react";
import {
  StyleSheet,
  Text,
  Alert,
  Linking,
  ImageBackground,
  ScrollView,
  Image,
} from "react-native";
import { Container, Header, Left, Right } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import { TouchableOpacity } from "react-native-gesture-handler";
import i18n from "../components/Translation";

function _linkPressed(url) {
  Linking.openURL(url);
}

export default class AboutCOVIDNewsScreen extends React.Component {
  state = {
    title: [],
    links: [],
    image: [],
  };
  getCOVIDNews() {
    let news =
      "http://newsapi.org/v2/top-headlines?country=id&apiKey=3706be4521cb4fed879b401f370531e4";

    fetch(news)
      .then((response) => response.json())
      .then((responseJSON) => {
        let newsSource = responseJSON;
        let count = 0;
        let t = [];
        let l = [];
        let im = [];

        for (let i = 0; i < responseJSON.articles.length; i++) {
          newsSource = responseJSON.articles[i];
          if (
            newsSource.title.toLowerCase().search("corona") != -1 ||
            newsSource.title.toLowerCase().search("covid") != -1 ||
            newsSource.title.toLowerCase().search("mask") != -1 ||
            newsSource.title.toLowerCase().search("vaksin") != -1
          ) {
            t[count] = newsSource.title;
            l[count] = newsSource.url;
            im[count] = newsSource.urlToImage;
            count++;
          }
        }

        console.log(t);
        console.log(l);
        console.log(im);

        this.setState({ title: t });
        this.setState({ links: l });
        this.setState({ image: im });
      });
  }

  componentDidMount() {
    this.getCOVIDNews();
  }

  render() {
    console.log(JSON.stringify(i18n));
    let image0 = {
      uri: this.state.image[0],
    };
    let image1 = {
      uri: this.state.image[1],
    };
    return (
      <ScrollView>
        <TouchableOpacity
          onPress={() => _linkPressed(this.state.links[0])}
          style={styles.cellButton}
        >
          <Text style={styles.title}>
            <Image
              source={image0}
              style={{
                height: 50,

                width: 50,
              }}
            ></Image>

            {this.state.title[0]}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => _linkPressed(this.state.links[1])}
          style={styles.cellButton}
        >
          <Text style={styles.title}>{this.state.title[1]}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => _linkPressed(this.state.links[2])}
          style={styles.cellButton}
        >
          <Text style={styles.title}>{this.state.title[2]}</Text>
        </TouchableOpacity>
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

    height: 80,
    borderWidth: 0.5,
    borderColor: "#D4D4D4",
    margin: 0,
  },
  title: {
    backgroundColor: "white",
    borderRadius: 0,
    borderWidth: 2,
    borderColor: "rgba(0, 0, 0, 0)",
    fontWeight: "bold",
  },
});
