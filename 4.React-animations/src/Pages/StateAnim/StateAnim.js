import { useState, useRef, useEffect } from "react"
import "./StateAnim.css"
import { useTransition, animated } from "react-spring"
import { v4 as uuidv4 } from "uuid"




export default function StateAnim() {
  const [inputData, setInputData] = useState([
    { id: uuidv4, txt: "Chopin" },
    { id: uuidv4, txt: "Mozart" },
    { id: uuidv4, txt: "Bach" },
  ])
  const inputRef = useRef()
  const handleData = e => {
    e.preventDefault()
    const newObj = {
      id: uuidv4,
      txt: inputRef.current.value,
    }
    setInputData([...inputData, newObj])
    inputRef.current.value = ""
  }
  return (
    <form onSubmit={handleData}>
      <label htmlFor="piano">Renseignez vos pianiste favoris</label>
      <input ref={inputRef} type="text" id="piano" />
      <ul>
        {inputData.map(item => (
          <li key={item.id}>{item.txt}</li>
        ))}
      </ul>
    </form>
  )
}
