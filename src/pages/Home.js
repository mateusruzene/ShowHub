import React from 'react'
import "../styles/home.css"
export function Home(){
  return(
    <div className="home">
      <header className="homeHeader">
        <div className="containerHeader">
        <h1 className="logo">ShowHub</h1>
        <button className="btn">Entrar</button>
        </div>
      </header>
    </div>
  )
}