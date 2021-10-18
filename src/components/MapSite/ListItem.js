import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { StyleSheet, View } from 'react-native'
import { useTheme } from '../../context/StyleContext'
import Btn from '../Btn'
import Icon from '../Icon'
import Anchor from '../../hoc/Anchor'
import Text from '../Txt'

const ListItem = ({ name, title, icon, type, value, href }) => {
    const { primary, secondary, c5 } = useTheme()
    const navigation = useNavigation();
    switch (type) {
        case 'navigate':
            return (
                <Btn
                    onPress={() => navigation.navigate(name)}
                    iconPosition="right"
                    iconProps={{ ...icon, size: 18, color: primary, style: { marginLeft: 10 } }}
                    title={title}
                    titleStyle={{ color: primary, fontSize: 18, fontFamily: 'VarelaRound_400Regular' }}
                    type="clear"
                />
            )
        case 'deep-navigate':
            return (
                <Btn
                    onPress={() => navigation.navigate(name, { value })}
                    iconPosition="right"
                    iconProps={{ ...icon, size: 18, color: primary, style: { marginLeft: 10 } }}
                    title={title}
                    titleStyle={{ color: primary, fontSize: 18, fontFamily: 'VarelaRound_400Regular' }}
                    type="clear"
                />
            )
        case 'link':
            return (
                <Anchor href={href} style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 8 }}>
                    <Text style={{ color: primary, fontSize: 18, marginVertical: 18 }}>{title}</Text>
                    <Icon {...icon} size={20} color={primary} style={[styles.icon, { borderColor: primary, marginLeft: 10 }]} />
                </Anchor>
            )
        default:
            return <View></View>
    }

}

export default ListItem

const styles = StyleSheet.create({ icon: { borderWidth: 1, borderRadius: '50%', padding: 3 } })
