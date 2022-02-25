import React, { useState } from 'react';
import {Header} from '../components/Header'
import {Footer} from '../components/Footer'

import '../styles/request.css';
import mblabs2 from '../assets/images/Rectangle 22.svg';

export function Request(){
  return(
    <body className="home">
      <Header/>
      <main>
        <div className='containerRequest'>
          <div className='containerImage'>
            <img src={mblabs2} alt='Imagem do evento/show'/>
          </div>
          <div className='descriptionRequest'>
            <h2>Nome do Evento</h2>
            <p>Data e hora</p>
            <p>Endereço</p>
            <p>Duração</p>
            <div className='prices'>
              <p>Inteira R$0,00</p>
              <p>Meia R$0,00</p>
            </div>
          </div>
        </div>
        {/* <div className='containerRequest'>
          <div className='tickets'>
            <h2>Ingressos</h2>
            <div>
              <button></button>
              <p></p>
              <button></button>
            </div>
            <div>
              <button></button>
              <p></p>
              <button></button>
            </div>
            <div>
              <button></button>
              <p></p>
              <button></button>
            </div>
          </div>
          <div className='typePayment'>
            <h2>Forma de Pagamento</h2>
            <p>Selecione uma forma de pagamento</p>
            <div>
              <input type='radio' name='pay'/>Boleto
              <input type='radio' name='pay'/>Pix
              <input type='radio' name='pay'/>Crédito
            </div>
            <p>Após a confirmação da compra, você receberá o ingresso através do email, que deverá ser apresentado na hora do evento</p>
            <p>Total:<span>R$0,00</span></p>
          </div>
        </div> */}
      </main>
      <Footer/>
    </body>
  )
}