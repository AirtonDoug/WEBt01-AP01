import FuncaoB from "./FuncaoB"
import FuncaoC from "./FuncaoC"
import FuncaoD from "./FuncaoD"

import CorContexto from './MeuContexto'

const FuncaoA = () => {

    const cores = {bkgA:"green",bkgB:"white",bkgC:"red",bkgD:"blue"};

    return (
        <CorContexto.Provider value={{cores}}>
            <div>
                <h1 style={{ backgroundColor: cores.bkgA }}>Funcão A</h1>
                <FuncaoB/>
                <FuncaoC/>
                <FuncaoD/>

            </div>
        </CorContexto.Provider>
    )
}
export default FuncaoA