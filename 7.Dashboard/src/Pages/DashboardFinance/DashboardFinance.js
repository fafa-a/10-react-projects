import { useState, useContext } from "react"
import "./DashboardFinance.css"
import { DashboardContext } from "../../context/DashboardContext"
import BarChart from "../../Components/AllChart/BarChart"
import LineChart from "../../Components/AllChart/LineChart"

export default function DashboardFinance() {
  const { dataChart, changeYear, yearData } = useContext(DashboardContext)

  return (
    <div className="global-container">
      <h1>Les résultats de l'année: {yearData}</h1>
      <form>
        <label htmlFor="year">Choisissez une date</label>
        <select onChange={changeYear} id="year">
          <option defaultValue={yearData === "2020" && "2020"} value="2020">
            2020
          </option>
          <option defaultValue={yearData === "2019" && "2019"} value="2019">
            2019
          </option>
          <option defaultValue={yearData === "2018" && "2018"} value="2018">
            2018
          </option>
          <option defaultValue={yearData === "2017" && "2017"} value="2017">
            2017
          </option>
        </select>
      </form>
      <div className="dashboard-container">
        <BarChart data={dataChart.chart1} name={"Chiffres Bimestriels"} />
        <LineChart
          data={dataChart.chart2}
          name={"Nombres d'abonnés (en milliers)"}
        />
        <BarChart data={dataChart.chart4} name={"Budget marketing"} />
        <LineChart
          data={dataChart.chart3}
          name={"Nombres de clients (en milliers)"}
        />
      </div>
    </div>
  )
}
