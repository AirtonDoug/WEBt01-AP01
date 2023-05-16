import { useEffect, useState } from "react";

const myPromise = new Promise(
    (resolve) => {//criei só o resolve pois não havia parametro para cair direto no then 
        resolve(
            [
                { "capital": ["Dublin"], "population": 4994724 },
                { "capital": ["Nicosia"], "population": 1207361 },
                { "capital": ["Madrid"], "population": 47351567 }
            ]
        )
        /*reject( foi comentado por estar caindo nele diretamente
            console.log("ERROR")
        )*/
        return myPromise;
    }
)


export default function Questao03() {
    const [maior, setMaior] = useState("") 

    useEffect( () => {
        myPromise.then(// chamada da promessa dentro do useEffect para fazer um hook para maior população
            (response)=>{
                let maior = response[0].population;
                for(let i =0; i<response.length;i++){ //logica para calcular a maior população
                    if(response[i].population > maior){
                    setMaior((prev)=>prev = response[i].capital) 
                    }
                }
            }
        )
        .catch(
            (error)=>{
                console.log(error);
            }
        )


        },
    )
        
    return ( 
        <div>
            <h1>Capital com maior população: {maior}</h1>
        </div>
    )
}
