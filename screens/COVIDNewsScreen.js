import React from "react";
import {
  StyleSheet,
  Text,
  Linking,
  ScrollView,
  Image,
  FlatList,
  ActivityIndicator,
  View,
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
    articles: [],
  };
  getCOVIDNews() {
    let news =
      "http://newsapi.org/v2/top-headlines?country=id&apiKey=3706be4521cb4fed879b401f370531e4";

    fetch(news)
      .then((response) => response.json())
      .then((responseJSON) => {
        let newsSource = responseJSON;
        let count = 0;

        for (let i = 0; i < responseJSON.articles.length; i++) {
          newsSource = responseJSON.articles[i];
          if (
            newsSource.title.toLowerCase().search("corona") != -1 ||
            newsSource.title.toLowerCase().search("covid") != -1 ||
            newsSource.title.toLowerCase().search("mask") != -1 ||
            newsSource.title.toLowerCase().search("vaksin") != -1 ||
            newsSource.title.toLowerCase().search("lab") != -1
          ) {
            // newsSource.url, newsSource.title

            if (newsSource.urlToImage == null) {
              newsSource.urlToImage = "nothing";
            }

            newsSource.key = `${count}`;
            count++;
            this.setState({ articles: [...this.state.articles, newsSource] });
            console.log(newsSource.urlToImage);
          }
        }
      });
  }

  componentDidMount() {
    this.getCOVIDNews();
  }

  _renderItem = ({ item }) => {
    console.log("Here's the image:");
    console.log(item.urlToImage);
    return (
      <TouchableOpacity
        onPress={() => _linkPressed(item.url)}
        style={styles.cellButton}
      >
        <Grid style={styles.grid}>
          <Col>
            <Image
              source={{ uri: item.urlToImage }}
              style={{
                height: 79,
                width: 80,
              }}
            ></Image>
          </Col>
          <Col style={{ flex: 3.2 }}>
            <Text style={styles.title}>{item.title}</Text>
          </Col>
        </Grid>
      </TouchableOpacity>
    );
  };

  render() {
    console.log(JSON.stringify(i18n));
    return this.state.articles.length === 0 ? (
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator
            animating={true}
            size="large"
            style={styles.activityIndicator}
          />
        </View>
      </View>
    ) : (
      <FlatList
        data={this.state.articles}
        renderItem={this._renderItem}
        keyExtractor={(item) => item.key}
      />
    );
  }
}

const styles = StyleSheet.create({
  grid: {
    backgroundColor: "rgba(0,0,0,0)",
  },
  imageCellBackground: {
    borderRadius: 15,
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
