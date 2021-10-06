import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useRef, useState } from 'react'
import { Animated, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { services, interests } from '../../content'
import { useTheme } from '../../context/StyleContext'

const ArticlesSwipper = ({ direction, numArticles = 2 }) => {
    const { gray, primary, c2 } = useTheme()
    const [startPos, setStartPos] = useState(0);
    const opacity = new Animated.Value(0);
    const navigation = useNavigation()


    useEffect(() => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 1000
        }).start();

        setTimeout(() => {
            if (startPos + numArticles >= [...Object.values(interests), ...Object.values(services)].length) {
                setStartPos(0)
            } else {
                setStartPos(startPos + numArticles)
            }
        }, 5000)
    }, [startPos])


    return (
        <Animated.View style={[styles.container, {
            flexDirection: direction, opacity,
        }]}>
            {
                [...Object.values(interests), ...Object.values(services)].slice(startPos, startPos + numArticles)
                    .map(({ image, content, title, navigation: { route, params } }, i) => {
                        return (
                            <Pressable key={i.toString()} style={[styles.articleContainer, { borderColor: gray, backgroundColor: c2 }]} onPress={() => navigation.navigate(route, params)}>
                                <Image style={styles.image} source={image.source} />
                                <View style={[styles.description]}>
                                    <Text style={{
                                        fontSize: 24, color: primary,
                                    }}>{title}</Text>
                                    <Text numberOfLines={2} style={{
                                        fontSize: 18, color: primary,
                                    }}>{content[0].text}</Text>
                                </View>
                            </Pressable>
                        );
                    })
            }
        </Animated.View>
    )
}

export default ArticlesSwipper

const styles = StyleSheet.create({
    container: {
        margin: 24,
        marginHorizontal: 80,
        borderRadius: 16,
    },
    articleContainer: {
        flex: 1,
        padding: 16,
        marginHorizontal: 4,
        alignItems: "center",
        flexDirection: "column",
        minHeight: 300,
        borderWidth: 1,
        borderRadius: 16
    },
    image: {
        flex: 1,
        height: 100,
        width: 200,
        borderRadius: 16

    },
    description: {
        flex: 1,
        padding: 8,
        borderRadius: 16,
    },


})
