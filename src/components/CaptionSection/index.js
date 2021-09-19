import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import useViewSize from '../../hooks/useViewSize'

const CaptionSection = () => {

    const [, heightSize, widthSize] = useViewSize()

    // '#f8f8f8'
    return (
        <View style={{ height: heightSize, backgroundColor: '#f0f0f0', flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between' }}>
            <View style={{
                position: "absolute",
                left: 0,
                backgroundColor: 'red',
                height: heightSize - 50,
                // paddingHorizontal: 200,
                width: 40 / 100 * widthSize,
                zIndex: 100,
            }}></View>
            <View style={{
                position: "absolute",
                right: 0,
                backgroundColor: 'green',
                height: heightSize,
                // paddingHorizontal: 500,
                width: 80 / 100 * widthSize,
                zIndex: -100,
            }}></View>
        </View>
    )
}

export default CaptionSection

const styles = StyleSheet.create({})
