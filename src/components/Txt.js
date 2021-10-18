import React from 'react'
import { StyleSheet, Text as Txt, View } from 'react-native'


const Text = ({ style, children, ...props }) => {
    return (
        <Txt style={[style, { fontFamily: 'VarelaRound_400Regular' }]} {...props}>{children}</Txt>
    )
}

export default Text

const styles = StyleSheet.create({})
