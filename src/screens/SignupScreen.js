import { View, Text, TextInput, Button } from "react-native";
import React from "react";

export default function SignupForm() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Signup</Text>
      <TextInput placeholder="Username" />
      <TextInput placeholder="Email" />
      <TextInput placeholder="Password" />
      <TextInput placeholder="re-enter Password" />
      <Button title="Sign up" />
    </View>
  );
}
