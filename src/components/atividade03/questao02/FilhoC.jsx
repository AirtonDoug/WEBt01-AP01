import React from 'react'

export default function FilhoC({ vetor, enviarMedia }) {
 function calcularMedia(){
   let media = 0;
    for(let i =0; i< vetor.length; i++) media += vetor[i];
    enviarMedia(media/vetor.length);

 }
  return (
    <div>
      <button onClick={calcularMedia} >Calcular Média</button>
    </div>
  )
}
