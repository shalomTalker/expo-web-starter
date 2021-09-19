import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Alert } from 'react-native'
import { gray, lightGray, white } from '../../constants'
import ContactForm from './ContactForm'

const ContactUs = ({ backgroundColor = gray, direction = 'row-reverse' }) => {

    return (
        <View style={[styles.container, { backgroundColor }]}>
            <Text style={[styles.title, { fontSize: 22 }]}>{`כותרת ליצירת קשר?`}</Text>
            <Text style={[styles.title, { fontSize: 18 }]}>{`השאירו פרטים ונחזור אליכם בהקדם`}</Text>
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
        color: white
    }
})
