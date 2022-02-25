import React from 'react';

import '../styles/footer.css';
import linkedin from '../assets/Icons/icons8-linkedin.svg'
import twitter from '../assets/Icons/icons8-twitter.svg'
import instagram from '../assets/Icons/icons8-instagram.svg'
import facebook from '../assets/Icons/icons8-facebook-white.svg'

export function Footer(){
  return(
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
  )
}