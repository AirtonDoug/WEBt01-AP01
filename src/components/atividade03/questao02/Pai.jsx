import React, { useState } from 'react'
import FilhoA from './FilhoA'
import FilhoB from './FilhoB'
import FilhoC from './FilhoC'

export default function Pai() {
  const vetor = [10, 8, 5]
  const [maior, setMaior] = useState();
  const [menor, setMenor] = useState();
  const [media, setMedia] = useState();

  function enviarMaior(maior) {
    setMaior(maior);
  }
  function enviarMenor(menor) {
    setMenor(menor);
  }
  function enviarMedia(media) {
    setMedia(media);
  }

  return (

    <div>
      <h2 style={{textAlign:'center'}}>Cácluo de vetor</h2>
      <h3>Maior: {maior}</h3>
      <h3>Menor: {menor}</h3>
      <h3>Media: {media}</h3>
      <FilhoA vetor={vetor} enviarMaior={enviarMaior} />
      <FilhoB vetor={vetor} enviarMenor={enviarMenor} />
      <FilhoC vetor={vetor} enviarMedia={enviarMedia} />
    </div>
  )
}
