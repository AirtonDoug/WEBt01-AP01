import { useContext } from 'react'
import CorContexto from './MeuContexto'
//MODO LEGADO
const FuncaoD = () => {
    const {cores} = useContext(CorContexto);
    return (
        <div>
            <h1 style={{backgroundColor:cores.bkgD}}>Função D</h1>
        </div>
    )
}
export default FuncaoD