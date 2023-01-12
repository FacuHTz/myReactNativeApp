import { View, Text } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

export default function NavigationDrawer() {
  return (
    <View>
      <Text>NavigationDrawer</Text>
    </View>
  );
}
