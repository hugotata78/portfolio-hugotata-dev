import React, { createContext, useEffect, useState } from 'react'
import { IntlProvider } from 'react-intl'
import msgEnglish from '../lang/en.json'
import msgSpanish from '../lang/es.json'

const DataContext = createContext()

const DataProvider = (props) => {


    const [defaultLocale, setDefaultLocale] = useState('es-US')
    const [defaultMessage, setDefaultMessage] = useState(msgSpanish)
    const [messages, setMessages] = useState(defaultMessage);
    const [locale, setLocale] = useState(defaultLocale);

    const handleOnChangeEnglish = (e) => {
        e.preventDefault()
        setMessages(msgEnglish);
        setLocale('en-US');
        localStorage.setItem('lang', 'en-US');
    }

    const handleOnChangeSpanish = (e) => {
        e.preventDefault()
        setMessages(msgSpanish);
        setLocale('es-US');
        localStorage.setItem('lang', 'es-US');
    }


    useEffect(() => {
        const lang = localStorage.getItem('lang')
        if (lang) {
            setDefaultLocale(lang)
            if (lang === 'es-US') {
                setDefaultMessage(msgSpanish)
            } else if (lang === 'en-US') {
                setDefaultMessage(msgEnglish)
            } else {
                setDefaultMessage(msgSpanish)
            }
        } else {

            setDefaultLocale('es-US')
            setDefaultMessage(msgSpanish)
        }


    }, [setDefaultLocale, setDefaultMessage])

    const value = {
        locale: [locale],
        messages:[messages],
        handleOnChangeEnglish: handleOnChangeEnglish,
        handleOnChangeSpanish: handleOnChangeSpanish
    }

    return (
        <DataContext.Provider value={value}>
            <IntlProvider locale={locale} messages={messages}>
                {props.children}
            </IntlProvider>
        </DataContext.Provider>
    )
}

export { DataProvider, DataContext }
