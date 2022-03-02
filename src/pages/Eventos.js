import React from 'react';
import {Header} from '../components/Header'
import {Footer} from '../components/Footer'

import '../styles/home.css';
import mblabs from '../assets/images/mblabs1.svg'
import google from '../assets/images/google1.svg'

export function Eventos(){
  return(
    <body className="home">
      <Header/>
      
      <nav className="nav">
        <button id='todos' class="btnNav">Todos</button>
        <button id='eventos' class="btnNav active">Eventos</button>
        <button id='shows' class="btnNav ">Shows</button>
      </nav>

      <main ection id='showEventos' className="main">
        <div className="container">
          <img src={mblabs}></img>
          <div className="description">
            <h2>Evento - Mb Labs</h2>
            <p>Dia 13/04/2022 - ás 14:30 - Campinas-SP </p>
          </div>
        </div>
        <div className="container">
          <img src={google}></img>
          <div className="description">
            <h2>Evento - Google Firebase</h2>
            <p>Dia 22/05/2022 - ás 8:30 - São Paulo</p>
          </div>
        </div>
       </main>
      <Footer/>
    </body>
  )
}