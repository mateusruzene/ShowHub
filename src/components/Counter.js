import React, {useState}from "react"
import toast, { Toaster } from 'react-hot-toast';
import '../styles/request.css'

export function Counter(){
  const [counter, setCounter] = useState(0);
  function addCounter(){
    setCounter(counter + 1);
  }
  function removeCounter(){
    if(counter <= 0){
      toast.error('O ingresso já está zerado.');
    }else{
      setCounter(counter - 1);
    }
  }

  return(
    <div className="counter">
      <Toaster
        toastOptions={{
          className: '',
          style: {
            font: '400 18px "Outfit", sans-serif',
            border: '3px solid red',
            padding: '16px',
            color: '#000',
          },
        }}
      />
      <button className="minus" onClick={removeCounter}>-</button>
      <div className="amount">{counter}</div>
      <button className="plus" onClick={addCounter}>+</button>
    </div>
  )
}