import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button } from "react-native-elements";
import AboutScreen from "./src/screens/About";
import HomeScreen from "./src/screens/Home";
import InterestsScreen from "./src/screens/Interests";
import OfficeScreen from "./src/screens/Office";
import ContactScreen from "./src/screens/Contact";
import { Header, NavBar } from "./src/navigation";
import { black, red, white } from "./src/constants";
import { createDrawerNavigator } from "@react-navigation/drawer";
import useViewSize from "./src/hooks/useViewSize";

const Drawer = createDrawerNavigator();
const App = () => {
  const [, , widthSize] = useViewSize();
  const header = (props) => <Header {...props} />;
  const drawerContent = (props) => {
    return (
      <View style={{ flex: 1 }}>
        <NavBar type="column" defaultColor={black} />
      </View>
    );
  };
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={drawerContent}
        initialRouteName="home"
        screenOptions={{
          // header,
          headerShown: false,
          drawerStyle: { width: widthSize / 2 },
          sceneContainerStyle: { backgroundColor: "transparent" }
        }}>
        <Drawer.Screen name="home" component={HomeScreen} />
        <Drawer.Screen name="about" component={AboutScreen} />
        <Drawer.Screen name="interests" component={InterestsScreen} />
        <Drawer.Screen name="office" component={OfficeScreen} />
        <Drawer.Screen name="contact" component={ContactScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  image: { flex: 1, justifyContent: "center" },
});
