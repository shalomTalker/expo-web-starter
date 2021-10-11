import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import ScreenContainer from "../ScreenContainer";
import useViewSize from "../../hooks/useViewSize";
import { ADDRESS_URI, EMAIL_URI, FAX_URI, header_H, MAP_URI, TELEPHONE_URI } from "../../constants";

const ICONS = [
  { label: `שד' פלי"ם 2, בניין ברוש (קומה c)`, icon: 'address', uri: ADDRESS_URI },
  { label: `טלפון: 050-8347079`, icon: 'telephone', uri: TELEPHONE_URI },
  { label: `פקס': 153-50-8347079`, icon: 'fax', uri: FAX_URI },
  { label: `דוא"ל: or@frimlaw.com`, icon: 'email', uri: EMAIL_URI }
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
              ICONS.map(({ icon, label, uri }, i) =>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                  <Text style={{ fontSize: 25 }}>{label}</Text>
                  <Image
                    key={icon}
                    source={{ uri }}
                    style={{ width: 75, height: 75, margin: 16 }} />
                </View>)
            }
          </View>
        </View>
      </View>
    </ScreenContainer>
  );
};

export default Contact;

const styles = StyleSheet.create({});
