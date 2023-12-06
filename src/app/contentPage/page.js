import catCard from '@/componentes/catCard'
import dataCard from '@/componentes/dataCard'
const meusCards = [{
    nome: "Gatinho fotinho",
    caminho: "/imagens/gatinho1.jpg"
}]
const contentPage = () => {
    return <>
    <dataCard />
        {
            meusCards.map(function(iterandoCards) {
                return <>
                   {iterandoCards.nome} - {iterandoCards.caminho}
                </>
            })
        }
    </>
}

export default contentPage