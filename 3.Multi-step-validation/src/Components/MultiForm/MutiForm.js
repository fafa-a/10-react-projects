import React from "react"
import "./MultiForm.css"
export default function MutiForm() {
  const [formIndex, setFormIndex] = useState(1)
  const [allFormData, setAllFormData] = useState({
    dietForm: "",
    foodStyle: [],
    allergies:[],
    prefs:{}
  })
  return <div>MutiForm</div>
}
