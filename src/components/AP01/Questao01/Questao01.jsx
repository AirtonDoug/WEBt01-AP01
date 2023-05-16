import { useState } from "react"

export const Questao01A = () => {
    const alunos = [
        { nome: "Sicrano", notas: { ap1: 8.4, ap2: 5.4 } },
        { nome: "Beltrano", notas: { ap1: 6.7, ap2: 3.5 } },
        { nome: "Fulano", notas: { ap1: 7.3, ap2: 9.2 } }
    ]
    const [media, setMedia] = useState()// variavel de estado que seria usada para renderizar a média do aluno de maior media
    //seria feito um useEffect pra comparar as notas e 
    function enviarMedia(media) {//enviarMedia seria a função recebida do filho
        setMedia(media);
    }
    return (
        <>
            <Questao01B alunos={alunos} enviarMedia={enviarMedia} />
            <h1>Media: {media}</h1>
        </>
    )
}

function Questao01B({ alunos, enviarMedia }) {
    let vetordeAlunos = []
   for(let i = 0; i < alunos.length ; i++){
        vetordeAlunos[i]=(alunos[i].notas.ap1 + alunos[i].notas.ap2)/
        2
   }
   enviarMedia(vetordeAlunos);
    

    return (
        <>
            <h1>Media dos Alunos: </h1>

        </>
    )
}