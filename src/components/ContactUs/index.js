import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Alert } from 'react-native'
import { useTheme } from '../../context/StyleContext'
import Text from '../Txt'
import ContactForm from './ContactForm'

const ContactUs = ({ backgroundColor, direction = 'row-reverse', title, titleStyle = {} }) => {
    const { gray, secondary } = useTheme()
    return (
        <View style={[styles.container, { backgroundColor }]}>
            <Text style={[styles.title, { fontSize: 22, color: secondary }]}>{title}</Text>
            <Text style={[styles.title, { fontSize: 18, color: secondary }, titleStyle]}>{`השאירו פרטים ונחזור אליכם בהקדם`}</Text>
            <View style={[styles.formContainer]}>
                <ContactForm direction={direction} />
            </View>
        </View>
    )
}

export default ContactUs

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flex: 1
    },
    formContainer: {
        paddingBottom: 50,
        justifyContent: 'center',
        alignItems: 'center',
        // flex: 1,
    },
    title: {

        margin: 16,
        fontWeight: 500
    }
})
