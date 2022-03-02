import React from 'react';
import {Header} from '../components/Header'
import {Footer} from '../components/Footer'

import '../styles/home.css';
import rock from '../assets/images/rockInRio1.svg'
import lola from '../assets/images/lola1.svg'

export function Shows(){
  return(
    <body className="home">
      <Header/>
      
      <nav className="nav">
        <button id='todos' class="btnNav">Todos</button>
        <button id='eventos' class="btnNav">Eventos</button>
        <button id='shows' class="btnNav active">Shows</button>
      </nav>

      <main ection id='showEventos' className="main">
        <div className="container">
          <img src={lola}></img>
          <div className="description">
            <h2>Show - Lolapalooza Brasil</h2>
            <p>Dia 02/09/2022 - ás 19:00 - Curitiba-PR </p>
          </div>
        </div>
        <div className="container">
          <img src={rock}></img>
          <div className="description">
            <h2>Show - Rock In Rio</h2>
            <p>Dia 05/12/2022 - ás 22:00 - Rio de Janeiro</p>
          </div>
        </div>
       </main>
      <Footer/>
    </body>
  )
}