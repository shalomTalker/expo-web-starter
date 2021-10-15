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
            case 'backgroundimage':
                const renderText = () => cnt.map((c, g) => <Text key={g.toString()} style={[contentTextStyle, {
                    color: isMobile ? secondary : primary,
                    fontWeight: '600',
                    textShadowColor: '#585858',
                    textShadowOffset: { width: 5, height: 5 },
                    textShadowRadius: 10,
                }]}>{c}</Text>);
                return isMobile ?
                    <View key={i.toString()}>
                        <Image source={image.source} style={[image.style], { height: '40%' }} />
                        <View>{renderText()}</View>
                    </View>
                    :
                    <ImageBackground key={i.toString()} {...image} >
                        {renderText()}
                    </ImageBackground>
            default:
                return <Text key={i.toString()} style={contentTextStyle}>{text}</Text>
        }
    })

}

export default Content

const styles = StyleSheet.create({ text: { fontSize: 20, padding: 16, fontWeight: 500, lineHeight: 35 } })

