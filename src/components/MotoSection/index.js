import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import useViewSize from '../../hooks/useViewSize'
import { Space } from '../Spacing'

const MotoSection = ({ mainTitle, subTitle, spanTitle }) => {
    const [, heightSize] = useViewSize()
    return (
        <View style={{
            height: heightSize,
            backgroundColor: '#ededed',
            justifyContent: "center",
            alignItems: 'center',
            textAlign: 'center'
        }}>
            <Text style={{ color: "#947a70", fontSize: 30, fontWeight: 600 }}>≺ {mainTitle} ≻</Text>
            <Space height={48} />
            <Text style={{ color: "#004b54", fontSize: 25, width: '50%' }}>{subTitle}</Text>
            <Space height={16} />
            <Text style={{ color: "#004b54", fontSize: 20 }}>{spanTitle}</Text>
        </View>
    )
}

export default MotoSection

const styles = StyleSheet.create({})
