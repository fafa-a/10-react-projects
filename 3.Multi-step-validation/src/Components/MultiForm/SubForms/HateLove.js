import { useState } from "react"
import "./SubForm.css"

export default function HateLove({ modifyIndex }) {
  const [formData, setFormData] = useState({
    prefs: {
      love: "",
      hate: "",
    },
  })
  const handleTxtArea = (e, pref) => {
    if (pref === "love") {
      setFormData({
        prefs: {
          ...formData.prefs,
          love: e.target.value,
        },
      })
    } else if (pref === "hate") {
      setFormData({
        prefs: {
          ...formData.prefs,
          hate: e.target.value,
        },
      })
    }
  }
  const preventFunc = e => {
    e.prevenDefault()
  }
  const handleReturn = () => {
    modifyIndex(4)
  }

  return (
    <form className="preferences-form" onSubmit={preventFunc}>
      <p>Pales-nous des aliments que tu préfères et que tu detestes</p>
      <label htmlFor="prefered">
        Tes aliments préférés, séparés par une virgule :
      </label>
      <textarea
        id="prefered"
        placeholder="Un ou plusieurs aliments, si tu en as"
        onChange={e => handleTxtArea(e, "love")}
      ></textarea>
      <label htmlFor="hated">
        Les aliments que tu ne supportes pas, séparés par une virgule :
      </label>
      <textarea
        id="hated"
        placeholder="Un ou plusieurs aliments, si tu en as"
        onChange={e => handleTxtArea(e, "hate")}
      ></textarea>
      <div className="container-nav-btns">
        <button type="button" onClick={handleReturn}>
          Prédédent
        </button>
        <button onClick={() => modifyIndex(6, formData)}>valider</button>
      </div>
    </form>
  )
}
