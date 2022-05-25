import React from "react";
import "./App.css"
import DashboardEmployee from "./Pages/DashboardEmployees/DashboardEmployee"
import DashboardFinance from "./Pages/DashboardFinance/DashboardFinance"
import Sidebar from "./Components/Sidebar/Sidebar"
import { Routes, Route } from "react-router-dom"
import { DashboardContextProvider } from "./context/DashboardContext"

export default function App() {
  return (
    <DashboardContextProvider>
      <Sidebar />
      <Routes>
        <Route path="/" element={<DashboardFinance />} />
        <Route path="/dashboardEmployees" element={<DashboardEmployee />} />
      </Routes>
    </DashboardContextProvider>
  )
}
