import React, { useRef, useEffect } from "react"
import "./SubForm.css"

export default function Allergies(props) {
  const preventFunc = e => {
    e.preventDefault()
    const styleData = {
      allergies: [],
    }
    allCheckboxes.current.forEach(checkbox => {
      if (checkbox.checked) {
        styleData.allergies.push(checkbox.value)
      }
    })
    props.modifyIndex(5, styleData)
  }

  const allCheckboxes = useRef([])
  const addCheckBox = el => {
    if (el && !allCheckboxes.current.includes(el)) {
      allCheckboxes.current.push(el)
    }
  }

  const handleReturn = () => {
    props.modifyIndex(3)
  }

  return (
    <form className="checkbox-form" onSubmit={preventFunc}>
      <p>As-tu des allergies</p>
      <span>Choix multiples.</span>
      <label htmlFor="milk">Lait</label>
      <input
        ref={addCheckBox}
        type="checkbox"
        name="milk"
        id="milk"
        value="milk"
      />

      <label htmlFor="pollen">Pollen</label>
      <input
        ref={addCheckBox}
        type="checkbox"
        name="pollen"
        id="pollen"
        value="pollen"
      />

      <label htmlFor="nuts">Noix</label>
      <input
        ref={addCheckBox}
        type="checkbox"
        name="nuts"
        id="nuts"
        value="nuts"
      />

      <label htmlFor="eggs">Oeufs</label>
      <input
        ref={addCheckBox}
        type="checkbox"
        name="eggs"
        id="eggs"
        value="eggs"
      />

      <label htmlFor="shellfish">Fruits de mer</label>
      <input
        ref={addCheckBox}
        type="checkbox"
        name="shellfish"
        id="shellfish"
        value="shellfish"
      />

      <div className="container-nav-btns">
        <button onClick={handleReturn} type="button" className="prev">
          Précédent
        </button>
        <button>Valider</button>
      </div>
    </form>
  )
}
