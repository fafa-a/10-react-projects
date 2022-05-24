import { createContext, useState } from "react"

export const Context = createContext()
const supportedLangs = ["EN", "FR", "ES"]
let browserLang = navigator.language.slice(0, 2).toUpperCase()

if (supportedLangs.indexOf(browserLang) === -1) {
  console.log("not supported")
  browserLang = "EN"
}
const ContextProvider = ({ children }) => {
  const [lang, setLang] = useState(browserLang)
  const ToggleLang = changelang => {
    setLang(changelang)
  }
  return (
    <ContextProvider value={{ lang, ToggleLang }}>{children}</ContextProvider>
  )
}
export default ContextProvider
