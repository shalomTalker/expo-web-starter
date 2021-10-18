import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View, useWindowDimensions, Animated, Pressable, TouchableOpacity, Image } from "react-native";
import { Header as BaseHeader } from "react-native-elements";
import Icon from "../components/Icon";
import Logo from "../components/Logo";
import Text from "../components/Txt";
import { LOGO_HEADER_URI, LOGO_URI } from "../constants";
import { useTheme } from "../context/StyleContext";
import Anchor from "../hoc/Anchor";
import useViewSize from "../hooks/useViewSize";
import NavBar from "./NavBar";


const Header = (props) => {
  const { green, white, primary, secondary, isDark } = useTheme()
  const [widthTag, , widthSize] = useViewSize();

  const isMobile = ["sm", "xs", "md"].includes(widthTag);
  const isSmallMobile = ["xs"].includes(widthTag);
  const navigation = useNavigation();
  return (
    <Animated.View style={[props.style, styles.container]}>

      <BaseHeader
        containerStyle={{
          flex: 1,
          borderBottomWidth: 0,
          backgroundColor: 'transparent',
          alignItems: 'center',
          flexDirection: 'row',
        }}
        placement="left"
        leftComponent={isMobile ?
          <TouchableOpacity onPress={navigation.toggleDrawer} >
            <Icon name="menu" size={35} color={primary} />
          </TouchableOpacity> :
          <Anchor href="tel:0508347079" style={{ flexDirection: 'row' }}>
            <Icon name="phone" size={30} color={primary} style={{ marginRight: 8 }} />
            <Text style={{ color: primary, fontSize: 20, fontWeight: "400" }}>זמינות 24/7 במקרים דחופים – 050-8347079</Text>
          </Anchor>

        }
        leftContainerStyle={{ justifyContent: 'center' }}
        rightContainerStyle={{ justifyContent: 'center' }}
        rightComponent={!isMobile ?
          <NavBar
            type="top"
            insideScreen
            selectedColor={secondary}
            defaultColor={primary}
          /> : <Anchor href="tel:0508347079" style={{ flexDirection: 'row' }}>
            <Icon name="phone" size={30} color={primary} style={{ marginRight: 8 }} />
            <Text style={{ color: primary, fontSize: 20, fontWeight: "400" }}>{`${widthTag == 'xs' ? '' : 'זמינות'} 24/7 במקרים דחופים${(widthTag == 'sm') ? ' – 050-8347079' : ''}`}</Text>
          </Anchor>}
      />
    </Animated.View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,

  },
  image: { width: 70, height: 70, marginLeft: 16 },

});
