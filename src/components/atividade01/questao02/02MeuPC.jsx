export const PlacaMae = ({ nome, preco }) => {
    return (
        <div>
            <h3>Placa Mãe: {nome}</h3>
            <h3>Preço: {preco}</h3>
        </div>
    )
}
export const PlacaDeVideo = ({ nome, preco }) => {
    return (
        <div>
            <h3>Placa de Vìdeo: {nome}</h3>
            <h3>Preço: {preco}</h3>
        </div>
    )
}
export const Memoria = ({ nome, preco }) => {
    return (
        <div>
            <h3>Memória: {nome}</h3>
            <h3>Preço: {preco}</h3>
        </div>
    )
}