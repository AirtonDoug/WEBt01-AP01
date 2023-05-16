import React, { useContext } from 'react'
import MyContext from './context/MyContext'
export default function ComponenteNeto() {
  const {num} = useContext(MyContext);
  return (
    <div>
      <h3>Componente Neto</h3>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${num+2}.png`} alt="Bulbassaur" />
    </div>
  )
}
