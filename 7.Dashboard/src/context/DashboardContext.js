import React, { useState, createContext } from "react"
import fulldata from "./fulldata"

export const DashboardContext = createContext()

export const DashboardContextProvider = ({ children }) => {
  const [dataChart, setDataChart] = useState(fulldata["2020"])
  const [yearData, setYearData] = useState("2020")

  const changeYear = el => {
    setYearData(el.target.value)
    setDataChart(fulldata[el.target.value])
  }

  return (
    <DashboardContext.Provider value={{ changeYear, dataChart, yearData }}>
      {children}
    </DashboardContext.Provider>
  )
}
