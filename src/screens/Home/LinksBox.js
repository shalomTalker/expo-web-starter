import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, View, Image, Pressable } from 'react-native'
import Text from '../../components/Txt'
import { HOME_URI, ACCIDENT_URI, ARMY_URI, BALANCE_URI, HANDCUFFS_URI, LAW_URI } from '../../constants'
import { useTheme } from '../../context/StyleContext'
import useViewSize from '../../hooks/useViewSize'


const links = [
    {
        label: 'תעבורה',
        iconName: ACCIDENT_URI,
        routeName: 'interests',
        params: { value: 'traffic' }
    },
    {
        label: 'צבאי',
        iconName: ARMY_URI,
        routeName: 'interests',
        params: { value: 'military' }
    },
    {
        label: 'פלילי',
        iconName: HANDCUFFS_URI,
        routeName: 'interests',
        params: { value: 'criminal' }
    },
    {
        label: 'עוד...',
        iconName: LAW_URI,
        routeName: 'office',
    },
    {
        label: 'אזרחי',
        iconName: BALANCE_URI,
        routeName: 'interests',
        params: { value: 'civilLitigation' }
    },
    {
        label: 'מקרקעין',
        iconName: HOME_URI,
        routeName: 'interests',
        params: { value: 'realEstate' }
    },
]

const LinksBox = () => {
    const [widthTag] = useViewSize()
    const { secondary } = useTheme()
    const navigation = useNavigation()
    const containerStyle = widthTag == 'xs' ? {
        width: 320, height: 450, flexDirection: 'column-reverse',
    } : {
        width: 500, height: 400, flexDirection: 'row',
    }
    const itemStyle = widthTag == 'xs' ? { width: 100, height: 100 } : { width: 120, height: 120 }
    const imageStyle = widthTag == 'xs' ? { width: 50, height: 50 } : { width: 60, height: 60 }
    const textStyle = widthTag == 'xs' ? { fontSize: 25 } : { fontSize: 30 }


    return (
        <View style={[styles.container, containerStyle]}>
            {
                links.map(({ iconName, routeName, label, params }, i) => (
                    <Pressable
                        onPress={() => navigation.navigate(routeName, params)}
                        style={[styles.item, {
                            borderColor: secondary,
                            ...itemStyle
                        }]}>
                        <Image
                            source={{ uri: iconName }}
                            style={[styles.image, {
                                color: secondary,
                                ...imageStyle
                            }]} />
                        <Text style={[textStyle, { color: secondary }]}>{label}</Text>
                    </Pressable>
                ))
            }
        </View>
    )
}

export default LinksBox

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        flexWrap: 'wrap',
        // height: '100%',
        alignContent: 'center',
        // width: '100%',
        justifyContent: 'center'
    },
    item: {
        borderWidth: 5,
        margin: 8,
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer'
    },
    image: {

    }
})
