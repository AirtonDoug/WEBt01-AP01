import React from 'react'

export default function FilhoA({ vetor, enviarMaior }) {
    function calcularMaior(){
      const maior = Math.max(...vetor);
      enviarMaior(maior);

    }
  return (
    <div>
  
        <button onClick={calcularMaior}>Calcular Maior</button>
    </div>
  )
}
