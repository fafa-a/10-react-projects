import React from "react"
import "./Contenu.css"
import data from "../../assets/data"

export default function Contenu() {
  return (
    <div className="content">
      <h1 className="title">{data.FR.title}</h1>
      <p className="content-text">{data.FR.txt}</p>
    </div>
  )
}
