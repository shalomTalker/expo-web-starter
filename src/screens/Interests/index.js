import React from "react";
import { Image, ImageBackground, ScrollView, StyleSheet, View } from "react-native";
import { Button } from "react-native-elements";
import ScreenContainer from "../ScreenContainer";
import useViewSize from "../../hooks/useViewSize";
import { header_H, IMAGE_1_URI } from "../../constants";
import { useTheme } from "../../context/StyleContext";
import ContactUs from "../../components/ContactUs";
import { interests } from "../../content";
import Content from "../../components/Article/Content";
import Article from "../../components/Article";
import Btn from "../../components/Btn";
import Center from "../../navigation/Center";
import Text from "../../components/Txt";


const Interests = ({ navigation, route }) => {
  const { params = null } = route;
  const [widthTag, , widthSize] = useViewSize()
  const { c2, c3, primary, c4, c5, secondary } = useTheme()

  const isMobile = ["sm", "xs"].includes(widthTag);
  const renderContent = () => {
    if (params?.value) {
      return (
        <Article article={interests[params.value]} />
      )
    } else {
      return (

        <>
          <Text style={[styles.mainTitle, { color: c2 }]}>{`תחומי עיסוק`}</Text>
          <View style={{ flexDirection: 'row', flex: 1 }}>
            {Boolean(!isMobile) &&
              <ImageBackground source={{ uri: IMAGE_1_URI }} style={{ height: '100%', paddingTop: '33%', flex: 1 }}>
                <ContactUs direction='column' titleStyle={styles.contactTitle} />
              </ImageBackground>
            }
            <View style={[styles.mainWrapper, { flexDirection: "column", flex: 2 }]}>
              {
                Object.entries(interests).map(([key, object], i) => {
                  const { title, content, image, contactUsTitle } = object;
                  return (
                    <View key={title} style={{
                      backgroundColor: i % 2 === 0 ? c2 : c3,
                      padding: 8,
                      marginBottom: 8
                    }}>
                      <Text style={[styles.title, { color: primary }]}>{title}</Text>
                      <Text
                        numberOfLines={2}
                        style={[styles.gistContent, { color: primary }]}>{content[0].text}</Text>
                      <Btn
                        buttonStyle={styles.button}
                        style={[styles.buttonWrapper, { borderColor: primary, color: primary }]}
                        titleStyle={{ fontFamily: 'VarelaRound_400Regular' }}
                        title={`להמשך קריאה`}
                        onPress={() => navigation.navigate('interests', { value: key })}
                      />
                    </View>
                  )
                })
              }
            </View>
          </View>
        </>
      )
    }


  }
  return (
    <ScreenContainer>
      {renderContent()}
    </ScreenContainer>

  );
};

export default Interests;

const styles = StyleSheet.create({
  mainTitle: { textAlign: 'center', padding: 30, fontSize: 30, paddingRight: 55 },
  mainWrapper: { paddingHorizontal: 30, justifyContent: 'flex-end', flexWrap: 'wrap' },
  title: { fontSize: 25, textAlign: 'center', textDecorationLine: 'underline' },
  gistContent: { margin: 16, textAlign: 'right', fontSize: 18 },
  button: { backgroundColor: 'transparent' },
  buttonWrapper: { alignSelf: 'center', borderWidth: 1 },
  contactTitle: { backgroundColor: 'white', padding: 4, borderRadius: 8, opacity: 0.7, paddingHorizontal: 8 }
});
