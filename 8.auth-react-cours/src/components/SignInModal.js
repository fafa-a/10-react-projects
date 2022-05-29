import React from "react"
import { useContext, useRef, useState } from "react"
import { UserContext } from "../context/userContext"
import { useNavigate } from "react-router-dom"

export default function SignInModal() {
  const { toggleModals, modalState, signIn } = useContext(UserContext)
  const [validation, setValidation] = useState("")
  const navigate = useNavigate()
  const inputs = useRef([])
  const formRef = useRef()

  const addInputs = el => {
    if (el && !inputs.current.includes(el)) {
      inputs.current.push(el)
    }
  }

  const handleForm = async e => {
    e.preventDefault()

    try {
      await signIn(inputs.current[0].value, inputs.current[1].value)
      setValidation("")
      toggleModals("close")
      navigate("private/private-home")
    } catch (error) {
      setValidation("Invalid email or password")
    }
  }

  const closeModal = () => {
    setValidation("")
    toggleModals("close")
  }

  return (
    <>
      {modalState.signInModal && (
        <div className="position-fixed top-0 vw-100 vh-100">
          <div
            onClick={closeModal}
            className="w-100 h-100 bg-dark bg-opacity-75"
          />
          <div
            className="position-absolute top-50 start-50 translate-middle"
            style={{ minWidth: "400px" }}
          >
            <div className="modal-dialog bg-light">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Sign up</h5>
                  <button onClick={closeModal} className="btn-close" />
                </div>
                <div className="modal-body">
                  <form
                    onSubmit={handleForm}
                    ref={formRef}
                    className="sign-up-form"
                  >
                    <div className="mb-3">
                      <label htmlFor="signInEmail">Email adress</label>
                      <input
                        ref={addInputs}
                        type="email"
                        className="form-control"
                        id="signInEmail"
                        name="email"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="signInPwd">Password</label>
                      <input
                        ref={addInputs}
                        type="password"
                        className="form-control"
                        id="signInPwd"
                        name="pwd"
                        required
                      />
                    </div>
                    <p className="text-danger mt-1">{validation}</p>
                    <button className="btn btn-primary">Submit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
