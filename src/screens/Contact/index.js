import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import ScreenContainer from "../ScreenContainer";
import useViewSize from "../../hooks/useViewSize";
import { ADDRESS_URI, EMAIL_URI, FAX_URI, header_H, MAP_URI, TELEPHONE_URI } from "../../constants";
import Anchor from "../../hoc/Anchor";

const ICONS = [
  { label: `שד' פלי"ם 2, בניין ברוש (קומה c)`, icon: 'address', uri: ADDRESS_URI, href: 'https://www.waze.com/ul?q=%D7%A9%D7%93%27+%D7%A4%D7%9C%D7%99%22%D7%9D+2' },
  { label: `טלפון: 050-8347079`, icon: 'telephone', uri: TELEPHONE_URI, href: "tel:0508347079" },
  { label: `פקס': 153-50-8347079`, icon: 'fax', uri: FAX_URI, href: 'fax:+972-153-50-8347079' },
  { label: `דוא"ל: or@frimlaw.com`, icon: 'email', uri: EMAIL_URI, href: "mailto:or@firmlaw.com" }
]

const Contact = ({ navigation }) => {

  const [widthTag, heightSize, widthSize] = useViewSize()
  const isMobile = ["sm", "xs", "md"].includes(widthTag);
  return (
    <ScreenContainer>
      <View
        style={{ width: widthSize, marginTop: header_H }}
      >
        <View>


        </View>
        <View style={{
          flexDirection: isMobile ? 'column-reverse' : 'row',
          justifyContent: 'center', alignItems: 'center'
        }}>

          <Image source={{ uri: MAP_URI }} style={{ width: 500, height: 500, margin: 16 }} />

          <View>
            {
              ICONS.map(({ icon, label, uri, href }, i) =>
                <Anchor style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }} href={href}>
                  <Text style={{ fontSize: 25 }}>{label}</Text>
                  <Image
                    key={icon}
                    source={{ uri }}
                    style={{ width: 75, height: 75, margin: 16 }} />
                </Anchor>)
            }
          </View>
        </View>
      </View>
    </ScreenContainer>
  );
};

export default Contact;

const styles = StyleSheet.create({});
