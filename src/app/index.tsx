import React, { useMemo } from 'react'
import { IntlProvider } from 'react-intl'

import { translations } from '../translations'
import { useLanguage } from '../hooks'
import { Routes } from './routes'
import { Header } from '../components/Header'

export const App = () => {
  const language = useLanguage()
  const messages = useMemo(() => ({ ...translations[language] }), [language])
  return (
    <IntlProvider locale={language} messages={messages}>
      <Header />
      <Routes />
    </IntlProvider >
  )
}
