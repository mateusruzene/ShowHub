import React from "react";

import '../styles/modal.css'

import facebookLogin from '../assets/Icons/icons8-facebook-login.svg'
import googleLogin from '../assets/Icons/icons8-google-login.svg'

const Modal = ({children}) => {
  return (
    <div className="modal">
      <div className='containerModal'>
      {children}
        <div className="login">
          <p>Login</p>
          <button><img src={googleLogin}/>Crie sua conta com Google</button>
          <button><img src={facebookLogin}/>Crie sua conta com Facebook</button>
        </div>
      </div>
    </div>
  )
}

export default Modal;