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
            title: `שירותי המשרד`,
            name: "office",
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
    title: `תחומי עיסוק`,
    items: [
        {
            type: 'deep-navigate',
            title: `משפט פלילי`,
            name: "interests",
            value: "criminal",
            icon: { name: "chevron-left" }
        },
        {
            type: 'deep-navigate',
            title: `משפט צבאי`,
            name: "interests",
            value: "military",
            icon: { name: "chevron-left" }
        },
        {
            type: 'deep-navigate',
            title: `תעבורה`,
            name: "interests",
            value: "traffic",
            icon: { name: "chevron-left" }
        },
        {
            type: 'deep-navigate',
            title: `ליטיגציה אזרחית`,
            name: "interests",
            value: "civilLitigation",
            icon: { name: "chevron-left" }
        },
        {
            type: 'deep-navigate',
            title: `דיני מקרקעין`,
            name: "interests",
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
                        <FlatList
                            contentContainerStyle={styles.flatlistContainer}
                            scrollEnabled={false}
                            showsVerticalScrollIndicator={false}
                            data={items}
                            keyExtractor={keyExtractor}
                            renderItem={({ item }) => <ListItem {...item} />}
                        />
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
        margin: 25,
        borderRadius: 8
    },
    sectionConatiner: {
        // flex: 1,
        padding: 8,
        marginHorizontal: 16
    },
    flatlistContainer: {
        // flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'flex-start'
    }

})
