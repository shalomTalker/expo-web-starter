import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { useTheme } from '../../context/StyleContext'
import useViewSize from '../../hooks/useViewSize'
import ContactUs from '../ContactUs'
import Text from '../Txt'
import Content from './Content'

const Article = ({ article }) => {
    const { title, content, image, contactUsTitle } = article
    const [widthTag] = useViewSize()
    const { c2, c3, primary, secondary } = useTheme()

    const isMobile = ["sm", "xs", "md"].includes(widthTag);

    const responsiveStyle = { paddingHorizontal: 16, width: isMobile ? '100%' : '50%' }

    return (
        <View style={{ backgroundColor: primary, flex: 1 }}>
            <Text style={[styles.mainTitle, { backgroundColor: c3, color: secondary, }]}>{title}</Text>
            <View style={[styles.mainWrapper, { flexDirection: isMobile ? "column" : 'row-reverse' }]}>
                <View style={[responsiveStyle, { paddingRight: 40 }]}>
                    <Content content={content} />
                </View>
                <View style={[responsiveStyle, { flex: 1, alignItems: 'center' }]}>
                    <Image {...image} style={[image.style, { marginTop: 36 }]} />

                    {/* <ContactUs direction="column" title={contactUsTitle} /> */}
                </View>
            </View>
            <Text style={[{
                fontSize: 22, color: secondary,
                margin: 16,
                fontWeight: 500,
                textAlign: 'center'
            }]}>{contactUsTitle}</Text>
        </View>
    )
}

export default Article

const styles = StyleSheet.create({
    mainTitle: { textAlign: 'right', padding: 30, fontSize: 30, fontWeight: 500, },
    mainWrapper: { paddingHorizontal: 15, },
})
