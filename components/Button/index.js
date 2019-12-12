import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types"; //대문자P로시작하고 소문자 p로 끝
import { FontAwesome } from "@expo/vector-icons";

const Button = ({ iconName, action }) => {
  return (
    <TouchableOpacity onPress={action}>
      <FontAwesome name={iconName} size={40} />
    </TouchableOpacity>
  );
};

Button.propTypes = {
  iconName: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired
};

export default Button;
