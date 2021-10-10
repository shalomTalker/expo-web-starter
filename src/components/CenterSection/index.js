import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import { useTheme } from '../../context/StyleContext'
import useViewSize from '../../hooks/useViewSize'
import { Space } from '../Spacing'

const CenterSection = ({ mainTitle, subTitle, spanTitle, image, children }) => {
    const { c1, c4, primary } = useTheme()
    const [widthTag, heightSize] = useViewSize()
    const isMobile = ["sm", "xs"].includes(widthTag);
    return isMobile ? (
        <ImageBackground
            source={image}
            style={[styles.container, {
                opacity: 0.7,
                backgroundColor: primary,
                height: heightSize + 300,
            }]}>

            {children}
        </ImageBackground>
    ) : (
        <View style={[styles.container, {
            backgroundColor: primary, height: heightSize + 150,
            flexDirection: 'row'
        }]}>
            <View style={{ flex: 0.6 }}>

                {children}
            </View>
            <Image source={image} style={{
                height: '100%',
                flex: 0.4
            }} />
        </View>
    )
}

export default CenterSection

const styles = StyleSheet.create({
    container: {
        justifyContent: "flex-end",
        // alignItems: 'center',
        textAlign: 'center',
    }
})
