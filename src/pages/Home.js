import React, { useState } from 'react';
import {Header} from '../components/Header'
import {Footer} from '../components/Footer'
import {Eventos} from '../components/Eventos.js'

import '../styles/home.css';

export function Home(){
  const todos = document.getElementById('todos');
  const eventos = document.getElementById('eventos');
  const shows = document.getElementById('shows');

  const showEventos = document.getElementById('showEventos');
  const showShows = document.getElementById('showShows');

  todos.onclick = async function clickTodos(){   
    todos.classList.add('active')
    eventos.classList.remove('active')
    shows.classList.remove('active')
    showEventos.classList.remove('invisible')
    showShows.classList.remove('invisible') 
 };
  eventos.onclick = function clickEventos(){   
    todos.classList.remove('active')
    eventos.classList.add('active')
    shows.classList.remove('active')
    showEventos.classList.remove('invisible')
    showShows.classList.add('invisible')
  };
  shows.onclick = function clickEventos(){   
    todos.classList.remove('active')
    eventos.classList.remove('active')
    shows.classList.add('active')
    showEventos.classList.add('invisible')
    showShows.classList.remove('invisible') 
  };
  return(
    <body className="home">
      <Header/>
      <nav className="nav">
        <button id='todos' class="btnNav active">Todos</button>
        <button id='eventos' class="btnNav">Eventos</button>
        <button id='shows' class="btnNav">Shows</button>
      </nav>
      <section id='showEventos' className="main">
          <Eventos id='Evento' name='MB labs' date='Dia 13/04/2022 - ás 14:30' city='Campinas-SP'></Eventos>
          <Eventos id='Evento' name='Google Firebase' date='Dia 22/05/2022 - ás 8:30' city='São Paulo'></Eventos>
       </section>
       <section id='showShows'className="main">
          <Eventos id='Show' name='Lolapalooza Brasil' date='Dia 02/09/2022 - ás 19:00' city='Curitiba-PR'></Eventos>
          <Eventos id='Show' name='Rock In Rio' date='Dia 05/12/2022 - ás 22:00' city='Rio de Janeiro'></Eventos>
       </section>
      <Footer/>
    </body>
  )
}