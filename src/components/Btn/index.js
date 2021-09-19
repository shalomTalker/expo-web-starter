import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import { gray, lightBlack, lightGray } from "../../constants";
import Icon from "../Icon";

const Btn = ({ iconProps, ...props }) => {
  return <Button {...props} icon={iconProps && <Icon {...iconProps} color={props.disabled ? lightBlack : iconProps.color} />} />;
};

// Btn.propTypes = Button.defaultProps;

export default Btn;

const styles = StyleSheet.create({});
