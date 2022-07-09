import React from 'react'
import { StyleSheet, View, Image, ImageBackground } from 'react-native'
import { useTheme } from '../../context/StyleContext'
import useViewSize from '../../hooks/useViewSize'
import Text from "../Txt";


const Content = ({ content }) => {

    const { primary, secondary } = useTheme()
    const [widthTag] = useViewSize()
    const isMobile = ["sm", "xs"].includes(widthTag);

    const contentTextStyle = [styles.text, { color: secondary }]
    const renderContent = () => {

        return content.map(({ text, type, items, image, content: cnt }, i) => {
            switch (type) {
                case 'underline':
                    return <Text key={i.toString()} style={{ padding: 8, textAlign: 'justify' }}>
                        <Text style={[contentTextStyle, { textDecorationLine: 'underline', padding: 0 }]}>{`${text.split('–')[0]}:\n`}</Text>
                        <Text style={[contentTextStyle, { padding: 0 }]}>{text.split('–')[1]}</Text>
                    </Text>
                case 'bold':
                    return <Text key={i.toString()} style={[contentTextStyle, { fontWeight: 'bold' }]}>{text}</Text>
                case 'boldBySignStart':
                    return <Text key={i.toString()} style={{ padding: 8, textAlign: 'justify' }}>
                        <Text style={[contentTextStyle, { fontWeight: 'bold', padding: 0 }]}>{text.split('&')[1]}</Text>
                        <Text style={[contentTextStyle, { padding: 0 }]}>{text.split('&')[2]}</Text>
                    </Text>
                case 'boldBySignEnd':
                    return <Text key={i.toString()} style={{ padding: 8, textAlign: 'justify' }}>
                        <Text style={[contentTextStyle, { padding: 0 }]}>{text.split('&')[0]}</Text>
                        <Text style={[contentTextStyle, { fontWeight: 'bold', padding: 0 }]}>{text.split('&')[1]}</Text>
                    </Text>
                case 'list':
                    return <View key={i.toString()}>
                        <Text style={contentTextStyle}>{text}</Text>
                        {items.map((t, f) => <Text key={f.toString()} style={[contentTextStyle, { paddingVertical: 4, paddingRight: 8 }]}>{`• ${t}`}</Text>
                        )}
                    </View>
                case 'imagecaption':
                    const renderText = () => cnt.map((c, g) =>
                        <Text key={g.toString()} style={[contentTextStyle]}>{c}</Text>);

                    return (
                        <View key={i.toString()} style={{

                            flexDirection: isMobile ? 'column' : 'row-reverse',
                            justifyContent: isMobile ? 'center' : 'space-between',
                            alignItems: 'center'

                        }}>
                            <View style={{ flex: 1, width: isMobile ? '100%' : '60%' }}>{renderText()}</View>
                            {/* <Image source={image.source} style={[image.style, { width: isMobile ? '100%' : 350, height: 300, marginRight: isMobile ? 0 : 45 }]} /> */}
                            <Image source={image.source} style={[ { width: isMobile ? '100%' : 350, height: 500, marginRight: isMobile ? 0 : 45 },image.style]} />

                        </View>
                    )

                default:
                    return <Text key={i.toString()} style={contentTextStyle}>{text}</Text>
            }
        })
    }
    return <View style={{ flex: 1 }}>
        {renderContent()}
    </View>

}

export default Content

const styles = StyleSheet.create({ text: { fontSize: 18, padding: 4, fontWeight: 500, lineHeight: 30, textAlign: 'justify' } })

