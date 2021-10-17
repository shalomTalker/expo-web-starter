import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { useTheme } from '../../context/StyleContext'
import useViewSize from '../../hooks/useViewSize'
import ContactUs from '../ContactUs'
import Content from './Content'

const Article = ({ article }) => {
    const { title, content, image, contactUsTitle } = article
    const [widthTag] = useViewSize()
    const { c2, c3, primary, secondary } = useTheme()

    const isMobile = ["sm", "xs", "md"].includes(widthTag);

    const responsiveStyle = { flex: isMobile ? 1 : 0.5, paddingHorizontal: 16 }

    return (
        <View style={{ backgroundColor: primary, flex: 1 }}>
            <Text style={[styles.mainTitle, { backgroundColor: c3, color: secondary }]}>{title}</Text>
            <View style={[styles.mainWrapper, { flexDirection: isMobile ? "column-reverse" : 'row' }]}>
                <View style={[responsiveStyle, { alignItems: 'center', }]}>
                    <Image {...image} />
                    <ContactUs direction="column" title={contactUsTitle} backgroundColor={c3} />
                </View>
                <View style={responsiveStyle}>
                    <Content content={content} />
                </View>
            </View>
        </View>
    )
}

export default Article

const styles = StyleSheet.create({
    mainTitle: { textAlign: 'right', padding: 30, fontSize: 30, fontWeight: 500 },
    mainWrapper: { paddingHorizontal: 30, flex: 1 },
})
