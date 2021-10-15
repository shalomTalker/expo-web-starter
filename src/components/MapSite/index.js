import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { keyExtractor } from '../../constants'
import { useTheme } from '../../context/StyleContext';
import { Space } from '../Spacing';
import ListItem from './ListItem';

const mapList = [{
    title: `תפריט ראשי`,
    items: [
        {
            type: 'navigate',
            title: `דף הבית`,
            name: "home",
            icon: { name: "chevron-left" }
        },
        {
            type: 'navigate',
            title: `אודות`,
            name: "about",
            icon: { name: "chevron-left" }
        },
        {
            type: 'navigate',
            title: `תחומי עיסוק`,
            name: "interests",
            icon: { name: "chevron-left" }
        },
        {
            type: 'navigate',
            title: `צור קשר`,
            name: "contact",
            icon: { name: "chevron-left" }
        },
    ]
},

{
    title: `שירותי המשרד`,
    items: [
        {
            type: 'deep-navigate',
            title: `עורך דין פלילי`,
            name: "office",
            value: "criminal",
            icon: { name: "chevron-left" }
        },
        {
            type: 'deep-navigate',
            title: `עורך דין צבאי`,
            name: "office",
            value: "military",
            icon: { name: "chevron-left" }
        },
        {
            type: 'deep-navigate',
            title: `עורך דין תעבורה`,
            name: "office",
            value: "traffic",
            icon: { name: "chevron-left" }
        },
        {
            type: 'deep-navigate',
            title: `עורך דין אזרחי`,
            name: "office",
            value: "civilLitigation",
            icon: { name: "chevron-left" }
        },
        {
            type: 'deep-navigate',
            title: `תביעות לשון הרע`,
            name: "office",
            value: "defamation",
            icon: { name: "chevron-left" }
        },
        {
            type: 'deep-navigate',
            title: `ליווי וייצוג נפגעי עבירה`,
            name: "office",
            value: "victimsCrime",
            icon: { name: "chevron-left" }
        },
        {
            type: 'deep-navigate',
            title: `יצוג ברכישת ומכירת דירה`,
            name: "office",
            value: "realEstate",
            icon: { name: "chevron-left" }
        },
    ]
},
{
    title: `פרטי התקשרות`,
    items: [
        {
            type: 'link',
            title: `050-8347079`,
            name: "phone",
            icon: { name: "phone" },
            href: 'tel:0508347079'
        },
        {
            type: 'link',
            title: `or@firmlaw.com`,
            name: "email",
            icon: { name: "email" },
            href: 'mailto:or@firmlaw.com'
        },
        {
            type: 'link',
            title: `שדרות הפלי"ם 2 בניין ברוש, חיפה`,
            name: "address",
            icon: { name: "map-marker-radius" },
            href: 'https://www.waze.com/ul?q=%D7%A9%D7%93%27+%D7%A4%D7%9C%D7%99%22%D7%9D+2'
        },
        {
            type: 'link',
            title: `153-50-8347079`,
            name: "fax",
            icon: { name: "fax" },
            href: 'fax:+972-153-50-8347079'
        },
    ]
},

]


const MapSite = ({ direction }) => {

    const { gray, primary, c2 } = useTheme()
    return (
        <View style={[styles.container, {
            flexDirection: direction, backgroundColor: c2,
        }]}>
            {
                mapList.map(({ title, items }, i) =>
                    <View key={i.toString()} style={styles.sectionConatiner}>
                        <Text style={{ fontSize: 25, color: primary }}>{title}</Text>
                        <Space height={1} backgroundColor={primary} />
                        <View style={[styles.flatlistContainer]}>
                            {items.map((item, id) => {
                                return (
                                    <ListItem key={id.toString()} {...item} />
                                )
                            })}
                        </View>
                    </View>
                )
            }

        </View>
    )
}

export default MapSite

const styles = StyleSheet.create({
    container: {
        // flex: 0.8,
        justifyContent: 'space-between',
        textAlign: 'right',
        margin: 50,
        borderRadius: 8
    },
    sectionConatiner: {
        padding: 4,
        marginHorizontal: 16
    },
    flatlistContainer: {
        marginTop: 16,
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    }

})
