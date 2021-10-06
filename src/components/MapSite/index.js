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
            type: 'link',
            title: `דף הבית`,
            name: "home",
            icon: { name: "chevron-left" }
        },
        {
            type: 'link',
            title: `אודות`,
            name: "about",
            icon: { name: "chevron-left" }
        },
        {
            type: 'link',
            title: `שירותי המשרד`,
            name: "office",
            icon: { name: "chevron-left" }
        },
        {
            type: 'link',
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
            type: 'deep-link',
            title: `משפט פלילי`,
            name: "office",
            value: "criminal",
            icon: { name: "chevron-left" }
        },
        {
            type: 'deep-link',
            title: `משפט צבאי`,
            name: "office",
            value: "military",
            icon: { name: "chevron-left" }
        },
        {
            type: 'deep-link',
            title: `תעבורה`,
            name: "office",
            value: "traffic",
            icon: { name: "chevron-left" }
        },
        {
            type: 'deep-link',
            title: `ליטיגציה אזרחית`,
            name: "office",
            value: "civilLitigation",
            icon: { name: "chevron-left" }
        },
        {
            type: 'deep-link',
            title: `דיני מקרקעין`,
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
            type: 'list',
            title: `050-8347079`,
            name: "phone",
            icon: { name: "phone" }
        },
        {
            type: 'list',
            title: `or@firmlaw.com`,
            name: "email",
            icon: { name: "email" }
        },
        {
            type: 'list',
            title: `שדרות הפלי"ם 2 בניין ברוש, חיפה`,
            name: "address",
            icon: { name: "map-marker-radius" }
        },
        {
            type: 'list',
            title: `153-50-8347079`,
            name: "fax",
            icon: { name: "fax" }
        },
    ]
},

]


const MapSite = ({ direction }) => {
    const { gray, primary, c1 } = useTheme()
    return (
        <View style={[styles.container, {
            flexDirection: direction, backgroundColor: c1,
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
        paddingHorizontal: 50,
        justifyContent: 'space-between',
        textAlign: 'right',
        margin: 25,
        borderRadius: 8
    },
    sectionConatiner: {
        flex: 1,
        padding: 8,
        marginHorizontal: 16
    },
    flatlistContainer: {
        flex: 1,
        alignItems: 'flex-end'
    }

})
