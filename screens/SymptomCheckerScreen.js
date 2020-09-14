import React from "react";
import {
  StyleSheet,
  Text,
  Alert,
  Linking,
  ImageBackground,
  View,
  Modal,
  TouchableHighlight,
} from "react-native";
import { Container, Header } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import { TouchableOpacity } from "react-native-gesture-handler";
import i18n from "../components/Translation";

export default class SymptomCheckerScreen extends React.Component {
  state = {
    most1: false,
    most2: false,
    most3: false,

    less1: false,
    less2: false,
    less3: false,
    less4: false,
    less5: false,
    less6: false,
    less7: false,

    serious1: false,
    serious2: false,
    serious3: false,

    modalVisible: false,

    finalSummary: "",
  };

  getSummary() {
    let most = "";
    let less = "";
    let serious = "";
    let total = "";

    if (
      this.state.most1 == true ||
      this.state.most2 == true ||
      this.state.most3 == true
    ) {
      most += "\nMost Common:\n";
      let arr1 = [this.state.most1, this.state.most2, this.state.most3];
      let arr2 = [i18n.t("most1"), i18n.t("most2"), i18n.t("most3")];
      for (let i = 0; i <= arr1.length; i++) {
        if (arr1[i] == true) {
          most += arr2[i];
          most += "\n";
        }
      }
    }

    if (
      this.state.less1 == true ||
      this.state.less2 == true ||
      this.state.less3 == true ||
      this.state.less4 == true ||
      this.state.less5 == true ||
      this.state.less6 == true ||
      this.state.less7 == true
    ) {
      less += "\nLess Common:\n";
      let arr3 = [
        this.state.less1,
        this.state.less2,
        this.state.less3,
        this.state.less4,
        this.state.less5,
        this.state.less6,
        this.state.less7,
      ];
      let arr4 = [
        i18n.t("less1"),
        i18n.t("less2"),
        i18n.t("less3"),
        i18n.t("less4"),
        i18n.t("less5"),
        i18n.t("less6"),
        i18n.t("less7"),
      ];
      for (let j = 0; j <= arr3.length; j++) {
        if (arr3[j] == true) {
          less += arr4[j];
          less += "\n";
        }
      }
    }

    if (
      this.state.serious1 == true ||
      this.state.serious2 == true ||
      this.state.serious3 == true
    ) {
      serious += "\nSerious:\n";
      let arr5 = [
        this.state.serious1,
        this.state.serious2,
        this.state.serious3,
      ];
      let arr6 = [i18n.t("serious1"), i18n.t("serious2"), i18n.t("serious3")];
      for (let i = 0; i <= arr5.length; i++) {
        if (arr5[i] == true) {
          serious += arr6[i];
          serious += "\n";
        }
      }
    }

    let sum1 = "";
    if (serious != "") {
      sum1 =
        "One or more of the symptoms you are experiencing is extremely serious. We highly highly recommend you to go to the hospital as soon as possible. Please ask our chat bot for directions.";
    } else if (less != "") {
      sum1 =
        "You do not have any serious symptoms. However, you do have less common ones. We advice you to adhere to a 14 day stay at home quarantine. If you are still experiencing these symptoms, please go and see a doctor.";
    } else if (most != "") {
      sum1 =
        "The symptoms you selected are very common symptoms of COVID-19. Please adhere to a 14 day stay at home quarantine and call your doctor for advice. We recommend you to take lots of vitamins and antioxidants to help fight the virus";
    }

    if (serious == "" && less == "" && most == "") {
      total =
        "You have not selected any symptoms; therefore, we are unable to assess your situation. Please select the symptoms you are experiencing and submit the survey again.";
    } else {
      total =
        "Here is the list of symptoms you selected categorised.\n" +
        most +
        less +
        serious +
        "\n" +
        sum1;
    }

    this.setState({ finalSummary: total });
  }

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  };

  render() {
    console.log(JSON.stringify(i18n));
    const { modalVisible } = this.state;
    return (
      <Container>
        <Grid style={styles.grid}>
          <Row style={{ flex: 0.15 }}>
            <View style={styles.card}>
              <Text style={styles.text}>
                Please select the sicknesses that you are currently
                experiencing.
              </Text>
            </View>
          </Row>

          <Col>
            <Row>
              <TouchableOpacity
                onPress={() => {
                  this.setState({ most1: !this.state.most1 });
                }}
                style={styles.cellButton}
              >
                <Text
                  style={
                    this.state.most1
                      ? styles.cellButtonOff
                      : styles.cellButtonOn
                  }
                >
                  {i18n.t("most1")}
                </Text>
              </TouchableOpacity>
            </Row>
            <Row>
              <TouchableOpacity
                onPress={() => {
                  this.setState({ most2: !this.state.most2 });
                }}
                style={styles.cellButton}
              >
                <Text
                  style={
                    this.state.most2
                      ? styles.cellButtonOff
                      : styles.cellButtonOn
                  }
                >
                  {i18n.t("most2")}
                </Text>
              </TouchableOpacity>
            </Row>
            <Row>
              <TouchableOpacity
                onPress={() => {
                  this.setState({ most3: !this.state.most3 });
                }}
                style={styles.cellButton}
              >
                <Text
                  style={
                    this.state.most3
                      ? styles.cellButtonOff
                      : styles.cellButtonOn
                  }
                >
                  {i18n.t("most3")}
                </Text>
              </TouchableOpacity>
            </Row>
            <Row>
              <TouchableOpacity
                onPress={() => {
                  this.setState({ less1: !this.state.less1 });
                }}
                style={styles.cellButton}
              >
                <Text
                  style={
                    this.state.less1
                      ? styles.cellButtonOff
                      : styles.cellButtonOn
                  }
                >
                  {i18n.t("less1")}
                </Text>
              </TouchableOpacity>
            </Row>
            <Row>
              <TouchableOpacity
                onPress={() => {
                  this.setState({ less2: !this.state.less2 });
                }}
                style={styles.cellButton}
              >
                <Text
                  style={
                    this.state.less2
                      ? styles.cellButtonOff
                      : styles.cellButtonOn
                  }
                >
                  {i18n.t("less2")}
                </Text>
              </TouchableOpacity>
            </Row>
            <Row>
              <TouchableOpacity
                onPress={() => {
                  this.setState({ less3: !this.state.less3 });
                }}
                style={styles.cellButton}
              >
                <Text
                  style={
                    this.state.less3
                      ? styles.cellButtonOff
                      : styles.cellButtonOn
                  }
                >
                  {i18n.t("less3")}
                </Text>
              </TouchableOpacity>
            </Row>
            <Row>
              <TouchableOpacity
                onPress={() => {
                  this.setState({ less4: !this.state.less4 });
                }}
                style={styles.cellButton}
              >
                <Text
                  style={
                    this.state.less4
                      ? styles.cellButtonOff
                      : styles.cellButtonOn
                  }
                >
                  {i18n.t("less4")}
                </Text>
              </TouchableOpacity>
            </Row>
            <Row>
              <TouchableOpacity
                onPress={() => {
                  this.setState({ less5: !this.state.less5 });
                }}
                style={styles.cellButton}
              >
                <Text
                  style={
                    this.state.less5
                      ? styles.cellButtonOff
                      : styles.cellButtonOn
                  }
                >
                  {i18n.t("less5")}
                </Text>
              </TouchableOpacity>
            </Row>
            <Row>
              <TouchableOpacity
                onPress={() => {
                  this.setState({ less6: !this.state.less6 });
                }}
                style={styles.cellButton}
              >
                <Text
                  style={
                    this.state.less6
                      ? styles.cellButtonOff
                      : styles.cellButtonOn
                  }
                >
                  {i18n.t("less6")}
                </Text>
              </TouchableOpacity>
            </Row>
            <Row>
              <TouchableOpacity
                onPress={() => {
                  this.setState({ less7: !this.state.less7 });
                }}
                style={styles.cellButton}
              >
                <Text
                  style={
                    this.state.less7
                      ? styles.cellButtonOff
                      : styles.cellButtonOn
                  }
                >
                  {i18n.t("less7")}
                </Text>
              </TouchableOpacity>
            </Row>
            <Row>
              <TouchableOpacity
                onPress={() => {
                  this.setState({ serious1: !this.state.serious1 });
                }}
                style={styles.cellButton}
              >
                <Text
                  style={
                    this.state.serious1
                      ? styles.cellButtonOff
                      : styles.cellButtonOn
                  }
                >
                  {i18n.t("serious1")}
                </Text>
              </TouchableOpacity>
            </Row>
            <Row>
              <TouchableOpacity
                onPress={() => {
                  this.setState({ serious2: !this.state.serious2 });
                }}
                style={styles.cellButton}
              >
                <Text
                  style={
                    this.state.serious2
                      ? styles.cellButtonOff
                      : styles.cellButtonOn
                  }
                >
                  {i18n.t("serious2")}
                </Text>
              </TouchableOpacity>
            </Row>
            <Row>
              <TouchableOpacity
                onPress={() => {
                  this.setState({ serious3: !this.state.serious3 });
                }}
                style={styles.cellButton}
              >
                <Text
                  style={
                    this.state.serious3
                      ? styles.cellButtonOff
                      : styles.cellButtonOn
                  }
                >
                  {i18n.t("serious3")}
                </Text>
              </TouchableOpacity>
            </Row>
            <Row style={{ flex: 2 }}>
              <View style={styles.centeredView}>
                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={modalVisible}
                  onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                  }}
                >
                  <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                      <Text style={styles.modalText}>
                        {this.state.finalSummary}
                      </Text>

                      <TouchableHighlight
                        style={{
                          ...styles.openButton,
                          backgroundColor: "#2196F3",
                        }}
                        onPress={() => {
                          this.setModalVisible(!modalVisible);
                        }}
                      >
                        <Text style={styles.textStyle}>Hide Report</Text>
                      </TouchableHighlight>
                    </View>
                  </View>
                </Modal>

                <TouchableHighlight
                  style={styles.openButton}
                  onPress={() => {
                    this.setModalVisible(true);
                    this.getSummary();
                  }}
                >
                  <Text style={styles.textStyle}>SUBMIT</Text>
                </TouchableHighlight>
              </View>
            </Row>
          </Col>
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
    justifyContent: "center",
  },
  grid: {
    backgroundColor: "rgba(0,0,0,0)",
  },
  cellButton: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    borderRadius: 0,
    borderWidth: 2,
    borderColor: "rgba(0, 0, 0, 1)",
    margin: 3,
  },
  cellButtonOn: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    borderRadius: 0,
    borderWidth: 2,
    borderColor: "rgba(0, 0, 0, 0)",
    margin: 3,
  },
  cellButtonOff: {
    backgroundColor: "#32CD32",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "rgba(0, 0, 0, 0)",
    margin: 3,
  },
  cell: {
    backgroundColor: "white",
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    borderWidth: 2,
    borderColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 0,
    shadowOpacity: 0,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 5 },
    backgroundColor: "rgba(0,0,0,0)",
    margin: 10,
  },
  text: {
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 20,
  },
  cell1: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    borderRadius: 0,
    borderWidth: 2,
    borderColor: "rgba(0, 0, 0, 1)",
    margin: 3,
    height: "60%",
    width: "100%",
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
