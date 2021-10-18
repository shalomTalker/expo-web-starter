import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useRef, useState } from 'react'
import { Animated, Image, ImageBackground, Pressable, StyleSheet, View } from 'react-native'
import { services, interests } from '../../content'
import { useTheme } from '../../context/StyleContext'
import useViewSize from '../../hooks/useViewSize'
import Text from '../Txt'

const ArticlesSwipper = ({ direction, numArticles = 2, enableSwitch = true }) => {
    const { gray, primary, c2, G_Styles } = useTheme()
    const [startPos, setStartPos] = useState(0);
    const opacity = new Animated.Value(0);
    const navigation = useNavigation()

    const [widthTag] = useViewSize()
    const isMobile = ["sm", "xs"].includes(widthTag);


    useEffect(() => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 1000
        }).start();
        if (enableSwitch) {

            setTimeout(() => {
                if (startPos + numArticles >= [...Object.values(interests), ...Object.values(services)].length) {
                    setStartPos(0)
                } else {
                    setStartPos(startPos + numArticles)
                }
            }, 5000)
        }
    }, [startPos])


    if (enableSwitch) {
        return <Animated.View style={[styles.container, {
            flexDirection: direction,
            opacity,
            marginHorizontal: numArticles === 1 && !isMobile ? 50 : 16
        }]}>
            {
                [...Object.values(interests), ...Object.values(services)].slice(startPos, startPos + numArticles)
                    .map(({ image, content, title, navigation: { route, params } }, i) => {
                        return (
                            <Pressable key={i.toString()} style={[
                                styles.articleContainer,
                                { backgroundColor: c2 }]} onPress={() => navigation.navigate(route, params)}>
                                <ImageBackground style={styles.background} source={image.source} >
                                    <View style={[styles.description]}>
                                        <Text style={{
                                            fontSize: 24, color: primary,
                                        }}>{title}</Text>
                                        <Text numberOfLines={2} style={{
                                            fontSize: 18, color: primary,
                                        }}>{content[0].text}</Text>
                                    </View>
                                </ImageBackground>
                            </Pressable>
                        );
                    })
            }
        </Animated.View>
    } else {
        const { image, content, title, navigation: { route, params } } = interests.criminal
        return (
            <View style={[styles.container, {
                flexDirection: direction,
                opacity,
                marginHorizontal: !isMobile ? 50 : 16
            }]}>
                <Pressable style={[
                    styles.articleContainer,
                    { backgroundColor: c2 }]} onPress={() => navigation.navigate(route, params)}>
                    <ImageBackground style={styles.background} source={image.source} >
                        <View style={[styles.description]}>
                            <Text style={{
                                fontSize: 24, color: primary,
                            }}>{title}</Text>
                            <Text numberOfLines={2} style={{
                                fontSize: 18, color: primary,
                            }}>{content[0].text}</Text>
                        </View>
                    </ImageBackground>
                </Pressable>
            </View>
        )
    }


}

export default ArticlesSwipper

const styles = StyleSheet.create({
    container: {
        margin: 24,
        marginHorizontal: 16,
        borderRadius: 16,
    },
    articleContainer: {

        flex: 1,
        padding: 8,
        margin: 4,
        marginHorizontal: 4,
        alignItems: "center",
        flexDirection: "column",
        minHeight: 300,
        borderRadius: 8,



    },
    background: {
        flex: 1,
        height: '100%',
        width: '100%',
        borderRadius: 8

    },
    description: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        padding: 8,
        alignItems: 'center',
        backgroundColor: 'gray',
        opacity: 0.8

    } /* {
        
        flex: 1,
        borderRadius: 16,
    } */,


})
