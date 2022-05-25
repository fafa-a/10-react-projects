import React from "react"
import "./Sidebar.css"
import iconDashboard from "./analytics.svg"
import { Link } from "react-router-dom"

export default function Sidebar() {
  return (
    <nav className="sidenav">
      <img src={iconDashboard} alt="icon analytiques" />
      <Link to="/">FINANCE</Link>
      <Link to="/dashboardEmployees">EMPLOI</Link>
    </nav>
  )
}
