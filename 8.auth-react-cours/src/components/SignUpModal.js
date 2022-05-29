import React from "react"
import { useContext, useRef, useState } from "react"
import { UserContext } from "../context/userContext"
import { useNavigate } from "react-router-dom"

export default function SignUpModal() {
  const { toggleModals, modalState, signUp } = useContext(UserContext)
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
    if (
      (inputs.current[1].value.length || inputs.current[2].value.length) < 6
    ) {
      setValidation("6 characters min")
      return
    } else if (inputs.current[1].value !== inputs.current[2].value) {
      setValidation("Passwords must match")
      return
    }
    try {
      const cred = await signUp(
        inputs.current[0].value,
        inputs.current[1].value
      )
      formRef.current.reset()
      setValidation("")
      toggleModals("close")
      navigate("private/private-home")
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setValidation("Email already in use")
      }
      if (error.code === "auth/invalid-email") {
        setValidation("Invalid email")
      }
    }
  }

  const closeModal = () => {
    setValidation("")
    toggleModals("close")
  }

  return (
    <>
      {modalState.signUpModal && (
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
                      <label htmlFor="signUpEmail">Email adress</label>
                      <input
                        ref={addInputs}
                        type="email"
                        className="form-control"
                        id="signUpEmail"
                        name="email"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="signUpPwd">Password</label>
                      <input
                        ref={addInputs}
                        type="password"
                        className="form-control"
                        id="signUpPwd"
                        name="pwd"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="repeatPwd">Repeat Password</label>
                      <input
                        ref={addInputs}
                        type="password"
                        className="form-control"
                        id="repeatPwd"
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
