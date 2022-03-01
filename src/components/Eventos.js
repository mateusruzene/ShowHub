import React, { useState } from 'react';

import '../styles/eventos.css';
import mblabs from '../assets/images/mblabs1.svg';

export function Eventos(props){  
    return(
        <div className="container">
            <img src={mblabs}></img>
          <div className="description">
            <h2>{props.id} - {props.name}</h2>
            <p>{props.date} - {props.city}</p>
          </div>
        </div>
  )
}