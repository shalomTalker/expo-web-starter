import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import { Button, FAB } from "react-native-elements";
import { header_H, IMAGE_1_URI, LOGO_URI, HOME_BACKGROUND_URI } from "../../constants";
import useViewSize from "../../hooks/useViewSize";
import ScreenContainer from "../ScreenContainer";
import SwitcherBCG from "../../components/SwitcherBCG";
import DetailsSection from "../../components/DetailsSection";
import { useTheme } from "../../context/StyleContext";
import ContactUs from "../../components/ContactUs";
import ArticlesSwipper from '../../components/ArticlesSwipper'
import Logo from "../../components/Logo";
import { Space } from "../../components/Spacing";



const Home = () => {
  const { primary, c5, secondary, isDark } = useTheme()
  const navigation = useNavigation();
  const [widthTag, heightSize, widthSize] = useViewSize()
  const isMobile = ["sm", "xs", "md"].includes(widthTag);
  const isSmallMobile = ["xs"].includes(widthTag);

  return (
    <ScreenContainer>
      <View style={{ width: widthSize, height: heightSize }} >
        <ImageBackground source={{ uri: HOME_BACKGROUND_URI }} resizeMethod="scale" style={{
          width: widthSize,
          height: heightSize - header_H,
          justifyContent: 'flex-end',
        }}>
          <View style={{
            backgroundColor: secondary,
            width: isSmallMobile ? '100%' : '40%',
            height: isSmallMobile ? 'auto' : '100%',
            flex: 1,
            opacity: 0.9,
            alignItems: 'center',
            justifyContent: 'space-evenly',
            maxHeight: heightSize - header_H,
          }}>
            <Logo isDark={isDark} width={isMobile ? 150 : 200} height={isMobile ? 150 : 200} />
            <Text style={{
              textAlign: 'center',
              fontStyle: 'italic',
              paddingHorizontal: isSmallMobile ? 60 : '10%',
              fontSize: 20,
              fontWeight: 500,
              color: primary,
              fontWeight: '500',

            }}>{`"משרדנו נותן ייעוץ משפטי וייצוג בכל סוגי העבירות הפליליות, החל משלב הייעוץ לפני חקירה, ייצוג בהליכי מעצר שחרור וניהול התיק הפלילי."`}</Text>
          </View>
        </ImageBackground>
      </View>
      {["xs", "sm"].includes(widthTag) ?
        (
          <View style={{ flex: 1, alignItems: 'center', flexDirection: isMobile ? 'column' : 'row' }}>
            <Image source={{ uri: IMAGE_1_URI }} style={{ width: 400, height: 300 }} />
            <View style={{ flex: 5, marginTop: 36 }}>
              <Text style={{
                opacity: 1,
                paddingHorizontal: ["sm"].includes(widthTag) ? 100 : 75,
                fontSize: 20,
                fontWeight: 500,
                textAlign: 'center',
                color: secondary,
              }}>{` עו"ד אור פרים בעל ניסיון של מעל עשור בניהול הליכים פליליים ואזרחיים מורכבים, ומייצג את לקוחותיו במסירות ומקצועיות בלתי מתפשרת.`}</Text>

              <View style={{ paddingHorizontal: widthTag == 'sm' ? 80 : 0 }}>
                <ArticlesSwipper enableSwitch={false} direction="column" numArticles={1} />
              </View>
            </View>
          </View>
        ) : (
          <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row', }}>
            <Image source={{ uri: IMAGE_1_URI }} style={{ width: isMobile ? '50%' : 400, height: 450, paddingRight: 50 }} />
            <View style={{ flex: 2, marginTop: 36 }}>
              <Text style={{
                opacity: 1,
                paddingHorizontal: widthTag == 'xl' ? 150 : widthTag == 'lg' ? 100 : 50,
                fontSize: 20,
                fontWeight: 500,
                textAlign: 'center',
                color: secondary,
              }}>{` עו"ד אור פרים בעל ניסיון של מעל עשור בניהול הליכים פליליים ואזרחיים מורכבים, ומייצג את לקוחותיו במסירות ומקצועיות בלתי מתפשרת.`}</Text>
              <View style={{ paddingHorizontal: widthTag == 'xl' ? 150 : widthTag == 'lg' ? 100 : 0 }}>
                <ArticlesSwipper enableSwitch={false} direction="column" numArticles={1} />
              </View>
            </View>
          </View>

        )}

    </ScreenContainer>
  );
};

export default Home;

const styles = StyleSheet.create({});
