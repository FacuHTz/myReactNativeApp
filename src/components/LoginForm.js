import React from "react";
import { Text, Button, TextInput, View } from "react-native";

export default function LoginForm() {
  return (
    <View>
      <TextInput placeholder="Email" />
      <TextInput placeholder="Password" />
      <Button title="send" inPress={() => console.log("Enviado")} />
    </View>
  );
}
