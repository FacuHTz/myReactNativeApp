import { StyleSheet, Text, View, Button } from "react-native";
import LoginForm from "./src/components/LoginForm";
import SayHello from "./src/components/SayHello";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <SayHello firstname="Facundo" lastname="Hetze" />
      <LoginForm />
    </View>
  );
}

function AccountDetails() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ padding: 5 }}>Username:</Text>
      <Text style={{ paddingBottom: 5 }}>Password:</Text>
      <Button title="Change password" />
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={HomeScreen} />
        <Stack.Screen name="Account Details" component={AccountDetails} />
      </Stack.Navigator>
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
