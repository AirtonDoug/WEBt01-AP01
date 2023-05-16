import { useContext } from 'react'
import CorContexto from './MeuContexto'

const FuncaoB = () => {
    const {cores} =  useContext(CorContexto);
    return (
        <div>
            <h1 style={{backgroundColor: cores.bkgB}}> Função B </h1>
        </div>

    )
}
export default FuncaoB