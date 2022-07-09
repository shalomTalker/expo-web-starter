import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View, Image, ImageBackground } from "react-native";
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
import {
  useFonts,
  VarelaRound_400Regular
} from '@expo-google-fonts/varela-round'
import Text from "../../components/Txt";
import LinksBox from "./LinksBox";


const Home = () => {
  let [fontsLoaded] = useFonts({
    VarelaRound_400Regular,
  });
  const { primary, c5, secondary, isDark } = useTheme()
  const navigation = useNavigation();
  const [widthTag, heightSize, widthSize] = useViewSize()
  const isMobile = ["sm", "xs", "md"].includes(widthTag);
  const isSmallMobile = ["xs"].includes(widthTag);

  return fontsLoaded && (
    <ScreenContainer>
      <View style={{ width: widthSize }} >
        <ImageBackground
          source={{ uri: HOME_BACKGROUND_URI }} resizeMethod="scale" style={{
            width: widthSize,

            // paddingTop: header_H,
            justifyContent: 'flex-end',
          }}>
          <View style={{
            backgroundColor: `${secondary}70`,
            // backgroundColor: `${secondary}70`,
            width: isSmallMobile ? '100%' : 350,
            height: isSmallMobile ? 'auto' : '100%',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'space-evenly',
            minHeight: heightSize - header_H,
            // paddingTop: header_H * 2,
            marginVertical: !isSmallMobile ? 18 : 0,
            marginLeft: !isSmallMobile ? 36 : 0,
          }}>
            <Logo isDark={isDark} width={isMobile ? 150 : 200} height={isMobile ? 150 : 200} />
            <Text style={{
              textAlign: 'center',
              // fontStyle: 'italic',
              paddingHorizontal: isSmallMobile ? 60 : '10%',
              fontSize: 20,
              fontWeight: 500,
              color: primary,
            }}>{`משרדנו נותן ייעוץ משפטי וייצוג בכל סוגי העבירות הפליליות, החל משלב הייעוץ לפני חקירה, ייצוג בהליכי מעצר שחרור וניהול התיק הפלילי.`}</Text>
          </View>
        </ImageBackground>
      </View>
      {["xs", "sm", 'md', 'lg'].includes(widthTag) ?
        (
          <View style={{ flex: 1, alignItems: 'center', flexDirection: 'column' }}>
            <Image source={{ uri: IMAGE_1_URI }} style={{
              width: 400,
              height: 400,
              borderRadius: 16,
              borderWidth: 2,
              borderColor: 'gray',
              marginTop: 8
            }} />
            <View style={{ flex: 5, marginTop: 36 }}>
              <Text style={{
                fontSize: 23,
                fontWeight: 500,
                textAlign: 'center',
                color: secondary
              }}>{`עו"ד אור פרים`}</Text>
              <Space height={16} />
              <Text style={{
                paddingHorizontal: ["sm", 'xs'].includes(widthTag) ? 50 : 150,
                fontSize: 20,
                fontWeight: 500,
                textAlign: 'center',
                color: secondary,
              }}>{`עו"ד אור פרים בעל ניסיון של מעל עשור בניהול הליכים פליליים ואזרחיים מורכבים, ומייצג את לקוחותיו במסירות ומקצועיות בלתי מתפשרת.`}</Text>
              <Space height={16} />
              <Text style={{
                paddingHorizontal: ["sm", 'xs'].includes(widthTag) ? 50 : 150,
                fontSize: 20,
                fontWeight: 500,
                textAlign: 'center',
                color: secondary,
              }}>{`הניסיון העשיר והידע הרחב שצבר עו"ד פרים לאורך השנים מאפשרים לו לבחון כל תיק מנקודות מבט ייחודיות ולהשיג את התוצאות הטובות ביותר עבור לקוחותיו.`}</Text>

              {/* <View style={{ paddingHorizontal: widthTag == 'sm' ? 80 : 0 }}> */}
              <LinksBox />
              {/* </View> */}
            </View>
          </View>
        ) : (
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>

            {/* <View style={{ flex: 2, marginTop: 36 }}> */}
            <View style={{ flex: 1 }}>
              <Text style={{
                fontSize: 23,
                fontWeight: 500,
                textAlign: 'center',
                color: secondary
              }}>{`עו"ד אור פרים`}</Text>
              <Space height={16} />
              <Text style={{
                flex: 0.5,
                paddingHorizontal: ['xl', 'lg'].includes(widthTag) ? 90 : 50,
                fontSize: 20,
                fontWeight: 500,
                textAlign: 'center',
                color: secondary,
              }}>{`עו"ד אור פרים בעל ניסיון של מעל עשור בניהול הליכים פליליים ואזרחיים מורכבים, ומייצג את לקוחותיו במסירות ומקצועיות בלתי מתפשרת.`}</Text>
              <Space height={16} />
              <Text style={{
                flex: 0.5,
                paddingHorizontal: ['xl', 'lg'].includes(widthTag) ? 90 : 50,
                fontSize: 20,
                fontWeight: 500,
                textAlign: 'center',
                color: secondary,
              }}>{`הניסיון העשיר והידע הרחב שצבר עו"ד פרים לאורך השנים מאפשרים לו לבחון כל תיק מנקודות מבט ייחודיות ולהשיג את התוצאות הטובות ביותר עבור לקוחותיו.`}</Text>
            </View>
            <Image source={{ uri: IMAGE_1_URI }} style={{
              width: 220,
              height: 320,
              borderRadius: 16,
              borderWidth: 2,
              borderColor: 'gray',
            }} />
            <View style={{ flex: 1, alignItems: 'center', marginRight: 8 }}>
              <LinksBox />
            </View>

            {/* </View> */}

          </View>

        )}

    </ScreenContainer>
  );
};

export default Home;

const styles = StyleSheet.create({});
