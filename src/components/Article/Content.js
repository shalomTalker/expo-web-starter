import React from 'react'
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native'
import { useTheme } from '../../context/StyleContext'
import useViewSize from '../../hooks/useViewSize'

const Content = ({ content }) => {
    const { primary, secondary } = useTheme()
    const [widthTag] = useViewSize()
    const isMobile = ["sm", "xs"].includes(widthTag);

    return content.map(({ text, type, items, image, content: cnt }, i) => {
        switch (type) {
            case 'underline':
                return <Text key={i.toString()}>
                    <Text style={[styles.contentText, { textDecorationLine: 'underline' }]}>{text.split('–')[0]}</Text>
                    <Text style={styles.contentText}> - {text.split('–')[1]}</Text>
                </Text>
            case 'bold':
                return <Text key={i.toString()} style={[styles.contentText, { fontWeight: 'bold' }]}>{text}</Text>
            case 'boldBySign':
                return <Text key={i.toString()}>
                    <Text style={[styles.contentText, { fontWeight: 'bold' }]}>{text.split('&')[1]}</Text>
                    <Text style={[styles.contentText]}>{text.split('&')[2]}</Text>
                </Text>
            case 'list':
                return <>
                    <Text key={i.toString()} style={styles.contentText}>{text}</Text>
                    {items.map((t, f) => <Text key={f.toString()} style={[styles.contentText, { paddingVertical: 8, paddingRight: 8 }]}>{`- ${t}`}</Text>
                    )}
                </>
            case 'backgroundimage':
                const renderText = () => cnt.map((c, g) => <Text key={g.toString()} style={[styles.contentText, {
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
                return <Text key={i.toString()} style={styles.contentText}>{text}</Text>
        }
    })

}

export default Content

const styles = StyleSheet.create({
    contentText: { fontSize: 20, padding: 16, fontWeight: 500 },
})
