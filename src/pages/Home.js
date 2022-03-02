import React, {useState} from 'react';
import {Header} from '../components/Header';
import {Footer} from '../components/Footer';

import Google from '../components/Google';
import Lola from '../components/Lola';
import MbLabs from '../components/MbLabs';
import Rock from '../components/Rock';
import Payment from '../components/Payment';

import '../styles/home.css';

import mblabs from '../assets/images/mblabs1.svg';
import google from '../assets/images/google1.svg';
import rock from '../assets/images/rockInRio1.svg';
import lola from '../assets/images/lola1.svg';

export default function Home(){
  const [isMbLabsVisible, setMblabsVisible] = useState(false);
  const [isGoogleVisible, setGoogleVisible] = useState(false);
  
  const [isFinalizarVisible, setFinalizarVisible] = useState(false);

  const [isRockVisible, setRockVisible] = useState(false);
  const [isLolaVisible, setLolaVisible] = useState(false);
  return(
    <body className="home">
      <Header/>
      <nav className="nav">
        <a id='todos' class="btnNav active" href='http://localhost:3000/'>Todos</a>
        <a id='eventos' class="btnNav" href='http://localhost:3000/Eventos'>Eventos</a>
        <a id='shows' class="btnNav" href='http://localhost:3000/Shows'>Shows</a>
      </nav>

      <main id='showEventos' className="main">
        <div className="container mblabs" onClick={() => setMblabsVisible(true)}>
          <img src={mblabs}></img>
          <div className="description">
            <h2>Evento - Mb Labs</h2>
            <p>Dia 13/04/2022 - ás 14:30 - Campinas-SP </p>
          </div>
        </div>

        {isMbLabsVisible ? 
        <MbLabs><button className="closeRequest" onClick={() => setMblabsVisible(false)}>✖</button>
        <button className="btnFinalizar" onClick={() => setFinalizarVisible(true)}>Finalizar</button>
        {isFinalizarVisible ? <Payment></Payment>: null}
        </MbLabs>: null}

        <div className="container" onClick={() => setGoogleVisible(true)}>
          <img src={google}></img>
          <div className="description">
            <h2>Evento - Google Firebase</h2>
            <p>Dia 22/05/2022 - ás 8:30 - São Paulo</p>
          </div>
        </div>

        {isGoogleVisible ? 
        <Google><button className="closeRequest" onClick={() => setGoogleVisible(false)}>✖</button>
        <button className="btnFinalizar" onClick={() => setFinalizarVisible(true)}>Finalizar</button>
        {isFinalizarVisible ? <Payment></Payment>: null}
        </Google>: null}

        <div className="container" onClick={() => setLolaVisible(true)}>
          <img src={lola}></img>
          <div className="description">
            <h2>Show - Lolapalooza Brasil</h2>
            <p>Dia 02/09/2022 - ás 19:00 - Curitiba-PR </p>
          </div>
        </div>

        {isLolaVisible ? 
        <Lola><button className="closeRequest" onClick={() => setLolaVisible(false)}>✖</button>
        <button className="btnFinalizar" onClick={() => setFinalizarVisible(true)}>Finalizar</button>
        {isFinalizarVisible ? <Payment></Payment>: null}
        </Lola>: null}

        <div className="container" onClick={() => setRockVisible(true)}>
          <img src={rock}></img>
          <div className="description">
            <h2>Show - Rock In Rio</h2>
            <p>Dia 05/12/2022 - ás 22:00 - Rio de Janeiro</p>
          </div>
        </div>

        {isRockVisible ? 
        <Rock><button className="closeRequest" onClick={() => setRockVisible(false)}>✖</button>
        <button className="btnFinalizar" onClick={() => setFinalizarVisible(true)}>Finalizar</button>
        {isFinalizarVisible ? <Payment></Payment>: null}
        </Rock>: null}

       </main>
      <Footer/>
    </body>
  )
}