import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Alert } from 'react-native'
import { useTheme } from '../../context/StyleContext'
import ContactForm from './ContactForm'

const ContactUs = ({ backgroundColor, direction = 'row-reverse', title, titleStyle = {} }) => {
    const { gray, secondary } = useTheme()
    return (
        <View style={[styles.container]}>
            <Text style={[styles.title, { fontSize: 22, color: secondary }]}>{title}</Text>
            <Text style={[styles.title, { fontSize: 18, color: secondary }, titleStyle,]}>{`השאירו פרטים ונחזור אליכם בהקדם`}</Text>
            <View style={[styles.formContainer, { flexDirection: direction }]}>
                <ContactForm />
            </View>
        </View>
    )
}

export default ContactUs

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: 'center',
    },
    formContainer: {
        paddingBottom: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        flex: 1,
        margin: 16,
        fontWeight: 500
    }
})
