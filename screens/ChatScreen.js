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

function compareLocationResults(a, b) {
  return a.distance > b.distance;
}

function checkIsPlace(a) {
  return a.resultType === "place" && a.category === "hospital";
}

function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export default class ChatScreen extends React.Component {
  state = {
    messages: []
  };

  getHospital() {
    navigator.geolocation.getCurrentPosition(
      position => {
        let coords = position.coords;
        console.log(`Your latitude is ${coords.latitude}`);
        console.log(`Your longitude is ${coords.longitude}`);
        let mapQuery = `https://places.cit.api.here.com/places/v1/autosuggest?at=${coords.latitude},${coords.longitude}&q=hospital&app_id=N5nEvjSbDSCfxrJKR61D&app_code=kxwOsSQIVJ7X9J_D5ajC4Q`;

        fetch(mapQuery)
          .then(response => response.json())
          .then(responseJSON => {
            let results = responseJSON.results
              .filter(checkIsPlace)
              .sort(compareLocationResults);
            console.log(results);

            let nearest = results[0];
            botMessageText = `Your nearest hospital is ${nearest.title}. Here is the link for directions: https://www.google.com/maps/search/${nearest.title}`;
            this.addBotMessage(botMessageText);
          });
      },
      error => {
        console.log(error);
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }

  processResponse(messageText) {
    let botMessageText = "";

    if (messageText.toLowerCase().search("heart attack") != -1) {
      this.addBotMessage("Hang on, looking for a hospital now...");
      this.getHospital();
    }
    if (messageText.toLowerCase().search("headache") != -1) {
      this.addBotMessage(
        "Headaches are common among people and it is usually a sign of stress, high blood pressure, anxiety, or depression. On a scale of 1-5, how bad is the headache?"
      );
    }
    if (messageText.toLowerCase().search("1") != -1) {
      this.addBotMessage(
        "We recommend taking a nap for 1-2 hours. If you still experience a headache, try visiting your local pharmacist."
      );
    }
    if (messageText.toLowerCase().search("2") != -1) {
      this.addBotMessage(
        "We recommend taking a nap for 1-2 hours. If you still experience a headache, try visiting your local pharmacist."
      );
    }
    if (messageText.toLowerCase().search("3") != -1) {
      this.addBotMessage(
        "Would you like to go to a hospital to get checked up?"
      );
    }
    if (messageText.toLowerCase().search("yes") != -1) {
      this.addBotMessage("Hang on, looking for a hospital now...");
      this.getHospital();
    }
    if (messageText.toLowerCase().search("no") != -1) {
      this.addBotMessage(
        "We recommend taking a nap for 1-2 hours. If you still experience a headache, try visiting your local pharmacist."
      );
    }
    if (messageText.toLowerCase().search("5") != -1) {
      this.addBotMessage(
        "We recommend you to visit a hospital. Please wait while we search for one..."
      );
      this.getHospital();
    }
    if (messageText.toLowerCase().search("stroke") != -1) {
      this.addBotMessage(
        "Please immediately bring the person to a hospital. Hang on while we look for one..."
      );
      this.getHospital();
    }
    if (messageText.toLowerCase().search("pink eye") != -1) {
      this.addBotMessage(
        "A pink eye is not a serious emergency so don’t worry about it. Try to clean your eyelids with a wet cloth and apply warm/cold compresses several times daily. If you wear contacts, stop wearing them until the pink eye is cured. If you see no improvements, please go and see a doctor."
      );
    }
    if (messageText.toLowerCase().search("choking") != -1) {
      this.addBotMessage(
        "You must islodge the respiratory tract obstruction by bending the person's head and shoulders forward, or in the case of a small child, hold them upside down and thump the back hard, between the shoulder-blades. "
      );
    }
  }

  addBotMessage(message) {
    botMessages = {
      _id: uuidv4(),
      text: message,
      createdAt: new Date(),
      user: bot
    };

    setTimeout(() => {
      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, botMessages)
      }));
    }, 1000);
  }

  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 0,
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
      messages: GiftedChat.append(previousState.messages, messages),
      currentId: uuidv4()
    }));
    let messageText = messages[0].text;
    this.processResponse(messageText);
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
