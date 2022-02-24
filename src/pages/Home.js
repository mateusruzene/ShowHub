import React from 'react';

import '../styles/home.css';
import mblabs from '../assets/images/mblabs.jpg';
import linkedin from '../assets/Icons/icons8-linkedin.svg'
import twitter from '../assets/Icons/icons8-twitter.svg'
import instagram from '../assets/Icons/icons8-instagram.svg'
import facebook from '../assets/Icons/icons8-facebook-white.svg'


export function Home(){
  return(
    <body className="home">

      <header className="homeHeader">
        <div className="containerHeader">
        <h1 className="logo">ShowHub</h1>
        <button className="btn">Entrar</button>
        </div>
      </header>

      <nav className="nav">
        <button class="btnNav all">Todos</button>
        <button class="btnNav events">Eventos</button>
        <button class="btnNav shows">Shows</button>
      </nav>

      {/* Indefinido */}
      <main className="main">
        <div className="container">
          <div className="img">
            <img src={mblabs}></img>
          </div>
          <div className="description">
            <h2>Evento - MB labs</h2>
            <p>Dia 12/04/2022 - ás 14:30 - Campinas</p>
          </div>
        </div>
        <div className="container">
        <div className="img">
            <img src={mblabs}></img>
          </div>
          <div className="description">
            <h2>Evento - MB labs</h2>
            <p>Dia 12/04/2022 - ás 14:30 - Campinas</p>
          </div>
        </div>
        <div className="container">
        <div className="img">
            <img src={mblabs}></img>
          </div>
          <div className="description">
            <h2>Evento - MB labs</h2>
            <p>Dia 12/04/2022 - ás 14:30 - Campinas</p>
          </div>
        </div>
        <div className="container">
        <div className="img">
            <img src={mblabs}></img>
          </div>
          <div className="description">
            <h2>Evento - MB labs</h2>
            <p>Dia 12/04/2022 - ás 14:30 - Campinas</p>
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="containerFooter">
          <div className="contactSocial">
            <div className="contact">
              <p>Entre em contato:</p>
              <ul>
                <li>Contato: (19) 99999-9999</li>
                <li>CNPJ: 68.891.644/0001-50</li>
                <li>Endereço: Rua João, 123-Campinas-SP</li>
              </ul>
            </div>
            <div className="socialMedia">
              <p>Redes Sociais:</p>
              <div>
              <img src={linkedin} className="icons"></img>
              <img src={twitter} className="icons"></img>
              <img src={instagram} className="icons"></img>
              <img src={facebook} className="icons"></img>
              </div>
            </div>
          </div>
        </div>
        <div className="copy">
          <p>ShowHub© 2022 - Todos os direitos reservados</p>
        </div>
      </footer>
    </body>
  )
}