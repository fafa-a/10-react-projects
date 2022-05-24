import React from "react"
import Contenu from "./Components/Contenu/Contenu"
import ToggleLangs from "./Components/ToggleLangs/ToggleLangs"
import ContextProviders from "./context/langContext"
function App() {
  return (
    <ContextProviders>
      <ToggleLangs />
      <Contenu />
    </ContextProviders>
  )
}

export default App
