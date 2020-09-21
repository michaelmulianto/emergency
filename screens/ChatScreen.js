import React from "react";
import { StyleSheet, View } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
import { Platform, KeyboardAvoidingView, StatusBar } from "react-native";
import { Header } from "react-navigation-stack";
import i18n from "../components/Translation";

const user = {
  _id: 1,
  name: "User",
};

const bot = {
  _id: 2,
  name: "Emergency Bot",
  avatar:
    "https://www.unitedwaynems.org/wp-content/uploads/2014/03/Flag_of_the_Red_Cross.png",
};

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

export default class ChatScreen extends React.Component {
  state = {
    messages: [],
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
            console.log(nearest);
            botMessageText =
              i18n.t("hospital1") +
              nearest.title +
              i18n.t("hospital2") +
              `https://www.google.com/maps/search/${nearest.title}`;
            this.addBotMessage(botMessageText);
          });
      },
      (error) => {
        console.log(error);
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }

  processResponse(messageText) {
    let botMessageText = "";

    if (
      messageText.toLowerCase().search("heart attack") != -1 ||
      messageText.toLowerCase().search("jantung") != -1
    ) {
      this.topic = "heart attack";
      this.addBotMessage(i18n.t("heartattack"));
      this.getHospital();
      this.topic = "";
    } else if (
      messageText.toLowerCase().search("headache") != -1 ||
      messageText.toLowerCase().search("kepala") != -1 ||
      messageText.toLowerCase().search("pusing") != -1
    ) {
      this.topic = "headache";
      this.addBotMessage(i18n.t("headache"));
    } else if (
      messageText.toLowerCase().search("1") != -1 ||
      (messageText.toLowerCase().search("2") != -1 && this.topic == "headache")
    ) {
      this.addBotMessage(i18n.t("headache12"));
      this.topic = "";
    } else if (
      (messageText.toLowerCase().search("3") != -1 &&
        this.topic == "headache") ||
      (messageText.toLowerCase().search("4") != -1 && this.topic == "headache")
    ) {
      this.addBotMessage(i18n.t("headache24"));
    } else if (
      messageText.toLowerCase().search("yes") != -1 &&
      this.topic == "headache"
    ) {
      this.addBotMessage(i18n.t("headache24y"));
      this.getHospital();
      this.topic == "";
    } else if (
      messageText.toLowerCase().search("no") != -1 &&
      this.topic == "headache"
    ) {
      this.addBotMessage(i18n.t("headache24n"));
      this.topic == "";
    } else if (messageText.toLowerCase().search("5") != -1) {
      this.addBotMessage(i18n.t("headache5"));
      this.getHospital();
      this.topic == "";
    } else if (messageText.toLowerCase().search("stroke") != -1) {
      this.topic = "stroke";
      this.addBotMessage(i18n.t("stroke"));
      this.getHospital();
      this.topic = "";
    } else if (
      messageText.toLowerCase().search("pink eye") != -1 ||
      messageText.toLowerCase().search("mata") != -1
    ) {
      this.topic = "pink eye";
      this.addBotMessage(i18n.t("pinkeye"));
      this.getHospital;
      this.topic = "";
    } else if (
      messageText.toLowerCase().search("choking") != -1 ||
      messageText.toLowerCase().search("tersedak") != -1 ||
      messageText.toLowerCase().search("keselek") != -1
    ) {
      this.topic = "choking";
      this.addBotMessage(i18n.t("choking"));
      this.topic = "";
    } else if (
      messageText.toLowerCase().search("fracture") != -1 ||
      messageText.toLowerCase().search("retak") != -1
    ) {
      this.topic = "fracture";
      this.addBotMessage(i18n.t("fracture"));
      this.getHospital();
      this.topic = "";
    } else if (messageText.toLowerCase().search("seizure") != -1) {
      this.topic = "seizure";
      this.addBotMessage(
        "Make the person lie on the side and immediately call for help. If no help is available, bring the person to a hospital. Please wait while we locate one that is closest to you."
      );
      this.getHospital();
      this.topic = "";
    } else if (
      messageText.toLowerCase().search("fever") != -1 ||
      messageText.toLowerCase().search("demam") != -1 ||
      messageText.toLowerCase().search("panas") != -1
    ) {
      this.topic = "fever";
      this.addBotMessage(i18n.t("fever"));
    } else if (
      messageText.toLowerCase().search("1") != -1 &&
      this.topic == "fever"
    ) {
      this.topic = "fever";
      this.addBotMessage(i18n.t("fever1"));
      this.topic = "";
    } else if (
      messageText.toLowerCase().search("2") != -1 &&
      this.topic == "fever"
    ) {
      this.topic = "fever";
      this.addBotMessage(i18n.t("fever2"));
      this.topic = "";
    } else if (
      messageText.toLowerCase().search("3") != -1 &&
      this.topic == "fever"
    ) {
      this.topic = "fever";
      this.addBotMessage(i18n.t("fever3"));
      this.getHospital();
      this.topic = "";
    } else if (
      messageText.toLowerCase().search("back pain") != -1 ||
      messageText.toLowerCase().search("punggung") != -1 ||
      messageText.toLowerCase().search("belakang") != -1
    ) {
      this.topic = "back pain";
      this.addBotMessage(i18n.t("backpain"));
      this.topic = "";
    } else if (messageText.toLowerCase().search("nosebleed") != -1) {
      this.topic = "nosebleed";
      this.addBotMessage(
        "Sit down and firmly pinch the soft part of your nose, just above your nostrils, for at least 10-15 minutes. Remember to sit upright as it will lower blood pressure which will discourage further bleeding."
      );
      this.topic = "";
    } else if (
      messageText.toLowerCase().search("diarrhea") != -1 ||
      messageText.toLowerCase().search("diare") != -1
    ) {
      this.topic = "diarrhea";
      this.addBotMessage(i18n.t("diarrhea"));
      this.getHospital();
      this.topic = "";
    } else if (
      messageText.toLowerCase().search("runny nose") != -1 ||
      messageText.toLowerCase().search("flu") != -1 ||
      messageText.toLowerCase().search("ingus") != -1
    ) {
      this.topic = "runny nose";
      this.addBotMessage(i18n.t("runnynose"));
      this.topic = "";
    } else if (
      messageText.toLowerCase().search("itchy") != -1 ||
      messageText.toLowerCase().search("gatel") != -1
    ) {
      this.topic = "itchy skin";
      this.addBotMessage(i18n.t("itchy"));
    } else if (
      messageText.toLowerCase().search("yes") != -1 &&
      this.topic == "itchy skin"
    ) {
      this.topic = "itchy skin";
      this.addBotMessage(i18n.t("itchyy"));
      this.getHospital();
      this.topic = "";
    } else if (
      messageText.toLowerCase().search("no") != -1 &&
      this.topic == "itchy skin"
    ) {
      this.topic = "itchy skin";
      this.addBotMessage(i18n.t("itchyn"));
      this.topic = "";
    } else if (
      messageText.toLowerCase().search("throat") != -1 ||
      messageText.toLowerCase().search("tenggorokan") != -1
    ) {
      this.topic = "sore throat";
      this.addBotMessage(i18n.t("sorethroat"));
    } else if (
      messageText.toLowerCase().search("black") != -1 ||
      (messageText.toLowerCase().search("hitam") != -1 &&
        this.topic == "sore throat")
    ) {
      this.topic = "sore throat";
      this.addBotMessage(i18n.t("sorethroatb"));
      this.topic = "";
    } else if (
      messageText.toLowerCase().search("green") != -1 ||
      (messageText.toLowerCase().search("hijau") != -1 &&
        this.topic == "sore throat")
    ) {
      this.topic = "sore throat";
      this.addBotMessage(i18n.t("sorethroatg"));
      this.getHospital();
      this.topic = "";
    } else if (
      messageText.toLowerCase().search("yellow") != -1 ||
      (messageText.toLowerCase().search("kuning") != -1 &&
        this.topic == "sore throat")
    ) {
      this.topic = "sore throat";
      this.addBotMessage(i18n.t("sorethroaty"));
      this.getHospital();
      this.topic = "";
    } else if (
      messageText.toLowerCase().search("white") != -1 ||
      (messageText.toLowerCase().search("putih") != -1 &&
        this.topic == "sore throat")
    ) {
      this.topic = "sore throat";
      this.addBotMessage(i18n.t("sorethroatw"));
      this.topic = "";
    } else if (
      (messageText.toLowerCase().search("red") != -1 &&
        this.topic == "sore throat") ||
      (messageText.toLowerCase().search("merah") != -1 &&
        this.topic == "sore throat") ||
      (messageText.toLowerCase().search("darah") != -1 &&
        this.topic == "sore throat")
    ) {
      this.topic = "sore throat";
      this.addBotMessage(i18n.t("sorethroatr"));
      this.topic = "";
    } else if (
      messageText.toLowerCase().search("breath") != -1 ||
      messageText.toLowerCase().search("nafas") != -1 ||
      messageText.toLowerCase().search("napas") != -1
    ) {
      this.topic = "hard breathing";
      this.addBotMessage(i18n.t("hardbreathing"));
    } else if (
      messageText.toLowerCase().search("yes") != -1 &&
      this.topic == "hard breathing"
    ) {
      this.topic = "hard breathing";
      this.addBotMessage(i18n.t("hardbreathingy"));
      this.getHospital();
      this.topic = "";
    } else if (
      messageText.toLowerCase().search("no") != -1 &&
      this.topic == "hard breathing"
    ) {
      this.topic = "hard breathing";
      this.addBotMessage(i18n.t("hardbreathingn"));
      this.topic = "";
    } else if (messageText.toLowerCase().search("thank you") != -1) {
      this.topic = "thank you";
      this.addBotMessage("Happy to help :)");
      this.topic = "";
    } else if (
      messageText.toLowerCase().search("stomach") != -1 ||
      messageText.toLowerCase().search("perut") != -1
    ) {
      this.topic = "stomach ache";
      this.addBotMessage(i18n.t("stomachache"));
      this.topic = "";
    } else if (
      messageText.toLowerCase().search("taste") != -1 ||
      messageText.toLowerCase().search("smell") != -1 ||
      messageText.toLowerCase().search("rasa") != -1 ||
      messageText.toLowerCase().search("bau") != -1
    ) {
      this.topic = "losstastesmell";
      this.addBotMessage(i18n.t("losstastesmell"));
      this.getHospital;
      this.topic = "";
    } else if (
      messageText.toLowerCase().search("chest") != -1 ||
      messageText.toLowerCase().search("dada") != -1
    ) {
      this.topic = "chestpain";
      this.addBotMessage(i18n.t("chestpain"));
      this.getHospital;
      this.topic = "";
    } else if (
      messageText.toLowerCase().search("cough") != -1 ||
      messageText.toLowerCase().search("batuk") != -1
    ) {
      this.topic = "cough";
      this.addBotMessage(i18n.t("cough"));
    } else if (
      (messageText.toLowerCase().search("yes") != -1 &&
        this.topic == "cough") ||
      (messageText.toLowerCase().search("ya") != -1 && this.topic == "cough")
    ) {
      this.addBotMessage(i18n.t("coughy"));
      this.getHospital;
      this.topic = "";
    } else if (
      (messageText.toLowerCase().search("no") != -1 && this.topic == "cough") ||
      (messageText.toLowerCase().search("tidak") != -1 && this.topic == "cough")
    ) {
      this.addBotMessage(i18n.t("coughn"));
      this.getHospital;
      this.topic = "";
    } else if (
      messageText.toLowerCase().search("move") != -1 ||
      messageText.toLowerCase().search("speech") != -1 ||
      messageText.toLowerCase().search("gerak") != -1 ||
      messageText.toLowerCase().search("bicara") != -1 ||
      messageText.toLowerCase().search("talk") != -1
    ) {
      this.addBotMessage(i18n.t("lossspeechmove"));
      this.getHospital;
      this.topic = "";
    } else if (
      messageText.toLowerCase().search("tired") != -1 ||
      messageText.toLowerCase().search("weak") != -1 ||
      messageText.toLowerCase().search("capai") != -1 ||
      messageText.toLowerCase().search("lemes") != -1
    ) {
      this.addBotMessage(i18n.t("tired"));
      this.getHospital;
      this.topic = "";
    } else if (
      messageText.toLowerCase().search("ear") != -1 ||
      messageText.toLowerCase().search("kuping") != -1 ||
      messageText.toLowerCase().search("telinga") != -1
    ) {
      this.addBotMessage(i18n.t("earpain"));
      this.getHospital;
      this.topic = "";
    } else if (
      messageText.toLowerCase().search("dry") != -1 ||
      messageText.toLowerCase().search("kering") != -1
    ) {
      this.addBotMessage(i18n.t("dryskin"));
      this.topic = "";
    } else if (
      messageText.toLowerCase().search("color") != -1 ||
      messageText.toLowerCase().search("colour") != -1 ||
      messageText.toLowerCase().search("warna") != -1
    ) {
      this.addBotMessage(i18n.t("discolor"));
      this.getHospital;
      this.topic = "";
    } else if (
      messageText.toLowerCase().search("vomit") != -1 ||
      messageText.toLowerCase().search("muntah") != -1
    ) {
      this.addBotMessage(i18n.t("vomit"));
      this.topic = "";
    } else if (
      messageText.toLowerCase().search("bit") != -1 ||
      messageText.toLowerCase().search("gigit") != -1
    ) {
      this.addBotMessage(i18n.t("bite"));
      this.topic = "";
    } else if (
      messageText.toLowerCase().search("hello") != -1 ||
      messageText.toLowerCase().search("halo") != -1 ||
      messageText.toLowerCase().search("hi") != -1
    ) {
      this.addBotMessage(i18n.t("hello"));
      this.topic = "";
    } else {
      this.topic = "no response";
      this.addBotMessage(i18n.t("wrong"));
      this.topic = "";
    }
  }

  addBotMessage(message) {
    botMessages = {
      _id: uuidv4(),
      text: message,
      createdAt: new Date(),
      user: bot,
    };

    setTimeout(() => {
      this.setState((previousState) => ({
        messages: GiftedChat.append(previousState.messages, botMessages),
      }));
    }, 1000);
  }

  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 0,
          text: i18n.t("intro"),
          createdAt: new Date(),
          user: bot,
        },
      ],
    });
  }

  onSend(messages = []) {
    //apppends message we type to message array
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, messages),
      currentId: uuidv4(),
    }));
    let messageText = messages[0].text;
    this.processResponse(messageText);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <GiftedChat
          messages={this.state.messages}
          onSend={(messages) => this.onSend(messages)}
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
    justifyContent: "center",
  },
});
