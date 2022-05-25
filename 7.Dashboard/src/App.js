import React from "react";
import "./App.css"
import DashboardEmployee from "./Pages/DashboardEmployees/DashboardEmployee"
import DashboardFinance from "./Pages/DashboardFinance/DashboardFinance"
import Sidebar from "./Components/Sidebar/Sidebar"

import { Routes, Route } from "react-router-dom"
export default function App() {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="/" element={<DashboardFinance />} />
        <Route path="/dashboardEmployees" element={<DashboardEmployee />} />
      </Routes>
    </>
  )
}
