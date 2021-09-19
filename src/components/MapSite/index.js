import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { gray, keyExtractor, white } from '../../constants'
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
            title: `תחומי עיסוק`,
            name: "interests",
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
    title: `מאמרים אחרונים`,
    items: [
        {
            type: 'link',
            title: `כותרת של הכתבה/מאמר`,
            name: "interests",
            icon: { name: "chevron-left" }
        },
        {
            type: 'link',
            title: `כותרת של הכתבה/מאמר`,
            name: "interests",
            icon: { name: "chevron-left" }
        },
        {
            type: 'link',
            title: `כותרת של הכתבה/מאמר`,
            name: "interests",
            icon: { name: "chevron-left" }
        },
        {
            type: 'link',
            title: `כותרת של הכתבה/מאמר`,
            name: "interests",
            icon: { name: "chevron-left" }
        },
        {
            type: 'link',
            title: `כותרת של הכתבה/מאמר`,
            name: "interests",
            icon: { name: "chevron-left" }
        },
    ]
},
{
    title: `פרטי התקשרות`,
    items: [
        {
            type: 'list',
            title: `052-2210099`,
            name: "phone",
            icon: { name: "cellphone" }
        },
        {
            type: 'list',
            title: `רחוב המכבים 66, בני ברק`,
            name: "address_1",
            icon: { name: "map-marker-radius" }
        },
        {
            type: 'list',
            title: `רחוב סוקולוב 150, רמת גן`,
            name: "address_2",
            icon: { name: "map-marker-radius" }
        },
        {
            type: 'list',
            title: `shalom604@gmail.com`,
            name: "email",
            icon: { name: "at" }
        },
    ]
},

]


const MapSite = ({ direction }) => {
    return (
        <View style={[styles.container, { flexDirection: direction }]}>
            {
                mapList.map(({ title, items }, i) =>
                    <View key={i.toString()} style={styles.sectionConatiner}>
                        <Text style={{ fontSize: 25, color: white }}>{title}</Text>
                        <Space height={1} backgroundColor={white} />
                        <FlatList
                            contentContainerStyle={styles.flatlistContainer}
                            scrollEnabled={false}
                            showsVerticalScrollIndicator={false}
                            data={items}
                            keyExtractor={keyExtractor}
                            // renderItem={({ item }) => <ListItem {...item} />}
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
        flex: 1,
        paddingHorizontal: 50,
        justifyContent: 'space-between',
        textAlign: 'right',
        margin: 25,
        backgroundColor: gray,
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
