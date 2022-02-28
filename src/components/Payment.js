import React from "react";

import '../styles/payment.css'

import qrcode from '../assets/Icons/qrcode.svg'

const Payment = () => {
  return (
    <div className="payment">
      <div className='containerPayment'>
        <div className="pay">
          <h2>Resumo da Compra</h2>
          <p>Forma de pagamento: <span>Pix</span></p>
          <p>Número do pix: <span>69373820394</span></p>
          <div className="qrCode">
            <p>Qrcode:</p>
            <img src={qrcode}/>
          </div>
        </div>
        <div className="bar"></div>
        <div className='information'>
          <h2>Informações Adicionais</h2>
          <p>Após a confirmação da compra, você receberá o ingresso através do email, 
            que deverá ser apresentado na hora do evento</p>
          <span>Aguardando Confirmação de pagamento...</span>
        </div>
      </div>
      <div className="total">
          <p>Total: <span>R$0,00</span></p>
        </div>
    </div>
  )
}

export default Payment;