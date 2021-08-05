import React from "react";
import { View } from "react-native";
import { FAB, SocialIcon } from "react-native-elements";

import { black, green, H, lightGray, red, screen_H, white } from "../constants";
import Anchor from "../hoc/Anchor";
import FloatingView from "../hoc/FloatingView";
import Icon from "./Icon";

const socialButtons = [
  {
    name: "phone",
    href: "tel:0522210099",
    backgroundColor: "#0F9D58",
  },
  {
    name: "whatsapp",
    href: "https://wa.me/972508347079",
    backgroundColor: "#25D366",
  },
  {
    name: "facebook",
    href: "",
    backgroundColor: "#4267B2",
  },
  {
    name: "email",
    href: "mailto:shalom604@gmail.com",
    backgroundColor: "#DB4437",
  },
  {
    href: "",
    backgroundColor: "#0077b5",
    name: "linkedin",
  },
];

const FloatingSocial = () => {
  return (
    <FloatingView dividePosition={12} style={{ left: 20 }}>
      {socialButtons.map(({ href, backgroundColor, ...iconProps }, i) => {
        return (
          <Anchor key={i.toString()} href={href}>
            <View
              style={{
                backgroundColor,
                width: 45,
                height: 45,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "50%",
                marginVertical: 4,
              }}>
              <Icon {...iconProps} color={white} size={30} />
            </View>
          </Anchor>
        );
      })}
    </FloatingView>
  );
};

export default FloatingSocial;
