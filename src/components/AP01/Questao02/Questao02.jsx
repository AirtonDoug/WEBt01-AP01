import React, {  useState } from 'react'
import foto1 from '../../../img/Screenshot from 2023-05-15 09-35-49.png'
import foto2 from '../../../img/Screenshot from 2023-05-15 09-36-19.png'
export default function Questao02() {

    const [foto,setFoto] = useState(true);//variavel de estado para ser o flag da renderização das imagens
   function renderizar(foto){ //função de rendereziação para ser chamada dentro do jsx principal
        if (foto === true) {// as fotos foram colocadas como variaves na importação
            return (
                <div>

                    <img src={foto1} alt="ok" />

                </div>
            )
        } else {
            return (
                <div>

                    <img src={foto2} alt="ok" />


                </div>
            )

        }
    }
    return(
        <>
        {renderizar(foto)}
        <button onClick={()=>setFoto(!foto)}>MudarFoto</button>
       
        </>

    )
}
