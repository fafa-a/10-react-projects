import React from "react"
import { Pie } from "react-chartjs-2"

export default function PieChart({ data, labels }) {
  return (
    <div className="chart-container-pies">
      <Pie
        redraw={true}
        data={{
          labels: labels,
          datasets: [
            {
              data: data,
              backgroundColor: [
                "rgb(255, 99, 132)",
                "rgb(54, 162, 235)",
                "rgb(255, 205, 86)",
              ],
            },
          ],
        }}
      />
    </div>
  )
}
