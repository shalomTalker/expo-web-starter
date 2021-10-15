import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import ScreenContainer from "../ScreenContainer";
import useViewSize from "../../hooks/useViewSize";
import { header_H } from "../../constants";
import { useTheme } from "../../context/StyleContext";
import { services } from "../../content";
import Btn from "../../components/Btn";
import Article from "../../components/Article";


const Office = ({ navigation, route }) => {
  const { params } = route;
  const { c2, c3, primary } = useTheme()
  const [widthTag, , widthSize] = useViewSize()
  const isMobile = ["sm", "xs", "md"].includes(widthTag);
  const renderContent = () => {
    if (params) {
      return (
        <Article article={services[params.value]} />
      )
    } else {
      return (

        <View style={{ backgroundColor: primary }}>
          <Text style={[styles.mainTitle, { color: c2 }]}>{`שירותי המשרד`}</Text>
          <View style={[styles.mainWrapper, { flexDirection: isMobile ? "column" : 'row' }]}>
            {
              Object.entries(services).map(([key, object], i) => {
                const { title, content, image, contactUsTitle } = object;
                return (
                  <View style={{
                    width: isMobile ? 'auto' : '33%',
                    backgroundColor: i % 2 === 0 ? c2 : c3,
                    padding: 8,
                    marginHorizontal: isMobile ? 20 : 0,
                    marginBottom: 8
                  }}>
                    <Text style={[styles.title, { color: primary }]}>{title}</Text>
                    <Text
                      numberOfLines={2}
                      style={[styles.gistContent, { color: primary }]}>{content[0].text}</Text>
                    <Btn
                      buttonStyle={styles.button}
                      style={[styles.buttonWrapper, { borderColor: primary, color: primary }]}
                      title={`להמשך קריאה`}
                      onPress={() => navigation.navigate('office', { value: key })}
                    />
                  </View>
                )
              })
            }
          </View>
        </View>
      )
    }


  }



  return (
    <ScreenContainer>
      {renderContent()}
    </ScreenContainer>
  );
};

export default Office;

const styles = StyleSheet.create({
  mainTitle: { textAlign: 'center', padding: 30, fontSize: 30 },
  mainWrapper: { paddingHorizontal: 30, justifyContent: 'space-between', flexWrap: 'wrap' },
  title: { fontSize: 25, textAlign: 'center', textDecorationLine: 'underline' },
  gistContent: { margin: 16, textAlign: 'right', fontSize: 18 },
  button: { backgroundColor: 'transparent' },
  buttonWrapper: { alignSelf: 'center', borderWidth: 1 }
});
