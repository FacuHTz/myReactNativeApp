import { View, Text, TextInput, Button } from "react-native";
import React from "react";

export default function SignupForm() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 40, marginBottom: 55 }}>Signup</Text>
      <TextInput
        placeholder="Username"
        style={{ fontSize: 20, marginBottom: 15 }}
      />
      <TextInput
        placeholder="Email"
        style={{ fontSize: 20, marginBottom: 15 }}
      />
      <TextInput
        placeholder="Password"
        style={{ fontSize: 20, marginBottom: 15 }}
      />
      <TextInput
        placeholder="re-enter Password"
        style={{ fontSize: 20, marginBottom: 15 }}
      />
      <Button title="Sign up" />
    </View>
  );
}
