import { useEffect, useState } from 'react'
import { SupportedLanguage } from '../translations'

export const useLanguage = () => {
  const [language, setLanguage] = useState<SupportedLanguage>('en')

  useEffect(() => {
    const defaultLanguage = window.localStorage.getItem('language') || 'en'
    setLanguage(defaultLanguage as SupportedLanguage)
  }, [])

  return language
}
