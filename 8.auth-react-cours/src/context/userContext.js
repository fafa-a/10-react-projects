import { createContext, useState, useEffect } from "react"

export const UserContext = createContext()

export function UserContextProvider({ children }) {
  const [modalState, setModalState] = useState({
    signUpModal: false,
    signInModal: false,
  })

  const toggleModals = modal => {
    if (modal === "signIn") {
      setModalState({
        signUpModal: false,
        signInModal: true,
      })
    }

    if (modal === "signUp") {
      setModalState({
        signUpModal: true,
        signInModal: false,
      })
    }

    if (modal === "close") {
      setModalState({
        signUpModal: false,
        signInModal: false,
      })
    }
  }
  
  return (
    <UserContext.Provider value={{ modalState, toggleModals }}>
      {children}
    </UserContext.Provider>
  )
}
