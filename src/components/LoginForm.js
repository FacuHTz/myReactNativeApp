import React from "react";
import { Text, Button, TextInput, View } from "react-native";

export default function LoginForm() {
  return (
    <View>
      <TextInput placeholder="Email" style={{ fontSize: 20 }} />
      <TextInput placeholder="Password" style={{ fontSize: 20 }} />
      <Button
        title="Log in"
        inPress={() => console.log("Enviado")}
        style={{ width: 80, height: 20 }}
      />
    </View>
  );
}
