import React, { useEffect, useState } from 'react'



export default function VotaCidades() {
  
    const [fortaleza,setFortaleza] = useState(0);
    const [iguatu,setIguatu] = useState(0);
    const [quixada,setQuixada] = useState(0);
    const [sobral,setSobral] = useState(0);

    const [maior,setMaior] = useState("")
    const [menor,setMenor] = useState("")
    useEffect(
      ()=>{
      let cidades =[
        {cidade:"Fortaleza",votos:fortaleza},
        {cidade:"Quixadá",votos:quixada},
        {cidade:"Iguatu",votos:iguatu},
        {cidade:"Sobral",votos:sobral}
      ]
      let maior = 0;
      let menor = 9999;

      for(let i =0; i < cidades.length;i++){
        if(cidades[i].votos > maior)
          maior = cidades[i].votos;
        if(cidades[i].votos < menor)
          menor = cidades[i].votos;
      }
      setMaior("")
      setMenor("")
      for (let i = 0; i < cidades.length; i++) {
        if(cidades[i].votos === maior) setMaior((prev)=> prev + " "+cidades[i].cidade)
        if(cidades[i].votos === menor) setMenor((prev)=> prev + " "+ cidades[i].cidade)
        
      }

      

      




    }
    ,[fortaleza,quixada,iguatu,sobral]
    )
    

  return (
    <div>
        <h2 style={{textAlign:'center'}}>Votação de cidades</h2>

        <h3>Fortaleza Votos: {fortaleza} </h3>
        <button onClick={()=> setFortaleza(fortaleza+1)}>Votar Fortaleza</button>

        <h3>Quixadá Votos:{quixada}</h3>
        <button onClick={()=> setQuixada(quixada+1)}>Votar Quixadá</button>

        <h3>Iguatu Votos:{iguatu}</h3>
        <button onClick={()=> setIguatu(iguatu+1)}>Votar Iguatu</button>

        <h3>Sobral Votos:{sobral}</h3>
        <button onClick={()=> setSobral(sobral+1)} >Votar Sobral</button>

        <h3>Cidade mais votada: {maior} </h3>
        <h3>Cidade menos votada:{menor} </h3>

    </div>
    
  )
}
