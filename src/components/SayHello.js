import React from "react";
import { TextInput, Text, Button, View } from "react-native";
import { PropTypes } from "prop-types";

export default function SayHello(props) {
  //   const { firstname = "New", lastname = "Client" } = props; //se puede poner de esta forma los nombres default que va a mostrar si no recibe nada via props.
  const { firstname, lastname } = props;

  return (
    <Text style={{ fontSize: 20 }}>
      Welcome to {firstname} {lastname}
    </Text>
  );
}

SayHello.defaultProps = {
  firstname: "New",
  lastname: "Client",
};
//esta es la forma correcta de setear defaults

SayHello.propTypes = {
  firstname: PropTypes.string,
  lastname: PropTypes.string,
};
