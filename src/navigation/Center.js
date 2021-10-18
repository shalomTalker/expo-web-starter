

import React from 'react'
import { StyleSheet, View } from 'react-native'
import ArticlesSwipper from '../components/ArticlesSwipper';
import ContactUs from '../components/ContactUs';
import MapSite from '../components/MapSite';
import Text from '../components/Txt';
import { useTheme } from "../context/StyleContext";
import useViewSize from "../hooks/useViewSize";
const Center = () => {

    const { secondary, primary, } = useTheme()

    const [, , widthSize] = useViewSize()

    const isViewSmallerThan = (range) => widthSize < range;

    return (
        <View style={{ backgroundColor: primary, flex: 1 }}>
            <Text style={[styles.title, { color: secondary }]}>{`מאמרים נוספים`}</Text>
            <ArticlesSwipper direction={isViewSmallerThan(900) ? 'column' : 'row-reverse'}
                numArticles={isViewSmallerThan(900) ? 1 : 3} />
            <ContactUs direction={isViewSmallerThan(1100) ? 'column' : 'row-reverse'} />
            <MapSite direction={isViewSmallerThan(900) ? 'column' : 'row-reverse'} />

        </View>
    )
}

export default Center

const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        textAlign: 'center',
        textDecorationLine: 'underline',
        marginTop: 16,
        fontWeight: 500
    }
})
