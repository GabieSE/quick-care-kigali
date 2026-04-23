import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'
import type { Lang } from './translations'
import { translations } from './translations'

type LangContextType = {
  lang: Lang
  setLang: (l: Lang) => void
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  t: any
}

const LangContext = createContext<LangContextType>({
  lang: 'en',
  setLang: () => {},
  t: translations.en,
})

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en')
  return (
    <LangContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LangContext.Provider>
  )
}

export const useLang = () => useContext(LangContext)
