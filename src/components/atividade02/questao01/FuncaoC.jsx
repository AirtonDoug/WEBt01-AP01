import { useContext } from "react"
import CorContexto from "./MeuContexto"

const FuncaoC = () => {
    const {cores} = useContext(CorContexto)
    return (
        <div>
            <h1 style={{backgroundColor:cores.bkgC}}>Funcão C</h1>
        </div>
    )
}
export default FuncaoC