// ＊＊＊第１パート ライブラリのインポート
import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  TextInput,
  Button,
  KeyboardAvoidingView,
} from "react-native";

// ＊＊＊第２パート App関数 画面に描画するためのJSXと、付随する変数・関数を記述
const App = () => {


  const [message, setMessage] = useState("");
  const [messageData, setMessageData] = useState([]);


  const onPressButton = () => {
    if (message == "") return;
    messageData.push({
      message: message,
      name: "匿名さん",
      time: "2020/9/19 15:30",
    });
    setMessageData(messageData);
    setMessage("");
  };

  return (
    <KeyboardAvoidingView behavior={"padding"} style={styles.container}>
      <ImageBackground
        source={{
          uri:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS_6bUgaq3AmWHEimKY5a7ctPIIAa_ggiQe9Q&usqp=CAU",
        }}
        style={styles.image}
      >
      <ScrollView style={styles.boxes}>
        {messageData.map((data) => {
          return (
            <View style={styles.box}>
              <View style={styles.nameAndTime}>
                <Text style={styles.name}>{data.name}</Text>
                <Text style={styles.time}>{data.time}</Text>
              </View>
              <Text>{data.message}</Text>
            </View>
          );
        })}
      </ScrollView>
        <View style={styles.footer}>
          <TextInput
            value={message}
            onChangeText={(text) => setMessage(text)}
            style={styles.input}
          ></TextInput>
          <Button title="送信" color="#00cbe9" onPress={onPressButton}></Button>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>

  );
};

// ＊＊＊第３パート スタイリング（装飾）
const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    alignItems: "center",
  },
  boxes: {
    marginTop: 30,
    height: height - 85,
  },
  box: {
    backgroundColor: "white",
    width: width - 40,
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 5,
    shadowColor: "black",
    shadowOpacity: 0.4,
    shadowOffset: { width: 3, height: 3 },
    marginBottom: 10,
  },
  nameAndTime: {
    flexDirection: "row",
    marginBottom: 7,
  },
  name: {
    fontWeight: "bold",
  },
  time: {
    color: "#666",
    marginLeft: 20,
  },
  footer: {
    backgroundColor: "white",
    width: "100%",
    height: 55,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    height: 45,
    width: 250,
    paddingHorizontal: 10,
    backgroundColor: "#e4fbff",
    borderColor: "#00cbe9",
    borderWidth: 0.5,
    borderRadius: 5,
  },
});

export default App;