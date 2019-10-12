import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";

const user = {
  _id: 1,
  name: "User"
};

const bot = {
  _id: 2,
  name: "Emergency Bot",
  avatar:
    "https://www.unitedwaynems.org/wp-content/uploads/2014/03/Flag_of_the_Red_Cross.png"
};

function processResponse(messageText) {
  let botMessageText = "";
  let coords;

  navigator.geolocation.getCurrentPosition(
    position => {
      let coords = position.coords;
      console.log(`Your latitude is ${coords.latitude}`);
      console.log(`Your longitude is ${coords.longitude}`);
    },
    error => {
      console.log(error);
    },
    { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
  );

  let mapQuery =
    "https://places.cit.api.here.com/places/v1/autosuggest?at=40.74917,-73.98529&q=chrysler&app_id=N5nEvjSbDSCfxrJKR61D&app_code=kxwOsSQIVJ7X9J_D5ajC4Q";

  fetch(mapQuery)
    .then(response => response.json)
    .then(responseJSON => {
      console.log(JSON.stringify(responseJSON));
    })
    .catch(error => {
      console.error(error);
    });

  if (messageText.toLowerCase().search("heart attack") != -1) {
    botMessageText = "Here is some information about heart attack";
  }
  if (messageText.toLowerCase().search("fire") != -1) {
    botMessageText =
      "Please call your local fire department. The number is .....";
  }
  return botMessageText;
}

export default class ChatScreen extends React.Component {
  state = {
    messages: []
  };

  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: "Hello! How can I help you?",
          createdAt: new Date(),
          user: bot
        }
      ]
    });
  }

  onSend(messages = []) {
    //apppends message we type to message array
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages)
    }));
    let messageText = messages[0].text;
    let botMessageText = processResponse(messageText);
    //adding to state message array
    if (botMessageText != "") {
      botMessages = {
        text: botMessageText,
        createdAt: new Date(),
        user: bot
      };

      setTimeout(() => {
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, botMessages)
        }));
      }, 1000);
    }
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        user={user}
      />
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
