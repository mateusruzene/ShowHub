import React,{useState} from "react";
import {Counter} from  './Counter';

import '../styles/request.css'

const Google = ({children}) => {
  return (
    <div className="payment">
      {children}
      <div className='containerPayment'>
        <div className="pay">
          <h2>Evento - Google </h2>
          <p>Dia 22/05/2022 - <span>ás 8:30 </span></p>
          <p>Av. Paulista, 123 - São Paulo</p>
          <p>Duração: 3 horas</p>
          <div className="qrCode">
            <span>Inteira: R$80.00</span>
            <span>Meia: R$40.00</span>
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

export default Google;