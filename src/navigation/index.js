


import React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
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
import { header_H } from "../constants";



const Drawer = createDrawerNavigator();
const Index = () => {
    const { secondary, primary, c2 } = useTheme()
    const [, , widthSize] = useViewSize();
    const drawerContent = (props) => {
        return (
            <View style={{ flex: 1, backgroundColor: primary }} {...props}>
                <NavBar type="column" defaultColor={secondary} style={{ backgroundColor: c2, height: '100%' }} />
            </View>
        );
    };




    const config = {
        screens: {
            home: 'home', about: 'about', interests: 'interests', office: 'office', contact: 'contact'
        },
    };

    const linking = {
        prefixes: [],
        config,
    };
    /* 
    tabBarOnPress: (scene, jumpToIndex) => {
                            const { route, index, focused } = scene;
                            if (route.index === 0) {
                                const navigationInRoute = route.routes[0];
                                if (!!navigationInRoute && !!navigationInRoute.params && !!navigationInRoute.params.scrollToTop) {
                                    navigationInRoute.params.scrollToTop();
                                }
                            }
                            jumpToIndex(1);
                        },
    
    
    */


    return (
        <NavigationContainer onStateChange={console.log} linking={linking} fallback={<Text>Loading...</Text>}>
            <Drawer.Navigator

                drawerContent={drawerContent}
                initialRouteName="home"
                backBehavior={"order"}

                screenOptions={() => {
                    return {

                        headerLeft: null,
                        drawerPosition: 'left',
                        sceneContainerStyle: { flex: 1 },
                        title: `עורך דין אור פרים`,
                        headerShown: false,
                        drawerStyle: {
                            width: widthSize / 2
                        },

                    }
                }
                }>
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
