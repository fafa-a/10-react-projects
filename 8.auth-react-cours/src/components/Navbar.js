import { useContext } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../context/userContext"

export default function Navbar() {
  const { toggleModals } = useContext(UserContext)

  return (
    <nav className="navbar navbar-light bg-light px-4">
      <Link to="/">AuthJS</Link>
      <div>
        <button
          onClick={() => toggleModals("signUp")}
          className="btn btn-primary"
        >
          Sign up
        </button>
        <button
          onClick={() => toggleModals("signIn")}
          className="btn btn-primary ms-2"
        >
          Sign in
        </button>
        <button className="btn btn-danger ms-2">Log out</button>
      </div>
    </nav>
  )
}
