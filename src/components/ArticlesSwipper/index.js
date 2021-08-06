import React, { useEffect, useRef, useState } from 'react'
import { Animated, Image, StyleSheet, Text, View } from 'react-native'
import { gray, white } from '../../constants'
// import FastImage from 'react-native-fast-image'
const articles = require('../../../articles.json')

const ArticlesSwipper = ({ direction, numArticles = 2 }) => {
    const [startPos, setStartPos] = useState(0);
    const opacity = new Animated.Value(0);


    useEffect(() => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 1000
        }).start();

        setTimeout(() => {
            if (startPos + numArticles >= articles.length) {
                setStartPos(0)
            } else {
                setStartPos(startPos + numArticles)
            }
        }, 5000)
    }, [startPos])


    return (
        <Animated.View style={[styles.container, { flexDirection: direction, opacity }]}>
            {
                articles.slice(startPos, startPos + numArticles).map(({ image, sourceUrl, id, subTitle, title, color }, i) => {
                    return (
                        <View key={i.toString()} style={[styles.articleContainer]}>
                            <Image style={styles.image} source={{ uri: image }} />
                            <View style={styles.description}>
                                <Text style={{ fontSize: 24 }}>{title}</Text>
                                <Text numberOfLines={4} style={{ fontSize: 18 }}>{subTitle}</Text>
                            </View>
                        </View>
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
        backgroundColor: gray,
        borderRadius: 16,
    },
    articleContainer: {
        flex: 1,
        padding: 16,
        alignItems: "center",
        flexDirection: "column",
        minHeight: 450
    },
    image: {
        flex: 1,
        height: 250,
        width: 250,
    },
    description: {
        flex: 1,
        backgroundColor: white,
        padding: 8,
        borderRadius: 16,
    }

})
