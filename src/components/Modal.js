import React from "react";

import facebookLogin from '../assets/Icons/icons8-facebook-login.svg'
import googleLogin from '../assets/Icons/icons8-google-login.svg'

const Modal = () => {
  return (
    <div className="modal">
      <button className="Close">x</button>
      <div className="container">
        <p>Login</p>
        <button><img src={facebookLogin}/>Crie sua conta com Google</button>
        <button><img src={googleLogin}/>Crie sua conta com Facebook</button>
      </div>
    </div>
  )
}

export default Modal;