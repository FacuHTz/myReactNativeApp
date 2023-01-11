import { StyleSheet, Text, View } from "react-native";
import LoginForm from "./src/components/LoginForm";
import SayHello from "./src/components/SayHello";

export default function App() {
  return (
    <View style={styles.container}>
      <SayHello firstname="Facundo" lastname="Hetze" />
      <LoginForm />
    </View>
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
