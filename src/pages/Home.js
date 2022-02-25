import React, { useState } from 'react';
import {Header} from '../components/Header'
import {Footer} from '../components/Footer'

import '../styles/home.css';
import mblabs from '../assets/images/mblabs1.svg';

export function Home(){
  return(
    <body className="home">
      <Header/>
      <nav className="nav">
        <button class="btnNav all">Todos</button>
        <button class="btnNav events">Eventos</button>
        <button class="btnNav shows">Shows</button>
      </nav>

      {/* Indefinido */}
      <main className="main">
        <div className="container">
          <div>
            <img src={mblabs}></img>
          </div>
          <div className="description">
            <h2>Evento - MB labs</h2>
            <p>Dia 12/04/2022 - ás 14:30 - Campinas</p>
          </div>
        </div>
        <div className="container">
          <div>
              <img src={mblabs}></img>
          </div>
          <div className="description">
            <h2>Evento - MB labs</h2>
            <p>Dia 12/04/2022 - ás 14:30 - Campinas</p>
          </div>
        </div>
        <div className="container">
          <div>
            <img src={mblabs}></img>
          </div>
          <div className="description">
            <h2>Evento - MB labs</h2>
            <p>Dia 12/04/2022 - ás 14:30 - Campinas</p>
          </div>
        </div>
        <div className="container">
          <div>
            <img src={mblabs}></img>
          </div>
          <div className="description">
            <h2>Evento - MB labs</h2>
            <p>Dia 12/04/2022 - ás 14:30 - Campinas</p>
          </div>
        </div>
      </main>

      <Footer/>

    </body>
  )
}