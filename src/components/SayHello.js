import React from "react";
import { TextInput, Text, Button, View } from "react-native";

export default function SayHello(props) {
  //   const { firstname ="New", lastname="Client" } = props; //se puede poner de esta forma los nombres default que va a mostrar si no recibe nada via props.
  const { firstname, lastname } = props;

  return (
    <Text>
      Hi {firstname} {lastname}
    </Text>
  );
}

SayHello.defaultProps = {
  //esta es la forma correcta de setear defaults
  firstname: "New",
  lastname: "Client",
};
