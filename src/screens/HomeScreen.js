import { View, Text, Image, Button } from "react-native";
import React from "react";

import SayHello from "../components/SayHello";
import LoginForm from "../components/LoginForm";

export default function HomeScreen(props) {
  const { navigation } = props;
  const goToSettings = () => {
    navigation.navigate("Settings Screen");
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        fontSize: 20,
      }}
    >
      <Image
        source={{
          uri: "https://i.ibb.co/DpJdBk6/llama-sola.png",
        }}
        style={{ width: 100, height: 220 }}
      />
      <SayHello firstname="Norte" lastname="Gas" style={{ fontSize: 20 }} />
      <LoginForm />
      {/* <Button
        onPress={goToSettings}
        title="Go to settings"
        style={{ margin: 10 }}
      /> */}
    </View>
  );
}
