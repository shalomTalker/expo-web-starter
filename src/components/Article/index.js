import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { useTheme } from '../../context/StyleContext'
import useViewSize from '../../hooks/useViewSize'
import ContactUs from '../ContactUs'
import Content from './Content'

const Article = ({ article }) => {
    const { title, content, image, contactUsTitle } = article
    const [widthTag] = useViewSize()
    const { c2, c3, primary } = useTheme()

    const isMobile = ["sm", "xs", "md"].includes(widthTag);

    const responsiveStyle = { width: isMobile ? '100%' : '50%' }

    return (
        <>
            <Text style={[styles.mainTitle, { backgroundColor: c3 }]}>{title}</Text>
            <View style={[styles.mainWrapper, { flexDirection: isMobile ? "column-reverse" : 'row' }]}>
                <View style={[responsiveStyle, { alignItems: 'center', }]}>
                    <Image resizeMode="contain" {...image} />
                    <ContactUs direction="column" title={contactUsTitle} />
                </View>
                <View style={responsiveStyle}>
                    <Content content={content} />
                </View>
            </View>
        </>
    )
}

export default Article

const styles = StyleSheet.create({
    mainTitle: { textAlign: 'right', padding: 30, fontSize: 30 },
    mainWrapper: { paddingHorizontal: 30, justifyContent: 'space-between' },
})
