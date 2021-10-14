import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import { Button, FAB } from "react-native-elements";
import CenterSection from "../../components/CenterSection";
import { header_H, IMAGE_1_URI, LOGO_URI, HOME_BACKGROUND_URI } from "../../constants";
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
  const [widthTag, heightSize, widthSize] = useViewSize()
  const isMobile = ["sm", "xs", "md"].includes(widthTag);

  const textWidth = widthSize * 0.8;
  const textHeight = 200;
  return (
    <ScreenContainer>
      <View style={{ width: widthSize, height: heightSize }} >
        <ImageBackground source={{ uri: HOME_BACKGROUND_URI }} style={{
          position: "absolute",
          justifyContent: 'space-evenly',
          alignItems: 'center',
          width: '100%',
          height: '100%',
        }}>
          <Text style={{
            fontStyle: 'italic',
            opacity: 1,
            paddingHorizontal: 90,
            lineHeight: 50,
            fontSize: 30,
            fontWeight: 600,
            textAlign: 'center',
            color: 'white',
            fontWeight: '500',
            textShadowColor: 'black',
            textShadowOffset: { width: 5, height: 5 },
            textShadowRadius: 10,

          }}>{`"משרדנו נותן ייעוץ משפטי וייצוג בכל סוגי העבירות הפליליות, החל משלב הייעוץ לפני חקירה, ייצוג בהליכי מעצר והשחרור וניהול התיק הפלילי. עו"ד אור פרים בעל ניסיון של מעל עשור בניהול הליכים פליליים ואזרחיים מורכבים, ומייצג את לקוחותיו במסירות ומקצועיות בלתי מתפשרת."`}</Text>

          {/* <View style={{ alignItems: 'center' }}>
          </View> */}
        </ImageBackground>


      </View>

      <CenterSection image={{ uri: IMAGE_1_URI }} >
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Image source={{ uri: LOGO_URI }} style={{ width: 150, height: 150 }} />
          <Text style={{
            opacity: 1,
            paddingHorizontal: 90,
            lineHeight: 50,
            fontSize: 30,
            fontWeight: 600,
            textAlign: 'center',
            color: 'black',
            fontWeight: '500',
          }}>{`אור פרים , משרד עורך דין`}</Text>
        </View>

        <ArticlesSwipper direction="column" numArticles={1} />
      </CenterSection>
    </ScreenContainer>
  );
};

export default Home;

const styles = StyleSheet.create({});
