import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Button, FAB } from "react-native-elements";
import CaptionSection from "../../components/CaptionSection";
import CenterSection from "../../components/CenterSection";
import { header_H, } from "../../constants";
import useViewSize from "../../hooks/useViewSize";
import ScreenContainer from "../ScreenContainer";
import SwitcherBCG from "../../components/SwitcherBCG";
import DetailsSection from "../../components/DetailsSection";
import { useTheme } from "../../context/StyleContext";
import ContactUs from "../../components/ContactUs";
import ArticlesSwipper from '../../components/ArticlesSwipper'



const Home = () => {
  const { primary, c5 } = useTheme()
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
          top: (heightSize / 2) - (textHeight / 2),
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          width: '100%'
        }}>
          <View style={{ alignItems: 'center' }}>
            <Text numberOfLines={2} style={{
              flex: 0.7,
              fontSize: widthSize * 0.04,
              fontWeight: 600,
              textAlign: 'center',
              color: c5,
            }}>{`אור פרים , משרד עורך דין`}</Text>
            <DetailsSection textColor={c5} />
          </View>
          <Image style={{
            width: 200, height: 200
          }} source={require('../../assets/logo.png')} />
        </View>
      </View>
      <CenterSection image={require('../../assets/image_1.jpg')} >
        <ContactUs direction='column' titleStyle={{
          fontWeight: 'bold',
          textShadowColor: '#585858',
          textShadowOffset: { width: 5, height: 5 },
          textShadowRadius: 10,
        }} />
        <ArticlesSwipper direction="column" numArticles={1} />
      </CenterSection>
    </ScreenContainer>
  );
};

export default Home;

const styles = StyleSheet.create({});
