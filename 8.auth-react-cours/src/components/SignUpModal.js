import React from "react"
import { useContext } from "react"
import { UserContext } from "../context/userContext"

export default function SignUpModal() {
  const { toggleModals, modalState } = useContext(UserContext)

  return (
    <>
      {modalState.signUpModal && (
        <div className="position-fixed top-0 vw-100 vh-100">
          <div
            onClick={() => toggleModals("close")}
            className="w-100 h-100 bg-dark bg-opacity-75"
          ></div>
          <div
            className="position-absolute top-50 start-50 translate-middle"
            style={{ minWidth: "400px" }}
          >
            <div className="modal-dialog bg-light">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Sign up</h5>
                  <button className="btn-close" />
                </div>
                <div className="modal-body">
                  <form className="sign-up-form">
                    <div className="mb-3">
                      <label htmlFor="signUpEmail">Email adress</label>
                      <input
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
                        type="password"
                        className="form-control"
                        id="repeatPwd"
                        name="pwd"
                        required
                      />
                    </div>
                    <button
                      onClick={() => toggleModals("close")}
                      className="btn btn-primary"
                    >
                      Submit
                    </button>
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
