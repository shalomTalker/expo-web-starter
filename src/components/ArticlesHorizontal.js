import { useNavigation } from '@react-navigation/core'
import React, { useState } from 'react'
import { FlatList, ImageBackground, Pressable } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import { keyExtractor } from '../constants'
import { interests, services } from '../content'
import { useTheme } from '../context/StyleContext'
import useViewSize from '../hooks/useViewSize'

const ArticlesHorizontal = ({ direction, numArticles = 2, enableSwitch = true }) => {
    const { gray, primary, c2, G_Styles, secondary } = useTheme()
    const [startPos, setStartPos] = useState(0);

    const navigation = useNavigation()


    const [widthTag] = useViewSize()

    const isMobile = ["sm", "xs"].includes(widthTag);


    const renderArticle = ({ item }) => {
        const { image, content, title, navigation: { route, params } } = item
        return (
            <Pressable style={[
                styles.articleContainer,
                {
                    width: 300,
                    backgroundColor: c2,
                    cursor: 'pointer'
                }]}
                onPress={() => navigation.navigate(route, params)}>
                <ImageBackground style={styles.background} source={image.source} >
                    <View style={[styles.description, { backgroundColor: `${secondary}99` }]}>
                        <Text style={{
                            fontSize: 24, color: primary,
                        }}>{title}</Text>

                        <Text numberOfLines={2} style={{
                            fontSize: 18,
                            color: primary,
                        }}>{content[0].text}</Text>
                    </View>
                </ImageBackground>
            </Pressable>
        );
    }

    // <View style={[styles.container, {
    //     marginHorizontal: numArticles === 1 && !isMobile ? 50 : 16
    // }]}>
    return <View style={[styles.container, {
        marginHorizontal: numArticles === 1 && !isMobile ? 50 : 16
    }]}>

        <FlatList
            showsHorizontalScrollIndicator={false}
            keyExtractor={keyExtractor}
            data={[...Object.values(interests), ...Object.values(services)]}
            renderItem={renderArticle}
            horizontal
        />
    </View>
}

export default ArticlesHorizontal

const styles = StyleSheet.create({
    container: {
        margin: 24,
        marginHorizontal: 16,
        borderRadius: 16,
    },
    articleContainer: {

        // flex: 1,
        padding: 8,
        margin: 4,
        marginHorizontal: 4,
        alignItems: "center",
        flexDirection: "column",
        minHeight: 300,
        borderRadius: 8,



    },
    background: {
        // flex: 1,
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
    }


})
