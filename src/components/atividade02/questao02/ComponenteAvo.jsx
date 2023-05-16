import React, { useState } from 'react'
import MyContext from './context/MyContext'
import ComponenteFilho from './ComponenteFilho';
import ComponenteNeto from './ComponenteNeto';
export default function ComponenteAvo() {
  const [num, setNum] = useState(1);
  return (
    <MyContext.Provider value={{ num }}>
      <div>
        <h3>Componente Avô</h3>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${num}.png`} alt="Venussaur" />
        <ComponenteFilho />
        <ComponenteNeto />
        <button onClick={(prev)=> setNum(num+1)}
        >Aumentar Número</button>
      </div>

    </MyContext.Provider>
  )
}
