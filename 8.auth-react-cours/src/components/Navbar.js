import { useContext } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../context/userContext"
import { signOut } from "firebase/auth"
import { auth } from "../firebase-config"
import { useNavigate } from "react-router-dom"

export default function Navbar() {
  const { toggleModals } = useContext(UserContext)
  const navigate = useNavigate()

  const logOut = async () => {
    try {
      await signOut(auth)
      navigate("/")
    } catch (error) {}
    alert("For some reason you are not logged out")
  }
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
        <button onClick={logOut} className="btn btn-danger ms-2">
          Log out
        </button>
      </div>
    </nav>
  )
}
