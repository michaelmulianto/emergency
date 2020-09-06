import React, { Component } from "react";
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  ImageBackground,
  Image,
} from "react-native";

import Carousel, { Pagination } from "react-native-snap-carousel"; // Version can be specified in package.json

import { scrollInterpolator, animatedStyles } from "../utils/animations";

const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 1);
const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 2) / 4);

const DATA = [
  {
    title: "something",
    picture: "LOGO.png",
  },
  {
    title: "something2",
    picture: "Disaster.jpg",
  },
  {
    title: "something3",
    picture: "Disaster.jpg",
  },
];

export default class CarouselWithPagination extends Component {
  state = {
    index: 0,
  };

  constructor(props) {
    super(props);
  }

  get pagination() {
    const { index } = this.state;
    return (
      <Pagination
        dotsLength={DATA.length}
        activeDotIndex={index}
        containerStyle={{ backgroundColor: "rgba(0, 0, 0, 1)" }}
        dotStyle={{
          width: 8,
          height: 8,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: "rgba(255, 255, 255, 0.92)",
        }}
        inactiveDotStyle={{
          width: 7,
          height: 7,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: "rgba(255, 255, 255, 0.92)",
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  }

  _renderItem({ item, index }) {
    return (
      <View style={styles.itemContainer}>
        <ImageBackground
          style={styles.cellBackground}
          source={item.picture}
        ></ImageBackground>
      </View>
    );
  }

  render() {
    return (
      <View>
        <Carousel
          ref={(c) => (this.carousel = c)}
          data={DATA}
          renderItem={this._renderItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          containerCustomStyle={styles.carouselContainer}
          inactiveSlideShift={0}
          onSnapToItem={(index) => this.setState({ index })}
          scrollInterpolator={scrollInterpolator}
          slideInterpolatedStyle={animatedStyles}
          useScrollView={true}
        />
        {this.pagination}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  carouselContainer: {
    marginTop: 0,
  },
  itemContainer: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 1)",
  },
  itemLabel: {
    color: "white",
    fontSize: 24,
  },
  cellBackground: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
});
