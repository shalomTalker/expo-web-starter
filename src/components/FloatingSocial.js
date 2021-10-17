import React from "react";
import { View } from "react-native";
import { FAB, SocialIcon } from "react-native-elements";
import { useTheme } from "../context/StyleContext";

import Anchor from "../hoc/Anchor";
import FloatingView from "../hoc/FloatingView";
import Icon from "./Icon";

const socialButtons = [
  {
    name: "phone",
    href: "tel:0508347079",
    backgroundColor: "#0F9D58",
  },
  {
    name: "whatsapp",
    href: "https://wa.me/972508347079",
    backgroundColor: "#25D366",
  },
  {
    name: "facebook",
    href: "https://www.facebook.com/%D7%90%D7%95%D7%A8-%D7%A4%D7%A8%D7%99%D7%9D-%D7%9E%D7%A9%D7%A8%D7%93-%D7%A2%D7%95%D7%A8%D7%9B%D7%99-%D7%93%D7%99%D7%9F-108734148259410",
    backgroundColor: "#4267B2",
  },
  {
    name: "email",
    href: "mailto:or@frimlaw.com",
    backgroundColor: "#DB4437",
  },
  {
    href: "https://www.linkedin.com/in/or-frim/",
    backgroundColor: "#0077b5",
    name: "linkedin",
  },
];

const FloatingSocial = () => {

  return (
    <FloatingView dividePosition={12} style={{ right: 20 }}>
      {socialButtons.map(({ href, backgroundColor, ...iconProps }, i) => {
        return (
          <Anchor key={i.toString()} href={href}>
            <View
              style={{
                backgroundColor,
                width: 40,
                height: 40,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "50%",
                marginVertical: 4,
              }}>
              <Icon {...iconProps} color={'white'} size={25} />
            </View>
          </Anchor>
        );
      })}
    </FloatingView>
  );
};

export default FloatingSocial;
