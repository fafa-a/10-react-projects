import { Children, createContext, useState } from "react"

export const Context = createContext()

const ContextProvider = ({ children }) => {
  const [lang, setLang] = useState("EN")

  return <ContextProvider value={{ lang }}>{children}</ContextProvider>
}
export default ContextProvider
