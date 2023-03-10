import { StyleSheet, Text, View, Button, Image } from "react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";

// import Navigation from "./src/navigation/Navigation";
import NavigationTab from "./src/navigation/NavigationTab";
import NavigationDrawer from "./src/navigation/NavigationDrawer";

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <NavigationDrawer />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  // text: {
  //   color: "blue",
  // },
});
