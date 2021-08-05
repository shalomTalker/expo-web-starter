import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { white } from '../../constants'
import Btn from '../Btn'

const LinkItem = ({ name, title, icon }) => {
    const navigation = useNavigation();
    return (
        <Btn
            iconPosition="right"
            iconProps={{ ...icon, size: 20, color: white }}
            title={title}
            type="clear"
            titleStyle={{ color: white, fontSize: 15 }}
            onPress={() => navigation.navigate(name)} />
    )
}

export default LinkItem

const styles = StyleSheet.create({})
