import React, { useContext } from 'react'
import MyContext from './context/MyContext'

export default function ComponenteFilho() {
  const {num} = useContext(MyContext);
  return (
    <div>
      <h3>Componente Filho</h3>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${num+1}.png`} alt="Ivysaur" />
    </div>
  )
}
