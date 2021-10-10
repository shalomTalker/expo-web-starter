import React from 'react'
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native'
import { useTheme } from '../../context/StyleContext'

const Content = ({ content }) => {
    const { primary } = useTheme()
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
            case 'image':
                return <Image resizeMode='cover' key={i.toString()} {...image} />
            case 'backgroundimage':
                return <ImageBackground key={i.toString()} {...image} >
                    {cnt.map((c, g) => <Text key={g.toString()} style={[styles.contentText, {
                        color: primary,
                        fontWeight: 'bold',
                        textShadowColor: '#585858',
                        textShadowOffset: { width: 5, height: 5 },
                        textShadowRadius: 10,
                    }]}>{c}</Text>)}
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
