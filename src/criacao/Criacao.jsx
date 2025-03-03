import { useState } from 'react'
import './Criacao.css'
import ExcalidrawComponent from './excalidraw/ExcalidrawComponent'

export default function Criacao() {

    const [agradecimentoCriacao, setAgradecimentoCriacao] = useState(false);

    const alteraAgradecimento = () => {
        setAgradecimentoCriacao(true)
    }

    return (
        <div className='criacao-background'>
            <div className='criacao-container'>
                <h2>Crie sua própria peça</h2>
                <p>Faça um esboço da peça desejada</p>
                <ExcalidrawComponent />
                <div className='confirmacao-restauracao agradecimento-restauracao agradecimento-criacao'>
                <h3>Agradeçemos a confiança!</h3>
                <p>Um dos nossos atendentes entrará em contato para finalizar o atendimento</p>
                <button className='btn-orcamento'>Finalizar</button>
              </div>
                <button className='btn-orcamento orcamento-criacao' onClick={alteraAgradecimento}>Fazer orçamento</button>
            </div>
        </div>
    )
}