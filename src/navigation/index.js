


import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button } from "react-native-elements";
import { createDrawerNavigator } from "@react-navigation/drawer";

import AboutScreen from "../screens/About";
import HomeScreen from "../screens/Home";
import InterestsScreen from "../screens/Interests";
import OfficeScreen from "../screens/Office";
import ContactScreen from "../screens/Contact";
import useViewSize from "../hooks/useViewSize";

import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { useTheme } from "../context/StyleContext";



const Drawer = createDrawerNavigator();
const Index = () => {
    const { secondary } = useTheme()
    const [, , widthSize] = useViewSize();
    const drawerContent = (props) => {
        return (
            <View style={{ flex: 1 }}>
                <NavBar type="column" defaultColor={secondary} />
            </View>
        );
    };




    const config = {
        screens: {
            home: 'home', about: 'about', interests: 'interests/:value', office: 'office/:value?', contact: 'contact'
            //   Chat: 'feed/:sort',
            //     Profile: 'user',
        },
    };

    const linking = {
        prefixes: [],
        config,
    };
    return (
        <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
            <Drawer.Navigator
                drawerContent={drawerContent}
                initialRouteName="home"
                screenOptions={{
                    // header,
                    title: `עורך דין אור פרים`,
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

export default Index;
export {
    Header,
    NavBar,
    Footer
}
const styles = StyleSheet.create({
    image: { flex: 1, justifyContent: "center" },
});
