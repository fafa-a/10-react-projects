import { createContext, useState } from "react"

export const Context = createContext()

const ContextProvider = ({ children }) => {
  const [lang, setLang] = useState("EN")
  const ToggleLang = changelang => {
    setLang(changelang)
  }
  return (
    <ContextProvider value={{ lang, ToggleLang }}>{children}</ContextProvider>
  )
}
export default ContextProvider
