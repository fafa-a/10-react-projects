import React from "react"
import { Line } from "react-chartjs-2"

export default function LineChart({ name, data }) {
  return (
    <div className="chart-container">
      <Line
        redraw={true}
        data={{
          labels: [data[0], data[1], data[2], data[3], data[4], data[5]],
          datasets: [
            {
              label: name,
              data: data,
              backgroundColor: ["rgba(255, 99, 132, 0.8)"],
              borderColor: ["rgba(255, 99, 132, 1)"],
              borderWidth: 1,
            },
          ],
        }}
        options={{
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  min: 0,
                  max: 20,
                },
              },
            ],
          },
          legend: {
            labels: {
              boxWidth: 0,
            },
          },
        }}
      />
    </div>
  )
}
