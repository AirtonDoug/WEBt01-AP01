const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const NUM = Math.floor(Math.random() * 10) + 1;
    
    if (NUM > 3) {
        resolve([
            { id: 1, nome: "Altrano" },
            { id: 2, nome: "Beltrano" },
            { id: 3, nome: "Cicrano" }
        ])
    }
    else if (NUM === 1) {
        reject({ numero: NUM, msg: "ERRO DE CONEXÃO" })
    }else{
        reject({numero:NUM, msg:"ERRO DE DADOS INVÁLIDOS"})
    }
},
    3000)
})