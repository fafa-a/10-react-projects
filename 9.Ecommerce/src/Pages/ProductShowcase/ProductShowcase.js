import { useState, useEffect, useRef } from "react"
import "./ProductShowcase.css"
import { useParams } from "react-router-dom"
import inventory from "../../data/inventory"
import { useDispatch } from "react-redux"

export default function ProductShowcase() {
  const { id } = useParams()
  const productClicked = inventory.findIndex(
    obj => obj.title.replace(/\s/g, "").trim() === id
  )
  return (
    <div className="showcase">
      <div className="container-img-showcase">
        <img
          src={`/images/${inventory[productClicked].img}.png`}
          alt=""
          className="img-showcase"
        />
      </div>
    </div>
  )
}
