import React from "react";
import { Button } from "react-native-elements";
import { useTheme } from "../../context/StyleContext";
import Icon from "../Icon";

const Btn = ({ iconProps, ...props }) => {
  const { lightBlack } = useTheme()

  return <Button {...props} icon={iconProps && <Icon {...iconProps} color={props.disabled ? lightBlack : iconProps.color} />} />;
};


export default Btn;

