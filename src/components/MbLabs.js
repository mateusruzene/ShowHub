import React,{useState} from "react";
import Payment from './Payment'

import '../styles/request.css'

const MbLabs = ({children}) => {
  const [isFinalizarVisible, setFinalizarVisible] = useState(false);
  return (
    <div className="payment">
      <div className='containerPayment'>
        {children}
        <div className="pay">
          <h2>Evento - MB Labs</h2>
          <p>Dia 12/04/2022 - <span>ás 14:30 </span></p>
          <p>Rua Pedro da Silva , 456 - Campinas</p>
          <p>Duração: 2 horas e 30 minutos</p>
          <div className="qrCode">
            <span>Inteira: R$30.00</span>
            <span>Meia: R$15.00</span>
          </div>
        </div>
        <div className="bar"></div>
        <div className='information'>
          <h2>Ingressos</h2>
          <div className="ticket">
            <div className="addRemove">
              <h3>Inteira</h3>
              <button className="minus">-</button>
              <p>0</p>
              <button className="plus">+</button>
            </div>
            <div className="addRemove">
              <h3>Meia</h3>
              <button className="minus">-</button>
              <p>0</p>
              <button className="plus">+</button>
            </div>
            <div className="addRemove">
              <h3>Deficiente</h3>
              <button className="minus">-</button>
              <p>0</p>
              <button className="plus">+</button>
            </div>
          </div>
          <p>Após a confirmação da compra, você receberá o ingresso através do email, 
            que deverá ser apresentado na hora do evento</p>
        </div>
      </div>
      <div className="total">
          <p>Total: <span>R$0,00</span></p>
      </div>
      {/* <button className="btn" onClick={() => setFinalizarVisible(true)}>Finalizar</button>
      {isFinalizarVisible ? <Payment></Payment>: null} */}
    </div>
  )
}

export default MbLabs;