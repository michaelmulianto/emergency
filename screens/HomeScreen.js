import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default class HomeScreen extends React.Component {
  goToEmergency = () => {
    console.log("Go to emergency");
    this.props.navigation.navigate("Emergency");
  };

  goToChat = () => {
    console.log("Go to chat");
    this.props.navigation.navigate("Chat");
  };

  render() {
    return (
      <View style={styles.container}>
        <Button onPress={this.goToEmergency} title="Emergency" />
        <Button onPress={this.goToChat} title="Chat" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
