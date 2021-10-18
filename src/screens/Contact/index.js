import React from "react";
import { Image, ImageBackground, StyleSheet, View } from "react-native";
import ScreenContainer from "../ScreenContainer";
import useViewSize from "../../hooks/useViewSize";
import { ADDRESS_URI, EMAIL_URI, FAX_URI, header_H, MAP_URI, TELEPHONE_URI } from "../../constants";
import Anchor from "../../hoc/Anchor";
import { useTheme } from "../../context/StyleContext";
import ContactUs from "../../components/ContactUs";
import Text from "../../components/Txt";

const ICONS = [
  { label: `כתובת: שד' פלי"ם 2, בניין ברוש`, icon: 'address', uri: ADDRESS_URI, href: 'https://www.waze.com/ul?q=%D7%A9%D7%93%27+%D7%A4%D7%9C%D7%99%22%D7%9D+2' },
  { label: `טלפון: 050-8347079`, icon: 'telephone', uri: TELEPHONE_URI, href: "tel:0508347079" },
  { label: `פקס': 153-50-8347079`, icon: 'fax', uri: FAX_URI, href: 'fax:+972-153-50-8347079' },
  { label: `דוא"ל: or@frimlaw.com`, icon: 'email', uri: EMAIL_URI, href: "mailto:or@firmlaw.com" }
]

const Contact = ({ navigation }) => {

  const [widthTag, heightSize, widthSize] = useViewSize()

  const isViewSmallerThan = (range) => widthSize < range;

  const isMobile = ["sm", "xs", "md"].includes(widthTag);
  const { primary, secondary, c3 } = useTheme()
  return (
    <ScreenContainer>
      <View style={[styles.container, { flexDirection: isMobile ? 'column-reverse' : 'row' }]}>

        <Image source={{ uri: MAP_URI }} style={[styles.image]} />

        <View>
          {
            ICONS.map(({ icon, label, uri, href }, i) =>
              <Anchor style={[styles.anchor]} href={href}>
                <Text style={[styles.text, { color: secondary }]}>{label}</Text>
                <Image
                  key={icon}
                  source={{ uri }}
                  style={[styles.icon]} />
              </Anchor>)
          }
        </View>
      </View>
      {/* <ContactUs direction={isViewSmallerThan(1100) ? 'column' : 'row-reverse'} backgroundColor={c3} /> */}
    </ScreenContainer>
  );
};

export default Contact;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  anchor: { flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' },
  text: { fontSize: 18, fontWeight: 500 },
  image: { width: 280, height: 280, margin: 16, borderRadius: 8 },
  icon: { width: 65, height: 65, margin: 8 }
});
