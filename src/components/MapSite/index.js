import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { keyExtractor } from '../../constants'
import { useTheme } from '../../context/StyleContext';
import useViewSize from '../../hooks/useViewSize';
import { Space } from '../Spacing';
import Text from '../Txt';
import ListItem from './ListItem';

const mapList = [
    //     {
    //     title: `תפריט ראשי`,
    //     items: [
    //         {
    //             type: 'navigate',
    //             title: `דף הבית`,
    //             name: "home",
    //             icon: { name: "chevron-left" }
    //         },
    //         {
    //             type: 'navigate',
    //             title: `אודות`,
    //             name: "about",
    //             icon: { name: "chevron-left" }
    //         },
    //         {
    //             type: 'navigate',
    //             title: `תחומי עיסוק`,
    //             name: "interests",
    //             icon: { name: "chevron-left" }
    //         },
    //         {
    //             type: 'navigate',
    //             title: `צור קשר`,
    //             name: "contact",
    //             icon: { name: "chevron-left" }
    //         },
    //     ]
    // },

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
                title: `or@frimlaw.com`,
                name: "email",
                icon: { name: "email" },
                href: 'mailto:or@frimlaw.com'
            },
            {
                type: 'link',
                title: `בניין עזריאלי (רח' החרושת 2), עכו`,
                name: "address",
                icon: { name: "map-marker-radius" },
                href: 'https://waze.com/ul/hsvbgq33yf'
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
    const [, , widthSize] = useViewSize()

    return (
        <View style={[styles.container, {
            flexDirection: direction,
            backgroundColor: c2,
            marginHorizontal: 40
        }]}>
            {
                mapList.map(({ title, items }, i) =>
                    <View key={i.toString()} style={[styles.sectionConatiner, direction == 'row' && { flex: 1 }]}>
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
            <View style={{ flex: 1, padding: 4, paddingHorizontal: 16 }}>
                <Text style={{ fontSize: 25, color: primary }}>{`אור פרים, משרד עורכי דין`}</Text>
                <Space height={1} backgroundColor={primary} />

                <View style={[styles.flatlistContainer]}>
                    <Text style={{ fontSize: 16, color: primary, textAlign: 'justify' }}>{
                        `אור פרים, משרד עורכי דין מעניק שירות משפטי מלא בתחום המשפט הפלילי, משפט צבאי, תעבורה, הליכים אזרחיים וקניית ומכירת דירות. המשרד חרט על דגלו להעניק שירות אישי, יסודי, מקצועי ובלתי מתפשר לכל לקוחותיו.`}</Text>
                    <Space height={20} />
                    <Text style={{ fontSize: 16, color: primary, textAlign: 'justify' }} >
                        {`כל הזכויות שמורות לעורך הדין אור פרים. אין להעתיק או לעשות שימוש בכל תוכן מהאתר. תוכן האתר אינו מהווה המלצה ו/או ייעוץ משפטי. ©`}
                    </Text>
                </View>
            </View>




        </View>
    )
}

export default MapSite

const styles = StyleSheet.create({
    container: {
        height: 'auto',
        justifyContent: 'space-between',
        textAlign: 'right',
        margin: 20,
        borderRadius: 8
    },
    sectionConatiner: {
        // flex: 1,
        padding: 4,
        marginHorizontal: 16,
    },
    flatlistContainer: {
        // flex: 1,
        marginTop: 8,
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        // flexWrap: 'wrap'
    }

})
