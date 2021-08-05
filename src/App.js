import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button } from "react-native-elements";


import AboutScreen from "./screens/About";
import HomeScreen from "./screens/Home";
import InterestsScreen from "./screens/Interests";
import OfficeScreen from "./screens/Office";
import ContactScreen from "./screens/Contact";

import { Header, NavBar } from "./navigation";
import { black, white } from "./constants";
import { createDrawerNavigator } from "@react-navigation/drawer";
import useViewSize from "./hooks/useViewSize";


const image = { uri: require("./assets/background.jpg") };
const Drawer = createDrawerNavigator();

const App = () => {
  const [, , widthSize] = useViewSize();
  const header = (props) => <Header />;
  const drawerContent = (props) => {
    return (
      <View style={{ flex: 1 }}>
        <NavBar type="column" />
      </View>
    );
  };
  return (

    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={drawerContent}
        initialRouteName="home" screenOptions={{
          headerTransparent: true,
          header,
          drawerStyle: { width: widthSize / 2 },
          sceneContainerStyle: { backgroundColor: 'gray', height: '100%' }
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
