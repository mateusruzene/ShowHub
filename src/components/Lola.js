import React,{useState} from "react";
import {Counter} from  './Counter';

import '../styles/request.css'

const Lola = ({children}) => {
  return (
    <div className="request">
      {children}
      <div className='containerRequest'>
        <div className="pay">
          <h2>Show - Lolapalooza</h2>
          <p>Dia 02/09/2022 - <span> ás 19:00 </span></p>
          <p>Rua João Lima, 34 - Curitiba-PR</p>
          <p>Duração: 12 horas</p>
          <div className="qrCode">
            <span>Inteira: R$290.00</span>
            <span>Meia: R$145.00</span>
          </div>
        </div>
        <div className="bar"></div>
        <div className='information'>
          <h2>Ingressos</h2>
          <div className="ticket">
            <div className="addRemove">
              <h3>Inteira</h3>
              <Counter></Counter>
            </div>
            <div className="addRemove">
              <h3>Meia</h3>
              <Counter></Counter>
            </div>
            <div className="addRemove">
              <h3>Deficiente</h3>
              <Counter></Counter>
            </div>
          </div>
          <p>Após a confirmação da compra, você receberá o ingresso através do email, 
            que deverá ser apresentado na hora do evento</p>
        </div>
      </div>
      <div className="total">
          <p>Total: <span>R$0,00</span></p>
      </div>
    </div>
  )
}

export default Lola;