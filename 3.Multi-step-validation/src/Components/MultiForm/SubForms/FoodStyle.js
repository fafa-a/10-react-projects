import React, { useRef, useEffect } from "react"
import "./SubForm.css"

export default function FoodStyle(props) {
  const preventFunc = e => {
    e.preventDefault()
    const styleData = {
      foodStyle: [],
    }
    allCheckboxes.current.forEach(checkbox => {
      if (checkbox.checked) {
        styleData.foodStyle.push(checkbox.value)
      }
    })
    props.modifyIndex(4, styleData)
  }

  const allCheckboxes = useRef([])
  const addCheckBox = el => {
    if (el && !allCheckboxes.current.includes(el)) {
      allCheckboxes.current.push(el)
    }
  }

  const handleReturn = () => {
    props.modifyIndex(2)
  }

  return (
    <form className="checkbox-form" onSubmit={preventFunc}>
      <p>Quelles sont tes cuisines préférées</p>
      <span>Choix multiples.</span>
      <label htmlFor="italian">Italienne</label>
      <input
        ref={addCheckBox}
        type="checkbox"
        name="italian"
        id="italian"
        value="italian"
      />

      <label htmlFor="japanese">Japonaise</label>
      <input
        ref={addCheckBox}
        type="checkbox"
        name="japanese"
        id="japanese"
        value="japanese"
      />

      <label htmlFor="indian">Indienne</label>
      <input
        ref={addCheckBox}
        type="checkbox"
        name="indian"
        id="indian"
        value="indian"
      />

      <label htmlFor="thaï">Thaîlandaise</label>
      <input
        ref={addCheckBox}
        type="checkbox"
        name="thaï"
        id="thaï"
        value="thaï"
      />

      <label htmlFor="french">Française</label>
      <input
        ref={addCheckBox}
        type="checkbox"
        name="french"
        id="french"
        value="french"
      />

      <label htmlFor="chinese">Chinoise</label>
      <input
        ref={addCheckBox}
        type="checkbox"
        name="chinese"
        id="chinese"
        value="chinese"
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
