import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
import { Platform, KeyboardAvoidingView, StatusBar } from "react-native";
import { Header } from "react-navigation-stack";

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

  topic = "";

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
      this.topic = "heart attack";
      this.addBotMessage("Hang on, looking for a hospital now...");
      this.getHospital();
      this.topic = "";
    } else if (messageText.toLowerCase().search("headache") != -1) {
      this.topic = "headache";
      this.addBotMessage(
        "Headaches are common among people and it is usually a sign of stress, high blood pressure, anxiety, or depression. On a scale of 1-5, how bad is the headache?"
      );
    } else if (
      messageText.toLowerCase().search("1") != -1 &&
      this.topic == "headache"
    ) {
      this.addBotMessage(
        "We recommend taking a nap for 1-2 hours. If you still experience a headache, try visiting your local pharmacist."
      );
      this.topic = "";
    } else if (
      messageText.toLowerCase().search("2") != -1 &&
      this.topic == "headache"
    ) {
      this.addBotMessage(
        "We recommend taking a nap for 1-2 hours. If you still experience a headache, try visiting your local pharmacist."
      );
      this.topic = "";
    } else if (
      messageText.toLowerCase().search("3") != -1 &&
      this.topic == "headache"
    ) {
      this.addBotMessage(
        "Would you like to go to a hospital to get checked up?"
      );
    } else if (
      messageText.toLowerCase().search("yes") != -1 &&
      this.topic == "headache"
    ) {
      this.addBotMessage("Hang on, looking for a hospital now...");
      this.getHospital();
      this.topic == "";
    } else if (
      messageText.toLowerCase().search("no") != -1 &&
      this.topic == "headache"
    ) {
      this.addBotMessage(
        "We recommend taking a nap for 1-2 hours. If you still experience a headache, try visiting your local pharmacist."
      );
      this.topic == "";
    } else if (messageText.toLowerCase().search("5") != -1) {
      this.addBotMessage(
        "We recommend you to visit a hospital. Please wait while we search for one..."
      );
      this.getHospital();
      this.topic == "";
    } else if (messageText.toLowerCase().search("stroke") != -1) {
      this.topic = "stroke";
      this.addBotMessage(
        "Please immediately bring the person to a hospital. Hang on while we look for one..."
      );
      this.getHospital();
      this.topic = "";
    } else if (messageText.toLowerCase().search("pink eye") != -1) {
      this.topic = "pink eye";
      this.addBotMessage(
        "A pink eye is not a serious emergency so don’t worry about it. Try to clean your eyelids with a wet cloth and apply warm/cold compresses several times daily. If you wear contacts, stop wearing them until the pink eye is cured. If you see no improvements, please go and see a doctor."
      );
      this.topic = "";
    } else if (messageText.toLowerCase().search("choking") != -1) {
      this.topic = "choking";
      this.addBotMessage(
        "You must islodge the respiratory tract obstruction by bending the person's head and shoulders forward, or in the case of a small child, hold them upside down and thump the back hard, between the shoulder-blades. "
      );
      this.topic = "";
    } else if (messageText.toLowerCase().search("fracture") != -1) {
      this.topic = "fracture";
      this.addBotMessage("Please immediately bring the person to a hospital.");
      this.getHospital();
      this.topic = "";
    } else if (messageText.toLowerCase().search("seizure") != -1) {
      this.topic = "seizure";
      this.addBotMessage(
        "Make the person lie on the side and immediately call for help. If no help is available, bring the person to a hospital. Please wait while we locate one that is closest to you."
      );
      this.getHospital();
      this.topic = "";
    } else if (messageText.toLowerCase().search("fever") != -1) {
      this.topic = "fever";
      this.addBotMessage("On a scale of 1-3, how bad is your fever?");
    } else if (
      messageText.toLowerCase().search("1") != -1 &&
      this.topic == "fever"
    ) {
      this.topic = "fever";
      this.addBotMessage(
        "Continuously take your temperature and try to get some sleep. Remember to keep hydrated and stay cool."
      );
      this.topic = "";
    } else if (
      messageText.toLowerCase().search("2") != -1 &&
      this.topic == "fever"
    ) {
      this.topic = "fever";
      this.addBotMessage(
        "We recommend you to take over-the-counter medicine such as ibuprofen to reduce fever. Continuously take your temperature and try to get some sleep. Remember to keep hydrated and stay cool."
      );
      this.topic = "";
    } else if (
      messageText.toLowerCase().search("3") != -1 &&
      this.topic == "fever"
    ) {
      this.topic = "fever";
      this.addBotMessage(
        "We recommend you to go to a doctor. Please wait while we locate a hospital near you."
      );
      this.getHospital();
      this.topic = "";
    } else if (messageText.toLowerCase().search("back pain") != -1) {
      this.topic = "back pain";
      this.addBotMessage(
        "Back pain can often be eased with home treatments, including icing or heating, strengthening exercises, light activity and over-the-counter medications for pain. If symptoms persist after a week or two of home care, we recommend you come in for a physician evaluation. "
      );
      this.topic = "";
    } else if (messageText.toLowerCase().search("nosebleed") != -1) {
      this.topic = "nosebleed";
      this.addBotMessage(
        "Sit down and firmly pinch the soft part of your nose, just above your nostrils, for at least 10-15 minutes. Remember to sit upright as it will lower blood pressure which will discourage further bleeding."
      );
      this.topic = "";
    } else if (messageText.toLowerCase().search("diarrhea") != -1) {
      this.topic = "diarrhea";
      this.addBotMessage(
        "Please drink a lot of water and eat a recovery diet such as bananas and cooked, soft vegetables. Try over-the-counter medicines too by visiting your local pharmacist."
      );
      this.topic = "";
    } else if (messageText.toLowerCase().search("runny nose") != -1) {
      this.topic = "runny nose";
      this.addBotMessage(
        "Try placing a cool mist humidifier in the bedroom to help promote better sleep, keeping the nose clear."
      );
      this.topic = "";
    } else if (messageText.toLowerCase().search("itchy skin") != -1) {
      this.topic = "itchy skin";
      this.addBotMessage("Is your skin turning red or swollen?");
    } else if (
      messageText.toLowerCase().search("yes") != -1 &&
      this.topic == "itchy skin"
    ) {
      this.topic = "itchy skin";
      this.addBotMessage(
        "Please go and see a doctor. We are searching for the closest hospital now."
      );
      this.getHospital();
      this.topic = "";
    } else if (
      messageText.toLowerCase().search("no") != -1 &&
      this.topic == "itchy skin"
    ) {
      this.topic = "itchy skin";
      this.addBotMessage(
        "This might be due to dust allergy. Try and move out of the place and compress your skin with cold water."
      );
      this.topic = "";
    } else if (messageText.toLowerCase().search("sore throat") != -1) {
      this.topic = "sore throat";
      this.addBotMessage("What color is your phlegm?");
    } else if (
      messageText.toLowerCase().search("black") != -1 &&
      this.topic == "sore throat"
    ) {
      this.topic = "sore throat";
      this.addBotMessage(
        "Black phlegm is most common among smokers. If you are one, please attempt to stop until your sore throat cures. If your phlegm is still black after a couple of days, please go and see a doctor."
      );
      this.topic = "";
    } else if (
      messageText.toLowerCase().search("green") != -1 &&
      this.topic == "sore throat"
    ) {
      this.topic = "sore throat";
      this.addBotMessage(
        "Green phlegm is a sign of infection. Please go see a doctor. We are looking for the closest hospital right now..."
      );
      this.getHospital();
      this.topic = "";
    } else if (
      messageText.toLowerCase().search("yellow") != -1 &&
      this.topic == "sore throat"
    ) {
      this.topic = "sore throat";
      this.addBotMessage(
        "Yellow phlegm is a sign that your body is fighting an infection. Please go see a doctor before it gets worse. We are looking for the closest hospital right now…"
      );
      this.getHospital();
      this.topic = "";
    } else if (
      messageText.toLowerCase().search("white") != -1 &&
      this.topic == "sore throat"
    ) {
      this.topic = "sore throat";
      this.addBotMessage(
        "White phlegm may lead to an infection. Please treat your sore throat with an  over-the-counter medicine to treat it before it gets worse."
      );
      this.topic = "";
    } else if (
      messageText.toLowerCase().search("red") != -1 &&
      this.topic == "sore throat"
    ) {
      this.topic = "sore throat";
      this.addBotMessage(
        "Phlegm with blood just means that you are dehydrated. Try and drink at least 8 glasses of water a day."
      );
      this.topic = "";
    } else if (messageText.toLowerCase().search("hard breathing") != -1) {
      this.topic = "hard breathing";
      this.addBotMessage("Does your chest/lung hurt?");
    } else if (
      messageText.toLowerCase().search("yes") != -1 &&
      this.topic == "hard breathing"
    ) {
      this.topic = "hard breathing";
      this.addBotMessage(
        "Please go and see a doctor. We are searching for the closest one right now."
      );
      this.getHospital();
      this.topic = "";
    } else if (
      messageText.toLowerCase().search("no") != -1 &&
      this.topic == "hard breathing"
    ) {
      this.topic = "hard breathing";
      this.addBotMessage(
        "It might be due to the air pollution in Indonesia. Try and stay inside the house for a couple hours. If your lungs still hurt, we recommend you to go see a doctor."
      );
      this.topic = "";
    } else if (messageText.toLowerCase().search("thank you") != -1) {
      this.topic = "thank you";
      this.addBotMessage("Happy to help :)");
      this.topic = "";
    } else {
      this.topic = "no response";
      this.addBotMessage(
        "Please ensure that you typed in your emergency correctly. If you did and you are receiving this message, please contact our developer to input your emergency into our system or wait for a future update. Thank you."
      );
      this.topic = "";
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
      <View style={{ flex: 1 }}>
        <GiftedChat
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          user={user}
        />
        {Platform.OS === "android" && (
          <KeyboardAvoidingView
            behavior="padding"
            keyboardVerticalOffset={Header.HEIGHT + StatusBar.currentHeight}
          />
        )}
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
