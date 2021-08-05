import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { white } from '../../constants'
import Btn from '../Btn'
import Icon from '../Icon'

const ListItem = ({ name, title, icon, type }) => {
    const navigation = useNavigation();
    switch (type) {
        case 'link':
            return (
                <Btn
                    onPress={() => navigation.navigate(name)}
                    iconPosition="right"
                    iconProps={{ ...icon, size: 20, color: white }}
                    title={title}
                    titleStyle={{ color: white, fontSize: 15 }}
                    type="clear"
                />
            )
        case 'list':
            return (
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ color: white, padding: 10 }}>{title}</Text>
                    <Icon name={icon.name} size={20} color={white} />
                </View>
            )
        default:
            return <View></View>
    }

}

export default ListItem

const styles = StyleSheet.create({})
