import React,{useState} from "react";
import {Counter} from  './Counter';


import '../styles/request.css'

const Rock = ({children}) => {
  return (
    <div className="request">
      {children}
      <div className='containerRequest'>
        <div className="pay">
          <h2>Show - Rock In Rio</h2>
          <p>Dia 05/12/2022  - <span>ás 22:00 </span></p>
          <p>Rua Botafogo , 129 - Rio de Janeiro</p>
          <p>Duração: 1 dia</p>
          <div className="qrCode">
            <span>Inteira: R$600.00</span>
            <span>Meia: R$300.00</span>
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

export default Rock;