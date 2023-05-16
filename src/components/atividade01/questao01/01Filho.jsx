import React from 'react'

export default function Filho({altura,peso}) {
    const calculaIMC =(altura,peso) =>{
        let imc = (peso/(altura*altura)).toFixed(1);
        if(imc < 18){
            return(
             <h3>IMC: {imc} Abaixo do peso </h3>    
            )
        }else if(imc > 25){
            return(
                <h3>IMC: {imc} Acima do peso</h3>
            )
        }
        return(
            <h3>IMC: {imc} Peso ideal </h3>
        )
    }
  return (
    <div>
        {calculaIMC(altura,peso)}
    </div>
  )
}
