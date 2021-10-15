import React from 'react'
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native'
import { useTheme } from '../../context/StyleContext'
import useViewSize from '../../hooks/useViewSize'

const Content = ({ content }) => {

    const { primary, secondary } = useTheme()
    const [widthTag] = useViewSize()
    const isMobile = ["sm", "xs"].includes(widthTag);


    const contentTextStyle = [styles.text, { color: secondary }]



    return content.map(({ text, type, items, image, content: cnt }, i) => {
        switch (type) {
            case 'underline':
                return <Text key={i.toString()} style={{ padding: 16 }}>
                    <Text style={[contentTextStyle, { textDecorationLine: 'underline', padding: 0 }]}>{text.split('–')[0]}</Text>
                    <Text style={[contentTextStyle, { padding: 0 }]}>:{text.split('–')[1]}</Text>
                </Text>
            case 'bold':
                return <Text key={i.toString()} style={[contentTextStyle, { fontWeight: 'bold' }]}>{text}</Text>
            case 'boldBySign':
                return <Text key={i.toString()} style={{ padding: 16 }}>
                    <Text style={[contentTextStyle, { fontWeight: 'bold', padding: 0 }]}>{text.split('&')[1]}</Text>
                    <Text style={[contentTextStyle, { padding: 0 }]}>{text.split('&')[2]}</Text>
                </Text>
            case 'list':
                return <>
                    <Text key={i.toString()} style={contentTextStyle}>{text}</Text>
                    {items.map((t, f) => <Text key={f.toString()} style={[contentTextStyle, { paddingVertical: 8, paddingRight: 8 }]}>{`- ${t}`}</Text>
                    )}
                </>
            case 'imagecaption':
                const renderText = () => cnt.map((c, g) =>
                    <Text key={g.toString()} style={[contentTextStyle]}>{c}</Text>);

                return (
                    <View key={i.toString()} style={{ flexDirection: isMobile ? 'column' : 'row', justifyContent: isMobile ? 'cebter' : 'space-between' }}>
                        <Image source={image.source} resizeMode='cover' style={[image.style, { flex: 0.3, height: 300 }]} />

                        <View style={{ flex: 0.6, }}>{renderText()}</View>
                    </View>
                )

            default:
                return <Text key={i.toString()} style={contentTextStyle}>{text}</Text>
        }
    })

}

export default Content

const styles = StyleSheet.create({ text: { fontSize: 18, padding: 16, fontWeight: 500, lineHeight: 30 } })

