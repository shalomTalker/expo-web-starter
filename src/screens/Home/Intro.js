import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SwitcherBCG from '../../components/SwitcherBCG'
import { useTheme } from '../../context/StyleContext'
import useViewSize from '../../hooks/useViewSize'

const Intro = () => {
    const { primary, c5 } = useTheme()

    const [, heightSize, widthSize] = useViewSize()

    const textWidth = widthSize * 0.7;

    const textHeight = 200;


    return (
        <View style={{ height: heightSize, width: widthSize }} >
            <SwitcherBCG />
            <View style={[styles.container, {
                top: (heightSize / 2) - (textHeight / 2),
            }]}>
                <View style={{ alignItems: 'center' }}>
                    <Text numberOfLines={2} style={{
                        flex: 0.7,
                        fontSize: widthSize * 0.04,
                        fontWeight: 600,
                        textAlign: 'center',
                        color: c5,
                    }}>{`אור פרים , משרד עורך דין`}</Text>
                    <DetailsSection textColor={c5} />
                </View>
                <Image style={{
                    width: 200, height: 200
                }} source={require('../../assets/logo.png')} />
            </View>
        </View>
    )
}

export default Intro

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100%'
    }
})





