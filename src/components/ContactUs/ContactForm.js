import React, { useEffect, useState } from 'react'
import { Formik } from 'formik';
import * as Yup from 'yup';
import { StyleSheet, Text, View, Alert } from 'react-native'

import { gray, lightGray, white } from '../../constants'
import TextInput from '../TextInput';
import Btn from '../Btn';
import { sendEmail } from "../../utils";
const validationSchema = Yup.object({
    fullName: Yup.string().min(2, `שם לא תקין`).required(`שם מלא חסר`),
    phone: Yup.string()
        .matches(/^[0][5][0|2|3|4|5|9]{1}[-]{0,1}[0-9]{7}$/, `מספר פלאפון שגוי`)
        .required(`פלאפון חסר`),
    email: Yup.string().email(`אימייל שגוי`).required(`אימייל חסר`),

})
const initialValues = {
    fullName: '',
    phone: '',
    email: '',
};
const inputs = [
    {
        name: "fullName",
        placeholder: `שם מלא`,
        keyboardType: "default"
    },
    {
        name: "phone",
        placeholder: `טלפון`,
        keyboardType: "number-pad"
    },
    {
        name: "email",
        placeholder: `מייל`,
        keyboardType: "default"
    },
]
const ContactForm = () => {

    const onSubmit = (values, formikActions) => {
        setTimeout(async () => {
            try {
                await sendEmail(values)
                formikActions.resetForm({})
                formikActions.setStatus({ success: true })
                formikActions.setSubmitting(false);
            } catch (error) {
                console.log(error);
            }
        }, 500);
    }
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            validateOnMount={false}
            validateOnChange={false}
            onSubmit={onSubmit}>
            {(props) => {
                const { handleChange, values, errors, touched, handleSubmit, isSubmitting } = props;
                return <>
                    {inputs.map(({ name, ...other }, i) => {
                        return <TextInput
                            key={i.toString()}
                            errors={errors}
                            name={name}
                            touched={touched}
                            value={values[name]}
                            onChangeText={handleChange(name)}
                            style={styles.input}
                            {...other}
                        />
                    })}
                    <Btn
                        disabled={isSubmitting}
                        title={`מעוניין בפרטים נוספים`}
                        onPress={handleSubmit}
                        buttonStyle={{ width: 200 }}
                        loading={isSubmitting}
                    />
                </>
            }}
        </Formik>
    )
}

export default ContactForm

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        height: 44,
        padding: 10,
        margin: 10,
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: white,
        textAlign: 'end'
    },
    inputContainer: {
        padding: 50,
        flexDirection: 'row-reverse',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
})
