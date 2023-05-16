import React from 'react'

export default function FilhoB({ vetor,enviarMenor }) {
    function calcularMenor(){
     const  menor = Math.min(...vetor);
      enviarMenor(menor);
    }
  return (
    <div>
        <button onClick={calcularMenor}>Calcular Menor</button>
    </div>
  )
}
