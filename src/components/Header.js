import React, {useState}from "react";
import Modal from './Modal.js'

import '../styles/header.css'

export function Header(){
  const [isModalVisible, setModalVisible] = useState(false);
  return(
    <header className="homeHeader">
        <div className="containerHeader">
        <h1 className="logo">ShowHub</h1>
        <button className="btn" onClick={() => setModalVisible(true)}>Entrar</button>
        {isModalVisible ? <Modal><button className="close" onClick={() => setModalVisible(false)}>✖</button></Modal>: null}
        </div>
      </header>
  )
}