import { View, Text, Button } from "react-native";
import React from "react";

export default function SettingsScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ padding: 5 }}>Username:</Text>
      <Text style={{ paddingBottom: 5 }}>Password:</Text>
      <Button title="Change password" />
    </View>
  );
}
