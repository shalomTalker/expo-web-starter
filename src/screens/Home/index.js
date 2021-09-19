import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, FAB } from "react-native-elements";
import CaptionSection from "../../components/CaptionSection";
import MotoSection from "../../components/MotoSection";
import { black, header_H, white } from "../../constants";
import useViewSize from "../../hooks/useViewSize";
import ScreenContainer from "../ScreenContainer";
import SwitcherBCG from "../../components/SwitcherBCG";
import DetailsSection from "../../components/DetailsSection";



const Home = () => {
  const navigation = useNavigation();
  const [, heightSize, widthSize] = useViewSize()
  const textWidth = widthSize * 0.7;
  const textHeight = 200;
  return (
    <ScreenContainer>
      <View
        style={{ height: heightSize, width: widthSize }}
      >
        <SwitcherBCG />
        <View style={{
          position: "absolute",
          top: header_H,
          right: 50,
        }}>
          <Text style={{
            fontSize: 30,
            fontWeight: 600,
            color: black
          }}>LOGO</Text>
        </View>
        <Text style={{
          position: "absolute",
          top: (heightSize / 2) - (textHeight / 2),
          right: widthSize / 2 - textWidth / 2,
          height: textHeight,
          width: textWidth,
          fontSize: widthSize * 0.07,
          fontWeight: 600,
          zIndex: 2,
          textAlign: 'center',
          color: white,
          flex: 1
        }}>SEEING THE FOREST <Text style={{ color: '#004552e3' }}>AND </Text>THE TREES</Text>



      </View>
      <MotoSection
        mainTitle={`THE FIRM`}
        subTitle={`FACT ARE MANY BUT THE TRUTH IS ONE`}
        spanTitle={`RABINDRANATH TAGORE`} />
      <CaptionSection />
      <MotoSection mainTitle={`WHO WE ARE`}
        subTitle={`NOTHING IS AT LAST SACRED BUT THE INTEGRITY OF YOUR OWM MIND`}
        spanTitle={`RABINDRANATH TAGORE`} />

    </ScreenContainer>
  );
};

export default Home;

const styles = StyleSheet.create({});
