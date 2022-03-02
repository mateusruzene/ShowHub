import React, {useState} from 'react';
import {Header} from '../components/Header'
import {Footer} from '../components/Footer'
import MbLabs from '../components/MbLabs'

import '../styles/home.css';

import mblabs from '../assets/images/mblabs1.svg'
import google from '../assets/images/google1.svg'
import rock from '../assets/images/rockInRio1.svg'
import lola from '../assets/images/lola1.svg'

export function Home(){
  const [isMbLabsVisible, setMblabsVisible] = useState(false);
  return(
    <body className="home">
      <Header/>
      <nav className="nav">
        <button id='todos' class="btnNav active" >Todos</button>
        <button id='eventos' class="btnNav">Eventos</button>
        <button id='shows' class="btnNav">Shows</button>
      </nav>

      <main id='showEventos' className="main">
        <div className="container mblabs" onClick={() => setMblabsVisible(true)}>
          <img src={mblabs}></img>
          <div className="description">
            <h2>Evento - Mb Labs</h2>
            <p>Dia 13/04/2022 - ás 14:30 - Campinas-SP </p>
          </div>
        </div>
        {isMbLabsVisible ? <MbLabs><button className="close" onClick={() => setMblabsVisible(false)}>✖</button></MbLabs>: null}
        <div className="container">
          <img src={google}></img>
          <div className="description">
            <h2>Evento - Google Firebase</h2>
            <p>Dia 22/05/2022 - ás 8:30 - São Paulo</p>
          </div>
        </div>

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