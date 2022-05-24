import React, { useState } from "react"
import "./SubForm.css"

export default function DietForm(modifyIndex) {
  const preventFunc = e => e.preventDefault()
  const handleRadio = () => {}
  return (
    <form onSubmit={preventFunc} className="diet-form">
      <p>Quel est ton régime alimentaire ?</p>
      <label htmlFor="nodiet">Pad de régime en particulier</label>
      <input
        type="radio"
        onChange={handleRadio}
        name="diet"
        id="nodiet"
        value="nodiet"
      />
      <label htmlFor="Omnivorous">Omnivore</label>
      <input
        type="radio"
        onChange={handleRadio}
        name="diet"
        id="Omnivorous"
        value="Omnivorous"
      />{" "}
      <label htmlFor="vegetarian">Végétarien</label>
      <input
        type="radio"
        onChange={handleRadio}
        name="diet"
        id="vegetarian"
        value="vegetarian"
      />{" "}
      <label htmlFor="vegan">Vegan</label>
      <input
        type="radio"
        onChange={handleRadio}
        name="diet"
        id="vegan"
        value="vegan"
      />
      <button onClick={() => modifyIndex(3)}>Valider</button>
    </form>
  )
}
